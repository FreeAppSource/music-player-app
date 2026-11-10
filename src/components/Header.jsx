import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../theme';

export default function Header({ onMenuPress, onSearchPress }) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.leftRow}>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: theme.surface }]}
          onPress={onMenuPress}
          activeOpacity={0.7}
        >
          <Ionicons name="grid-outline" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.rightRow}>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: theme.surface, marginRight: 8 }]}
          onPress={toggleTheme}
          activeOpacity={0.7}
        >
          <Ionicons name={isDark ? 'sunny' : 'moon'} size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: theme.surface }]}
          onPress={onSearchPress}
          activeOpacity={0.7}
        >
          <Ionicons name="search-outline" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
