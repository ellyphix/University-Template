import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface Program {
  name: string;
  type: string;
  college: string;
  target: string;
}

const colleges = [
  'All',
  'AI & Digital Business',
  'Robotics & Automation',
  'Gaming & Simulation',
  'Sports & Media Tech',
  'Business & Consulting',
  'Certification Academies',
];

const programs: Program[] = [
  { name: 'AI & Digital Business', type: 'College', college: 'AI & Digital Business', target: '#college-ai-and-digital-business' },
  { name: 'Robotics & Automation', type: 'College', college: 'Robotics & Automation', target: '#college-robotics-and-automation' },
  { name: 'Gaming & Simulation', type: 'College', college: 'Gaming & Simulation', target: '#college-gaming-and-simulation' },
  { name: 'Sports & Media Tech', type: 'College', college: 'Sports & Media Tech', target: '#college-sports-and-media-tech' },
  { name: 'Business & Consulting', type: 'College', college: 'Business & Consulting', target: '#college-business-and-consulting' },
  { name: 'ACIM — Belt Certification', type: 'Academy', college: 'Certification Academies', target: '#academy-acim' },
  { name: 'AICTAaaS', type: 'Academy', college: 'Certification Academies', target: '#academy-aictaaas' },
  { name: 'Tech Software Academy', type: 'Academy', college: 'Certification Academies', target: '#academy-tech-software' },
  { name: 'Partner Academy', type: 'Academy', college: 'Certification Academies', target: '#academy-partner-academy' },
];

export function ProgramDiscovery() {
  const [activeCollege, setActiveCollege] = useState('All');

  const filtered = activeCollege === 'All'
    ? programs
    : programs.filter((p) => p.college === activeCollege);

  return (
    <section id="programs" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <span className="text-xs font-bold text-cardinal-700 tracking-widest uppercase mb-4 block">
              Academics
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-4">
              Programs at Tech University
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
              Browse programs across our five colleges and four certification
              academies. Start with what interests you — we'll connect you to
              the right place.
            </p>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-stone-200">
            {colleges.map((college) => (
              <button
                key={college}
                onClick={() => setActiveCollege(college)}
                className={`px-4 py-2 text-sm font-semibold transition-all border-b-2 -mb-[2px] ${
                  activeCollege === college
                    ? 'border-cardinal-600 text-cardinal-700'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                {college}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Program list — academic table style */}
        <div className="divide-y divide-stone-200">
          {filtered.map((program, i) => (
            <Reveal key={program.name} delay={i * 40}>
              <a
                href={program.target}
                className="group flex items-center justify-between py-6 hover:bg-white px-4 -mx-4 rounded-sm transition-colors"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className={`text-xs font-bold px-3 py-1 rounded-sm shrink-0 ${
                    program.type === 'College'
                      ? 'bg-cardinal-50 text-cardinal-700 border border-cardinal-100'
                      : 'bg-stone-100 text-stone-700 border border-stone-200'
                  }`}>
                    {program.type}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-stone-900 group-hover:text-cardinal-700 transition-colors truncate">
                      {program.name}
                    </h3>
                    <p className="text-sm text-stone-500 mt-0.5">{program.college}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-cardinal-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
