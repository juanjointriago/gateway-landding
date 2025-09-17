import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mockdata';

// Función para generar colores consistentes basados en el nombre
const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 
    'bg-yellow-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

// Función para extraer iniciales
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

// Componente Avatar con iniciales
const InitialsAvatar = ({ name, size = 'medium' }: { name: string; size?: 'small' | 'medium' | 'large' }) => {
  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);
  
  const sizeClasses = {
    small: 'w-12 h-12 text-sm',
    medium: 'w-16 h-16 text-lg',
    large: 'w-20 h-20 text-xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClass} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
      {initials}
    </div>
  );
};

export default function TestimonialsSectionInteractive() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating:any) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll" data-animation="fade-up">
          <h2 className="text-3xl md:text-4xl mb-4 text-gateway-blue dark:text-gateway-blue-light">
            Lo que Dicen Nuestras Familias
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce las experiencias reales de padres y estudiantes que han confiado en Gateway Corporation
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-12 animate-on-scroll-scale" data-animation="scale" data-delay="200">
          <Card className="border-0 shadow-xl max-w-4xl mx-auto overflow-hidden bg-white dark:bg-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="text-gateway-blue dark:text-gateway-blue-light mx-auto mb-6" size={48} />
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex items-center justify-center mb-4">
                  <InitialsAvatar 
                    name={testimonials[currentTestimonial].name} 
                    size="medium"
                  />
                  <div className="text-left ml-4">
                    <h4 className="text-lg text-gray-800 dark:text-gray-100">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gateway-blue dark:text-gateway-blue-light text-sm">
                      {testimonials[currentTestimonial].program}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gateway-blue dark:text-gateway-blue-light border border-gray-200 dark:border-gray-700 p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gateway-blue dark:text-gateway-blue-light border border-gray-200 dark:border-gray-700 p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? 'bg-gateway-blue dark:bg-gateway-blue-light scale-125'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-on-scroll" data-animation="fade-up" data-delay={index * 100}>
              <Card 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800 ${
                  index === currentTestimonial ? 'ring-2 ring-gateway-blue dark:ring-gateway-blue-light' : ''
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <InitialsAvatar 
                      name={testimonial.name} 
                      size="small"
                    />
                    <div className="ml-3">
                      <h4 className="text-sm text-gray-800 dark:text-gray-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gateway-blue dark:text-gateway-blue-light">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="animate-on-scroll mt-16 bg-gateway-accent dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700" data-animation="fade-up" data-delay="400">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl mb-4 text-gateway-blue dark:text-gateway-blue-light">
              Reconocimientos y Certificaciones
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nuestra excelencia está avalada por importantes organizaciones educativas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 dark:opacity-40">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gateway-blue dark:text-gateway-blue-light text-xs font-bold">ISO</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Certificación ISO 9001</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gateway-blue dark:text-gateway-blue-light text-xs font-bold">MED</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ministerio de Educación</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gateway-blue dark:text-gateway-blue-light text-xs font-bold">CAM</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cambridge Assessment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gateway-blue dark:text-gateway-blue-light text-xs font-bold">2024</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Premio Excelencia 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}