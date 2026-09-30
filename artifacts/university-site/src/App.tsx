import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StudentIntent } from '@/components/StudentIntent';
import { ProgramDiscovery } from '@/components/ProgramDiscovery';
import { Colleges } from '@/components/Colleges';
import { Admissions } from '@/components/Admissions';
import { AIAssistant } from '@/components/AIAssistant';
import { Footer } from '@/components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'programs', 'academies', 'admissions', 'assistant', 'about'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <StudentIntent />
        <ProgramDiscovery />
        <Colleges />
        <Admissions />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}

export default App;
