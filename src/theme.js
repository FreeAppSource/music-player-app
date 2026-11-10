import React, { createContext, useContext, useState } from 'react';

export const colors = {
  primary: '#9570FF',
  primaryDark: '#7950ED',
  primaryLight: '#B07FFF',
  primarySoft: 'rgba(149, 112, 255, 0.12)',
  secondary: '#E84C88',
  textDark: '#2E3A59',
  textMuted: '#8F9BB3',
  textLight: '#828282',
  background: '#FFFFFF',
  card: '#F8FAFC',
  cardBorder: '#EDF1F7',
  accentBlue: '#2F80ED',
  accentCyan: '#70C8FF',
  accentGreen: '#6FCF97',
  accentYellow: '#FCD900',
  white: '#FFFFFF',
  black: '#000000',
  darkOverlay: 'rgba(0, 0, 0, 0.65)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const palettes = {
  light: {
    bg: '#FFFFFF',
    surface: '#F8FAFC',
    card: '#FFFFFF',
    cardBorder: '#EDF1F7',
    text: '#2E3A59',
    subText: '#8F9BB3',
    iconColor: '#2E3A59',
    sliderTrack: '#EDF1F7',
    activeLyric: '#2E3A59',
    inactiveLyric: 'rgba(46, 58, 89, 0.35)',
  },
  dark: {
    bg: '#12111E',
    surface: '#1A1829',
    card: '#222035',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#FFFFFF',
    subText: '#A0A3BD',
    iconColor: '#FFFFFF',
    sliderTrack: '#2D2A42',
    activeLyric: '#FFFFFF',
    inactiveLyric: 'rgba(255, 255, 255, 0.35)',
  },
};

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: palettes.light,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? palettes.dark : palettes.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
