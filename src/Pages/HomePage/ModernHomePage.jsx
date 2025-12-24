import React from 'react';
import ModernLayout from '../../components/Layout/ModernLayout';
import HeroSection from '../../components/HeroSection/HeroSection';
import ModernAbout from '../../components/About/ModernAbout';
import ModernExperience from '../../components/Experience/ModernExperience';
import ModernProjects from '../../components/Projects/ModernProjects';
import ModernEducation from '../../components/Education/ModernEducation';
import ModernContact from '../../components/Contact/ModernContact';

function ModernHomePage() {
  return (
    <ModernLayout>
      <HeroSection />
      <ModernAbout />
      <ModernExperience />
      <ModernProjects />
      <ModernEducation />
      <ModernContact />
    </ModernLayout>
  );
}

export default ModernHomePage;