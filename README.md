# Music Player App

> 👨‍💻 Developed by **[Suresh Kumar Meesala](https://github.com/SureshKumarMeesala)** · 🎨 UI design by **Atiqur Rahaman** (credits below)

A modern mobile music player application built with **React Native (0.88+)**, **Expo SDK 58+**, and **Expo Router** using **JavaScript and JSX (`.js`, `.jsx`)**.

Directly translated from the original Sketch design: `music-player-app-atiq.sketch` by **Atiqur Rahaman**.

---

## 🎨 Artboards & Screens (based on 4 design artboards)

| # | Artboard Name | Sketch ID | Dimensions | Code Path | Description |
|---|---|---|---|---|---|
| 1 | **Home** | `1:2` | 375 × 812 | `src/app/(tabs)/index.jsx` | Header with theme toggle & search, "Find the best music for you" headline, genre pills, "Discover" carousel, "New Release" carousel, "Trending Now" tracks list, and sticky bottom mini-player. |
| 2 | **Now Playing** | `40:1` | 375 × 812 | `src/app/player.jsx` | Full screen player with large album art for *Freak In Me* by *Mild Orange*, heart favorite toggle, audio scrubber (`0:36` / `3:40`), skip/play/shuffle/repeat controls, and expandable lyrics peek drawer. |
| 3 | **Now Playing--Lyrics** | `48:406` | 375 × 812 | `src/app/lyrics.jsx` | Immersive synced karaoke lyrics screen with active highlighted line at `0:36` (*"'Cause you bring out the freak in me"*), interactive line selection, and floating bottom player controls. |
| 4 | **Creator** | `48:597` | 496 × 509 | `src/app/(tabs)/profile.jsx`<br>`src/app/creator.jsx` | "Introducing Music App Freebie" showcase card for designer Atiqur Rahaman (`atiq31416`) with direct links to Dribbble, Website, Twitter, UpLabs, LinkedIn, and Telegram. |

---

## 🎵 Design Tokens & Colors (Extracted from Sketch AST)

- **Primary Purple**: `#9570FF`
- **Dark Primary**: `#7950ED`
- **Soft Purple**: `rgba(149, 112, 255, 0.12)`
- **Heading Text**: `#2E3A59`
- **Muted Text**: `#8F9BB3`
- **Accent Pink**: `#E84C88`
- **Accent Cyan / Blue**: `#70C8FF` / `#2F80ED`
- **Surface**: `#F8FAFC`
- **Background**: `#FFFFFF` (Light) / `#12111E` (Dark)

---

## 📂 Project Structure

```
Music Player App/
├── assets/
│   └── images/               # 21 original Sketch image fills + semantic cover files
├── design/                   # Raw Sketch AST JSON, metadata, previews
│   ├── pages/C92BA0BC-5E39-4CFF-35AA-DEB2C87D9922.json
│   ├── meta.json
│   └── summary.json
├── src/
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── _layout.jsx   # 4 bottom tabs (Discover, Library, Lyrics, Creator)
│   │   │   ├── index.jsx     # Artboard: Home (1:2)
│   │   │   ├── playlists.jsx # Library & playlists collection
│   │   │   ├── lyrics.jsx    # Synced lyrics tab
│   │   │   └── profile.jsx   # Artboard: Creator (48:597)
│   │   ├── _layout.jsx       # Root stack with modal presentations
│   │   ├── index.jsx         # Redirect to /(tabs)
│   │   ├── player.jsx        # Artboard: Now Playing (40:1)
│   │   ├── lyrics.jsx        # Artboard: Now Playing--Lyrics (48:406)
│   │   └── creator.jsx       # Direct route to Creator view
│   ├── components/
│   │   ├── Header.jsx        # Home header with dark/light mode toggle
│   │   ├── MiniPlayer.jsx    # Floating persistent bottom player bar
│   │   ├── TrackCard.jsx     # Discover & New Release carousel card
│   │   ├── TrendingRow.jsx   # Trending track row with avatar and play action
│   │   └── Button.jsx        # Standardized theme button
│   ├── data.js               # Tracks database, exact AST lyrics, creator portfolio links
│   └── theme.js              # Colors, spacing, radii, ThemeProvider
├── app.json
├── package.json
└── README.md
```

---

## 🚀 Running the App

```bash
# Start the Expo development server
npx expo start
```

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

<!-- developer:start -->

## 👨‍💻 Developer

This React Native app was developed by **Suresh Kumar Meesala**.

| | |
|---|---|
| Developer | [Suresh Kumar Meesala](https://github.com/SureshKumarMeesala) |
| GitHub | [@SureshKumarMeesala](https://github.com/SureshKumarMeesala) |
| Organization | [FreeAppSource](https://github.com/FreeAppSource) |
| Repository | <https://github.com/FreeAppSource/music-player-app> |

<!-- developer:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Simple Music App** design by **Atiqur Rahaman**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Atiqur Rahaman](https://www.sketchappsources.com/contributor/atiqurrahaman) |
| Original design | [Simple Music App](https://dribbble.com/shots/15444089-Music-Player-App-UI-Freebie) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4741-music-player-app-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/atiq31416> |
| Twitter | <https://twitter.com/atiq31416> |
| Website | <http://atiq.info> |
| Original file | `music-player-app-atiq.sketch` |
| License / usage | ⚠️ **Non-commercial use only** (stated by the designer on the source page). Get the designer's permission before any commercial use. |

**Attribution:**

> UI design: "Simple Music App" by Atiqur Rahaman (https://dribbble.com/shots/15444089-Music-Player-App-UI-Freebie), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4741-music-player-app-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
