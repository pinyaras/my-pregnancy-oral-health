import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Droplets, Shield, ArrowRight } from 'lucide-react';

const takeaways = [
  {
    number: '01',
    icon: Heart,
    title: 'Pregnancy changes your gums',
    description: 'Hormonal shifts affect oral health needs, making your gums more sensitive to plaque.',
    color: '#F4A5AE',
    bgColor: '#FDF2F4',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Daily care matters',
    description: 'Plaque control and fluoride protect your teeth throughout pregnancy and beyond.',
    color: '#7EB5A6',
    bgColor: '#F0F7F4',
  },
  {
    number: '03',
    icon: Droplets,
    title: 'Vomiting affects enamel',
    description: 'Rinse with water first, then wait 30 minutes before brushing to protect your enamel.',
    color: '#90CDF4',
    bgColor: '#EBF8FF',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Dental care is safe',
    description: 'Regular visits protect both mom and baby. Don\'t skip your appointments!',
    color: '#B794F6',
    bgColor: '#FAF5FF',
  },
];

function Counter({ target, isVisible }: { target: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const numTarget = parseInt(target);
    const duration = 1000;
    const steps = 30;
    const increment = numTarget / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count.toString().padStart(2, '0')}</span>;
}

export default function KeyTakeaways() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="key-takeaways"
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7EB5A6 0%, #5A9686 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/10 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-white/80 uppercase tracking-wider transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Remember These Key Points
          </span>
          <h2
            className={`mt-3 text-3xl sm:text-4xl font-semibold text-white transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            What to Remember
          </h2>
          <p
            className={`mt-4 text-white/80 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Keep these key points in mind for a healthy pregnancy smile.
          </p>
        </div>

        {/* Takeaway Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {takeaways.map((item, index) => (
            <div
              key={item.number}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Number */}
                <div className="text-4xl font-bold text-gray-200 mb-4">
                  <Counter target={item.number} isVisible={isVisible} />
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <span className="text-4xl">🦷</span>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg">
                Smiles for Two: A Pregnancy Oral Health Guide
              </p>
              <p className="text-white/80 text-sm mt-1">
                Taking care of your oral health is one of the best gifts you can give yourself and your baby.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 flex justify-end transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#footer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/30 text-sm font-medium text-white hover:bg-white/20 transition-colors"
          >
            Next: References & Footer
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
