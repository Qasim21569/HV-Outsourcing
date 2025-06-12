import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import InteractiveMap from '../components/contact/InteractiveMap';
import SocialMedia from '../components/contact/SocialMedia';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
            <SocialMedia />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <InteractiveMap />
      </div>
    </div>
  );
};

export default Contact;