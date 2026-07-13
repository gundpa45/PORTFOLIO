'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
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
      <div className="container">
        <div className={styles.contactLayout}>

          <div className={styles.contactInfo}>
            <motion.p 
              className="section-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.p>

            <motion.h2 
              className={styles.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's work<br />together.
            </motion.h2>

            <motion.p 
              className={styles.contactDesc}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Have a project in mind or just want to say hello?<br />
              My inbox is always open.
            </motion.p>

            <motion.a 
              href="mailto:vishnurathod0105@gmail.com" 
              className={styles.emailLink}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              vishnurathod0105@gmail.com
            </motion.a>
          </div>

          <motion.form 
            className={styles.contactForm} 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="John Doe"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="john@example.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className={`${styles.statusMsg} ${styles.success}`}>Message sent successfully.</p>
            )}
            {status === 'error' && (
              <p className={`${styles.statusMsg} ${styles.error}`}>{errorMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
