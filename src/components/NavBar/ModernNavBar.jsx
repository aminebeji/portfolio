import React, { useState, useEffect } from 'react';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇹🇳', rtl: true },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];

function ModernNavBar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    document.documentElement.dir = languages.find(l => l.code === langCode)?.rtl ? 'rtl' : 'ltr';
  };

  const navItems = [
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.experience'), href: '#experience' },
    { label: t('navbar.projects'), href: '#projects' },
    { label: t('navbar.education'), href: '#education' },
    { label: t('navbar.contact'), href: '#contact' }
  ];

  return (
    <Disclosure as="nav" className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-dark-950/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  AB
                </a>
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.a
                  href={`${process.env.PUBLIC_URL}/beji_resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-4 py-2 text-sm font-medium text-primary-400 border border-primary-400 rounded-lg hover:bg-primary-400/10 transition-all duration-200"
                >
                  {t('navbar.resume')}
                </motion.a>

                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors duration-200">
                    <span>{languages.find(l => l.code === i18n.language)?.flag}</span>
                    <span>{languages.find(l => l.code === i18n.language)?.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 rounded-lg bg-dark-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {languages.map((lang) => (
                          <Menu.Item key={lang.code}>
                            {({ active }) => (
                              <button
                                onClick={() => changeLanguage(lang.code)}
                                className={clsx(
                                  active ? 'bg-primary-400/10' : '',
                                  i18n.language === lang.code ? 'text-primary-400' : 'text-gray-300',
                                  'flex items-center w-full px-4 py-2 text-sm'
                                )}
                              >
                                <span className="mr-3">{lang.flag}</span>
                                <span>{lang.name}</span>
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-950/95 backdrop-blur-md">
              {navItems.map((item) => (
                <Disclosure.Button
                  key={item.label}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-800"
                >
                  {item.label}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="a"
                href={`${process.env.PUBLIC_URL}/beji_resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-400 hover:bg-primary-400/10"
              >
                {t('navbar.resume')}
              </Disclosure.Button>

              <div className="border-t border-dark-800 pt-2">
                <div className="px-3 py-2 text-sm font-medium text-gray-400">Language</div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={clsx(
                      "flex items-center w-full px-3 py-2 text-sm rounded-md",
                      i18n.language === lang.code ? 'text-primary-400 bg-primary-400/10' : 'text-gray-300 hover:bg-dark-800'
                    )}
                  >
                    <span className="mr-3">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default ModernNavBar;