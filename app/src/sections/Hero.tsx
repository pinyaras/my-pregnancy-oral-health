import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleScrollToContent = () => {
    const element = document.querySelector('#why-it-matters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDF6E3 0%, #FAFBFC 50%, #F0F7F4 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#A8D4C8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FAD4D8]/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#7EB5A6]/40 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#F4A5AE]/50 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Tagline */}
            <div
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100"
              style={{ transitionDelay: '100ms' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#5A9686] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#F4A5AE]" />
                Your Guide to a Healthy Smile During Pregnancy
              </span>
            </div>

            {/* Title */}
            <h1
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight"
              style={{ transitionDelay: '200ms' }}
            >
              Pregnancy &{' '}
              <span className="text-[#7EB5A6]">Oral Health</span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ transitionDelay: '300ms' }}
            >
              Pregnancy can affect your gums, mouth, and daily oral care habits. 
              This guide explains what changes are common, what is safe, and how 
              to protect both mother and baby.
            </p>

            {/* CTA Button */}
            <div
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-8"
              style={{ transitionDelay: '400ms' }}
            >
              <button
                onClick={handleScrollToContent}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#7EB5A6] hover:bg-[#5A9686] text-white font-medium rounded-full shadow-lg shadow-[#7EB5A6]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 mt-10 flex flex-wrap justify-center lg:justify-start gap-6"
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-[#7EB5A6] rounded-full" />
                Evidence-Based
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-[#F4A5AE] rounded-full" />
                Patient-Friendly
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-[#90CDF4] rounded-full" />
                Easy to Share
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div
            className="animate-on-scroll opacity-0 scale-95 transition-all duration-1000 order-1 lg:order-2"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8D4C8]/30 to-[#FAD4D8]/30 rounded-full scale-90 blur-xl" />
              
              <img
                src="/hero-illustration.jpg"
                alt="Pregnant woman with healthy smile"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-gray-200/50"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F0F7F4] rounded-full flex items-center justify-center">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Healthy Smile</p>
                  <p className="text-sm font-semibold text-[#5A9686]">For Two</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animation visibility */}
      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </section>
  );
}
