import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { discoverTracks, newReleases, trendingTracks, currentTrack } from '../../data';
import Header from '../../components/Header';
import TrackCard from '../../components/TrackCard';
import TrendingRow from '../../components/TrendingRow';
import MiniPlayer from '../../components/MiniPlayer';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTabGenre, setActiveTabGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const genres = ['All', 'Dance', 'Electronic', 'Pop', 'Indie'];

  const handleTrackSelect = (track) => {
    setIsPlaying(true);
    router.push({
      pathname: '/player',
      params: { id: track.id, title: track.title, artist: track.artist },
    });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      <Header
        onMenuPress={() => router.push('/(tabs)/profile')}
        onSearchPress={() => {}}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Title Heading (Sketch: 'Find the best music for you') */}
        <View style={styles.titleSection}>
          <Text style={[styles.mainHeading, { color: theme.text }]}>
            Find the best{'\n'}music for you
          </Text>
        </View>

        {/* Search Bar */}
        <View style={[styles.searchBox, { backgroundColor: theme.surface }]}>
          <Ionicons name="search-outline" size={18} color={theme.subText} style={styles.searchIcon} />
          <TextInput
            placeholder="Search songs, artists, albums..."
            placeholderTextColor={theme.subText}
            style={[styles.searchInput, { color: theme.text }]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color={theme.subText} />
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Genre Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.genrePillsContainer}
        >
          {genres.map((g) => {
            const active = activeTabGenre === g;
            return (
              <TouchableOpacity
                key={g}
                style={[
                  styles.genrePill,
                  {
                    backgroundColor: active ? colors.primary : theme.surface,
                  },
                ]}
                onPress={() => setActiveTabGenre(g)}
              >
                <Text
                  style={[
                    styles.genrePillText,
                    { color: active ? '#FFFFFF' : theme.text },
                  ]}
                >
                  {g}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Section 1: Discover (Sketch Frame 8) */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Discover</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/playlists')}>
            <Text style={[styles.seeAllText, { color: colors.primary }]}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {discoverTracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isCurrent={track.id === 'freak-in-me'}
              onPress={() => handleTrackSelect(track)}
            />
          ))}
        </ScrollView>

        {/* Section 2: New Release (Sketch Frame 12) */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>New Release</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/playlists')}>
            <Text style={[styles.seeAllText, { color: colors.primary }]}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {newReleases.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isCurrent={false}
              onPress={() => handleTrackSelect(track)}
            />
          ))}
        </ScrollView>

        {/* Section 3: Trending / Track List (Sketch Component 5 & Group 1) */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Trending Now</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/playlists')}>
            <Text style={[styles.seeAllText, { color: colors.primary }]}>View charts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trendingList}>
          {trendingTracks.map((track) => (
            <TrendingRow
              key={track.id}
              track={track}
              isPlaying={false}
              onPress={() => handleTrackSelect(track)}
            />
          ))}
        </View>

        {/* Extra bottom padding to avoid overlapping mini-player & tab bar */}
        <View style={{ height: 130 }} />
      </ScrollView>

      {/* Persistent Mini Player */}
      <MiniPlayer
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        track={currentTrack}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginTop: 6,
    marginBottom: 16,
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    letterSpacing: -0.6,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 14,
    height: 48,
    borderRadius: radius.md,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  genrePillsContainer: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 20,
  },
  genrePill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.full,
  },
  genrePillText: {
    fontSize: 13,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '700',
  },
  horizontalList: {
    paddingLeft: 20,
    paddingRight: 6,
    marginBottom: 16,
  },
  trendingList: {
    paddingHorizontal: 20,
  },
});
