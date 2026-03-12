import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ahmed.yasir3000@gmail.com',
      link: 'mailto:ahmed.yasir3000@gmail.com',
      color: '#ec4899'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+39 351 204 2072',
      link: 'tel:+393512042072',
      color: '#14b8a6'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'yasir-aziz-a99041235',
      link: 'https://linkedin.com/in/yasir-aziz-a99041235',
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Yasir-Aziz000',
      link: 'https://github.com/Yasir-Aziz000',
      color: '#333'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Verona, Italy',
      link: null,
      color: '#6366f1'
    }
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro">
            I'm always open to discussing new opportunities, collaborations, or interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index} 
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="contact-icon" style={{ color: info.color }}>
                {info.icon}
              </div>
              <h3 className="contact-label">{info.label}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="contact-value"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {info.value}
                  {info.link.startsWith('http') && <FaExternalLinkAlt className="external-icon" />}
                </a>
              ) : (
                <p className="contact-value">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="cta-title">Let's Build Something Amazing Together!</h3>
          <p className="cta-description">
            Whether you're looking for a data scientist, software engineer, or a collaborative partner 
            for your next project, I'd love to hear from you.
          </p>
          <div className="cta-buttons">
            <a 
              href="mailto:ahmed.yasir3000@gmail.com"
              className="btn btn-primary"
            >
              <FaEnvelope /> Send Me an Email
            </a>
            <a 
              href="https://linkedin.com/in/yasir-aziz-a99041235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
