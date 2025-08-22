import { useState } from 'react';
import { X, User, Mail, Phone, Calendar, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function EnrollmentModal({ program, isOpen, onClose }:any) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    birthDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Enrollment data:', { program, formData });
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        parentName: '',
        studentName: '',
        email: '',
        phone: '',
        birthDate: '',
        message: ''
      });
      onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-8 shadow-2xl text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl mb-4 text-gray-800 dark:text-gray-100">
            ¡Solicitud Enviada!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hemos recibido tu solicitud de inscripción para {program?.title}. 
            Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Esta ventana se cerrará automáticamente...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600">
          <div>
            <h2 className="text-2xl text-gray-800 dark:text-gray-100">
              Inscripción - {program?.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Completa el formulario para iniciar el proceso de inscripción
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Program Summary */}
        {program && (
          <div className="p-6 bg-gray-50 dark:bg-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-100">{program.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{program.price} • {program.duration}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Parent Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User size={16} className="inline mr-2" />
                Nombre del Padre/Madre
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gateway-blue focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User size={16} className="inline mr-2" />
                Nombre del Estudiante
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gateway-blue focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
                placeholder="Nombre del estudiante"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail size={16} className="inline mr-2" />
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gateway-blue focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Phone size={16} className="inline mr-2" />
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gateway-blue focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
                placeholder="+593 9X XXX XXXX"
              />
            </div>

            {/* Birth Date */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Calendar size={16} className="inline mr-2" />
                Fecha de Nacimiento del Estudiante
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gateway-blue focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <MessageSquare size={16} className="inline mr-2" />
                Mensaje Adicional (Opcional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gateway-blue focus:border-transparent dark:bg-gray-700 dark:text-gray-100 transition-colors resize-none"
                placeholder="¿Tienes alguna pregunta específica o necesidad especial que debamos conocer?"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Al enviar este formulario, aceptas que Gateway Corporation se ponga en contacto contigo 
              para proporcionarte información sobre nuestros programas educativos. Respetamos tu privacidad 
              y no compartiremos tus datos con terceros.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              className="flex-1 bg-gateway-blue hover:bg-gateway-blue-dark text-white py-3 rounded-lg transition-all duration-200 border-0"
            >
              Enviar Solicitud de Inscripción
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gateway-blue text-gateway-blue hover:bg-gateway-accent dark:border-gateway-blue-light dark:text-gateway-blue-light dark:hover:bg-gray-700 py-3 rounded-lg transition-all duration-200"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}