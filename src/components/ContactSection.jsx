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
        className="group block text-center hover:opacity-80 transition-opacity"
      >
        <div className="flex flex-col">
          <p className="text-white text-sm font-mono uppercase tracking-normal leading-6 mb-2 opacity-60">
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
          {/* 실제 비디오 요소 대신 placeholder */}
          <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-500 text-sm">Video Element</span>
            </div>
          </div>
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
        <div className="w-full overflow-hidden mb-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-light tracking-wider text-gray-400 leading-none whitespace-nowrap text-center opacity-50">
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