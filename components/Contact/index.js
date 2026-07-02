'use client';

import { useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/vishnurathod0105@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
      setErrorMessage("Something went wrong. Please try again later.");
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        
        <div className="contact-info">
          <h2 className="title" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            GET IN <span style={{ color: 'var(--accent-color)' }}>TOUCH</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem', maxWidth: '400px' }}>
            Have a project in mind? Let's build something amazing together. My inbox is always open.
          </p>
          <a href="mailto:vishnurathod0105@gmail.com" style={{ fontSize: '1.2rem', fontWeight: 600, borderBottom: '2px solid var(--accent-color)', paddingBottom: '5px' }}>
            vishnurathod0105@gmail.com
          </a>
        </div>

        <form className={`${styles.contactForm} glass-panel`} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea 
              name="message" 
              placeholder="Your Message..." 
              required 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={styles.formInput}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '1rem', border: 'none', cursor: 'pointer' }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && <p className={`${styles.status} ${styles.success}`} style={{ marginTop: '1rem' }}>Message sent successfully!</p>}
          {status === 'error' && <p className={`${styles.status} ${styles.error}`} style={{ marginTop: '1rem' }}>{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}
