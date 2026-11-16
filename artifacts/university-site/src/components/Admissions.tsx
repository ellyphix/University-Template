import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  { num: '01', id: 'admissions-explore', label: 'Explore', description: 'Discover programs across our five colleges and four certification academies.' },
  { num: '02', id: 'admissions-choose-program', label: 'Choose a Program', description: 'Select the degree or certification path that fits your goals.' },
  { num: '03', id: 'admissions-requirements', label: 'Check Requirements', description: 'Review prerequisites, key dates, and materials needed for your application.' },
  { num: '04', id: 'admissions-apply', label: 'Apply', description: 'Review the application steps and admissions information.' },
];

const resources = [
  { id: 'admissions-how-to-apply', label: 'How to Apply', description: 'Step-by-step guide to the application process.' },
  { id: 'admissions-tuition-financial-aid', label: 'Tuition & Financial Aid', description: 'Cost, scholarships, and payment options.' },
  { id: 'admissions-key-dates', label: 'Key Dates', description: 'Application deadlines and important academic dates.' },
  { id: 'admissions-faq', label: 'FAQ', description: 'Answers to common admissions questions.' },
];

export function Admissions() {
  return (
    <section id="admissions" className="py-24 lg:py-32 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-20 max-w-2xl">
            <span className="text-xs font-bold text-cardinal-700 tracking-widest uppercase mb-4 block">
              Admissions
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-4">
              Your Path to Tech University
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Four steps from curious to enrolled. We keep it simple.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-20">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div id={step.id} className="bg-white p-8 lg:p-10 h-full scroll-mt-28">
                <span className="font-display font-bold text-5xl text-cardinal-200 mb-6 block">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
                  {step.label}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Resources */}
        <Reveal>
          <h3 className="font-display font-bold text-2xl text-stone-900 mb-8">
            Admissions Resources
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-16">
          {resources.map((resource, i) => (
            <Reveal key={resource.label} delay={i * 60}>
              <div id={resource.id} className="flex items-center justify-between bg-white p-6 lg:p-8 scroll-mt-28">
                <div>
                  <h4 className="font-display font-bold text-lg text-stone-900 group-hover:text-cardinal-700 transition-colors mb-1">
                    {resource.label}
                  </h4>
                  <p className="text-sm text-stone-600">{resource.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-cardinal-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#admissions-apply"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-cardinal-600 text-white font-semibold text-sm rounded-sm hover:bg-cardinal-700 transition-all hover:gap-3"
            >
              Review application steps
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#admissions-faq"
              className="text-sm font-semibold text-stone-900 hover:text-cardinal-700 transition-colors"
            >
              Review admissions FAQs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
