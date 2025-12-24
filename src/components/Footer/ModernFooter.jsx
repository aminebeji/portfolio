import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function ModernFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-950 border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-2">
            {t('footer.builtBy')}
          </p>
          <p className="text-gray-500 text-xs">
            © {currentYear} {t('footer.rights')}
          </p>
          <div className="mt-6 flex justify-center space-x-1 text-gray-600 text-xs">
            <span>Built with</span>
            <span className="text-primary-400">React</span>
            <span>•</span>
            <span className="text-primary-400">Three.js</span>
            <span>•</span>
            <span className="text-primary-400">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default ModernFooter;