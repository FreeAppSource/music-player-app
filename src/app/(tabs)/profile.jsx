import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../../theme';
import { creatorInfo } from '../../data';

export default function CreatorScreen() {
  const { theme, isDark, toggleTheme } = useTheme();

  const handleOpenLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (e) {
      console.log('Error opening link:', e);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Badge & Title (Sketch: Introducing / Music App Freebie) */}
        <View style={styles.heroSection}>
          <View style={[styles.badgeContainer, { backgroundColor: colors.primarySoft }]}>
            <Text style={[styles.badgeText, { color: colors.primary }]}>
              {creatorInfo.badge.toUpperCase()}
            </Text>
          </View>

          <Text style={[styles.title, { color: theme.text }]}>
            {creatorInfo.title}
          </Text>

          <Text style={[styles.description, { color: theme.subText }]}>
            {creatorInfo.description}
          </Text>
        </View>

        <View style={[styles.divider, { backgroundColor: theme.cardBorder }]} />

        {/* Creator Info Card (Sketch: Kryston Schwarze / Atiqur Rahaman) */}
        <View
          style={[
            styles.creatorCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <View style={styles.avatarRow}>
            <View style={[styles.authorAvatar, { backgroundColor: colors.primary }]}>
              <Text style={styles.avatarInitials}>AR</Text>
            </View>
            <View style={styles.authorInfo}>
              <Text style={[styles.authorName, { color: theme.text }]}>
                {creatorInfo.author}
              </Text>
              <Text style={[styles.authorPitch, { color: colors.primary }]}>
                {creatorInfo.pitch}
              </Text>
            </View>
          </View>
        </View>

        {/* Social & Contact Links (Sketch: Dribbble, Website, Twitter, UpLabs, LinkedIn, Telegram) */}
        <Text style={[styles.sectionHeading, { color: theme.text }]}>
          Connect with Designer
        </Text>

        <View style={styles.linksGrid}>
          {creatorInfo.links.map((link, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.linkItem,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.cardBorder,
                },
              ]}
              onPress={() => handleOpenLink(link.url)}
              activeOpacity={0.7}
            >
              <View style={[styles.linkIconBox, { backgroundColor: colors.primarySoft }]}>
                <Ionicons name={link.icon} size={20} color={colors.primary} />
              </View>
              <View style={styles.linkTextContainer}>
                <Text style={[styles.linkName, { color: theme.text }]}>
                  {link.name}
                </Text>
                <Text numberOfLines={1} style={[styles.linkLabel, { color: theme.subText }]}>
                  {link.label}
                </Text>
              </View>
              <Ionicons name="open-outline" size={16} color={theme.subText} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Dark Mode Preference Card */}
        <View
          style={[
            styles.preferenceCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <View style={styles.prefLeft}>
            <Ionicons
              name={isDark ? 'moon' : 'sunny'}
              size={22}
              color={colors.primary}
            />
            <View style={styles.prefText}>
              <Text style={[styles.prefTitle, { color: theme.text }]}>
                Dark Appearance
              </Text>
              <Text style={[styles.prefSub, { color: theme.subText }]}>
                Switch between light and dark palettes
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              { backgroundColor: isDark ? colors.primary : theme.cardBorder },
            ]}
            onPress={toggleTheme}
          >
            <View
              style={[
                styles.toggleKnob,
                {
                  transform: [{ translateX: isDark ? 20 : 0 }],
                },
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
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
    paddingTop: 16,
    paddingBottom: 32,
  },
  heroSection: {
    marginBottom: 20,
  },
  badgeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
  },
  divider: {
    height: 1,
    marginVertical: 18,
  },
  creatorCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitials: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  authorInfo: {
    marginLeft: 14,
    flex: 1,
  },
  authorName: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 3,
  },
  authorPitch: {
    fontSize: 13,
    fontWeight: '600',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  linksGrid: {
    gap: 10,
    marginBottom: 24,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 16,
    borderWidth: 1,
  },
  linkIconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  linkName: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  linkLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  preferenceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
  },
  prefLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  prefText: {
    marginLeft: 12,
  },
  prefTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  prefSub: {
    fontSize: 12,
    fontWeight: '500',
  },
  toggleBtn: {
    width: 48,
    height: 28,
    borderRadius: 14,
    padding: 2,
    justifyContent: 'center',
  },
  toggleKnob: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
