import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import WeddingParty from '@/components/WeddingParty';
import QASection from '@/components/QASection';
import TravelSection from '@/components/TravelSection';
import ThingsToDoSection from '@/components/ThingsToDoSection';
import RSVPSection from '@/components/RSVPSection';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  useEffect(() => {
    // Add fade-in animation when sections come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen smooth-scroll wedding-gradient">
      <Navigation />
      <main>
        <HeroSection />
        <PhotoGallery />
        <WeddingParty />
        <QASection />
        <TravelSection />
        <ThingsToDoSection />
        <RSVPSection />
      </main>
      <CountdownTimer />
    </div>
  );
};

export default Index;
