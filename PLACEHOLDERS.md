# 📋 Placeholder Content Checklist

This file lists every `[PLACEHOLDER]` in the project so you can systematically fill in your content.

## 🎯 Priority 1 - Must Update Before Launch

### Donation Link
**Location:** Multiple files
**Files:**
- `src/components/Hero.jsx` - Line 12
- `src/components/Donate.jsx` - Line 5

**Current value:** `https://www.example.com/donate`

**Search & replace this URL** with your actual donation page.

```javascript
const DONATE_LINK = 'YOUR_ACTUAL_DONATION_URL_HERE';
```

---

## 🌟 Priority 2 - Core Content

### Hero Section
**File:** `src/components/Hero.jsx`
- ✅ Headline: "#TeamVedant" (already set)
- ✅ Subheadline: "Running the San Francisco Marathon — July 26, 2026" (already set)

### My Story Timeline
**File:** `src/components/MyStory.jsx` - Lines 50-95

5 milestones to customize:

1. **The Diagnosis** (Line 55)
   ```
   [PLACEHOLDER: Share the moment you learned about your diagnosis and how it changed your perspective on life and health.]
   ```

2. **First Surgery** (Line 60)
   ```
   [PLACEHOLDER: Describe your first surgical experience, feelings, and what helped you through recovery.]
   ```

3. **The Second Challenge** (Line 65)
   ```
   [PLACEHOLDER: Share about subsequent surgeries or challenges and how you stayed strong mentally and physically.]
   ```

4. **Recovery & Rebirth** (Line 70)
   ```
   [PLACEHOLDER: Talk about your recovery journey, physical therapy, and the turning point where you felt hope returning.]
   ```

5. **Training for the Marathon** (Line 75)
   ```
   [PLACEHOLDER: Share your training journey, milestones, challenges you overcame, and how you prepared for July 26.]
   ```

### Watch My Talk
**File:** `src/components/WatchTalk.jsx` - Line 20

```
[PLACEHOLDER: Add a sentence framing your TED talk or video. This helps viewers understand what they're about to watch.]
```

---

## 🎁 Priority 3 - Cause & Impact

### Why I'm Giving Back - Left Column
**File:** `src/components/WhyGivingBack.jsx`

Three text sections (Lines 37-49):

1. **Paragraph 1** (Line 39)
   ```
   [PLACEHOLDER: Express your gratitude to your medical team, researchers, and support system. Share how their dedication and expertise gave you a second chance at life.]
   ```

2. **Paragraph 2** (Line 43)
   ```
   [PLACEHOLDER: Describe why research matters. What breakthroughs or discoveries would help future patients? How does continued funding accelerate progress?]
   ```

3. **Paragraph 3** (Line 47)
   ```
   [PLACEHOLDER: Share your commitment. Running this marathon isn't just about personal achievement—it's about ensuring others don't have to fight this battle alone.]
   ```

### Why I'm Giving Back - Right Card
**File:** `src/components/WhyGivingBack.jsx` - Lines 63-85

1. **Hospital/Organization Name** (Line 65)
   ```
   [PLACEHOLDER: Hospital Name / Organization]
   ```

2. **Where Your Funds Go** (Line 72)
   ```
   [PLACEHOLDER: e.g., "Clinical research in oncology" / "Advanced treatment protocols" / "Patient support programs"]
   ```

3. **Annual Investment** (Line 79)
   ```
   [PLACEHOLDER: e.g., "$2.5M in research grants"]
   ```

4. **Success Stories** (Line 86)
   ```
   [PLACEHOLDER: e.g., "500+ patients served annually" / "3 FDA approvals in 5 years"]
   ```

5. **Key Metric** (Line 93)
   ```
   [PLACEHOLDER]
   ```

6. **Metric Description** (Line 97)
   ```
   [PLACEHOLDER: Key metric or achievement—e.g., "patients treated" or "survival rate improvement"]
   ```

---

## 🏃 Priority 4 - Race Day & Social

### Donate Section Progress
**File:** `src/components/Donate.jsx` - Line 27

```jsx
<ProgressBar raised={2450} goal={10000} />
```

**Update numbers:**
- `raised`: How much you've collected so far
- `goal`: Your total fundraising target

### Follow The Journey - Race Day Details
**File:** `src/components/FollowJourney.jsx`

1. **Bib Number** (Line 33)
   ```
   [PLACEHOLDER: e.g., "1247"]
   ```

### Follow The Journey - Social Links
**File:** `src/components/FollowJourney.jsx` - Lines 12-24

Three social media links to update:

1. **Instagram** (Line 15)
   ```
   url: '[PLACEHOLDER: Instagram profile URL]'
   ```

