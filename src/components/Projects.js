import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaChartBar, FaBriefcase } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiTableau } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const getIcon = (tech) => {
    const iconMap = {
      'Python': <FaPython />,
      'React': <FaReact />,
      'Power BI': <FaBriefcase />,
      'Machine Learning': <SiScikitlearn />,
      'TensorFlow': <SiTensorflow />,
      'SQL': <FaDatabase />,
      'Data Visualization': <SiTableau />,
      'Data Analysis': <FaChartBar />
    };
    return iconMap[tech] || null;
  };

  const projects = [
    {
      title: 'Plants Disease Detection Using Machine Learning',
      period: '2022 - 2023',
      category: 'ml',
      description: 'Developed a machine learning model to identify and classify plant diseases, contributing to agricultural technology solutions.',
      technologies: ['Python', 'Machine Learning', 'Computer Vision', 'Data Analysis'],
      highlights: [
        'Implemented image classification algorithms',
        'Achieved high accuracy in disease detection',
        'Applied data preprocessing and feature engineering techniques'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'E-commerce Sales Data Analysis & Interactive Dashboard',
      period: '2023',
      category: 'analytics',
      description: 'Created comprehensive Power BI dashboard for analyzing e-commerce sales trends and customer behavior patterns.',
      technologies: ['Power BI', 'Data Analysis', 'Data Visualization', 'SQL'],
      highlights: [
        'Designed interactive visualizations for business insights',
        'Analyzed sales trends and customer segmentation',
        'Provided actionable recommendations based on data findings'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Time Series Analysis',
      period: '2023',
      category: 'analytics',
      description: 'Conducted in-depth time series analysis on stock prices, cryptocurrency trends, and weather patterns.',
      technologies: ['Python', 'R', 'Statistical Analysis', 'Data Visualization'],
      highlights: [
        'Applied ARIMA and forecasting models',
        'Identified seasonal patterns and trends',
        'Developed predictive models for future trend analysis'
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Customer Churn Analysis',
      period: '2023',
      category: 'ml',
      description: 'Analyzed customer behavior to predict churn and identify retention strategies for business optimization.',
      technologies: ['Python', 'Machine Learning', 'Data Mining', 'Predictive Analytics'],
      highlights: [
        'Built classification models to predict customer churn',
        'Identified key factors influencing customer retention',
        'Provided strategic recommendations to reduce churn rate'
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Sales Trend Forecasting',
      period: '2023',
      category: 'analytics',
      description: 'Developed forecasting models to predict future sales trends and support business planning decisions.',
      technologies: ['Python', 'R', 'Time Series Analysis', 'Machine Learning'],
      highlights: [
        'Implemented multiple forecasting algorithms',
        'Compared model performance and accuracy',
        'Created visualizations for stakeholder presentations'
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'analytics', label: 'Data Analytics' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Academic & Personal Projects</h2>
          <p className="section-subtitle">
            Showcasing data science and software engineering projects
          </p>
        </motion.div>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-card-gradient" style={{ background: project.gradient }}></div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {getIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="project-highlights">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>
                      <span className="highlight-bullet">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
