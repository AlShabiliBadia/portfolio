import { Menu, X } from './Icons';

function Header({ activeSection, mobileMenuOpen, setMobileMenuOpen }) {
  const navLinks = ['about', 'skills', 'projects', 'experience'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">Badiea Al-Shabili</div>
          
          <nav className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 ${
                  activeSection === link 
                    ? 'text-blue-500' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
          >
            <X size={24} />
          </button>
          
          <nav className="flex flex-col gap-8 items-center">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`text-2xl capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-4 py-2 ${
                  activeSection === link 
                    ? 'text-blue-500' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
