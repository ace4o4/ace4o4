import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  return (
    <main className="main-wrapper bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Small footer */}
      <footer className="bg-[#0C0C0C] py-10 text-center text-sm opacity-50 relative z-30">
        &copy; {new Date().getFullYear()} Jack. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
