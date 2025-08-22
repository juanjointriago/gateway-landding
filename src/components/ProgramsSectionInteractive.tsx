import { useState } from 'react';
import { Clock, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { programs } from '../data/mockdata';
import { ProgramDetailsModal } from './ProgramDetailsModal';
import { EnrollmentModal } from './EnrollmentModal';

export default function ProgramsSectionInteractive() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

  const handleProgramDetails = (program:any) => {
    setSelectedProgram(program);
    setIsDetailsModalOpen(true);
  };

  const handleProgramEnroll = (programId:any) => {
    const program = programs.find(p => p.id === programId);
    if (program) {
      setSelectedProgram(program as any);
      setIsDetailsModalOpen(false);
      setIsEnrollmentModalOpen(true);
    }
  };

  const handleDirectEnroll = (program:any) => {
    setSelectedProgram(program);
    setIsEnrollmentModalOpen(true);
  };

  const handleContactScroll = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="programs" className="py-16 bg-gateway-accent dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll" data-animation="fade-up">
            <h2 className="text-3xl md:text-4xl mb-4 text-gateway-blue dark:text-gateway-blue-light">
              Nuestros Programas Educativos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ofrecemos programas educativos integrales diseñados para cada etapa del desarrollo académico de tu hijo
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <div key={program.id} className="animate-on-scroll-scale" data-animation="scale" data-delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800">
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`px-3 py-1 text-white border-0 ${
                        index === 0 ? 'bg-green-500' : 
                        index === 1 ? 'bg-blue-500' : 
                        'bg-orange-500'
                      }`}>
                        {index === 0 ? 'Primaria' : index === 1 ? 'Secundaria' : 'Especial'}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-800 px-2 py-1 text-sm border-0">
                        Disponible
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 text-gray-800 dark:text-gray-100">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {program.description}
                    </p>

                    {/* Program Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <DollarSign size={16} className="mr-2 text-gateway-blue dark:text-gateway-blue-light" />
                        <span>{program.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock size={16} className="mr-2 text-gateway-blue dark:text-gateway-blue-light" />
                        <span>{program.duration}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm mb-3 text-gray-800 dark:text-gray-100">
                        Características destacadas:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.slice(0, 2).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle size={14} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {program.features.length > 2 && (
                          <li className="text-sm text-gateway-blue dark:text-gateway-blue-light cursor-pointer hover:underline"
                              onClick={() => handleProgramDetails(program)}>
                            + {program.features.length - 2} características más...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleProgramDetails(program)}
                        variant="outline"
                        className="w-full border-gateway-blue text-gateway-blue hover:bg-gateway-accent dark:border-gateway-blue-light dark:text-gateway-blue-light dark:hover:bg-gray-700 py-3 rounded-lg transition-all duration-200 group"
                      >
                        Ver Detalles Completos
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                      
                      <Button 
                        onClick={() => handleDirectEnroll(program)}
                        className="w-full bg-gateway-blue hover:bg-gateway-blue-dark text-white py-3 rounded-lg transition-all duration-200 border-0"
                      >
                        Inscribirse Ahora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="animate-on-scroll" data-animation="fade-up" data-delay="300">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl text-center mb-8 text-gateway-blue dark:text-gateway-blue-light">
                ¿Por qué elegir Gateway Corporation?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gateway-secondary dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-gateway-blue dark:text-gateway-blue-light" size={28} />
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800 dark:text-gray-100">Clases Reducidas</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Atención personalizada con máximo 20 estudiantes por clase</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gateway-secondary dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-gateway-blue dark:text-gateway-blue-light" size={28} />
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800 dark:text-gray-100">Metodología Innovadora</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Técnicas de enseñanza modernas y tecnología avanzada</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gateway-secondary dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-gateway-blue dark:text-gateway-blue-light" size={28} />
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800 dark:text-gray-100">Horarios Flexibles</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Adaptamos nuestros horarios a las necesidades de las familias</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gateway-secondary dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="text-gateway-blue dark:text-gateway-blue-light" size={28} />
                  </div>
                  <h4 className="text-lg mb-2 text-gray-800 dark:text-gray-100">Precios Accesibles</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Educación de calidad con opciones de pago flexibles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-on-scroll-scale mt-12 text-center" data-animation="scale" data-delay="500">
            <div className="bg-gradient-to-r from-gateway-blue to-gateway-blue-light dark:from-gateway-blue-light dark:to-gateway-blue rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl mb-4">
                ¿Tienes dudas sobre cuál programa elegir?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-100">
                Nuestros asesores educativos están disponibles para ayudarte a encontrar el programa perfecto para tu hijo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-gateway-blue hover:bg-gray-100 hover:text-gateway-blue-dark dark:bg-gray-100 dark:text-gateway-blue dark:hover:bg-white px-8 py-3 rounded-lg transition-all duration-200 border-0 shadow-md"
                  onClick={handleContactScroll}
                >
                  Solicitar Asesoría Gratuita
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gateway-blue dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gateway-blue px-8 py-3 rounded-lg transition-all duration-200 bg-transparent"
                >
                  Agendar Visita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProgramDetailsModal
        program={selectedProgram}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        onEnroll={handleProgramEnroll}
      />

      <EnrollmentModal
        program={selectedProgram}
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
    </>
  );
}