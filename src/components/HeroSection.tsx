
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import NavbarWithModal from './NavbarWithModal';
import { useCalBooking } from '@/hooks/useCalBooking';

const HeroSection = () => {
  const { isCalLoaded } = useCalBooking();

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
        ease: [0.6, -0.05, 0.01, 0.99] as const
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
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col justify-start items-start relative" style={{
      backgroundImage: 'url(/lovable-uploads/5c21d57e-d7fa-44a5-a13e-d85e12b669bf.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background Video Layer - Covering Entire Hero Section */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.4 }}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="auto"
      >
        <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1753689005/pulse_mlmvay.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for entire section */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-[1]"></div>

      {/* Navbar - positioned above video */}
      <div className="relative z-50 w-full">
        <NavbarWithModal />
      </div>

      {/* Main Content - positioned above video */}
      <div className="relative z-10 w-full px-4 md:px-16 lg:px-16 xl:px-16 py-14 md:py-28 overflow-hidden flex flex-col justify-start items-center gap-10 md:gap-20">
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
                AI Automations for SMBs<br />Save Time. Grow Faster.
              </motion.h1>
              <motion.p 
                className="w-full text-center text-white text-base md:text-lg font-normal leading-relaxed break-words font-sans"
                variants={itemVariants}
              >
                Practical AI agents built fast, no dev team needed. Automate customer service, sales, and operations for small businesses.
              </motion.p>
            </motion.div>
            
            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-start items-center gap-4 md:gap-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  data-cal-namespace="discovery-call"
                  data-cal-link="elanswer-ai-automation/discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full border-2 border-blue-400/30 hover:border-blue-400/50 font-semibold text-lg leading-6 font-sans shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Free Demo
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 font-semibold text-lg leading-6 font-sans shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                </Button>
              </motion.div>
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
                        src="/lovable-uploads/13161c05-4e61-4eec-9034-00e6fcdaead7.webp"
                        alt="Elanswer AI automation dashboard showing analytics, workflow management, and customer interaction metrics for business automation solutions"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
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
