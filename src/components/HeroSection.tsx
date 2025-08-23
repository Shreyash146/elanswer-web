
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dashboardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col justify-start items-start relative" style={{
      backgroundImage: 'url(/lovable-uploads/5c21d57e-d7fa-44a5-a13e-d85e12b669bf.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background Video Layer */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ mixBlendMode: 'color-dodge' }}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1753689005/pulse_mlmvay.mp4" type="video/mp4" />
      </video>
      <Navbar />
      
      <div className="w-full px-4 md:px-16 lg:px-16 xl:px-16 py-14 md:py-28 overflow-hidden flex flex-col justify-start items-center gap-10 md:gap-20">
        <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-10 md:gap-20">
          {/* Header Content */}
          <motion.div 
            className="w-full max-w-3xl pt-8 md:pt-14 flex flex-col justify-start items-center gap-6 md:gap-8 py-[65px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="w-full flex flex-col justify-start items-center gap-4 md:gap-6" variants={itemVariants}>
              <motion.h1 
                className="w-full text-center text-white text-3xl md:text-5xl lg:text-6xl font-normal leading-tight md:leading-none break-words font-sans"
                variants={itemVariants}
              >
                Enhance your financial<br />control with Webfluin
              </motion.h1>
              <motion.p 
                className="w-full text-center text-white text-base md:text-lg font-normal leading-relaxed break-words font-sans"
                variants={itemVariants}
              >
                Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises.
              </motion.p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-start items-center gap-4"
              variants={itemVariants}
            >
              <Button className="px-6 py-3 bg-white text-black rounded-full border border-white hover:bg-gray-100 transition-colors font-normal text-base leading-6 font-sans">
                Get started
              </Button>
              <Button variant="outline" className="px-6 py-3 bg-transparent text-white rounded-full border border-white hover:bg-white hover:text-black transition-colors font-normal text-base leading-6 font-sans">
                Contact
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Dashboard Mockup */}
          <motion.div 
            className="w-full max-w-7xl h-[400px] md:h-[600px] lg:h-[749px] relative overflow-hidden"
            variants={dashboardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 flex justify-center items-start pt-4 md:pt-6">
              <div className="relative w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1132px]">
                {/* Main Dashboard Container */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden flex flex-col justify-start items-start" style={{
                  transform: 'translate(6px, 6px)',
                  borderRadius: '10.89px'
                }}>
                  <div className="w-full h-full relative">
                    {/* Dashboard image */}
                    <div className="absolute inset-0 flex items-center justify-center shadow-[0_0_45px_0_rgba(118,77,253,0.77)]">
                      <img 
                        src="/lovable-uploads/13161c05-4e61-4eec-9034-00e6fcdaead7.png" 
                        alt="Dashboard Preview" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-80" style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.8) 100%)'
            }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
