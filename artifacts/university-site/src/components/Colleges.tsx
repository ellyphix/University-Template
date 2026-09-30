import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface College {
  name: string;
  description: string;
  image: string;
}

const colleges: College[] = [
  {
    name: 'AI & Digital Business',
    description: 'Artificial intelligence, digital transformation, and business strategy at the intersection of technology and enterprise.',
    image: 'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Robotics & Automation',
    description: 'Robotics, industrial automation, and autonomous systems engineering for the physical world.',
    image: 'https://images.pexels.com/photos/9242834/pexels-photo-9242834.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Gaming & Simulation',
    description: 'Game design, interactive simulation, and immersive technologies for entertainment and training.',
    image: 'https://images.pexels.com/photos/9072394/pexels-photo-9072394.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Sports & Media Tech',
    description: 'Sports technology, wearable analytics, and media production for the digital athlete and fan.',
    image: 'https://images.pexels.com/photos/20523364/pexels-photo-20523364.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Business & Consulting',
    description: 'Consulting, business management, and organizational leadership for technology-driven enterprises.',
    image: 'https://images.pexels.com/photos/31376296/pexels-photo-31376296.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const academies = [
  { name: 'ACIM', description: 'Belt pathway certification — the Trusted Advisors belt certification program.' },
  { name: 'AICTAaaS', description: 'AI Consulting & Trusted Advisor certification as a service.' },
  { name: 'NGAI Software', description: 'Software development and engineering certification tracks.' },
  { name: 'Partner Academy', description: 'Partner intake, enablement, and certification programs.' },
];

export function Colleges() {
  return (
    <section id="academies" className="bg-white">
      {/* Colleges */}
      <div className="py-24 lg:py-32 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-bold text-cardinal-700 tracking-widest uppercase mb-4 block">
                Our Structure
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-4">
                Five Colleges
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Programs are organized across five colleges. But you don't need to
                navigate them — start with your interests and we'll connect you
                to the right place.
              </p>
            </div>
          </Reveal>

          {/* Grid of college cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, i) => (
              <Reveal key={college.name} delay={i * 60}>
                <a
                  href="#academies"
                  className="group block bg-white border border-stone-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 lg:p-7">
                    <h3 className="font-display font-bold text-xl text-stone-900 mb-2 group-hover:text-cardinal-700 transition-colors">
                      {college.name}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {college.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cardinal-700 group-hover:gap-2.5 transition-all">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Academies */}
      <div className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-bold text-cardinal-700 tracking-widest uppercase mb-4 block">
                Certification Academies
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-4">
                Four Academies
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Industry-focused certification tracks that complement our degree programs.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academies.map((academy, i) => (
              <Reveal key={academy.name} delay={i * 80}>
                <a
                  href="#academies"
                  className="group block bg-white border border-stone-200 rounded-sm p-8 lg:p-10 hover:border-cardinal-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-bold text-2xl text-stone-900 group-hover:text-cardinal-700 transition-colors">
                      {academy.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-cardinal-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    {academy.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
