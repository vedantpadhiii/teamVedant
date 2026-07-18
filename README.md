# Team Vedant - SF Marathon 2026 Fundraiser

A modern, emotionally resonant single-page website built with React, Vite, Tailwind CSS, and Framer Motion. This site tells your story and drives fundraising for a charitable cause tied to the San Francisco Marathon on July 26, 2026.

## 🎯 Features

- **Responsive Design**: Fully mobile-first, responsive across all devices
- **Smooth Animations**: Subtle fade-in and scroll-triggered animations using Framer Motion
- **Countdown Timer**: Live countdown to race day (July 26, 2026)
- **Progress Bar**: Visual fundraising progress tracker
- **Timeline Component**: Beautiful vertical timeline for your journey milestones
- **Embedded Video**: Responsive YouTube embed for your TED talk
- **Social Sharing**: Built-in social media links and hashtag promotion
- **Warm Color Palette**: Deep teal/navy primary colors with warm coral/gold accents
- **Accessible & Clean Code**: Well-commented, easy to customize

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (npm or yarn)

### Installation

```bash
cd marathon
npm install
```

### Development Server

```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder, ready to deploy.

## 📝 Customization Guide

### 1. **Update Donation Link**

Open any component that has a `DONATE_LINK` constant (Hero.jsx, Donate.jsx) and replace:

```javascript
const DONATE_LINK = 'https://www.example.com/donate';
```

With your actual donation URL.

### 2. **Fill in Placeholder Text**

Throughout the site, you'll find `[PLACEHOLDER: ...]` tags marking sections for your content. Common locations:

- **Hero Section**: Already has your headline and race date
- **My Story Timeline**: 5 milestone entries (diagnosis, surgeries, recovery, training, race day)
- **Watch My Talk**: Video framing text
- **Why I'm Giving Back**: Gratitude message and cause information
- **Follow the Journey**: Race bib number and social media links

### 3. **Add Images**

The site uses placeholder images from https://placehold.co. To add real images:

1. Replace placeholder image URLs with your own image URLs or local paths
2. Update the `alt` text to be descriptive
3. Consider hosting images on Cloudinary, AWS S3, or your web server

Example:
```jsx
// Before:
<img src="https://placehold.co/600x400?text=My+Training" alt="Training photos" />

// After:
<img src="/images/training-photo.jpg" alt="Marathon training run in Golden Gate Park" />
```

### 4. **Update Social Media Links**

In [FollowJourney.jsx](src/components/FollowJourney.jsx) and [Footer.jsx](src/components/Footer.jsx), replace placeholder URLs:

```javascript
// FollowJourney.jsx (lines ~15-25)
const socialLinks = [
  {
    name: 'Instagram',
    url: '[PLACEHOLDER: Instagram profile URL]', // ← Replace with your profile
  },
  // ...
];

// Footer.jsx (lines ~46-60)
<a href="[PLACEHOLDER: Instagram URL]">📷</a>
```

### 5. **Update Page Title & Meta Tags**

Edit [index.html](index.html):

```html
<title>Team Vedant | SF Marathon 2026</title>
<meta
  name="description"
  content="Your custom description here"
/>
```

### 6. **Update Fundraising Progress**

In [Donate.jsx](src/components/Donate.jsx), update the numbers:

```jsx
<ProgressBar raised={2450} goal={10000} />
```

- `raised`: Amount currently raised (in dollars)
- `goal`: Total fundraising goal

### 7. **Customize Colors**

Edit [tailwind.config.js](tailwind.config.js) to change the color palette:

```javascript
colors: {
  primary: {
    // Deep teal/navy - adjust hex values
    500: '#1a7d9e', // Main primary color
    600: '#0f5a73', // Darker shade
    // ...
  },
  accent: {
    // Warm coral/gold - adjust hex values
    500: '#eb764b', // Main accent color
    600: '#d45e33', // Darker shade
    // ...
  },
}
```

### 8. **Update Countdown Race Date**

The countdown is hardcoded to July 26, 2026 in [CountdownTimer.jsx](src/components/CountdownTimer.jsx). To change it:

```jsx
// Line 18
const raceDay = new Date('2026-07-26T00:00:00').getTime();
// Change to your date if needed
```

### 9. **Customize Font Family**

In [tailwind.config.js](tailwind.config.js), change:

```javascript
fontFamily: {
  display: ['Playfair Display', 'Georgia', 'serif'], // Headings
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'], // Body
}
```

Alternative serif fonts: `Georgia`, `Garamond`, `Crimson Text`
Alternative sans fonts: `Poppins`, `Montserrat`, `DM Sans`

## 📱 Component Structure

```
src/
├── components/
│   ├── Hero.jsx                 # Hero section with countdown
│   ├── MyStory.jsx              # Timeline component
│   ├── WatchTalk.jsx            # YouTube embed section
│   ├── WhyGivingBack.jsx        # Two-column gratitude section
│   ├── Donate.jsx               # CTA and progress bar
│   ├── FollowJourney.jsx        # Race details and social links
│   ├── Footer.jsx               # Footer with thank you
│   ├── CountdownTimer.jsx       # Reusable countdown component
│   └── ProgressBar.jsx          # Reusable progress component
├── App.jsx                      # Main app component
├── main.jsx                     # React entry point
└── index.css                    # Global styles
```

## 🎨 Design System

### Colors

- **Primary (Deep Teal/Navy)**: `#1a7d9e` - Main color, used for text and backgrounds
- **Accent (Warm Coral/Gold)**: `#eb764b` - CTA buttons, highlights, attention-grabbing
- **Light backgrounds**: `#f0f9fb` and `#fef3f0`

