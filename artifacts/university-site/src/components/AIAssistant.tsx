import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function AIAssistant() {
  return (
    <section id="assistant" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cardinal-600 flex items-center justify-center">
                  <span className="font-display font-bold text-white text-sm">NG</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">NGAI Assistant</div>
                  <div className="text-xs text-stone-500">Site-intelligent guidance</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight mb-6">
                Not sure where to start?
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-md">
                The NGAI Assistant uses conversational AI with full knowledge of
                our site — colleges, academies, admissions, and partners.
                Ask it anything. It will guide you to the right program, no
                organizational chart required.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="#assistant"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-cardinal-600 text-white font-semibold text-sm rounded-sm hover:bg-cardinal-700 transition-all hover:gap-3"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Right: chat preview */}
          <Reveal delay={100}>
            <div className="bg-white border border-stone-200 rounded-sm p-6 lg:p-8 shadow-lg shadow-stone-200/60">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="max-w-[80%] px-5 py-3 bg-stone-100 rounded-sm rounded-tr-none">
                    <p className="text-sm text-stone-900">
                      I'm interested in AI and business but I'm not sure which college to choose.
                    </p>
                  </div>
                </div>

                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cardinal-600 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-white text-xs">NG</span>
                  </div>
                  <div className="max-w-[80%] px-5 py-3 bg-cardinal-50 border border-cardinal-100 rounded-sm rounded-tl-none">
                    <p className="text-sm text-stone-900 leading-relaxed">
                      Based on your interests, the <span className="font-bold text-cardinal-700">College of AI & Digital Business</span> would be a strong fit. You might also consider the <span className="font-bold text-cardinal-700">College of Business & Consulting</span> for a more strategy-focused path. Want to compare them?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%] px-5 py-3 bg-stone-100 rounded-sm rounded-tr-none">
                    <p className="text-sm text-stone-900">
                      Yes, and what are the admission requirements?
                    </p>
                  </div>
                </div>

                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cardinal-600 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-white text-xs">NG</span>
                  </div>
                  <div className="px-5 py-4 bg-cardinal-50 border border-cardinal-100 rounded-sm rounded-tl-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cardinal-400 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-cardinal-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 rounded-full bg-cardinal-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
