import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallBack';
import { EnrollmentModal } from './EnrollmentModal';

const heroSlides = [
  {
    id: 1,
    title: "Gateway Corporation",
    subtitle: "Tu puerta al éxito en inglés",
    description: "Descubre la excelencia educativa en Gateway English Ecuador. Programas académicos de primer nivel para primaria, secundaria y adultos.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    cta: "Conocer Programas",
    stats: [
      { icon: Users, value: "2000+", label: "Estudiantes" },
      { icon: Award, value: "15+", label: "Años de experiencia" },
      { icon: BookOpen, value: "20+", label: "Programas" }
    ]
  },
  {
    id: 2,
    title: "Gateway English",
    subtitle: "Educación primaria de excelencia",
    description: "Gateway Academic ofrece programas especializados de inglés para estudiantes de primaria con metodología innovadora y profesores certificados.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    cta: "Ver Programas Primaria",
    stats: [
      { icon: BookOpen, value: "6", label: "Niveles" },
      { icon: Users, value: "95%", label: "Satisfacción" },
      { icon: Award, value: "100%", label: "Certificación" }
    ]
  },
  {
    id: 3,
    title: "Gateway Academic",
    subtitle: "Secundaria que transforma vidas",
    description: "Programas Gateway English para secundaria que preparan a los estudiantes para un futuro global con certificaciones internacionales.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=800&fit=crop",
    cta: "Explorar Secundaria",
    stats: [
      { icon: Award, value: "Cambridge", label: "Certificación" },
      { icon: Users, value: "500+", label: "Graduados" },
      { icon: BookOpen, value: "A2-C1", label: "Niveles" }
    ]
  }
];

export default function HeroSliderInteractive() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1200);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1200);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  const goToSlide = (index:any) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1200);
      setCurrentSlide(index);
    }
  };

  const handleEnrollClick = () => {
    const program = {
      id: 1,
      title: heroSlides[currentSlide].title,
      description: heroSlides[currentSlide].description,
      price: "Desde $150/mes",
      duration: "6 meses",
      image: heroSlides[currentSlide].image
    };
    setSelectedProgram(program as any);
    setIsEnrollmentModalOpen(true);
  };

  const handleProgramsClick = () => {
    document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 slider-image ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover slider-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 slider-overlay"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div key={currentSlide} className="slider-content">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 slide-title">
              <span className="block text-white">
                {heroSlides[currentSlide].title}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gateway-accent mt-2">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed slide-description">
              {heroSlides[currentSlide].description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 slide-stats">
              {heroSlides[currentSlide].stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-8 h-8 text-gateway-accent mr-2" />
                      <span className="text-3xl lg:text-4xl font-bold text-white">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 slide-buttons">
              <Button
                size="lg"
                onClick={handleEnrollClick}
                className="bg-gateway-blue hover:bg-gateway-blue-dark text-white border-0 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2" size={20} />
                Inscríbete Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleProgramsClick}
                className="border-2 border-white text-white hover:bg-white hover:text-gateway-blue dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gateway-blue px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm bg-transparent"
              >
                <Play className="mr-2" size={20} />
                Ver Programas
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce slide-indicator">
              <button
                onClick={handleProgramsClick}
                className="text-white hover:text-gateway-accent transition-colors duration-300"
                aria-label="Scroll to programs"
              >
                <ArrowRight className="w-8 h-8 transform rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed nav-button nav-button-left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed nav-button nav-button-right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 disabled:cursor-not-allowed slide-indicator-dot ${
                index === currentSlide
                  ? 'bg-white w-8 h-3 shadow-lg'
                  : 'bg-white/50 hover:bg-white/70 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-1 bg-white/20">
            <div 
              className="h-full bg-gateway-blue transition-all duration-8000 ease-linear progress-bar"
              style={{
                width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
              }}
            />
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