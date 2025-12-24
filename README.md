# Amine Beji - Portfolio

![Version](https://img.shields.io/badge/version-2.0.1-blue.svg)
![React](https://img.shields.io/badge/React-18.1.0-61DAFB.svg?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-r182-black.svg?logo=three.js)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![GitHub followers](https://img.shields.io/github/followers/aminebeji?style=social)

A modern, responsive portfolio website featuring 3D animations, internationalization support, and a beautiful dark theme design.

[View Live Demo](https://aminebeji.github.io/portfolio)

## 🚀 Features

- **3D Hero Section** with Three.js animated background and particle effects
- **Multi-language Support** (English, French, Arabic, Italian)
- **Responsive Design** optimized for all devices
- **Modern UI Components** using Headless UI
- **Smooth Animations** with Framer Motion
- **Dark Theme** with custom color grading
- **Performance Optimized** with code splitting and lazy loading
- **Accessibility Focused** following WCAG guidelines

## 🛠️ Technologies

### Frontend Framework
- **React 18** - Modern React with hooks and Suspense
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS Modules** - Component-scoped styling

### 3D & Animations
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Production-ready animation library

### UI Components
- **Headless UI** - Unstyled, fully accessible UI components
- **Tailwind Forms** - Form styling plugin
- **Custom Components** - Reusable, modern components

### Internationalization
- **i18next** - Full-featured i18n framework
- **react-i18next** - React integration for i18next
- **Browser Language Detector** - Automatic language detection

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/aminebeji/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

## 🚦 Available Scripts

```bash
# Development server
npm start

# Production build
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## 🌍 Supported Languages

- 🇬🇧 English
- 🇫🇷 Français
- 🇹🇳 العربية (Arabic)
- 🇮🇹 Italiano

## 🎨 Design System

### Color Palette
- **Primary**: Green shades (#22c55e)
- **Secondary**: Purple shades (#d946ef)
- **Dark**: Gray scale (#030712 to #f9fafb)

### Typography
- **Headers**: Poppins
- **Body**: Inter
- **Code**: SF Mono, Monaco

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Customization
- Update personal information in `src/config/info.js`
- Modify translations in `src/i18n/locales/`
- Adjust theme colors in `tailwind.config.js`

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── beji_resume.pdf
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HeroSection/
│   │   ├── NavBar/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Education/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── i18n/
│   │   ├── i18n.js
│   │   └── locales/
│   ├── config/
│   │   └── info.js
│   ├── Pages/
│   └── App.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ✅ Recent Updates

- [x] Added Three.js 3D hero section with particle effects
- [x] Implemented i18n with 4 languages
- [x] Migrated to Headless UI components
- [x] Enhanced mobile responsive design
- [x] Updated work experience from latest resume
- [x] Added Tailwind CSS design system
- [x] Improved color grading and dark theme
- [x] Refactored code following best practices

## 🚀 Deployment

The portfolio is configured for GitHub Pages deployment:

```bash
# Build and deploy
npm run deploy
```

## 📄 License

This project is licensed under the MIT License.

## 👤 Contact

**Amine Beji**
- Email: amine.beji001@gmail.com
- LinkedIn: [Amine Beji](https://www.linkedin.com/in/amine-beji-0542501b5/)
- GitHub: [@aminebeji](https://github.com/aminebeji)
- Instagram: [@amine.beji001](https://www.instagram.com/amine.beji001/)

---

Built with ❤️ using React, Three.js, and Tailwind CSS