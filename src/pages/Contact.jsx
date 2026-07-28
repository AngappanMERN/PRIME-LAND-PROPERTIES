import { useState } from 'react';
import { CheckCircle2, Edit3, FileText, Mail, MapPin, Phone, Send, ShieldCheck, User, XCircle } from 'lucide-react';

function Contact() {
  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    messageType: 'Investment Inquiry',
    message: ''
  });

  // UI state for loading, success, and error messages
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Get Web3Forms access key from environment variables
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // Validate email format using regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setErrorMessage('First Name is required.');
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage('Last Name is required.');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email Address is required.');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required.');
      return false;
    }
    return true;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  // Handle form submission with Web3Forms integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    if (!accessKey) {
      setErrorMessage('Contact form is not properly configured. Please try again later.');
      console.error('VITE_WEB3FORMS_ACCESS_KEY is not set in environment variables');
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        access_key: accessKey,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        message_type: formData.messageType,
        message: formData.message
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          messageType: 'Investment Inquiry',
          message: ''
        });
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-[#f8fafc] text-[#2a2a2a]">
      {/* Hero + Form Section */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 min-h-[650px] max-lg:min-h-0">
        {/* Hero Section */}
        <div className="relative flex items-center text-white min-h-[650px] max-lg:min-h-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=900&fit=crop"
            alt="Property"
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a]/85 to-[#0f172a]/65 z-20"></div>

          <div className="relative z-30 p-16 max-md:p-8 max-w-[600px]">
            <h2 className="font-serif text-[2.5rem] max-sm:text-[1.85rem] font-bold mb-5 leading-[1.2]">
              Get in touch with our experts.
            </h2>
            <p className="text-[#e2e8f0] text-[1.05rem] mb-10 leading-relaxed">
              Whether you're looking to invest, sell, or find your dream home, our team at
              Prime Land Properties is ready to assist.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <MapPin size={24} className="text-[#00b4ff] shrink-0 mt-1" />
                <div>
                  <h6 className="text-[0.75rem] font-bold text-[#00b4ff] tracking-[1.5px] mb-1 uppercase font-sans">
                    OFFICE LOCATION
                  </h6>
                  <p className="m-0 text-base text-white font-sans">Mettukadai Road, Nasiyanur, Erode, Tamil Nadu - 638107</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone size={24} className="text-[#00b4ff] shrink-0 mt-1" />
                <div>
                  <h6 className="text-[0.75rem] font-bold text-[#00b4ff] tracking-[1.5px] mb-1 uppercase font-sans">
                    PHONE SUPPORT
                  </h6>
                  <p className="m-0 text-base text-white font-sans">+91 9087 123459</p>
                  <p className="m-0 text-base text-white font-sans">+91 7339 033733</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail size={24} className="text-[#00b4ff] shrink-0 mt-1" />
                <div>
                  <h6 className="text-[0.75rem] font-bold text-[#00b4ff] tracking-[1.5px] mb-1 uppercase font-sans">
                    EMAIL US
                  </h6>
                  <p className="m-0 text-base text-white font-sans">primelandproperties2@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="flex items-center justify-center p-12 max-md:p-8 max-sm:p-6 bg-white">
          <div className="w-full max-w-[580px] bg-white p-10 max-sm:p-6 rounded-[1.25rem] shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-[#e2e8f0]">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#edf3fb] flex items-center justify-center shrink-0">
                <Send size={28} color="#0185eb" strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="font-serif text-[1.65rem] font-bold m-0 mb-1 text-[#0f172a]">We're Here to Help!</h2>
                <p className="m-0 text-[#64748b] text-[0.95rem]">Have a question or need assistance? Send us a message.</p>
              </div>
            </div>

            {successMessage && (
              <div className="bg-[#dcfce7] text-[#166534] border border-[#bbf7d0] p-[0.85rem_1.25rem] rounded-[0.75rem] mb-6 flex items-center text-[0.95rem] font-medium" role="alert">
                <CheckCircle2 size={18} className="mr-3 shrink-0" />{successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="bg-[#fee2e2] text-[#991b1b] border border-[#fecaca] p-[0.85rem_1.25rem] rounded-[0.75rem] mb-6 flex items-center text-[0.95rem] font-medium" role="alert">
                <XCircle size={18} className="mr-3 shrink-0" />{errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mb-5">
                <div className="mb-5">
                  <label className="block text-[0.75rem] font-bold text-[#64748b] tracking-[1px] mb-2 uppercase">FIRST NAME</label>
                  <div className="relative flex items-center">
                    <User size={18} className="absolute left-5 text-primary pointer-events-none z-10" />
                    <input
                      type="text"
                      name="firstName"
                      className="w-full pl-[3.25rem] pr-4 py-[0.85rem] border-[1.5px] border-[#cbd5e1] rounded-[0.75rem] bg-white text-[#0f172a] text-[0.95rem] outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/15"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-[0.75rem] font-bold text-[#64748b] tracking-[1px] mb-2 uppercase">LAST NAME</label>
                  <div className="relative flex items-center">
                    <User size={18} className="absolute left-5 text-primary pointer-events-none z-10" />
                    <input
                      type="text"
                      name="lastName"
                      className="w-full pl-[3.25rem] pr-4 py-[0.85rem] border-[1.5px] border-[#cbd5e1] rounded-[0.75rem] bg-white text-[#0f172a] text-[0.95rem] outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/15"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[0.75rem] font-bold text-[#64748b] tracking-[1px] mb-2 uppercase">EMAIL ADDRESS</label>
                <div className="relative flex items-center">
                  <Mail size={18} className="absolute left-5 text-primary pointer-events-none z-10" />
                  <input
                    type="email"
                    name="email"
                    className="w-full pl-[3.25rem] pr-4 py-[0.85rem] border-[1.5px] border-[#cbd5e1] rounded-[0.75rem] bg-white text-[#0f172a] text-[0.95rem] outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/15"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[0.75rem] font-bold text-[#64748b] tracking-[1px] mb-2 uppercase">MESSAGE TYPE</label>
                <div className="relative flex items-center">
                  <FileText size={18} className="absolute left-5 text-primary pointer-events-none z-10" />
                  <select
                    name="messageType"
                    className="w-full pl-[3.25rem] pr-4 py-[0.85rem] border-[1.5px] border-[#cbd5e1] rounded-[0.75rem] bg-white text-[#0f172a] text-[0.95rem] outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/15"
                    value={formData.messageType}
                    onChange={handleChange}
                  >
                    <option>Investment Inquiry</option>
                    <option>Property Inquiry</option>
                    <option>Sell Property</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[0.75rem] font-bold text-[#64748b] tracking-[1px] mb-2 uppercase">YOUR MESSAGE</label>
                <div className="relative flex items-center">
                  <Edit3 size={18} className="absolute left-5 text-primary pointer-events-none z-10" />
                  <textarea
                    name="message"
                    className="w-full pl-[3.25rem] pr-4 pt-4 pb-[0.85rem] border-[1.5px] border-[#cbd5e1] rounded-[0.75rem] bg-white text-[#0f172a] text-[0.95rem] outline-none min-h-[140px] resize-y transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/15"
                    placeholder="Tell us more about your needs..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-[54px] rounded-[0.75rem] bg-brand-pink text-white border-none font-bold text-base tracking-[1px] cursor-pointer mt-2 transition-all duration-200 hover:bg-[#d90758] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(245,10,104,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-6 text-[#64748b] text-[0.875rem]">
              <ShieldCheck size={18} />
              <span>Your information is safe with us. We never share your details.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 px-6 max-sm:px-4 bg-[#f1f5f9]">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-[1rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e2e8f0]">
            <iframe
              title="Prime Land Properties Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0510009782815!2d77.6417924!3d11.330983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96dd3fb22dbd1%3A0x679392f7677955b7!2sPRIMELAND%20PROPERTIES!5e0!3m2!1sen!2sin!4v1784553562880!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="text-right text-[#64748b] font-bold text-[0.85rem] tracking-[1px] mt-4 cursor-pointer transition-colors duration-200 hover:text-primary">
            VIEW FULL MAP
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;