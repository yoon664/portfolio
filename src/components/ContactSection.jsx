import React from 'react';

const ContactSection = () => {
  const topCategories = [
    { id: "01", name: "Motion Design", href: "./works-motion" },
    { id: "02", name: "Brand Design", href: "./works-branding" },
    { id: "03", name: "Editorial Design", href: "./works-editorial" }
  ];

  const bottomCategories = [
    { id: "04", name: "Photography", href: "./works-photoworks" },
    { id: "05", name: "Illustration", href: "./works-illustration" },
    { id: "06", name: "3D Tech", href: "./works-3d-tech" }
  ];

  const CategoryLink = ({ id, name, href }) => {
    return (
      <a 
        href={href}
        className="group block hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <p className="text-white text-sm font-mono uppercase tracking-normal leading-6 opacity-60">
            {id}
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-normal">
            {name}
          </h2>
        </div>
      </a>
    );
  };

  const ContactLink = ({ label, href, children }) => {
    return (
      <a 
        href={href}
        className="group relative inline-block cursor-pointer"
        target={href.startsWith('http') ? "_blank" : "_self"}
        rel={href.startsWith('http') ? "noopener noreferrer" : ""}
      >
        <div className="relative overflow-hidden">
          {/* Default state */}
          <div className="transition-transform duration-300 group-hover:-translate-y-full">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</div>
            <div className="text-gray-300 text-sm">{children}</div>
          </div>
          
          {/* Hover state */}
          <div className="absolute inset-0 bg-white text-black px-2 py-1 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            <div className="text-xs uppercase tracking-widest mb-1">{label}</div>
            <div className="text-sm font-medium">{children}</div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="contact" className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#202020' }}>
      {/* Top Categories */}
      <div className="absolute top-8 left-0 right-0 z-10">
        {/* First row */}
        <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 mb-8">
          {topCategories.map((category) => (
            <CategoryLink 
              key={category.id}
              id={category.id}
              name={category.name}
              href={category.href}
            />
          ))}
        </div>
        
        {/* Second row */}
        <div className="flex justify-center gap-12 md:gap-16 lg:gap-20">
          {bottomCategories.map((category) => (
            <CategoryLink 
              key={category.id}
              id={category.id}
              name={category.name}
              href={category.href}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-screen px-8">
        {/* Center Video/3D Element */}
        <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">


        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Contact Links */}
        <div className="flex justify-center gap-8 md:gap-12 mb-6 px-8">
          <ContactLink label="EMAIL" href="mailto:yooj0264@gmail.com">
            EMAIL
          </ContactLink>
          
          <ContactLink label="INSTAGRAM" href="https://instagram.com/yoon664">
            INSTAGRAM
          </ContactLink>
          
          <ContactLink label="LINKEDIN" href="https://linkedin.com/in/yooeunji">
            LINKEDIN
          </ContactLink>
          
          <ContactLink label="RESUME" href="https://github.com/yoon664">
            RESUME
          </ContactLink>
        </div>

        {/* Large Name Typography */}
        <div className="w-full mb-4">
          <h1 className="w-full text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-light tracking-wider text-gray-400 leading-none opacity-50 text-center">
            YOOEUNJIWORKS
          </h1>
        </div>

        {/* Bottom Copyright */}
        <div className="flex justify-center items-center px-8 pb-4 text-xs text-gray-500">
          <div className="opacity-50">© 2025 YOO EUNJI</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;