### Typography

- **Headings**: `Playfair Display` (elegant serif)
- **Body**: `Inter` (clean, modern sans-serif)
- **Sizes**: H1 (3.5rem-7rem depending on viewport), P (1rem-1.25rem)

### Spacing

- **Generous whitespace** between sections
- **Rounded cards**: `rounded-2xl` (16px border-radius)
- **Button padding**: `px-8 py-4` with `rounded-full`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Vercel auto-detects Vite and deploys

### Netlify

```bash
npm run build
# Drag `dist` folder to Netlify or connect your Git repo
```

### Traditional Hosting

```bash
npm run build
# Upload `dist/` folder to your web server
```

## 📋 Checklist Before Launch

- [ ] Replace all `[PLACEHOLDER: ...]` texts with real content
- [ ] Update `DONATE_LINK` constant in Hero.jsx and Donate.jsx
- [ ] Add real images (replace placeholder URLs)
- [ ] Update social media links (Instagram, Facebook, X)
- [ ] Set race day bib number in FollowJourney.jsx
- [ ] Update fundraising goal and current amount in Donate.jsx
- [ ] Add real YouTube video URL (if different from placeholder)
- [ ] Update page title and meta description in index.html
- [ ] Test on mobile devices
- [ ] Test countdown timer
- [ ] Test all CTA buttons link to correct donation page
- [ ] Test social sharing links
- [ ] Run `npm run build` to check for errors

## 🎯 Key Sections Explained

### Hero
- Bold, warm gradient background
- Features countdown timer
- Primary CTA button

### My Story
- Vertical timeline with alternating cards
- 5 milestone entries (easily customizable)
- Mobile-friendly single-column layout

### Watch My Talk
- Responsive YouTube embed
- Maintains 16:9 aspect ratio on all devices

### Why I'm Giving Back
- Two-column layout (responsive to single column on mobile)
- Gratitude narrative + impact metrics
- Visually distinct accent-colored card

### Donate
- High-contrast CTA banner
- Dynamic progress bar showing fundraising progress
- Motivational message

### Follow the Journey
- Race day details card
- Social media grid with 3 platforms
- Hashtag promotion (#TeamVedant)

### Footer
- Thank you message
- Repeated social icons
- Copyright and disclaimers

## 📚 Technology Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Google Fonts** - Playfair Display & Inter

## 🆘 Troubleshooting

### Countdown shows negative values
The countdown is set to July 26, 2026. If you're after that date, the countdown will show 0. Update the date in [CountdownTimer.jsx](src/components/CountdownTimer.jsx).

### Images not loading
- Check the image URL is correct
- Ensure images are in the public folder or hosted externally
- Check browser console for 404 errors

### Styles not applying
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Restart the dev server: `npm run dev`
- Check Tailwind config is correct

### Build fails
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Run `npm run build`

## 💡 Best Practices

- **Keep placeholders marked**: Makes it easy to find what still needs customization
- **Test responsiveness**: Use Chrome DevTools (F12 → Toggle device toolbar)
- **Monitor file sizes**: Keep images under 2MB for fast loading
- **Update fundraising progress**: Remember to update the raised/goal amounts in Donate.jsx
- **Backup frequently**: Use Git version control

## 📞 Support

For questions about React, Vite, or Tailwind CSS, visit:
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

---

**Made with ❤️ for Team Vedant**

Running for a cause. Making an impact. Together.
