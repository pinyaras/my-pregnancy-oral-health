import { useEffect, useRef } from 'react';
import { CheckCircle2, Clock, Heart, Shield, Calendar, Scan, ArrowRight } from 'lucide-react';

const safetyItems = [
  'Dental exams are important during pregnancy',
  'Preventive care is recommended and safe',
  'Periodontal treatment is safe when needed',
  'Restorative care can be completed when needed',
  'Dental X-rays are safe with proper precautions',
  'Local anesthetic can be used when appropriate',
];

const timingItems = [
  { icon: Calendar, text: 'Second trimester is ideal for routine treatment' },
  { icon: Clock, text: 'Urgent dental care should not be delayed' },
  { icon: Shield, text: 'Avoid morning appointments if nausea is severe' },
  { icon: Heart, text: 'Shorter appointments help with fatigue' },
];

const comfortItems = [
  'Allow restroom breaks during appointments',
  'Left-side positioning in later pregnancy',
  'Support under right hip improves comfort',
  'Tell your dentist about your pregnancy',
];

export default function DentalVisits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="dental-visits"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FDF2F4' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block text-sm font-medium text-[#E07A87] uppercase tracking-wider">
            Safe Care for You and Baby
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-3 text-3xl sm:text-4xl font-semibold text-gray-800"
            style={{ transitionDelay: '100ms' }}
          >
            Dental Care During Pregnancy is Safe
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-4 text-gray-600"
            style={{ transitionDelay: '200ms' }}
          >
            Many pregnant patients worry about dental care. Here's what you need to know 
            about staying safe and comfortable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* What's Safe */}
          <div
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="h-full bg-white rounded-2xl shadow-lg shadow-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#7EB5A6]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F0F7F4] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#5A9686]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">What's Safe</h3>
                </div>
                <ul className="space-y-3">
                  {safetyItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7EB5A6] mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Best Timing */}
          <div
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="h-full bg-white rounded-2xl shadow-lg shadow-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#90CDF4]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#4299E1]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Best Timing</h3>
                </div>
                <div className="space-y-4">
                  {timingItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#4299E1]" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Comfort Tips */}
          <div
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
            style={{ transitionDelay: '500ms' }}
          >
            <div className="h-full bg-white rounded-2xl shadow-lg shadow-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-[#F4A5AE]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#FDF2F4] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#E07A87]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Comfort Tips</h3>
                </div>
                <ul className="space-y-3">
                  {comfortItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4A5AE] mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* X-Ray Note */}
                <div className="mt-5 p-4 rounded-xl bg-[#F0F7F4]">
                  <div className="flex items-start gap-3">
                    <Scan className="w-5 h-5 text-[#5A9686] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">About X-Rays</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Modern dental X-rays use very low radiation. A lead apron and thyroid 
                        collar protect you and your baby.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-12 text-center"
          style={{ transitionDelay: '600ms' }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-white rounded-2xl shadow-lg">
            <span className="text-3xl">🤰</span>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Don't skip your dental appointments!</p>
              <p className="text-sm text-gray-600 mt-1">
                Regular care during pregnancy helps prevent problems and keeps both you and baby healthy.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-10 flex justify-end" style={{ transitionDelay: '700ms' }}>
          <a
            href="#myths-facts"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:text-[#5A9686] hover:border-[#A8D4C8] transition-colors"
          >
            Next: Myths & Facts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
