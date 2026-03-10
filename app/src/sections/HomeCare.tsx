import { useEffect, useRef } from 'react';
import { Check, Sparkles, Moon, Utensils } from 'lucide-react';

const dailyCareTips = [
  'Brush twice daily with fluoride toothpaste',
  'Clean between teeth every day with floss',
  'Use a soft toothbrush if gums are sensitive',
  'Try mild-flavored toothpaste if strong flavors trigger nausea',
  'Use fluoride or alcohol-free rinses if recommended',
];

const lifestyleTips = [
  'Limit frequent sugary snacks and drinks',
  'Choose water more often throughout the day',
  'Rinse after vomiting with water or baking soda solution',
  'Do not brush immediately after vomiting - wait 30 minutes',
  'Chew xylitol gum after meals if appropriate',
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
        {/* Header */}
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

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Daily Home Care */}
          <div
            className="animate-on-scroll opacity-0 -translate-x-6 transition-all duration-700"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#F0F7F4] to-white border border-[#A8D4C8]/30">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#7EB5A6] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Daily Home Care</h3>
                  <p className="text-sm text-gray-500">Your everyday routine</p>
                </div>
              </div>

              {/* Tips List */}
              <ul className="space-y-4">
                {dailyCareTips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/80 hover:bg-white transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#7EB5A6]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#5A9686]" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lifestyle Changes */}
          <div
            className="animate-on-scroll opacity-0 translate-x-6 transition-all duration-700"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#FDF2F4] to-white border border-[#FAD4D8]/50">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F4A5AE] flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Lifestyle Tips</h3>
                  <p className="text-sm text-gray-500">Smart choices for your smile</p>
                </div>
              </div>

              {/* Tips List */}
              <ul className="space-y-4">
                {lifestyleTips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/80 hover:bg-white transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F4A5AE]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#E07A87]" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Special Tip Box */}
        <div
          className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-10"
          style={{ transitionDelay: '500ms' }}
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#EBF8FF] to-[#F0F7F4] border border-[#90CDF4]/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Moon className="w-6 h-6 text-[#4299E1]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Special Tip for Morning Sickness
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you experience vomiting, rinse your mouth with water or a teaspoon of baking soda 
                  in a cup of water to neutralize acid. <span className="font-medium text-[#4299E1]">Wait 30 minutes before brushing</span> to avoid 
                  damaging softened enamel.
                </p>
              </div>
            </div>
          </div>
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
