import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { info } from './info';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after a delay
      setTimeout(() => setShowTooltip(true), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa obtener más información sobre los programas de Gateway Corporation. ¿Podrían ayudarme?"
    );
    const whatsappUrl = `https://wa.me/${info.whatsAppNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setShowTooltip(false);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
          <div className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 max-w-xs">
            <button
              onClick={closeTooltip}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
            <p className="text-sm">
              ¡Hola! 👋 ¿Tienes preguntas sobre nuestros programas de Gateway English? 
              Estamos aquí para ayudarte.
            </p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-600"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Ripple effect */}
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
      </button>
    </div>
  );
}