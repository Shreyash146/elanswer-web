import React from 'react';
import LogoCarousel from './LogoCarousel';
const CompanyLogos = () => {
  return <div className="w-full flex flex-col justify-center items-center gap-12 bg-black py-0">
      <LogoCarousel />
      <div className="w-full max-w-5xl flex flex-col justify-start items-center gap-8">
        {/* Keep existing static logos below the carousel */}
        
      </div>
    </div>;
};
export default CompanyLogos;