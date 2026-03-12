import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaRocket, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: "Master's in Data Science",
      color: '#6366f1'
    },
    {
      icon: <FaBriefcase />,
      title: 'Experience',
      description: 'Software Engineer',
      color: '#ec4899'
    },
    {
      icon: <FaRocket />,
      title: 'Focus',
      description: 'Data-Driven Solutions',
      color: '#14b8a6'
    },
    {
      icon: <FaChartLine />,
      title: 'Passion',
      description: 'Analytics & Innovation',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-intro">
              I'm a dedicated Data Science Master's student at the <strong>University of Verona</strong> with a strong
              foundation in Computer Systems Engineering. My journey combines technical excellence with
              a passion for transforming data into actionable insights.
            </p>
            <p>
              With professional experience as an Associate Software Engineer at InfoTech Private Limited,
              I've worked on enterprise projects including <strong>Habib Bank Limited</strong>, <strong>National Foods Limited</strong>,
              and <strong>EBM Biscuits</strong>. I bring a unique blend of software development expertise, analytical
              thinking, and a data-driven approach to problem-solving.
            </p>
            <p>
              I'm passionate about leveraging technology to drive business value, whether through building
              robust applications, analyzing complex datasets, or creating intelligent systems that learn
              and adapt. My goal is to contribute to innovative projects that make a real-world impact.
            </p>
          </motion.div>
          
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                className="highlight-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="highlight-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
