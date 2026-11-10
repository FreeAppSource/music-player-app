import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../theme';

export default function TrendingRow({ track, isPlaying, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.card }]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={styles.leftRow}>
        <Image
          source={track.avatarLocal}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={[styles.title, { color: theme.text }]}>
            {track.title}
          </Text>
          <Text numberOfLines={1} style={[styles.artist, { color: theme.subText }]}>
            {track.artist}
          </Text>
        </View>
      </View>

      <View style={styles.rightRow}>
        <Text style={[styles.duration, { color: theme.subText }]}>
          {track.durationStr}
        </Text>
        <View
          style={[
            styles.playButton,
            { backgroundColor: isPlaying ? colors.primary : theme.surface },
          ]}
        >
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={16}
            color={isPlaying ? '#FFFFFF' : colors.primary}
            style={{ marginLeft: isPlaying ? 0 : 2 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#2E3A59',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8ECF2',
  },
  textContainer: {
    marginLeft: 14,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 3,
  },
  artist: {
    fontSize: 13,
    fontWeight: '500',
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  duration: {
    fontSize: 13,
    fontWeight: '600',
  },
  playButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