2. **Facebook** (Line 20)
   ```
   url: '[PLACEHOLDER: Facebook profile URL]'
   ```

3. **X (Twitter)** (Line 25)
   ```
   url: '[PLACEHOLDER: X profile URL]'
   ```

### Footer - Social Links
**File:** `src/components/Footer.jsx` - Lines 51-67

Update three social links:

1. **Instagram** (Line 52)
   ```
   href="[PLACEHOLDER: Instagram URL]"
   ```

2. **Facebook** (Line 59)
   ```
   href="[PLACEHOLDER: Facebook URL]"
   ```

3. **X** (Line 66)
   ```
   href="[PLACEHOLDER: X URL]"
   ```

---

## 🎨 Priority 5 - Page Metadata & SEO

### Page Title & Description
**File:** `index.html` - Lines 5-12

1. **Page Title** (Line 5)
   ```html
   <title>Team Vedant | SF Marathon 2026</title>
   ```
   ✅ Good as-is, or update if desired

2. **Meta Description** (Line 8-10)
   ```html
   <meta name="description" content="Join #TeamVedant on July 26, 2026 for the San Francisco Marathon. Running for a cause, supporting medical research and recovery." />
   ```
   Update this to describe your specific cause/mission.

---

## 📋 Step-by-Step Completion Guide

### Day 1 - Core Updates
1. [ ] Update donation link in `Hero.jsx` and `Donate.jsx`
2. [ ] Add social media URLs to `FollowJourney.jsx` and `Footer.jsx`
3. [ ] Fill in all timeline entries in `MyStory.jsx`
4. [ ] Update race bib number in `FollowJourney.jsx`

### Day 2 - Deep Content
1. [ ] Write "Why I'm Giving Back" sections in `WhyGivingBack.jsx`
2. [ ] Add hospital/organization info
3. [ ] Fill in fundraising stats in `Donate.jsx`
4. [ ] Add video framing text in `WatchTalk.jsx`

### Day 3 - Polish & Test
1. [ ] Update page title and meta description in `index.html`
2. [ ] Test all CTA buttons link correctly
3. [ ] Test countdown timer is working
4. [ ] Test on mobile devices
5. [ ] Check all images (if adding any)

### Day 4 - Deploy
1. [ ] Run `npm run build`
2. [ ] Deploy to Vercel/Netlify
3. [ ] Test live version
4. [ ] Share with team!

---

## 🔍 Quick Find Using Search

**In VS Code (Cmd+Shift+F / Ctrl+Shift+F):**

To find all placeholders at once:
```
\[PLACEHOLDER[^\]]*\]
```
(Enable Regex search with `.*` button)

This will highlight every placeholder in the project so you can systematically go through them.

---

## ✅ Pre-Launch Checklist

Before deploying to production:

- [ ] All `[PLACEHOLDER]` text replaced
- [ ] Donation link updated and tested
- [ ] Social media links verified
- [ ] Fundraising goal and current amount accurate
- [ ] Page title and meta description updated
- [ ] YouTube video loads (or custom one linked)
- [ ] Mobile responsive (tested on phone)
- [ ] Countdown timer shows correct date
- [ ] All CTAs link to donation page
- [ ] No console errors (F12 → Console tab)
- [ ] Build succeeds (`npm run build`)
- [ ] Deployment successful

---

## 📞 File Location Reference

```
marathon/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              ← Donation link
│   │   ├── MyStory.jsx           ← 5 timeline entries
│   │   ├── WatchTalk.jsx         ← Video framing
│   │   ├── WhyGivingBack.jsx     ← 6 placeholders (gratitude + cause)
│   │   ├── Donate.jsx            ← Fundraising numbers
│   │   ├── FollowJourney.jsx     ← Social links + bib number
│   │   ├── Footer.jsx            ← Social links
│   │   ├── CountdownTimer.jsx    ← (race date already set)
│   │   └── ProgressBar.jsx       ← (no changes needed)
│   ├── App.jsx                   ← (no changes needed)
│   ├── main.jsx                  ← (no changes needed)
│   └── index.css                 ← (no changes needed)
├── index.html                    ← Page title & meta
├── tailwind.config.js            ← (colors - optional)
└── vite.config.js                ← (no changes needed)
```

---

## 🎯 Total Placeholders: 28

- **Donation Links:** 2
- **Timeline Entries:** 5 (stories)
- **Social Links:** 6
- **Cause/Impact Info:** 6
- **Fundraising Data:** 2
- **Misc Content:** 5
- **Race Day Details:** 1 (bib number)
- **Page Metadata:** 1

---

Happy customizing! 🚀
