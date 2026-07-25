import { useState } from 'react';
import { CheckCircle2, Edit3, FileText, Mail, MapPin, Phone, Send, ShieldCheck, User, XCircle } from 'lucide-react';
import './Contact.css';

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
    <div className="contact-page">
      {/* Hero + Form Section */}
      <div className="contact-hero-grid">
        {/* Hero Section */}
        <div className="contact-hero-panel">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=900&fit=crop"
            alt="Property"
            className="contact-hero-bg"
          />
          <div className="contact-hero-overlay"></div>

          <div className="contact-hero-content">
            <h2 className="contact-hero-title">Get in touch with our experts.</h2>
            <p className="contact-hero-text">
              Whether you're looking to invest, sell, or find your dream home, our team at
              Prime Land Properties is ready to assist.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <MapPin size={24} className="contact-info-icon" />
                <div>
                  <h6 className="contact-info-label">OFFICE LOCATION</h6>
                  <p className="contact-info-val">742 Azure Way, Suite 100, San Francisco, CA</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Phone size={24} className="contact-info-icon" />
                <div>
                  <h6 className="contact-info-label">PHONE SUPPORT</h6>
                  <p className="contact-info-val">+1 (555) 012-3456</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Mail size={24} className="contact-info-icon" />
                <div>
                  <h6 className="contact-info-label">EMAIL US</h6>
                  <p className="contact-info-val">inquiry@primeland.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="contact-form-panel">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="icon-circle">
                <Send size={28} color="#0185eb" strokeWidth={2.2} />
              </div>
              <div>
                <h2>We're Here to Help!</h2>
                <p>Have a question or need assistance? Send us a message.</p>
              </div>
            </div>

            {successMessage && (
              <div className="alert alert-success" role="alert">
                <CheckCircle2 size={18} className="alert-icon" />{successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                <XCircle size={18} className="alert-icon" />{errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label-custom">FIRST NAME</label>
                  <div className="input-with-icon">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      name="firstName"
                      className="form-control-custom"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label-custom">LAST NAME</label>
                  <div className="input-with-icon">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      name="lastName"
                      className="form-control-custom"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label-custom">EMAIL ADDRESS</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    className="form-control-custom"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label-custom">MESSAGE TYPE</label>
                <div className="input-with-icon">
                  <FileText size={18} className="input-icon" />
                  <select
                    name="messageType"
                    className="form-select-custom"
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

              <div className="form-group">
                <label className="form-label-custom">YOUR MESSAGE</label>
                <div className="input-with-icon">
                  <Edit3 size={18} className="input-icon" />
                  <textarea
                    name="message"
                    className="textarea-custom"
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
                className="contact-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </form>

            <div className="safe-note">
              <ShieldCheck size={18} />
              <span>Your information is safe with us. We never share your details.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="map-container">
          <div className="map-frame-wrapper">
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
          <div className="map-link-text">
            VIEW FULL MAP
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;