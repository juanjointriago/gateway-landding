import { useState } from 'react';
import { Calendar, Tag, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { promotions, programs } from '../data/mockdata';
import { EnrollmentModal } from './EnrollmentModal';

export default function PromotionsSectionInteractive() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const formatDate = (dateString:any) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handlePromotionClick = (promotionId:any) => {
    // Mapear promoción a programa correspondiente
    const programMapping = {
      1: 1, // Promoción matrícula -> Programa Primaria
      2: 2, // Promoción hermanos -> Programa Secundaria
      3: 3  // Promoción verano -> Programa Verano
    };

    const programId = programMapping[promotionId];
    const program = programs.find(p => p.id === programId);
    
    if (program) {
      setSelectedProgram(program as any);
      setIsEnrollmentModalOpen(true);
    }
  };

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setIsSubscribed(true);
      console.log('Subscribed:', email);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  };

  return (
    <>
      <section id="promotions" className="py-16 bg-gateway-accent dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll" data-animation="fade-up">
            <h2 className="text-3xl md:text-4xl mb-4 text-gateway-blue dark:text-gateway-blue-light">
              Promociones Especiales
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Aprovecha nuestras ofertas exclusivas y descuentos especiales para la educación de tu hijo
            </p>
          </div>

          {/* Promotions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promotion, index) => (
              <div key={promotion.id} className="animate-on-scroll-scale" data-animation="scale" data-delay={index * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800">
                  <div className="relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white px-3 py-1 text-lg border-0">
                        {promotion.discount}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gateway-blue dark:text-gateway-blue-light text-sm">
                        <Tag size={16} className="mr-1" />
                        <span>Promoción Especial</span>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                        index === 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        index === 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        Limitado
                      </div>
                    </div>

                    <h3 className="text-xl mb-3 text-gray-800 dark:text-gray-100">
                      {promotion.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {promotion.description}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <Calendar size={16} className="mr-2" />
                      <span>Válido hasta: {formatDate(promotion.validUntil)}</span>
                    </div>

                    <Button 
                      onClick={() => handlePromotionClick(promotion.id)}
                      className="w-full bg-gateway-blue hover:bg-gateway-blue-dark text-white py-3 rounded-lg transition-all duration-200 group border-0"
                    >
                      Aprovechar Promoción
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action Banner */}
          <div className="animate-on-scroll mt-16 bg-gradient-to-r from-gateway-blue to-gateway-blue-light dark:from-gateway-blue-light dark:to-gateway-blue rounded-2xl p-8 md:p-12 text-white text-center" data-animation="fade-up" data-delay="400">
            <h3 className="text-2xl md:text-3xl mb-4">
              ¿No quieres perderte nuestras promociones?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-100">
              Suscríbete a nuestro boletín y recibe información sobre descuentos exclusivos, eventos especiales y noticias importantes.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white"
                disabled={isSubscribed}
              />
              <Button 
                type="submit"
                disabled={isSubscribed}
                className="bg-white text-gateway-blue hover:bg-gray-100 hover:text-gateway-blue-dark dark:bg-gray-100 dark:text-gateway-blue dark:hover:bg-white px-6 py-3 rounded-lg transition-all duration-200 disabled:bg-green-500 disabled:text-white border-0 shadow-md"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle size={16} className="mr-2" />
                    ¡Suscrito!
                  </>
                ) : (
                  'Suscribirse'
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        program={selectedProgram}
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
    </>
  );
}