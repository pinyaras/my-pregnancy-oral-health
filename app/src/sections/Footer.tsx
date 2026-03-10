import { Heart } from 'lucide-react';

const quickLinks = [
  { href: '#why-it-matters', label: 'Why It Matters' },
  { href: '#common-issues', label: 'Common Issues' },
  { href: '#home-care', label: 'Home Care' },
  { href: '#dental-visits', label: 'Dental Visits' },
  { href: '#myths-facts', label: 'Myths & Facts' },
];

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2D3748] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, '#')}
              className="flex items-center gap-2 text-white font-semibold text-lg mb-4"
            >
              <Heart className="w-5 h-5 fill-[#F4A5AE] text-[#F4A5AE]" />
              <span>Healthy Mouth, Healthy Pregnancy</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              An educational resource designed to help expectant mothers understand 
              and maintain their oral health during pregnancy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-[#7EB5A6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white mb-4">Important Note</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              This information is for educational purposes only and does not replace 
              professional dental or medical advice. Always consult with your dentist 
              and healthcare provider for personalized guidance.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Healthy Mouth, Healthy Pregnancy. Educational resource for expectant mothers.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-[#F4A5AE] text-[#F4A5AE]" /> for moms-to-be
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
