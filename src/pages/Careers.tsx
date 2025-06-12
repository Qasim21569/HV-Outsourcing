import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import WhyChooseUs from '../components/careers/WhyChooseUs';
import EmployeeCommitment from '../components/careers/EmployeeCommitment';
import OpenPositions from '../components/careers/OpenPositions';
import EmployeeProfiles from '../components/careers/EmployeeProfiles';
import CareersCallToAction from '../components/careers/CareersCallToAction';

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      <CareersHero />
      <WhyChooseUs />
      <EmployeeCommitment />
      <OpenPositions />
      <EmployeeProfiles />
      <CareersCallToAction />
    </div>
  );
};

export default Careers;