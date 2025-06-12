import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyChooseHV from '../components/home/WhyChooseHV';
import KeyDataInsights from '../components/home/KeyDataInsights';
import IndustryExperience from '../components/home/IndustryExperience';
import InteractiveStorybook from '../components/home/InteractiveStorybook';
import CorporateOverview from '../components/home/CorporateOverview';
import TechInfrastructure from '../components/home/TechInfrastructure';
import EmployeeCommitment from '../components/home/EmployeeCommitment';
// import ClientSupport from '../components/home/ClientSupport';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <WhyChooseHV />
      <KeyDataInsights />
      <IndustryExperience />
      <CorporateOverview />
      <TechInfrastructure />
      <EmployeeCommitment />
      {/* <ClientSupport /> */}
      <InteractiveStorybook />
    </div>
  );
};

export default Home;