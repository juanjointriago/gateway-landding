// import { useState } from 'react';
import { X, Clock, DollarSign, Users, CheckCircle, MapPin, BookOpen, Award } from 'lucide-react';
import { Button } from './ui/button';

export function ProgramDetailsModal({ program, isOpen, onClose, onEnroll }:any) {
  if (!isOpen || !program) return null;

  const handleEnroll = () => {
    onEnroll(program.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header with image */}
        <div className="relative">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-3xl text-white mb-2">{program.title}</h2>
            <p className="text-xl text-gray-200">{program.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Details */}
            <div>
              <h3 className="text-xl mb-4 text-gateway-blue dark:text-gateway-blue-light">
                Detalles del Programa
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <DollarSign size={20} className="mr-3 text-gateway-blue dark:text-gateway-blue-light" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{program.price}</p>
                    {program.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">{program.originalPrice}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock size={20} className="mr-3 text-gateway-blue dark:text-gateway-blue-light" />
                  <p className="text-gray-700 dark:text-gray-300">{program.duration}</p>
                </div>
                
                <div className="flex items-center">
                  <Users size={20} className="mr-3 text-gateway-blue dark:text-gateway-blue-light" />
                  <p className="text-gray-700 dark:text-gray-300">{program.groupSize}</p>
                </div>
                
                <div className="flex items-center">
                  <BookOpen size={20} className="mr-3 text-gateway-blue dark:text-gateway-blue-light" />
                  <p className="text-gray-700 dark:text-gray-300">Nivel: {program.level}</p>
                </div>
                
                <div className="flex items-center">
                  <Award size={20} className="mr-3 text-gateway-blue dark:text-gateway-blue-light" />
                  <p className="text-gray-700 dark:text-gray-300">{program.certification}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-800 dark:text-gray-100">Horarios</h4>
                <p className="text-gray-600 dark:text-gray-300">{program.schedule}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-800 dark:text-gray-100">Metodología</h4>
                <p className="text-gray-600 dark:text-gray-300">{program.methodology}</p>
              </div>
            </div>

            {/* Right Column - Description & Features */}
            <div>
              <h3 className="text-xl mb-4 text-gateway-blue dark:text-gateway-blue-light">
                Descripción
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {program.detailedDescription}
              </p>

              <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-100">
                ¿Qué incluye este programa?
              </h4>
              <ul className="space-y-3 mb-6">
                {program.features.map((feature:any, index:any) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-100">Materiales incluidos</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{program.materials}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
            <Button
              onClick={handleEnroll}
              className="flex-1 bg-gateway-blue hover:bg-gateway-blue-dark text-white py-3 rounded-lg transition-all duration-200 border-0"
            >
              Inscribirse a este Programa
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gateway-blue text-gateway-blue hover:bg-gateway-accent dark:border-gateway-blue-light dark:text-gateway-blue-light dark:hover:bg-gray-700 py-3 rounded-lg transition-all duration-200"
            >
              Seguir Explorando
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}