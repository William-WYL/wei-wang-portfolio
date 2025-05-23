import { useState, useEffect, type JSX } from 'react';
import { FaHtml5, FaJava, FaJsSquare, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  direction: 'left' | 'right' | 'top' | 'bottom';
}

interface OtherTech {
  name: string;
}

const Skills = () => {
  const [visible, setVisible] = useState(false);

  // Skill data with types
  const skills: Skill[] = [
    { name: 'React', level: 90, icon: <FaReact className="text-blue-400" size={40} />, direction: 'left' },
    { name: 'TypeScript', level: 85, icon: <BiLogoTypescript className="text-blue-600" size={40} />, direction: 'top' },
    { name: 'JavaScript', level: 95, icon: <FaJsSquare className="text-yellow-400" size={40} />, direction: 'right' },
    { name: 'HTML & CSS', level: 90, icon: <FaHtml5 className="text-orange-500" size={40} />, direction: 'bottom' },
    { name: 'Java', level: 90, icon: <FaJava className="text-red-500" size={40} />, direction: 'right' },
    { name: 'Python', level: 85, icon: <FaPython className="text-blue-500" size={40} />, direction: 'bottom' },
    { name: 'PHP', level: 80, icon: <FaPhp className="text-white-600" size={40} />, direction: 'left' },
    { name: 'MySql', level: 85, icon: <GrMysql className="text-blue-600" size={40} />, direction: 'top' },
  ];

  const otherTechnologies: OtherTech[] = [
    { name: 'RESTful API' },
    { name: 'PostgreSQL' },
    { name: 'Bootstrap' },
    { name: 'Tailwind' },
    { name: 'React Redux' },
    { name: 'Zustand' },
    { name: 'Figma' },
    { name: 'Ruby' },
    { name: 'Vue' },
    { name: 'Axios' },
    { name: 'Git' },
  ];

  // Split skills into two rows
  const firstRow = skills.slice(0, 4);
  const secondRow = skills.slice(4);

  // Get transform classes based on direction
  const getTransformClasses = (direction: string, visible: boolean) => {
    const baseTransform = visible ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : 'opacity-0 scale-95';

    switch (direction) {
      case 'left':
        return visible ? baseTransform : `${baseTransform} -translate-x-20`;
      case 'right':
        return visible ? baseTransform : `${baseTransform} translate-x-20`;
      case 'top':
        return visible ? baseTransform : `${baseTransform} -translate-y-20`;
      case 'bottom':
        return visible ? baseTransform : `${baseTransform} translate-y-20`;
      default:
        return baseTransform;
    }
  };

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        // Trigger animation when element is 20% into viewport
        if (position.top < window.innerHeight * 0.8 && position.bottom >= 0) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with fade-in animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've worked with a variety of technologies in the web development world.
          </p>
        </div>

        {/* First row of skills */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRow.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-700 ease-out transform ${getTransformClasses(skill.direction, visible)}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 hover:rotate-1">
                  <div className="flex flex-col items-center mb-6">
                    <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-600 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900">
                      <div className="transition-transform duration-300 hover:scale-110 hover:rotate-12">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{
                        width: visible ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index * 150) + 400}ms`,
                        boxShadow: visible ? '0 0 8px rgba(139, 92, 246, 0.5)' : 'none'
                      }}
                    ></div>
                  </div>

                  <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <span className={`transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${(index * 150) + 600}ms` }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row of skills */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-700 ease-out transform ${getTransformClasses(skill.direction, visible)}`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 hover:-rotate-1">
                  <div className="flex flex-col items-center mb-6">
                    <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-600 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900">
                      <div className="transition-transform duration-300 hover:scale-110 hover:-rotate-12">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{
                        width: visible ? `${skill.level}%` : '0%',
                        transitionDelay: `${((index + 4) * 150) + 400}ms`,
                        boxShadow: visible ? '0 0 8px rgba(139, 92, 246, 0.5)' : 'none'
                      }}
                    ></div>
                  </div>

                  <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <span className={`transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${((index + 4) * 150) + 600}ms` }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other technologies section with staggered animation */}
        <div className={`mt-24 text-center transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-semibold mb-8 text-purple-600 dark:text-purple-400">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-800 dark:text-gray-200 text-sm font-medium transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                  }`}
                style={{ transitionDelay: `${1400 + index * 75}ms` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;