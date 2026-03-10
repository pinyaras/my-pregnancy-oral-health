import { useEffect, useRef } from 'react';
import { AlertCircle, Shield, Droplets, Sparkles } from 'lucide-react';

const issues = [
  {
    icon: Sparkles,
    title: 'Pregnancy Gingivitis',
    points: [
      'Very common during pregnancy',
      'Gums may look red, swollen, and shiny',
      'Often begins in the first trimester',
      'Good plaque control helps reduce symptoms',
    ],
    borderColor: '#F4A5AE',
    bgColor: '#FDF2F4',
    iconColor: '#E07A87',
  },
  {
    icon: AlertCircle,
    title: 'Pregnancy Tumor',
    subtitle: '(Pyogenic Granuloma)',
    points: [
      'Benign inflammatory growth on gums',
      'May bleed easily but is not cancer',
      'Usually appears in second trimester',
      'Should be evaluated by a dental professional',
    ],
    borderColor: '#B794F6',
    bgColor: '#FAF5FF',
    iconColor: '#9F7AEA',
  },
  {
    icon: Droplets,
    title: 'Enamel Erosion',
    points: [
      'Can happen with repeated vomiting',
      'Acid weakens tooth surfaces',
      "Don't brush right after vomiting",
      'Rinse with water or baking soda first',
    ],
    borderColor: '#90CDF4',
    bgColor: '#EBF8FF',
    iconColor: '#4299E1',
  },
  {
    icon: Shield,
    title: 'Increased Cavities Risk',
    points: [
      'Pregnancy does not directly cause cavities',
      'Risk increases with sweet cravings',
      'Lower attention to oral care during nausea',
      'Acid exposure from morning sickness',
    ],
    borderColor: '#F6AD55',
    bgColor: '#FFFAF0',
    iconColor: '#ED8936',
  },
];

export default function CommonIssues() {
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
      id="common-issues"
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F0F7F4' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block text-sm font-medium text-[#5A9686] uppercase tracking-wider">
            What to Expect
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-3 text-3xl sm:text-4xl font-semibold text-gray-800"
            style={{ transitionDelay: '100ms' }}
          >
            Common Oral Changes During Pregnancy
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-4 text-gray-600"
            style={{ transitionDelay: '200ms' }}
          >
            These conditions are common but manageable. Knowing what to look for helps you 
            seek care when needed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {issues.map((issue, index) => (
            <div
              key={issue.title}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className="h-full bg-white rounded-2xl shadow-lg shadow-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Colored Top Border */}
                <div
                  className="h-1.5"
                  style={{ backgroundColor: issue.borderColor }}
                />

                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: issue.bgColor }}
                    >
                      <issue.icon
                        className="w-6 h-6"
                        style={{ color: issue.iconColor }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {issue.title}
                      </h3>
                      {issue.subtitle && (
                        <p className="text-sm text-gray-500 mt-0.5">
                          {issue.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {issue.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: issue.borderColor }}
                        />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-12 text-center"
          style={{ transitionDelay: '700ms' }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-md">
            <span className="text-2xl">👩‍⚕️</span>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Experiencing any of these symptoms?</span>{' '}
              Talk to your dentist or dental hygienist for personalized guidance.
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
