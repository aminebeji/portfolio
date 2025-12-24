import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Email } from '../../config/info';

function TypewriterText({ text, className = '' }) {
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

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

function HeroSection() {
  const { t } = useTranslation();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-secondary-900/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-primary-400 text-lg sm:text-xl font-mono mb-4"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
        >
          {showName ? (
            <TypewriterText
              text={t('hero.name')}
              className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent"
            />
          ) : (
            <span className="opacity-0">{t('hero.name')}</span>
          )}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-300 mb-8"
        >
          {t('hero.title')}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href={`mailto:${Email}`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-dark-900 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg hover:from-primary-500 hover:to-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
          >
            {t('hero.cta')}
          </motion.a>

          <motion.a
            href={`${process.env.PUBLIC_URL}/beji_resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-400 bg-transparent border-2 border-primary-400 rounded-lg hover:bg-primary-400/10 focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all duration-200"
          >
            {t('navbar.resume')}
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-primary-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}

export default HeroSection;