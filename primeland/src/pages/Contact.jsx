import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1>CONTACT US</h1>
        <p>Home / Contact Us</p>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have any questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

          <div className="info-boxes">
            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 8833 80089</p>
              <p>+91 9087 23459</p>
            </div>
            <div className="info-box">
              <h4>📧 Email</h4>
              <p>primelandproperties@gmail.com</p>
            </div>
            <div className="info-box">
              <h4>📍 Address</h4>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
            <div className="info-box">
              <h4>🕒 Business Hours</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          <div className="social-contacts">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" title="Facebook">f</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="LinkedIn">in</a>
              <a href="#" title="YouTube">▶️</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&h=500&fit=crop" 
            alt="Map placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
