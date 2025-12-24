import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Experience } from '../../config/info';
import clsx from 'clsx';

function ModernExperience() {
  const { t, i18n } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Job keys for translation
  const jobKeys = ['prefe', 'cookiejar', 'sastec', 'sastecskills', 'dotit', 'digitalsolution'];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="flex flex-col md:flex-row gap-8">
            <Tab.List className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-2 pb-2 md:pb-0 md:w-1/3">
              {jobKeys.map((jobKey, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    clsx(
                      'px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all duration-200 border-b-2 md:border-b-0 md:border-l-4 rounded-sm',
                      selected
                        ? 'border-primary-400 text-primary-400 bg-primary-400/10'
                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:bg-dark-800/50'
                    )
                  }
                >
                  <div className="font-medium">{t(`experience.jobs.${jobKey}.company`)}</div>
                  <div className="text-xs mt-1 opacity-75">{t(`experience.jobs.${jobKey}.date`)}</div>
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="md:w-2/3">
              {jobKeys.map((jobKey, index) => (
                <Tab.Panel
                  key={index}
                  className="focus:outline-none"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-dark-900/50 rounded-lg p-6 backdrop-blur-sm border border-dark-800"
                  >
                    <h3 className="text-2xl font-semibold text-primary-400 mb-2">
                      {t(`experience.jobs.${jobKey}.position`)}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-lg font-medium text-gray-300">
                        @ {t(`experience.jobs.${jobKey}.company`)}
                      </span>
                      <span className="text-sm text-gray-500">
                        📍 {t(`experience.jobs.${jobKey}.location`)}
                      </span>
                    </div>
                    <p className="text-gray-500 mb-6">{t(`experience.jobs.${jobKey}.date`)}</p>
                    <ul className="space-y-3 mb-6">
                      {t(`experience.jobs.${jobKey}.description`, { returnObjects: true }) &&
                       t(`experience.jobs.${jobKey}.description`, { returnObjects: true }).map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-400 mr-3 mt-1.5">▹</span>
                          <span className="text-gray-400 leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    {Experience[index].technologies && Experience[index].technologies.length > 0 && (
                      <div className="pt-4 border-t border-dark-700">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">{t('experience.technologiesUsed')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {Experience[index].technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium bg-primary-900/20 text-primary-400 rounded-full border border-primary-800/30 hover:bg-primary-900/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}

export default ModernExperience;