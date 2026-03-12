import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaNodeJs, FaGitAlt, FaDocker,
  FaHtml5, FaChartBar 
} from 'react-icons/fa';
import { 
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, 
  SiPostgresql, SiDjango, SiFlask, SiTableau 
} from 'react-icons/si';
import { FaBriefcase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = skillsRef.current; // Store ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array is fine here

  const getSkillIcon = (skill) => {
    const iconMap = {
      'Python': <FaPython />,
      'React.js': <FaReact />,
      'Node.js': <FaNodeJs />,
      'Git': <FaGitAlt />,
      'Docker': <FaDocker />,
      'HTML/CSS/JavaScript': <FaHtml5 />,
      'TensorFlow': <SiTensorflow />,
      'Scikit-learn': <SiScikitlearn />,
      'Pandas': <SiPandas />,
      'NumPy': <SiNumpy />,
      'MongoDB': <SiMongodb />,
      'SQL & MS-SQL': <SiPostgresql />,
      'Tableau': <SiTableau />,
      'Django': <SiDjango />,
      'Flask': <SiFlask />,
      'Machine Learning': <FaChartBar />,
      'Data Visualization': <SiTableau />,
      'Power BI': <FaBriefcase />,
      'Excel (Advanced)': <FaBriefcase />
    };
    return iconMap[skill] || null;
  };

  const skillCategories = [
    {
      title: 'Data & Analytics',
      skills: [
        'Data Analysis',
        'Machine Learning',
        'Data Visualization',
        'Power BI',
        'Statistical Analysis',
        'Time Series Analysis'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Programming & Tools',
      skills: [
        'Python',
        'R Programming',
        'SQL & MS-SQL',
        'MongoDB',
        'MATLAB',
        'HTML/CSS/JavaScript'
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Software Engineering',
      skills: [
        'React.js',
        'Web Development',
        'System Design',
        'Algorithm Design',
        'Technical Documentation',
        'Git'
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Business & Soft Skills',
      skills: [
        'Project Coordination',
        'Requirements Analysis',
        'Problem Solving',
        'Team Collaboration',
        'Communication',
        'Analytical Thinking'
      ],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Microsoft Office Suite',
      skills: [
        'Excel (Advanced)',
        'PowerPoint',
        'Word',
        'Power Apps',
        'Power Query',
        'Outlook'
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for data science and software development
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="category-gradient" style={{ background: category.gradient }}></div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getSkillIcon(skill)}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;