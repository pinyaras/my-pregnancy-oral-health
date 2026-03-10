import { useEffect, useRef } from 'react';
import { Heart, Shield, Droplets, Apple } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Hormonal Changes',
    description: 'Pregnancy hormones can make gums react more strongly to plaque, increasing inflammation and sensitivity.',
    color: '#F4A5AE',
    bgColor: '#FDF2F4',
  },
  {
    icon: Shield,
    title: 'Plaque Buildup',
    description: 'Increased plaque biofilm formation during pregnancy can worsen gingivitis if not properly managed.',
    color: '#7EB5A6',
    bgColor: '#F0F7F4',
  },
  {
    icon: Droplets,
    title: 'Morning Sickness',
    description: 'Nausea and vomiting expose teeth to stomach acid, increasing the risk of enamel erosion.',
    color: '#90CDF4',
    bgColor: '#EBF8FF',
  },
  {
    icon: Apple,
    title: 'Diet Changes',
    description: 'Frequent snacking and sweet cravings during pregnancy may increase the risk of cavities.',
    color: '#F6AD55',
    bgColor: '#FFFAF0',
  },
];

export default function WhyItMatters() {
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
      id="why-it-matters"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block text-sm font-medium text-[#7EB5A6] uppercase tracking-wider"
          >
            Understanding the Connection
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-3 text-3xl sm:text-4xl font-semibold text-gray-800"
            style={{ transitionDelay: '100ms' }}
          >
            Why Oral Health Matters During Pregnancy
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-4 text-gray-600"
            style={{ transitionDelay: '200ms' }}
          >
            Pregnancy brings many changes to your body, and your mouth is no exception. 
            Understanding these connections helps you take better care of yourself and your baby.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 group"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: reason.bgColor }}
                >
                  <reason.icon
                    className="w-7 h-7"
                    style={{ color: reason.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-12 text-center"
          style={{ transitionDelay: '700ms' }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#F0F7F4] rounded-full">
            <span className="text-2xl">💡</span>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Good news:</span> With proper care, you can maintain excellent oral health throughout your pregnancy.
            </p>
          </div>
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
