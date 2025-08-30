import React from 'react';

const ContactSection = ({ personalData }) => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">CONTACT SECTION</h2>
        <p className="text-gray-300">연락처</p>
      </div>
    </section>
  );
};

export default ContactSection;