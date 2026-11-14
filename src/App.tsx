import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';
import { ToastProvider } from './context/ToastContext';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { TerminalPreloader } from './components/layout/TerminalPreloader';
import { CanvasBackground } from './components/layout/CanvasBackground';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/Hero/HeroSection';
import { AboutSection } from './components/sections/About/AboutSection';
import { EventsSection } from './components/sections/Events/EventsSection';
import { ScheduleSection } from './components/sections/Schedule/ScheduleSection';
import { SpeakersSection } from './components/sections/Speakers/SpeakersSection';
import { SponsorsSection } from './components/sections/Sponsors/SponsorsSection';
import { FaqsSection } from './components/sections/Faqs/FaqsSection';
import { Footer } from './components/layout/Footer';
import { ModalsContainer } from './components/modals/ModalsContainer';
import { useRevealObserver } from './hooks/useRevealObserver';

const MainLayout: React.FC = () => {
  useRevealObserver();

  return (
    <>
      <ScrollProgressBar />
      <TerminalPreloader />
      <CanvasBackground />

      <div className="site-wrapper">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <SpeakersSection />
        <SponsorsSection />
        <FaqsSection />
        <Footer />
      </div>

      <ModalsContainer />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <ToastProvider>
          <MainLayout />
        </ToastProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;

