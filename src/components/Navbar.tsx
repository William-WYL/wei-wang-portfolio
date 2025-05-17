import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleTheme?: () => void;
  theme?: 'light' | 'dark' | 'purple';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme = 'light' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    if (toggleTheme) {
      toggleTheme();
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certification', href: '#certification' },
    { name: 'Contact', href: '#contact' },
  ];

  const baseNavClasses = "fixed w-full z-50 transition-all duration-500";
  const scrolledClasses = scrolled
    ? "bg-white shadow-md dark:bg-gray-900 dark:text-white py-2"
    : "bg-transparent py-6";
  const purpleClasses = theme === 'purple' ? "bg-purple-900 text-white" : "";

  return (
    <nav className={`${baseNavClasses} ${scrolledClasses} ${theme === 'purple' && scrolled ? purpleClasses : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#"
              className={`font-bold text-xl md:text-2xl ${theme === 'purple' ? 'text-white' : 'text-gray-900 dark:text-white'}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="text-purple-600 dark:text-purple-400">Port</span>folio
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  ${theme === 'purple' ? 'text-white hover:text-purple-300' : 'text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400'} 
                  transition-colors duration-300 font-medium
                `}
              >
                {item.name}
              </a>
            ))}

            {mounted && (
              <button
                onClick={handleToggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : theme === 'purple' ? (
                  <Moon className="h-5 w-5 text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-900" />
                )}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {mounted && (
              <button
                onClick={handleToggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 mr-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : theme === 'purple' ? (
                  <Moon className="h-5 w-5 text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-900" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${theme === 'purple' ? 'text-white' : 'text-gray-900 dark:text-white'}`}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'purple' ? 'bg-purple-900' : 'bg-white dark:bg-gray-900'}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                block px-3 py-2 rounded-md text-base font-medium
                ${theme === 'purple'
                  ? 'text-white hover:bg-purple-800'
                  : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'}
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;