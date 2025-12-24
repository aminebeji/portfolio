import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MatrixRain from './MatrixRain';

function TypewriterText({ text, className = '', delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText('');
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay, text]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

function ModernAbout() {
  const { t } = useTranslation();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'GoLang',
    'Next.js',
    'Docker',
    'Kubernetes',
    'GraphQL',
    'MongoDB',
    'PostgreSQL',
    'AWS'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
      <MatrixRain />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {showName && (
                  <>
                    {t('about.intro').split('Amine')[0]}
                    <TypewriterText
                      text="Amine"
                      className="text-primary-400 font-bold text-xl"
                      delay={1000}
                    />
                    {t('about.intro').split('Amine')[1]}
                  </>
                )}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('about.description2')}
              </p>
              <p className="text-gray-400 mb-4">
                {t('about.description3')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-primary-400">▹</span>
                    <span className="text-gray-300 font-mono text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-dark-900 rounded-lg overflow-hidden">
                  <div className="w-full h-80 relative">
                    <img
                      src={`${process.env.PUBLIC_URL}/photos/photoBeji.jpg`}
                      alt="Amine Beji"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {showName ? (
                        <TypewriterText
                          text="Amine Beji"
                          className="text-primary-400"
                          delay={500}
                        />
                      ) : (
                        <span className="opacity-0">Amine Beji</span>
                      )}
                    </h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a
                        href="https://github.com/aminebeji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/amine-beji-0542501b5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ModernAbout;