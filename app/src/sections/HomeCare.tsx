import { useEffect, useRef } from 'react';
import { Check, Sparkles, Moon, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CareSection {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconBg: string;
  cardBg: string;
  border: string;
  checkBg: string;
  checkIcon: string;
  animationClass: string;
  intro: string | null;
  items: string[];
}

const careSections: CareSection[] = [
  {
    icon: Sparkles,
    title: 'Daily Oral Hygiene',
    subtitle: 'Your everyday routine',
    iconBg: 'bg-[#7EB5A6]',
    cardBg: 'from-[#F0F7F4]',
    border: 'border-[#A8D4C8]/30',
    checkBg: 'bg-[#7EB5A6]/20',
    checkIcon: 'text-[#5A9686]',
    animationClass: 'opacity-0 -translate-x-6 transition-all duration-700',
    intro: null,
    items: [
      'Brush twice daily with fluoride toothpaste',
      'Use floss or interdental cleaners daily',
      'Replace toothbrush every 3–4 months',
      'Use a tongue scraper and/or alcohol-free mouthrinse to reduce oral bacteria',
      'Drink fluoridated water when available and use fluoride products such as gels, trays, mouthrinses, and dentifrices',
    ],
  },
  {
    icon: Utensils,
    title: 'Healthy Lifestyle Habits',
    subtitle: 'Smart choices for your smile',
    iconBg: 'bg-[#F4A5AE]',
    cardBg: 'from-[#FDF2F4]',
    border: 'border-[#FAD4D8]/50',
    checkBg: 'bg-[#F4A5AE]/20',
    checkIcon: 'text-[#E07A87]',
    animationClass: 'opacity-0 translate-y-6 transition-all duration-700',
    intro: null,
    items: [
      'Maintain a balanced diet including protein, fruits, vegetables, whole grains, and low-fat foods',
      'Limit frequent snacking and cariogenic foods, like carbohydrates and sugar, to reduce the risk of cavities',
      'Chew xylitol gum or rinse with water after sugary snacks or drinks',
      'Ensure adequate intake of calcium, phosphorus, iron, and vitamin D',
      'Avoid nicotine and alcohol, which can negatively affect both maternal and fetal health',
    ],
  },
  {
    icon: Moon,
    title: 'Managing Morning Sickness',
    subtitle: 'Protecting your enamel',
    iconBg: 'bg-[#4299E1]',
    cardBg: 'from-[#EBF8FF]',
    border: 'border-[#90CDF4]/30',
    checkBg: 'bg-[#90CDF4]/20',
    checkIcon: 'text-[#4299E1]',
    animationClass: 'opacity-0 translate-x-6 transition-all duration-700',
    intro: 'Vomiting increases oral acidity, which can lead to enamel erosion. Take these steps to protect your teeth:',
    items: [
      'Rinse with fluoridated water or a baking soda solution (1 cup water + 1 tsp baking soda) directly after vomiting',
      'Wait 30 minutes before brushing to prevent enamel abrasion',
    ],
  },
];

export default function HomeCare() {
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
      id="home-care"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block text-sm font-medium text-[#7EB5A6] uppercase tracking-wider">
            Daily Habits That Make a Difference
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-3 text-3xl sm:text-4xl font-semibold text-gray-800"
            style={{ transitionDelay: '100ms' }}
          >
            Taking Care of Your Oral Health at Home
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-4 text-gray-600"
            style={{ transitionDelay: '200ms' }}
          >
            Simple daily habits can help protect your teeth and gums throughout your pregnancy
            and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {careSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className={`animate-on-scroll ${section.animationClass}`}
                style={{ transitionDelay: `${300 + sectionIndex * 100}ms` }}
              >
                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${section.cardBg} to-white border ${section.border}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                      <p className="text-sm text-gray-500">{section.subtitle}</p>
                    </div>
                  </div>

                  {section.intro !== null && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 pb-5 border-b border-gray-100">
                      {section.intro}
                    </p>
                  )}

                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/80 hover:bg-white transition-colors"
                      >
                        <div className={`w-5 h-5 rounded-full ${section.checkBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${section.checkIcon}`} />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
