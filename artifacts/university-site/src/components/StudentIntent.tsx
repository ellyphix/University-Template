import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const stats = [
  { value: '5', label: 'Colleges' },
  { value: '4', label: 'Certification Academies' },
  { value: '20+', label: 'Programs' },
  { value: '100+', label: 'Corporate Partners' },
];

export function StudentIntent() {
  return (
    <section id="intent" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats bar */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-20 pb-16 border-b border-stone-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display font-bold text-4xl lg:text-5xl text-cardinal-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Welcome statement */}
        <Reveal>
          <div className="max-w-4xl mb-16">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-stone-800 leading-snug font-normal">
              Whether you know exactly what you want to study or you're just
              starting to explore, we'll help you find your path at Tech
              University.
            </p>
          </div>
        </Reveal>

        {/* Three paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          <Reveal delay={0}>
            <a
              href="#programs"
              className="group block bg-white p-8 lg:p-10 hover:bg-stone-50 transition-colors h-full"
            >
              <div className="w-12 h-12 rounded-full bg-cardinal-50 border border-cardinal-100 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-cardinal-700 text-lg">01</span>
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
                Find a Program
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                You know what you want to study. Search by name, field, or keyword.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cardinal-700 group-hover:gap-2.5 transition-all">
                Search programs
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href="#programs"
              className="group block bg-white p-8 lg:p-10 hover:bg-stone-50 transition-colors h-full"
            >
              <div className="w-12 h-12 rounded-full bg-cardinal-50 border border-cardinal-100 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-cardinal-700 text-lg">02</span>
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
                Explore Programs
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Browse all available programs across every college and academy.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cardinal-700 group-hover:gap-2.5 transition-all">
                Browse all
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </Reveal>

          <Reveal delay={160}>
            <a
              href="#programs"
              className="group block bg-white p-8 lg:p-10 hover:bg-stone-50 transition-colors h-full"
            >
              <div className="w-12 h-12 rounded-full bg-cardinal-50 border border-cardinal-100 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-cardinal-700 text-lg">03</span>
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
                Not Sure What to Study?
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Explore guidance for programs that fit.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cardinal-700 group-hover:gap-2.5 transition-all">
                Explore programs
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
