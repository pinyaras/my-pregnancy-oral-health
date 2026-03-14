import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { href: '#why-it-matters', label: 'Why It Matters' },
  { href: '#common-issues', label: 'Common Issues' },
  { href: '#home-care', label: 'Home Care' },
  { href: '#dental-visits', label: 'Dental Visits' },
  { href: '#myths-facts', label: 'Myths & Facts' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      { threshold: 0.35, rootMargin: '-20% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveHref(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-lg shadow-gray-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#5A9686] font-semibold text-lg"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveHref(navLinks[0].href);
            }}
          >
            <Heart className="w-5 h-5 fill-[#F4A5AE] text-[#F4A5AE]" />
            <span className="hidden lg:inline">Smiles for Two: A Pregnancy Oral Health Guide</span>
            <span className="hidden sm:inline lg:hidden">Smiles for Two</span>
            <span className="sm:hidden">Pregnancy & Oral Health</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white shadow-lg shadow-gray-200/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeHref === link.href
                    ? 'bg-[#5A9686] text-white shadow-sm shadow-[#5A9686]/30'
                    : 'text-gray-600 hover:text-[#5A9686] hover:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-white/80 border border-white text-gray-600 hover:text-[#5A9686] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pt-2 p-3 rounded-2xl bg-white/90 border border-white shadow-xl shadow-gray-200/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors text-center ${
                  activeHref === link.href
                    ? 'bg-[#5A9686] text-white'
                    : 'text-gray-600 hover:text-[#5A9686] hover:bg-[#F0F7F4]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
