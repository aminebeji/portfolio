import React, { Suspense } from 'react';
import useAnimations from './hooks/animations/useAnimations';
import "./style/variables.scss"
import "./style/_globals.scss"
import ModernHomePage from './Pages/HomePage/ModernHomePage';
import 'animate.css';
import './i18n/i18n';

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-primary-400 text-2xl animate-pulse">Loading...</div>
    </div>
  );
}

function App() {
  useAnimations();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <ModernHomePage />
    </Suspense>
  );
}

export default App;
