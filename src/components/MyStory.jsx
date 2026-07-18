import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TimelineItem({ index, title, description, onEnter }) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-80px' }}
      onViewportEnter={() => onEnter && onEnter(index)}
    >
      <div className="card p-8 md:p-10">
        <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display leading-tight">{title}</h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">{description}</p>
      </div>
    </motion.div>
  );
}

export default function MyStory() {
  const photoMoments = [
    {
      src: '/photos/IMG_9831.JPG',
      alt: 'Running on the track during a high school meet',
      title: 'High School Track',
      description: 'The energy of race day and the discipline that helped me grow into a stronger runner.',
      label: 'Track & Field',
    },
    {
      src: '/photos/IMG_6287.JPG',
      alt: 'Scootering to school as a child',
      title: 'Childhood Independence',
      description: 'Small everyday moments that helped shape my confidence and love for movement.',
      label: 'Early Years',
    },
    {
      src: '/photos/IMG_1021.jpg',
      alt: 'With the doctor team who helped me',
      title: 'The People Who Helped Me',
      description: 'A reminder that every milestone is shared with the medical team and loved ones who believed in me.',
      label: 'Gratitude',
    },
    {
      src: '/photos/IMG_0676.jpg',
      alt: 'Dominating on the soccer team as a child',
      title: 'Soccer Days',
      description: 'The joy of playing, competing, and learning how to love sports from the very start.',
      label: 'Youth Sports',
    },
    {
      src: '/photos/A5_05394.jpeg',
      alt: 'Graduating',
      title: 'Graduation Day',
      description: 'A proud moment that reflected years of determination, growth, and perseverance.',
      label: 'Milestone',
    },
    {
      src: '/photos/A5_05370.jpeg',
      alt: 'Family at graduation',
      title: 'Family at Graduation',
      description: 'The people who stood beside me and made every achievement feel even more meaningful.',
      label: 'Family',
    },
  ];

  const milestones = [
    {
      title: 'A Childhood Built Around Sports',
      description:
        "Since I was little, sports have always been a huge part of my life. Whether I was pretending to shoot three-pointers or playing pickup games, those early years taught me teamwork and grit.",
      photoIndex: 3,
    },
    {
      title: 'Discovering Track and Cross Country',
      description:
        "In high school I joined cross country and track as a beginner. Through training and races I learned discipline and resilience.",
      photoIndex: 0,
    },
    {
      title: 'My Why',
      description:
        "My journey is supported by incredible doctors, nurses, and family — every mile is something I never take for granted.",
      photoIndex: 2,
    },
    {
      title: 'Training for the Marathon',
      description:
        "Signing up for the San Francisco Marathon is one of my biggest challenges yet — I'm running to give back and raise hope.",
      photoIndex: 4,
    },
  ];

  const [activePhotoIndex, setActivePhotoIndex] = useState(milestones[0].photoIndex || 0);
  const slideInterval = useRef(null);

  const startSlideshow = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photoMoments.length);
    }, 5000);
  };

  useEffect(() => {
    startSlideshow();
    return () => clearInterval(slideInterval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container-wide">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl text-primary-900 mb-3 font-display">My Story</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
            A journey of challenges, perseverance, and hope. Here's how I got here.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col md:flex-row md:items-start md:gap-12">
          <div className="w-full md:flex-1 max-w-3xl">
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <TimelineItem
                  key={i}
                  index={i}
                  title={m.title}
                  description={m.description}
                  onEnter={(idx) => {
                    setActivePhotoIndex(milestones[idx].photoIndex);
                    startSlideshow();
                  }}
                />
              ))}
            </div>
          </div>

          <motion.aside className="w-full md:w-1/3 mt-8 md:mt-0 md:sticky md:top-28">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wide text-accent-600 font-semibold mb-2 font-sans">Moments that shaped me</p>
              <h3 className="text-xl font-display text-primary-900">A life in motion</h3>
            </div>

            <div
              className="card overflow-hidden border border-primary-100"
              onMouseEnter={() => clearInterval(slideInterval.current)}
              onMouseLeave={() => startSlideshow()}
            >
              <div className="relative h-72 md:h-80 lg:h-96 w-full bg-primary-50 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhotoIndex}
                    src={photoMoments[activePhotoIndex].src}
                    alt={photoMoments[activePhotoIndex].alt}
                    className="h-full w-full object-cover object-center"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8 }}
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
              <div className="p-5 bg-black/60 text-white">
                <p className="text-sm uppercase tracking-wide text-accent-200 font-semibold mb-1 font-sans">{photoMoments[activePhotoIndex].label}</p>
                <h4 className="text-lg md:text-2xl font-bold text-white mb-1 font-display">{photoMoments[activePhotoIndex].title}</h4>
                <p className="text-base text-white/90 max-w-none">{photoMoments[activePhotoIndex].description}</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
