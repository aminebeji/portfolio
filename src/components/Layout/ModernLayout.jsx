import React from 'react';
import ModernNavBar from '../NavBar/ModernNavBar';
import ModernFooter from '../Footer/ModernFooter';

function ModernLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-100">
      <ModernNavBar />
      <main className="pt-16">
        {children}
      </main>
      <ModernFooter />
    </div>
  );
}

export default ModernLayout;