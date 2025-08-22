import React from 'react';
import { ExternalLink, BookOpen, Users, Calendar, FileText, Award, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface SystemFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function StudentSystemSectionInteractive() {
  const handleSystemAccess = () => {
    window.open('http://gateway-english.com/', '_blank');
  };

  const handleContactScroll = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const systemFeatures: SystemFeature[] = [
    {
      icon: BookOpen,
      title: "Calificaciones",
      description: "Consulta tus notas y evaluaciones en tiempo real"
    },
    {
      icon: Calendar,
      title: "Horarios",
      description: "Revisa tu horario de clases y actividades"
    },
    {
      icon: FileText,
      title: "Tareas",
      description: "Accede a tus asignaciones y entregas"
    },
    {
      icon: Users,
      title: "Comunicación",
      description: "Contacta con profesores y compañeros"
    },
    {
      icon: Award,
      title: "Certificados",
      description: "Descarga tus certificados y constancias"
    },
    {
      icon: BarChart3,
      title: "Progreso",
      description: "Visualiza tu progreso académico"
    }
  ];

  return (
    <section id="student-system" className="py-16 bg-gradient-to-br from-gateway-blue to-gateway-blue-dark dark:from-gateway-blue-light dark:to-gateway-blue transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll" data-animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sistema de Estudiantes
          </h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
            Accede a tu portal estudiantil para consultar calificaciones, horarios, tareas y más.
            Tu educación al alcance de un clic.
          </p>
          <Button
            onClick={handleSystemAccess}
            className="bg-white text-gateway-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <ExternalLink className="w-5 h-5" />
            Acceder al Sistema
          </Button>
        </div>

        {/* System Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {systemFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll-scale" data-delay={index * 100}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="text-center animate-on-scroll" data-animation="fade-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas Ayuda?
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Si es tu primera vez usando el sistema o tienes problemas para acceder, 
              nuestro equipo de soporte está aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContactScroll}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gateway-blue transition-all duration-300"
              >
                Contactar Soporte
              </Button>
              <Button
                onClick={() => window.open('#', '_blank')}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gateway-blue transition-all duration-300"
              >
                Guía de Uso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}