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
    <footer id="footer" className="bg-[#2D3748] text-white">
      {/* References Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#7EB5A6] rounded-full"></span>
            References
          </h3>
          <ul className="space-y-4">
            <li className="text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-600">
              Boyd, L. D., & Mallonee, L. F. (2023). <em>Wilkins' clinical practice of the dental hygienist</em> (14th ed.). Jones & Bartlett Learning.
            </li>

            <li className="text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-600">
              Dragan, I. F., Veglia, V., Geisinger, M. L., & Alexander, D. C. (2018). Dental care as a safe and essential part of a healthy pregnancy. <em>Compendium of Continuing Education in Dentistry</em>, <em>39</em>(2), 86–92. https://pubmed.ncbi.nlm.nih.gov/29388782/
            </li>

            <li className="text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-600">
              Geisinger, M. L., Alexander, D. C., Dragan, I. F., & Mitchell, S. C. (2019). The dental team's role in maternal and child oral health during and after pregnancy. <em>Compendium of Continuing Education in Dentistry</em>, <em>40</em>(2), 90–97. https://pubmed.ncbi.nlm.nih.gov/30767548/
            </li>

            <li className="text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-600">
              Silk, H., Douglass, A. B., Douglass, J. M., & Silk, L. (2008). Oral health during pregnancy. <em>American Family Physician</em>, <em>77</em>(8), 1139–1144. https://pubmed.ncbi.nlm.nih.gov/18481562/
            </li>

            <li className="text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-600">
              Vera-Carpio, M. L., Carranza-Samanez, K. M., & Dulanto-Vargas, J. A. (2025). Myths about oral health and associated factors in pregnant women in a public hospital in Peru. <em>PubMed</em>, <em>23</em>, 123–134. https://doi.org/10.3290/j.ohpd.c_1845
            </li>

            <li className="text-gray-400 text-xs leading-relaxed pl-4 border-l border-gray-600">
              Yenen, Z., & Ataçağ, T. (2019). Oral care in pregnancy. <em>Journal of the Turkish German Gynecological Association</em>, <em>20</em>(4), 264–268. https://doi.org/10.4274/jtgga.galenos.2018.2018.0139
            </li>
          </ul>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, '#')}
              className="flex items-center gap-2 text-white font-semibold text-lg mb-4"
            >
              <Heart className="w-5 h-5 fill-[#F4A5AE] text-[#F4A5AE]" />
              <span>Smiles for Two: A Pregnancy Oral Health Guide</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              An educational resource designed to help expectant mothers understand 
              and maintain their oral health during pregnancy.
            </p>
            <div className="mt-4 space-y-1 text-sm text-gray-400 leading-relaxed">
              <p className="font-medium text-gray-300">Bergen Community College</p>
              <p>Dental Hygiene Program</p>
              <p>Professor Lisa Duddy, DHSc, RDH</p>
              <p>Clinical Coordinator</p>
              <a
                href="https://bergen.edu/dental/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#7EB5A6] hover:text-[#A8D4C8] transition-colors"
              >
                bergen.edu/dental/
              </a>
            </div>
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
              © {new Date().getFullYear()} Smiles for Two: A Pregnancy Oral Health Guide. Educational resource for expectant mothers.
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
