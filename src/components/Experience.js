import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'InfoTech Private Limited',
      location: 'Karachi, Pakistan',
      period: 'November 2023 - September 2024',
      responsibilities: [
        'Developed and maintained software solutions for major enterprise clients including Habib Bank Limited, National Foods Limited, and EBM Biscuits',
        'Collaborated with cross-functional teams to deliver high-quality technical solutions',
        'Participated in full software development lifecycle from requirements gathering to deployment',
        'Ensured code quality and best practices across all project deliverables'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Tech Hunt',
      location: 'Karachi, Pakistan',
      period: 'September 2023 - October 2023',
      responsibilities: [
        'Designed and developed responsive, user-friendly web interfaces',
        'Implemented modern frontend solutions using React.js framework',
        'Ensured cross-browser compatibility and optimal performance',
        'Stayed current with latest web development trends and technologies'
      ]
    },
    {
      title: 'Business Development Executive',
      company: 'Tech Hunt',
      location: 'Karachi, Pakistan',
      period: 'January 2023 - August 2023',
      responsibilities: [
        'Identified and pursued new business opportunities in the technology sector',
        'Collaborated with technical teams to align solutions with client needs',
        'Developed strong communication and stakeholder management skills',
        'Contributed to strategic planning and business growth initiatives'
      ]
    }
  ];

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
