import { ArrowRight, ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-stone-900">
      {/* Campus background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12610212/pexels-photo-12610212.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="University campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/60 to-stone-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-20 lg:pb-32 pt-32">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-cardinal-400" />
              <span className="text-xs font-semibold text-cardinal-300 tracking-widest uppercase">
                Established 2024
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
              Tech<br />
              University
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-xl text-stone-200 leading-relaxed max-w-2xl mb-10 font-light">
              A next-generation university for technology-driven education.
              Five colleges, four certification academies, and a commitment
              to building what comes next.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#admissions"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-cardinal-600 text-white font-semibold text-sm rounded-sm hover:bg-cardinal-700 transition-all hover:gap-3"
              >
                Apply to Tech University
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm rounded-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Programs
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-stone-400 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-stone-400 animate-bounce" />
      </div>
    </section>
  );
}
