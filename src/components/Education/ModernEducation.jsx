import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { EDUCATIONS } from '../../config/info';

function ModernEducation() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>

          {EDUCATIONS.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                {index % 2 === 0 && <div className="md:block hidden"></div>}
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-500 rounded-full ring-4 ring-dark-900 ring-offset-4 ring-offset-dark-900 hidden md:block"></div>
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-dark-900/50 backdrop-blur-sm rounded-lg p-6 border border-dark-800 hover:border-primary-500/50 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full mb-4">
                    {edu.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-primary-400 mb-3">
                    {edu.education}
                  </p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {edu.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        {index % 2 !== 0 && <span className="text-primary-400 mr-2">▹</span>}
                        <span className="text-gray-400 text-sm">{desc}</span>
                        {index % 2 === 0 && <span className="text-primary-400 ml-2">▹</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModernEducation;