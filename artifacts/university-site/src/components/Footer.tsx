import { Reveal } from './Reveal';

const footerSections = [
  {
    title: 'Colleges',
    links: ['AI & Digital Business', 'Robotics & Automation', 'Gaming & Simulation', 'Sports & Media Tech', 'Business & Consulting'],
  },
  {
    title: 'Academies',
    links: ['ACIM', 'AICTAaaS', 'Tech Software', 'Partner Academy'],
  },
  {
    title: 'Admissions',
    links: ['How to Apply', 'Tuition & Financial Aid', 'Key Dates', 'FAQ'],
  },
  {
    title: 'About',
    links: ['Mission', 'Leadership', 'News & Press', 'Contact'],
  },
  {
    title: 'Partners',
    links: ['Corporate Partners', 'Advisory Boards', 'Become a Partner'],
  },
  {
    title: 'Students',
    links: ['Find a Program', 'Admissions', 'Student Guidance'],
  },
];

function makeAnchorId(prefix: string, value: string) {
  return `${prefix}-${value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

function getFooterHref(section: string, label: string) {
  if (section === 'Colleges') return `#${makeAnchorId('college', label)}`;
  if (section === 'Academies') return `#${makeAnchorId('academy', label)}`;
  if (section === 'Admissions') {
    const targets: Record<string, string> = {
      'How to Apply': '#admissions-how-to-apply',
      'Tuition & Financial Aid': '#admissions-tuition-financial-aid',
      'Key Dates': '#admissions-key-dates',
      FAQ: '#admissions-faq',
    };
    return targets[label] ?? '#admissions';
  }
  if (section === 'Students') {
    const targets: Record<string, string> = {
      'Find a Program': '#programs',
      Admissions: '#admissions',
      'Student Guidance': '#intent',
    };
    return targets[label] ?? '#intent';
  }
  return '#about';
}

export function Footer() {
  return (
    <footer id="about" className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top: brand + links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-cardinal-600 flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg leading-none">T</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">Tech University</div>
                <div className="text-[10px] text-stone-500 tracking-widest uppercase">Technology &amp; Innovation</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A next-generation university for technology-driven education.
              Building what comes next, together.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href={getFooterHref(section.title, link)} className="text-sm text-stone-400 hover:text-cardinal-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs text-stone-500">&copy; 2026 Tech University</span>
            <a href="#home" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">Back to top</a>
            <a href="#admissions" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">Admissions</a>
          </div>
          <p className="text-xs text-stone-600">
            UX concept prototype. Not affiliated with production systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
