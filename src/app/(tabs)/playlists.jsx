import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { discoverTracks, trendingTracks, currentTrack } from '../../data';
import TrendingRow from '../../components/TrendingRow';
import MiniPlayer from '../../components/MiniPlayer';

export default function PlaylistsScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Playlists', 'Artists', 'Albums'];

  const playlists = [
    {
      id: 'pl-1',
      title: 'Liked Songs',
      count: '34 tracks',
      icon: 'heart',
      color: colors.secondary,
    },
    {
      id: 'pl-2',
      title: 'Electronic & Dance Chill',
      count: '18 tracks',
      icon: 'pulse',
      color: colors.primary,
    },
    {
      id: 'pl-3',
      title: 'Late Night Sessions',
      count: '25 tracks',
      icon: 'moon',
      color: colors.accentBlue,
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Your Library</Text>
          <TouchableOpacity
            style={[styles.addBtn, { backgroundColor: colors.primarySoft }]}
            onPress={() => {}}
          >
            <Ionicons name="add" size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Filter Chips */}
        <View style={styles.filterRow}>
          {filters.map((f) => {
            const active = selectedFilter === f;
            return (
              <TouchableOpacity
                key={f}
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: active ? colors.primary : theme.surface,
                  },
                ]}
                onPress={() => setSelectedFilter(f)}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    { color: active ? '#FFFFFF' : theme.text },
                  ]}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Curated Playlists */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Featured Collections</Text>
        <View style={styles.playlistGrid}>
          {playlists.map((pl) => (
            <TouchableOpacity
              key={pl.id}
              style={[
                styles.playlistCard,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.cardBorder,
                },
              ]}
              onPress={() => router.push('/player')}
              activeOpacity={0.8}
            >
              <View style={[styles.playlistIconBox, { backgroundColor: pl.color }]}>
                <Ionicons name={pl.icon} size={22} color="#FFFFFF" />
              </View>
              <View style={styles.playlistMeta}>
                <Text style={[styles.plTitle, { color: theme.text }]}>{pl.title}</Text>
                <Text style={[styles.plCount, { color: theme.subText }]}>{pl.count}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={theme.subText} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Top Tracks */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Downloaded Tracks</Text>
        <View style={styles.tracksSection}>
          {trendingTracks.map((t) => (
            <TrendingRow
              key={t.id}
              track={t}
              isPlaying={false}
              onPress={() => router.push('/player')}
            />
          ))}
        </View>

        <View style={{ height: 130 }} />
      </ScrollView>

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
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.6,
  },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.full,
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  playlistGrid: {
    gap: 10,
    marginBottom: 24,
  },
  playlistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
  },
  playlistIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistMeta: {
    marginLeft: 14,
    flex: 1,
  },
  plTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  plCount: {
    fontSize: 12,
    fontWeight: '500',
  },
  tracksSection: {
    gap: 2,
  },
});
