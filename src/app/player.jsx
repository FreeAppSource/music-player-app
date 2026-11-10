import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { currentTrack, syncedLyrics } from '../data';

const { width } = Dimensions.get('window');

export default function NowPlayingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { theme } = useTheme();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(currentTrack.isLiked);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [sliderPercent, setSliderPercent] = useState(0.163); // 36s / 220s = 0.163

  const trackTitle = params.title || currentTrack.title;
  const trackArtist = params.artist || currentTrack.artist;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top App Bar (Sketch: arrow-back, 'Now Playing') */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={[styles.roundBtn, { backgroundColor: theme.surface }]}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={22} color={theme.text} />
          </TouchableOpacity>

          <Text style={[styles.topTitle, { color: theme.text }]}>Now Playing</Text>

          <TouchableOpacity
            style={[styles.roundBtn, { backgroundColor: theme.surface }]}
            onPress={() => setIsLiked(!isLiked)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={20}
              color={isLiked ? colors.secondary : theme.text}
            />
          </TouchableOpacity>
        </View>

        {/* Album Artwork Card */}
        <View style={styles.artworkWrapper}>
          <View style={styles.artworkContainer}>
            <Image
              source={currentTrack.coverLargeLocal}
              style={styles.artwork}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Track Title and Artist (Sketch Frame 10) */}
        <View style={styles.trackInfoSection}>
          <View style={styles.titleRow}>
            <View style={styles.titleCol}>
              <Text style={[styles.trackTitle, { color: theme.text }]}>
                {trackTitle}
              </Text>
              <Text style={[styles.trackArtist, { color: theme.subText }]}>
                {trackArtist}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.favBtn,
                { backgroundColor: isLiked ? colors.primarySoft : theme.surface },
              ]}
              onPress={() => setIsLiked(!isLiked)}
            >
              <Ionicons
                name={isLiked ? 'heart' : 'heart-outline'}
                size={22}
                color={isLiked ? colors.primary : theme.subText}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Audio Scrubber (Sketch Frame 1: 0:36 / 3:40) */}
        <View style={styles.scrubberSection}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.progressBarWrapper}
            onPress={(e) => {
              const x = e.nativeEvent.locationX;
              const totalW = width - 48;
              const pct = Math.max(0, Math.min(1, x / totalW));
              setSliderPercent(pct);
            }}
          >
            <View style={[styles.progressTrack, { backgroundColor: theme.sliderTrack }]}>
              <View
                style={[
                  styles.progressFill,
                  {
                    backgroundColor: colors.primary,
                    width: `${sliderPercent * 100}%`,
                  },
                ]}
              />
            </View>
            <View
              style={[
                styles.progressThumb,
                {
                  left: `${sliderPercent * 100}%`,
                  backgroundColor: colors.primary,
                },
              ]}
            />
          </TouchableOpacity>

          <View style={styles.timeRow}>
            <Text style={[styles.timeText, { color: theme.subText }]}>
              {currentTrack.currentTimeStr}
            </Text>
            <Text style={[styles.timeText, { color: theme.subText }]}>
              {currentTrack.durationStr}
            </Text>
          </View>
        </View>

        {/* Player Controls (Sketch: skip-previous, Component 3, skip-next) */}
        <View style={styles.controlsSection}>
          <TouchableOpacity
            onPress={() => setIsShuffle(!isShuffle)}
            activeOpacity={0.7}
            style={styles.smallControlBtn}
          >
            <Ionicons
              name="shuffle"
              size={22}
              color={isShuffle ? colors.primary : theme.subText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSliderPercent(0.05)}
            activeOpacity={0.7}
            style={styles.skipBtn}
          >
            <Ionicons name="play-skip-back" size={26} color={theme.text} />
          </TouchableOpacity>

          {/* Big Center Play/Pause Button (Sketch Component 3) */}
          <TouchableOpacity
            style={[styles.mainPlayBtn, { backgroundColor: colors.primary }]}
            onPress={() => setIsPlaying(!isPlaying)}
            activeOpacity={0.85}
          >
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={32}
              color="#FFFFFF"
              style={{ marginLeft: isPlaying ? 0 : 3 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSliderPercent(0.4)}
            activeOpacity={0.7}
            style={styles.skipBtn}
          >
            <Ionicons name="play-skip-forward" size={26} color={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsRepeat(!isRepeat)}
            activeOpacity={0.7}
            style={styles.smallControlBtn}
          >
            <Ionicons
              name="repeat"
              size={22}
              color={isRepeat ? colors.primary : theme.subText}
            />
          </TouchableOpacity>
        </View>

        {/* Bottom Lyrics Peek Drawer (Sketch Frame 1 & Rectangle 4) */}
        <TouchableOpacity
          style={[
            styles.lyricsDrawer,
            {
              backgroundColor: theme.surface,
              borderColor: theme.cardBorder,
            },
          ]}
          onPress={() => router.push('/lyrics')}
          activeOpacity={0.85}
        >
          <View style={styles.lyricsDrawerHeader}>
            <View style={styles.lyricsLabelRow}>
              <View style={[styles.musicIconBadge, { backgroundColor: colors.primarySoft }]}>
                <Ionicons name="musical-notes" size={16} color={colors.primary} />
              </View>
              <Text style={[styles.lyricsLabelText, { color: theme.text }]}>Lyrics</Text>
            </View>

            <View style={styles.expandRow}>
              <Text style={[styles.tapToOpen, { color: colors.primary }]}>Full view</Text>
              <Ionicons name="chevron-up" size={18} color={colors.primary} />
            </View>
          </View>

          {/* Exact lyrics from Sketch AST */}
          <View style={styles.lyricsExcerpt}>
            <Text style={[styles.lyricLine, { color: theme.subText }]}>
              Lately, I think of you lots
            </Text>
            <Text style={[styles.lyricLine, { color: theme.subText }]}>
              {"'Cause my mind's in circles for you"}
            </Text>
            <Text style={[styles.lyricLine, { color: theme.subText }]}>
              Please connect the dots
            </Text>
            <Text style={[styles.lyricLineActive, { color: colors.primary }]}>
              {"'Cause you bring out the freak in me"}
            </Text>
            <Text style={[styles.lyricLine, { color: theme.subText }]}>
              {"It's only for you"}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  roundBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  artworkWrapper: {
    alignItems: 'center',
    marginVertical: 24,
  },
  artworkContainer: {
    width: width - 72,
    height: width - 72,
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 8,
    backgroundColor: '#E8ECF2',
  },
  artwork: {
    width: '100%',
    height: '100%',
  },
  trackInfoSection: {
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleCol: {
    flex: 1,
    marginRight: 16,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  trackArtist: {
    fontSize: 16,
    fontWeight: '500',
  },
  favBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrubberSection: {
    marginBottom: 24,
  },
  progressBarWrapper: {
    height: 30,
    justifyContent: 'center',
    position: 'relative',
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    width: '100%',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressThumb: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    marginLeft: -8,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  controlsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 28,
  },
  smallControlBtn: {
    padding: 10,
  },
  skipBtn: {
    padding: 8,
  },
  mainPlayBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 6,
  },
  lyricsDrawer: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 18,
    shadowColor: '#2E3A59',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  lyricsDrawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  lyricsLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  musicIconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsLabelText: {
    fontSize: 16,
    fontWeight: '800',
  },
  expandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tapToOpen: {
    fontSize: 13,
    fontWeight: '700',
  },
  lyricsExcerpt: {
    gap: 6,
  },
  lyricLine: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
  lyricLineActive: {
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 24,
  },
});
