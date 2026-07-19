import { useState } from 'react';
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
    // Check if all fields are filled
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
    // Validate email format
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
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  // Handle form submission with Web3Forms integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    // Check if access key is configured
    if (!accessKey) {
      setErrorMessage('Contact form is not properly configured. Please try again later.');
      console.error('VITE_WEB3FORMS_ACCESS_KEY is not set in environment variables');
      return;
    }

    // Set loading state and update button text
    setIsLoading(true);

    try {
      // Prepare the payload for Web3Forms
      const payload = {
        access_key: accessKey,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        message_type: formData.messageType,
        message: formData.message
      };

      // Send the form data to Web3Forms using Fetch API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // Parse the response
      const result = await response.json();

      // Handle the response from Web3Forms
      if (result.success) {
        // Success: Clear the form and show success message
        setSuccessMessage('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          messageType: 'Investment Inquiry',
          message: ''
        });
        // Automatically hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
        // Error: Show error message from Web3Forms
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Form submission error:', error);
      setErrorMessage('An error occurred while sending your message. Please try again later.');
    } finally {
      // Always reset loading state
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Section with Hero and Form */}
      <section className="contact-section">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=900&fit=crop" 
            alt="Property" 
            className="hero-image"
          />
          <div className="hero-content">
            <h2>Get in touch with our experts.</h2>
            <p class="text-white"> Whether you're looking to invest, sell, or find your dream home, our team at Prime Land Properties is ready to assist.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <h4>OFFICE LOCATION</h4>
                  <p>742 Azure Way, Suite 100, San Francisco, CA</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <div>
                  <h4>PHONE SUPPORT</h4>
                  <p>+1 (555) 012-3456</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <h4>EMAIL US</h4>
                  <p>inquiry@primeland.com</p>
                </div>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" className="social-icon">🌐</a>
              <a href="#" className="social-icon">🔗</a>
              <a href="#" className="social-icon">✱</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <p>Fill out the form below and our representative will reach out within 24 hours.</p>
          
          {/* Success Message - Green notification */}
          {successMessage && (
            <div style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              backgroundColor: '#d4edda',
              color: '#155724',
              border: '1px solid #c3e6cb',
              borderRadius: '4px',
              fontSize: '0.95rem'
            }}>
              ✓ {successMessage}
            </div>
          )}

          {/* Error Message - Red notification */}
          {errorMessage && (
            <div style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              border: '1px solid #f5c6cb',
              borderRadius: '4px',
              fontSize: '0.95rem'
            }}>
              ✕ {errorMessage}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>LAST NAME</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>MESSAGE TYPE</label>
              <select
                name="messageType"
                value={formData.messageType}
                onChange={handleChange}
              >
                <option>Investment Inquiry</option>
                <option>Property Inquiry</option>
                <option>Sell Property</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>YOUR MESSAGE</label>
              <textarea
                name="message"
                placeholder="Tell us more about your needs..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
            >
              {isLoading ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Prime Land Properties Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1234567890123!2d-122.42!3d37.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s742%20Azure%20Way%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="map-footer">VIEW FULL MAP</div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
