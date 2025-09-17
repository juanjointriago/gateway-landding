import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { info } from './info';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
  color: string;
}

export default function ContactSectionInteractive() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: [info.address, `${info.city}, ${info.country}`],
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: [info.contactPhone],
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Mail,
      title: 'Correo',
      details: [info.contactEmail],
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: [info.operatingHoursDetails.weekdays, info.operatingHoursDetails.saturdays],
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const programs: string[] = [
    'Programa de Primaria',
    'Programa de Secundaria',
    'Programa para Adultos',
    'Programa Empresarial',
    'Preparación TOEFL',
    'Preparación IELTS',
    'Conversación Avanzada'
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll" data-animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ¿Listo para comenzar tu viaje en el aprendizaje del inglés? Contáctanos y te ayudaremos 
            a encontrar el programa perfecto para ti.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll-scale" data-delay={index * 100}>
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 ${info.color} mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600 dark:text-gray-300">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="Tu nombre completo"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="tu@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+593 99 123 4567"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="program">Programa de Interés</Label>
                      <select
                        id="program"
                        value={formData.program}
                        onChange={(e) => handleInputChange('program', e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gateway-blue focus:border-transparent"
                      >
                        <option value="">Selecciona un programa</option>
                        {programs.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      placeholder="Cuéntanos sobre tus objetivos de aprendizaje, horarios preferidos o cualquier pregunta que tengas..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gateway-blue hover:bg-gateway-blue-dark text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Options */}
          <div className="animate-on-scroll-right">
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gateway-blue" />
                    Contacto Inmediato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    ¿Necesitas una respuesta rápida? Contáctanos directamente:
                  </p>
                  <div className="space-y-3">
                    <Button
                      onClick={() => window.open('tel:+59321234567', '_self')}
                      className="w-full justify-start text-left bg-green-600 hover:bg-green-700"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar Ahora: {info.contactPhone}
                    </Button>
                    <Button
                      onClick={() => window.open('https://wa.me/593987654321', '_blank')}
                      className="w-full justify-start text-left bg-green-500 hover:bg-green-600"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      WhatsApp: {info.contactPhone}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Visit Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gateway-blue" />
                    Visítanos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Te esperamos en nuestras modernas instalaciones:
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {info.address}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.city}, {info.country}
                    </p>
                  </div>
                  <Button
                    onClick={() => window.open(`${info.googleMapLink}`, '_blank')}
                    variant="outline"
                    className="w-full"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver en Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gateway-blue" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Lunes - Viernes:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{info.operatingHoursDetails.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Sábados:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{info.operatingHoursDetails.saturdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Domingos:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{info.operatingHoursDetails.sundays}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}