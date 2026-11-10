import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { currentTrack, syncedLyrics } from '../data';

const { width } = Dimensions.get('window');

export default function SyncedLyricsScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeLineIndex, setActiveLineIndex] = useState(4); // Line: 'Cause you bring out the freak in me

  const handleLinePress = (index) => {
    setActiveLineIndex(index);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.roundBtn, { backgroundColor: theme.surface }]}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-down" size={24} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <Text style={[styles.nowPlayingText, { color: theme.subText }]}>
            NOW PLAYING
          </Text>
          <Text numberOfLines={1} style={[styles.trackName, { color: theme.text }]}>
            {currentTrack.title} • {currentTrack.artist}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.roundBtn, { backgroundColor: theme.surface }]}
          onPress={() => {}}
          activeOpacity={0.7}
        >
          <Ionicons name="share-outline" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Synced Lyrics List */}
      <ScrollView
        contentContainerStyle={styles.lyricsList}
        showsVerticalScrollIndicator={false}
      >
        {syncedLyrics.map((item, idx) => {
          const isActive = idx === activeLineIndex;
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => handleLinePress(idx)}
              activeOpacity={0.8}
              style={[
                styles.lyricLineWrapper,
                isActive && styles.activeLineWrapper,
              ]}
            >
              <Text
                style={[
                  styles.lyricText,
                  isActive
                    ? [styles.lyricActiveText, { color: colors.primary }]
                    : [styles.lyricInactiveText, { color: theme.subText }],
                ]}
              >
                {item.text}
              </Text>
              {isActive && (
                <View style={styles.karaokeIndicator}>
                  <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                  <Text style={[styles.timeTag, { color: colors.primary }]}>
                    0:36
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Floating Mini Playback Bar (Sketch artboard Now Playing--Lyrics bottom controls) */}
      <View
        style={[
          styles.bottomControls,
          {
            backgroundColor: theme.surface,
            borderColor: theme.cardBorder,
          },
        ]}
      >
        <View style={styles.controlsInfo}>
          <Text style={[styles.barTimeText, { color: theme.subText }]}>
            0:36 / 3:40
          </Text>
          <Text numberOfLines={1} style={[styles.barSongTitle, { color: theme.text }]}>
            {currentTrack.title}
          </Text>
        </View>

        <View style={styles.controlsButtons}>
          <TouchableOpacity
            style={styles.controlIconBtn}
            onPress={() => setActiveLineIndex((prev) => Math.max(0, prev - 1))}
          >
            <Ionicons name="play-skip-back" size={20} color={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.playToggleBtn, { backgroundColor: colors.primary }]}
            onPress={() => setIsPlaying(!isPlaying)}
          >
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={20}
              color="#FFFFFF"
              style={{ marginLeft: isPlaying ? 0 : 2 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlIconBtn}
            onPress={() =>
              setActiveLineIndex((prev) => Math.min(syncedLyrics.length - 1, prev + 1))
            }
          >
            <Ionicons name="play-skip-forward" size={20} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  roundBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerInfo: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 12,
  },
  nowPlayingText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  trackName: {
    fontSize: 14,
    fontWeight: '700',
  },
  lyricsList: {
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 40,
    gap: 20,
  },
  lyricLineWrapper: {
    paddingVertical: 6,
  },
  activeLineWrapper: {
    transform: [{ scale: 1.03 }],
  },
  lyricText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  lyricActiveText: {
    fontSize: 26,
    fontWeight: '900',
    lineHeight: 36,
  },
  lyricInactiveText: {
    opacity: 0.6,
  },
  karaokeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  timeTag: {
    fontSize: 12,
    fontWeight: '700',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 24,
    borderWidth: 1,
    shadowColor: '#2E3A59',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  controlsInfo: {
    flex: 1,
  },
  barTimeText: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 2,
  },
  barSongTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  controlsButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  controlIconBtn: {
    padding: 6,
  },
  playToggleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 3,
  },
});
