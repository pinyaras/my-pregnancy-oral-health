import { useState, useEffect, useRef } from 'react';
import { RotateCcw, Info, Check } from 'lucide-react';

const mythsAndFacts = [
  {
    myth: 'Pregnancy weakens teeth.',
    fact: 'Pregnancy itself does not directly weaken teeth. Plaque buildup, diet changes, nausea, vomiting, and oral care habits increase risk. In the study, 77.6% agreed with this myth.',
  },
  {
    myth: 'The baby takes calcium from the mother\'s teeth.',
    fact: 'The baby does not pull calcium from the mother\'s teeth. Teeth do not lose calcium this way. In the study, 65.9% agreed with this myth.',
  },
  {
    myth: 'Bleeding gums during pregnancy are normal and do not need dental care.',
    fact: 'Bleeding gums are common during pregnancy, but they still need attention because they can be a sign of gingivitis. Most women in the study disagreed with ignoring bleeding gums.',
  },
  {
    myth: 'You should not brush your teeth during pregnancy.',
    fact: 'You should keep brushing during pregnancy. Good oral hygiene is important for both mother and baby. Most women in the study disagreed with this myth.',
  },
  {
    myth: 'If you have dental pain during pregnancy, avoid the dentist.',
    fact: 'Dental pain should not be ignored during pregnancy. Dental visits are important, and most women in the study disagreed with avoiding the dentist.',
  },
  {
    myth: 'No dental treatment should be done during pregnancy.',
    fact: 'Dental care during pregnancy is generally important and should not automatically be avoided. Most women in the study disagreed with avoiding all treatment.',
  },
  {
    myth: 'You should wait a few days after childbirth before brushing again.',
    fact: 'Normal oral hygiene should continue. In the study, 84.4% disagreed with waiting to brush after childbirth.',
  },
  {
    myth: 'Eating spicy food during pregnancy will affect the baby\'s oral health.',
    fact: 'This is a common belief, but it is a myth. In the study, 50.8% agreed with it.',
  },
  {
    myth: 'Pregnancy causes more cavities and gums to bleed.',
    fact: 'Pregnancy does not magically create cavities, but pregnancy-related changes can raise risk if oral hygiene and diet are not managed. In the study, 44.4% agreed about bleeding gums and 42.6% agreed about tooth decay.',
  },
  {
    myth: 'Dental x-rays during pregnancy will harm the baby.',
    fact: 'This was a very common fear in the study, with 48.2% agreeing, and it was listed as a major myth.',
  },
  {
    myth: 'Dental anesthesia during pregnancy will affect the baby.',
    fact: 'This was also a common myth in the study, with 33.6% agreeing and many others unsure.',
  },
  {
    myth: 'Dental medications during pregnancy will weaken the baby.',
    fact: 'This was another frequent myth, with 48.7% agreeing.',
  },
  {
    myth: 'Oral health during pregnancy does not affect the baby\'s health.',
    fact: 'Maternal oral health does matter. Many women in the study rejected this myth, supporting the importance of oral health for both mother and baby.',
  },
  {
    myth: 'Baby teeth are not important because they fall out anyway.',
    fact: 'Baby teeth still matter and need care. Most women in the study disagreed with this myth.',
  },
];

function FlipCard({ myth, fact, index }: { myth: string; fact: string; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`perspective-1000 h-64 cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front - Myth */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #FDF2F4 0%, #FFF5F5 100%)',
            border: '2px solid #FAD4D8',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#F4A5AE] text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Myth
            </span>
            <RotateCcw className="w-4 h-4 text-[#E07A87]" />
          </div>
          <p className="text-gray-800 font-medium leading-relaxed flex-1">{myth}</p>
          <p className="text-xs text-[#E07A87] mt-4 flex items-center gap-1">
            <span>Click to reveal the fact</span>
          </p>
        </div>

        {/* Back - Fact */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col rotate-y-180"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #F0F7F4 0%, #F5FAF8 100%)',
            border: '2px solid #A8D4C8',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#7EB5A6] text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Fact
            </span>
            <Check className="w-4 h-4 text-[#5A9686]" />
          </div>
          <p className="text-gray-700 leading-relaxed flex-1">{fact}</p>
          <p className="text-xs text-[#5A9686] mt-4 flex items-center gap-1">
            <span>Click to see the myth again</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MythsVsFacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="myths-facts"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-[#7EB5A6] uppercase tracking-wider transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Separating Truth from Fiction
          </span>
          <h2
            className={`mt-3 text-3xl sm:text-4xl font-semibold text-gray-800 transition-all duration-700 delay-100 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Myths vs Facts
          </h2>
          <p
            className={`mt-4 text-gray-600 transition-all duration-700 delay-200 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Click each card to reveal study-based facts behind common pregnancy oral health myths.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mythsAndFacts.map((item, index) => (
            <FlipCard
              key={index}
              myth={item.myth}
              fact={item.fact}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#F0F7F4] rounded-2xl">
            <Info className="w-5 h-5 text-[#5A9686]" />
            <span className="text-gray-700">
              <span className="font-medium">Remember:</span> Myths are common, so ask your dentist or dental hygienist when you are unsure.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
