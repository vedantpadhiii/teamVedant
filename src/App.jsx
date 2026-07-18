import Hero from './components/Hero';
import MyStory from './components/MyStory';
import WatchTalk from './components/WatchTalk';
import WhyGivingBack from './components/WhyGivingBack';
import Donate from './components/Donate';
import FollowJourney from './components/FollowJourney';
import Footer from './components/Footer';
import './index.css';

/**
 * App Component
 * Main entry point for the Team Vedant fundraiser website
 * 
 * Sections:
 * 1. HERO - Bold headline, countdown timer, donate CTA
 * 2. MY STORY - Vertical timeline of journey milestones
 * 3. WATCH MY TED TALK - Embedded YouTube video
 * 4. WHY I'M GIVING BACK - Two-column gratitude and cause info
 * 5. DONATE - CTA banner and fundraising progress bar
 * 6. FOLLOW THE JOURNEY - Race day details and social sharing
 * 7. FOOTER - Thank you message and social links
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* My Story Section */}
      <MyStory />

      {/* Watch My TED Talk Section */}
      <WatchTalk />

      {/* Why I'm Giving Back Section */}
      <WhyGivingBack />

      {/* Donate Section */}
      <Donate />

      {/* Follow the Journey Section */}
      <FollowJourney />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
