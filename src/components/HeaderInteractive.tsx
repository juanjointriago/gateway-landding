import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { programs } from '../data/mockdata';
import { EnrollmentModal } from './EnrollmentModal';

export default function HeaderInteractive() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Programas', href: '#programs' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Promociones', href: '#promotions' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Sistema', href: '#student-system' },
    { name: 'Contacto', href: '#contact' }
  ];

  const handleEnrollClick = () => {
    setSelectedProgram(programs[0] as any); // Default to first program
    setIsEnrollmentModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        {/* Desktop CTA Button */}
        <Button 
          onClick={handleEnrollClick}
          className="hidden md:block bg-gateway-blue hover:bg-gateway-blue-dark text-white px-6 py-2 rounded-lg transition-all duration-200"
        >
          Inscríbete Ahora
        </Button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gateway-blue dark:hover:text-gateway-blue-light transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleEnrollClick();
                }}
                className="bg-gateway-blue hover:bg-gateway-blue-dark text-white px-6 py-2 rounded-lg transition-all duration-200"
              >
                Inscríbete Ahora
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Modal */}
      <EnrollmentModal
        program={selectedProgram}
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
    </>
  );
}