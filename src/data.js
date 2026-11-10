export const appInfo = {
  title: 'Music Player',
  subtitle: 'Find the best music for you',
  version: '1.0.0',
};

export const currentTrack = {
  id: 'freak-in-me',
  title: 'Freak In Me',
  artist: 'Mild Orange',
  album: 'Looking for Orange',
  duration: 220, // 3:40
  durationStr: '3:40',
  currentTime: 36, // 0:36
  currentTimeStr: '0:36',
  genre: 'Electronic',
  coverLocal: require('../assets/images/freak_in_me.png'),
  coverLargeLocal: require('../assets/images/freak_in_me_large.png'),
  isLiked: true,
};

export const discoverTracks = [
  {
    id: 'out-of-my-mine',
    title: 'Out of My Mine',
    artist: 'Dance Crew',
    genre: 'Dance',
    durationStr: '3:15',
    duration: 195,
    coverLocal: require('../assets/images/out_of_my_mine.png'),
  },
  {
    id: 'freak-in-me',
    title: 'Freak In Me',
    artist: 'Mild Orange',
    genre: 'Electronic',
    durationStr: '3:40',
    duration: 220,
    coverLocal: require('../assets/images/freak_in_me.png'),
  },
  {
    id: 'lover-boy',
    title: 'Lover Boy',
    artist: 'Phum Viphurit',
    genre: 'Dance',
    durationStr: '2:54',
    duration: 174,
    coverLocal: require('../assets/images/lover_boy.png'),
  },
];

export const newReleases = [
  {
    id: 'nr-1',
    title: 'Out of My Mine',
    artist: 'Nova Sound',
    genre: 'Dance',
    durationStr: '3:22',
    duration: 202,
    coverLocal: require('../assets/images/new_release_1.png'),
  },
  {
    id: 'nr-2',
    title: 'Midnight Echo',
    artist: 'Solaris',
    genre: 'Electronic',
    durationStr: '3:50',
    duration: 230,
    coverLocal: require('../assets/images/new_release_2.png'),
  },
  {
    id: 'nr-3',
    title: 'Velvet Horizon',
    artist: 'Aura',
    genre: 'Ambient',
    durationStr: '4:10',
    duration: 250,
    coverLocal: require('../assets/images/new_release_3.png'),
  },
];

export const trendingTracks = [
  {
    id: 'some-feeling',
    title: 'Some Feeling',
    artist: 'Ayesha Ruhin',
    durationStr: '3:28',
    duration: 208,
    plays: '1.4M',
    avatarLocal: require('../assets/images/ayesha_ruhin.png'),
  },
  {
    id: 'i-didnt-know',
    title: "I Didn't Know",
    artist: 'Jane Cooper',
    durationStr: '4:02',
    duration: 242,
    plays: '890K',
    avatarLocal: require('../assets/images/jane_cooper.png'),
  },
  {
    id: 'amused-city',
    title: 'Amused City',
    artist: 'Vanel Ghart',
    durationStr: '3:45',
    duration: 225,
    plays: '2.1M',
    avatarLocal: require('../assets/images/amused_city.png'),
  },
];

export const syncedLyrics = [
  { time: 12, text: "Lately, I think of you lots" },
  { time: 19, text: "'Cause my mind's in circles for you" },
  { time: 25, text: "Please connect the dots" },
  { time: 30, text: "And bring me, bring me to you" },
  { time: 36, text: "'Cause you bring out the freak in me", active: true },
  { time: 44, text: "It's only for you" },
  { time: 52, text: "Can't help the way I stare" },
  { time: 58, text: "When you move like nobody's there" },
  { time: 65, text: "Electric pulse beneath the skin" },
  { time: 72, text: "Where you end and I begin" },
  { time: 80, text: "Lost in the bassline groove" },
  { time: 88, text: "Got nothing left to prove" },
  { time: 96, text: "'Cause you bring out the freak in me" },
  { time: 104, text: "It's only for you" },
];

export const creatorInfo = {
  badge: 'Introducing',
  title: 'Music App Freebie',
  description: 'Carefully designed screens for your next project. Support for SVG and your favourite design tool. Completely free for personal use.',
  author: 'Atiqur Rahaman',
  pitch: 'Feel free to knock me for freelance projects',
  links: [
    { name: 'Dribbble', url: 'https://dribbble.com/atiq31416', label: 'dribbble.com/atiq31416', icon: 'logo-dribbble' },
    { name: 'Portfolio', url: 'https://www.atiq.info', label: 'www.atiq.info', icon: 'globe-outline' },
    { name: 'Twitter', url: 'https://twitter.com/atiq31416', label: 'twitter.com/atiq31416', icon: 'logo-twitter' },
    { name: 'UpLabs', url: 'https://uplabs.com/atiq31416', label: 'uplabs.com/atiq31416', icon: 'color-palette-outline' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/atiq31416/', label: 'linkedin.com/in/atiq31416/', icon: 'logo-linkedin' },
    { name: 'Telegram', url: 'https://t.me/atiq31416', label: 'https://t.me/atiq31416', icon: 'paper-plane-outline' },
  ],
};
