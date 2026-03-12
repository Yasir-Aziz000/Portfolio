import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University of Verona',
      location: 'Verona, Italy',
      period: 'October 2024 - Present',
      description: 'Pursuing advanced studies in data science, focusing on machine learning, statistical analysis, and data-driven decision making.',
      highlights: [
        'Advanced Machine Learning & AI',
        'Statistical Modeling & Analysis',
        'Big Data Technologies',
        'Data Visualization & Communication'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Systems Engineering',
      institution: 'Dawood University of Engineering and Technology',
      location: 'Karachi, Pakistan',
      period: 'November 2019 - September 2023',
      description: 'Comprehensive education in computer systems, software engineering, and network design with hands-on project experience.',
      highlights: [
        'Computer Architecture & System Design',
        'Software Engineering Principles',
        'Algorithm Design & Analysis',
        'Network Design & Implementation'
      ]
    }
  ];

  const awards = [
    {
      title: 'Merit Scholarship',
      organization: 'Sindh Educational Endowment Fund',
      year: '2021',
      description: 'Awarded for academic excellence and outstanding performance'
    }
  ];

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="education-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="education-marker"></div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-meta">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-location">{edu.location}</span>
                </p>
                <p className="education-description">{edu.description}</p>
                <div className="education-highlights">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <span key={highlightIndex} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="awards-section">
          <h3 className="subsection-title">Honors & Awards</h3>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-icon">🏆</div>
                <h4 className="award-title">{award.title}</h4>
                <p className="award-organization">{award.organization}</p>
                <p className="award-year">{award.year}</p>
                <p className="award-description">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
