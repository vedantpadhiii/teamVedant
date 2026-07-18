# 🎉 Team Vedant Website - Project Complete!

Your beautiful, emotion-driven fundraiser website is ready to inspire donors and share your story.

---

## 📦 What's Inside

### ✅ 7 Fully Responsive Sections

1. **Hero** - Bold headline, countdown timer, prominent CTA
2. **My Story** - Vertical timeline with 5 milestone entries
3. **Watch My Talk** - Embedded YouTube video (responsive)
4. **Why I'm Giving Back** - Two-column gratitude + cause info
5. **Donate** - High-impact CTA + fundraising progress bar
6. **Follow The Journey** - Race day details + social sharing
7. **Footer** - Thank you message + social links

### 🎨 Design Features

- ✨ **Warm, Emotional Aesthetic**: Deep teal/navy with coral/gold accents
- 📱 **Fully Responsive**: Mobile-first design works on all devices
- 🎬 **Smooth Animations**: Subtle fade-ins and scroll-triggered effects (Framer Motion)
- ⏱️ **Live Countdown Timer**: Automatically counts down to July 26, 2026
- 📊 **Progress Tracker**: Visual fundraising progress bar
- 🔗 **Centralized Links**: One DONATE_LINK constant - update once, affects entire site
- 🌿 **Generous Whitespace**: Clean, uncluttered design that lets your story shine

### 📁 Project Structure

```
marathon/
├── README.md              ← Full customization guide (start here)
├── QUICK_START.md         ← 3-minute setup & key customizations
├── PLACEHOLDERS.md        ← Complete list of all 28 placeholders to fill
├── package.json           ← Dependencies (React, Vite, Tailwind, Framer Motion)
├── vite.config.js         ← Vite build configuration
├── tailwind.config.js     ← Tailwind CSS theme (colors, fonts, animations)
├── postcss.config.js      ← PostCSS configuration
├── index.html             ← Page entry point (update title & meta here)
├── src/
│   ├── App.jsx            ← Main component (ties sections together)
│   ├── main.jsx           ← React entry point
│   ├── index.css          ← Global styles
│   └── components/
│       ├── Hero.jsx           (1. Headline + countdown + CTA)
│       ├── MyStory.jsx        (2. Timeline component)
│       ├── WatchTalk.jsx      (3. YouTube embed)
│       ├── WhyGivingBack.jsx  (4. Gratitude + cause)
│       ├── Donate.jsx         (5. CTA banner + progress)
│       ├── FollowJourney.jsx  (6. Race details + social)
│       ├── Footer.jsx         (7. Thank you + links)
│       ├── CountdownTimer.jsx (Reusable component)
│       └── ProgressBar.jsx    (Reusable component)
├── dist/                  ← Production build (created by npm run build)
└── node_modules/          ← Dependencies
```

---

## 🚀 Quick Start (Choose One)

### Option A: Development Mode (Testing)
```bash
cd marathon
npm run dev
```
- Opens at `http://localhost:3000`
- Auto-reloads as you make changes
- Perfect for editing and previewing

### Option B: Production Build
```bash
cd marathon
npm run build
npm run preview
```
- Creates optimized `dist/` folder
- Previews production version locally
- Ready for deployment

---

## 📝 3-Step Setup

### 1️⃣ Update Donation Link
**File:** `src/components/Hero.jsx` (line 12) & `src/components/Donate.jsx` (line 5)

```javascript
const DONATE_LINK = 'https://your-actual-donation-url.com';
```

**Impact:** All "Donate Now" buttons link here

### 2️⃣ Fill Timeline & Story
**File:** `src/components/MyStory.jsx` (lines 50-95)

Replace 5 entries:
- The Diagnosis
- First Surgery
- The Second Challenge
- Recovery & Rebirth
- Training for the Marathon

### 3️⃣ Add Social Links
**Files:** `src/components/FollowJourney.jsx` + `src/components/Footer.jsx`

Update Instagram, Facebook, and X URLs.

---

## 📋 Placeholder Count: 28 Total

