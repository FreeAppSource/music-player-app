import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors, radius, useTheme } from '../theme';

export default function TrackCard({ track, isCurrent, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.imageContainer}>
        <Image
          source={track.coverLocal}
          style={styles.image}
          resizeMode="cover"
        />
        {isCurrent && (
          <View style={styles.playingBadge}>
            <View style={styles.playingDot} />
            <Text style={styles.playingText}>PLAYING</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          style={[styles.title, { color: theme.text }]}
        >
          {track.title}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.genre, { color: theme.subText }]}
        >
          {track.genre || track.artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 154,
    marginRight: 16,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#2E3A59',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    width: 154,
    height: 154,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#E8ECF2',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  playingBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(149, 112, 255, 0.92)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.full,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  playingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  playingText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  genre: {
    fontSize: 12,
    fontWeight: '500',
  },
});
