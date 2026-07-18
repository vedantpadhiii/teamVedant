# 🚀 Quick Start Guide - Team Vedant Website

## Get Started in 3 Minutes

### 1. **Start Development Server**
```bash
npm run dev
```
Site opens at http://localhost:3000

### 2. **Fill in Your Content**

Search for all `[PLACEHOLDER: ...]` tags and replace with your content:

**Most Important Updates:**
- [ ] **Donation Link** - Update in `Hero.jsx` and `Donate.jsx` (line ~12-13)
- [ ] **My Story Timeline** - Edit each milestone in `MyStory.jsx`
- [ ] **Social Links** - Update Instagram, Facebook, X URLs in `FollowJourney.jsx` and `Footer.jsx`
- [ ] **Race Day Details** - Update bib number in `FollowJourney.jsx`
- [ ] **Fundraising Amount** - Update in `Donate.jsx` (line ~27)

### 3. **Preview & Deploy**

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Essential Files to Customize

| File | What to Update |
|------|---|
| `src/components/Hero.jsx` | Donation link (line 12) |
| `src/components/MyStory.jsx` | Timeline milestones (lines 50-70) |
| `src/components/WatchTalk.jsx` | Video framing text (line 20) |
| `src/components/WhyGivingBack.jsx` | Gratitude message & cause info (lines 35-65) |
| `src/components/Donate.jsx` | Donation link (line 5), fundraising amounts (line 27) |
| `src/components/FollowJourney.jsx` | Bib number (line 33), social links (lines 12-24) |
| `src/components/Footer.jsx` | Social links (lines 51-67) |
| `index.html` | Page title & meta description (lines 5-12) |

---

## Find & Replace All Placeholders

Use VS Code Find & Replace (Cmd+H / Ctrl+H):

1. **Find:** `\[PLACEHOLDER:[^\]]*\]`
2. **Toggle Regex:** Enable (.*. button)
3. **Replace All** and fill in your content

---

## Customization Quick Tips

### 🎨 Change Colors
Edit `tailwind.config.js` (lines 11-31):
```js
primary: { 500: '#1a7d9e' }, // Deep teal
accent: { 500: '#eb764b' }   // Coral
```

### 🔗 Update Donation Link Everywhere
Search for: `https://www.example.com/donate`
Replace with: Your actual donation URL

### 📸 Add Images
Replace placeholder URLs:
```jsx
// Before:
src="https://placehold.co/600x400"

// After:
src="/images/your-photo.jpg"
// or
src="https://your-cloud-storage.com/photo.jpg"
```

### 📅 Change Race Date
In `src/components/CountdownTimer.jsx` line 18:
```js
const raceDay = new Date('2026-07-26T00:00:00').getTime();
```

### ✍️ Change Fonts
In `tailwind.config.js` lines 6-7:
- **Headings**: Playfair Display, Georgia, Garamond, Crimson Text
- **Body**: Inter, Poppins, Montserrat, DM Sans

---

## Deployment Options

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag `dist/` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Upload `dist/` contents to your gh-pages branch
```

---

## Testing Checklist

- [ ] Visit each section and check it looks good
- [ ] Test on mobile (F12 → Toggle device toolbar)
- [ ] Click "Donate Now" buttons - do they link correctly?
- [ ] Countdown timer is counting down
- [ ] All placeholder text is replaced
- [ ] Social media links work
- [ ] YouTube video loads properly
- [ ] Progress bar shows correct percentages

---

## Need Help?

**Common Issues:**

| Problem | Solution |
|---------|----------|
| "npm: command not found" | Install Node.js from nodejs.org |
| Dev server won't start | Run `npm install` first |
| Styling looks broken | Clear browser cache (Cmd+Shift+R) |
| Images not loading | Check URL is correct in browser console |
| Build fails | Delete `node_modules` and `dist`, run `npm install` again |

---

## Next Steps

1. ✅ Start dev server: `npm run dev`
2. ✅ Update all `[PLACEHOLDER]` tags
3. ✅ Test on mobile
4. ✅ Build: `npm run build`
5. ✅ Deploy to Vercel/Netlify

**That's it!** Your fundraiser website is ready to inspire donors and share your story. 💚

---

For detailed customization, see [README.md](./README.md)