| Category | Count | Priority |
|----------|-------|----------|
| Donation Links | 2 | 🔴 Critical |
| Timeline Stories | 5 | 🔴 Critical |
| Social Media URLs | 6 | 🟡 High |
| Cause/Impact Info | 6 | 🟡 High |
| Fundraising Data | 2 | 🟡 High |
| Misc Content | 5 | 🟢 Medium |
| Race Details (Bib #) | 1 | 🟢 Medium |
| Page Metadata | 1 | 🟢 Medium |

See **PLACEHOLDERS.md** for exact line numbers and examples.

---

## 🎨 Customization Highlights

### Colors
**File:** `tailwind.config.js` (lines 11-31)

```javascript
primary: {
  500: '#1a7d9e',    // Deep teal - main color
  900: '#001f2a',    // Dark teal - backgrounds
},
accent: {
  500: '#eb764b',    // Warm coral - buttons & highlights
  600: '#d45e33',    // Darker coral - hover states
}
```

### Typography
- **Headings:** Playfair Display (elegant serif)
- **Body:** Inter (clean, modern sans-serif)
- Google Fonts auto-imported in `index.html`

### Race Date
**File:** `src/components/CountdownTimer.jsx` (line 18)
```javascript
const raceDay = new Date('2026-07-26T00:00:00').getTime();
```

### Fundraising Progress
**File:** `src/components/Donate.jsx` (line 27)
```jsx
<ProgressBar raised={2450} goal={10000} />
```

---

## 🔧 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI library | 19.2.7 |
| **Vite** | Build tool | 5.4.21 |
| **Tailwind CSS** | Styling | 3.4.11 |
| **Framer Motion** | Animations | 12.42.2 |
| **PostCSS** | CSS processing | 8.5.17 |
| **Autoprefixer** | Browser compatibility | 10.5.2 |

---

## 📱 Responsive Design

- **Mobile-First**: Built for mobile, scales up gracefully
- **Breakpoints**: 
  - `md:` (768px) - Tablets
  - `lg:` (1024px) - Desktops
- **All Sections Responsive**: Timeline, cards, video, progress bar adapt to screen size
- **Touch Friendly**: Large buttons (44x44px min for accessibility)

---

## 🎬 Animations

Powered by Framer Motion - all fade-in on scroll:

- Hero section: staggered reveal
- Timeline items: alternate slide-in from left/right
- Sections: fade-in as you scroll
- Cards: subtle hover effects
- Buttons: scale-up on hover

---

## ✨ Key Features

### Countdown Timer
- Live countdown to July 26, 2026
- Updates every second
- Displays: Days : Hours : Minutes : Seconds
- Mobile-friendly layout

### Progress Bar
- Dynamic fundraising progress visualization
- Shows: Amount raised, goal, percentage
- Easy to update numbers

### Timeline Component
- 5 editable milestone entries
- Alternates left/right on desktop
- Single column on mobile
- Built-in icons (emoji)

### Embedded YouTube Video
- Fully responsive (maintains 16:9 ratio)
- Works on all devices
- Framing text included

### Social Sharing
- 3 social platforms (Instagram, Facebook, X)
- Hashtag promotion (#TeamVedant)
- Icon-based layout

---

## 📖 Documentation

- **[README.md](./README.md)** - Comprehensive customization & deployment guide
- **[QUICK_START.md](./QUICK_START.md)** - Fast 3-minute setup guide
- **[PLACEHOLDERS.md](./PLACEHOLDERS.md)** - Complete placeholder reference with line numbers

---

## 🚀 Deployment Options

### Vercel (Recommended - Fastest)
```bash
npm install -g vercel
vercel
```
- Free tier available
- Auto-deploys on git push
- Custom domain support

### Netlify
```bash
npm run build
# Drag `dist/` folder to Netlify
```
- Free tier available
- Continuous deployment from Git
- Custom domain support

### GitHub Pages
```bash
npm run build
# Upload `dist/` to gh-pages branch
```
- Free with GitHub account
- Custom domain support

### Traditional Web Host
```bash
npm run build
# Upload `dist/` folder via FTP/SSH
```
- Any web host works (GoDaddy, Bluehost, etc.)

---

## ✅ Pre-Launch Checklist

- [ ] **Update donation link** in Hero.jsx & Donate.jsx
- [ ] **Fill all placeholders** (28 total - use PLACEHOLDERS.md)
- [ ] **Update social links** (Instagram, Facebook, X)
- [ ] **Check race bib number** is correct
- [ ] **Review fundraising goal/amount** in Donate.jsx
- [ ] **Test on mobile** (F12 → Toggle device toolbar)
- [ ] **Test countdown timer** is working
- [ ] **Test all CTA buttons** link to donation page
- [ ] **Test YouTube video** loads & plays
- [ ] **Update page title/meta** in index.html
- [ ] **Run build** (`npm run build`) - verify success
- [ ] **Preview production** (`npm run preview`)
- [ ] **Deploy** to Vercel/Netlify
- [ ] **Test live version**
- [ ] **Share with team!** 🎉

---

## 🎯 Next Steps

1. ✅ **Read** [QUICK_START.md](./QUICK_START.md) (3 minutes)
2. ✅ **Start dev server**: `npm run dev`
3. ✅ **Open** [PLACEHOLDERS.md](./PLACEHOLDERS.md) in editor
4. ✅ **Systematically fill** each placeholder
5. ✅ **Test everything** works
6. ✅ **Build**: `npm run build`
7. ✅ **Deploy** to Vercel/Netlify
8. ✅ **Share** your fundraiser! 🚀

---

## 📞 Support Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Vercel Deploy**: https://vercel.com
- **Netlify Deploy**: https://netlify.com

---

## 🙌 You're All Set!

This website is designed to:
- ✨ **Tell your story emotionally** and authentically
- 💚 **Inspire donors** to support your cause
- 📊 **Show impact** with clear fundraising progress
- 📱 **Work beautifully** on all devices
- 🚀 **Deploy easily** to the world

**Everything is in place. Now it's time to fill in your content and share your journey!**

---

**Made with ❤️ for Team Vedant**

Running for a cause. Making an impact. Together. 🏃‍♂️💨

---

## 📄 Quick Links

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Detailed customization guide |
| [QUICK_START.md](./QUICK_START.md) | 3-minute setup guide |
| [PLACEHOLDERS.md](./PLACEHOLDERS.md) | All 28 placeholders with line numbers |
| [package.json](./package.json) | Dependencies & scripts |
| [tailwind.config.js](./tailwind.config.js) | Color scheme & theme |

---

**Questions?** Check README.md > Troubleshooting section.

**Ready?** Start with `npm run dev` 🚀
