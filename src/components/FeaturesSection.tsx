import React from 'react';
import { motion } from 'framer-motion';
const FeaturesSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    }
  };
  return <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
      <div className="w-full max-w-screen-xl flex flex-col justify-start items-center gap-12 md:gap-20">
        <motion.div className="w-full max-w-3xl flex flex-col justify-start items-center gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          <motion.div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3" variants={itemVariants}>
            <div className="flex justify-start items-center gap-2">
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Features</div>
            </div>
          </motion.div>
          <motion.div className="self-stretch flex flex-col justify-start items-center gap-6" variants={itemVariants}>
            <motion.div className="self-stretch text-center text-white text-4xl md:text-6xl font-normal leading-tight md:leading-[67.20px] font-sans" variants={itemVariants}>
              Short heading goes here
            </motion.div>
            <motion.div className="self-stretch text-center text-white text-base md:text-lg font-normal leading-6 md:leading-7" style={{
            fontFamily: 'Roboto'
          }} variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
            <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6 md:gap-8">
              <motion.div className="w-full lg:w-[864px] bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border-[rgba(255,255,255,0.12)] flex flex-col justify-start items-start min-h-[400px] md:min-h-0" variants={cardVariants}>
                <div className="self-stretch flex-1 flex items-start justify-center overflow-hidden py-0">
                  <img src="/lovable-uploads/7fa88b56-5484-49f5-a508-dfd60325bba4.png" alt="Analytics chart visualization" className="w-full h-auto object-contain" />
                </div>
                <div className="self-stretch p-6 md:p-12 flex flex-col justify-start items-start gap-6 md:gap-8">
                  <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Medium length section heading goes here</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="flex-1 self-stretch bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border-[rgba(255,255,255,0.12)] flex flex-col justify-start items-start min-h-[400px] md:min-h-0" variants={cardVariants}>
                <div className="self-stretch p-6 md:p-8 flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col justify-center items-center gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                      <div className="self-stretch text-center text-white text-4xl md:text-2xl font-medium leading-tight md:leading-[41.60px] font-sans">Link Your Accounts</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Create your account in minutes and tailor the platform to meet your company's unique financial ne3ds.</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex items-end justify-center overflow-hidden">
                  <img src="/lovable-uploads/b83a5e37-deef-435b-8cc2-ba4c3e283575.png" alt="Dashboard visualization" className="w-full h-auto object-contain" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
            <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6 md:gap-8">
              <motion.div className="flex-1 self-stretch bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border-[rgba(255,255,255,0.12)] flex flex-col justify-start items-start min-h-[400px] md:min-h-0" variants={cardVariants}>
                <div className="self-stretch p-6 md:p-8 flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col justify-center items-center gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Integrate Your Data</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex items-end justify-end overflow-hidden">
                  <img src="/lovable-uploads/02d36b81-7505-4a5b-9e63-1735894bbb66.png" alt="Data integration visualization" className="w-full h-auto object-contain" />
                </div>
              </motion.div>
              <motion.div className="w-full lg:w-[864px] bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border-[rgba(255,255,255,0.12)] flex flex-col justify-start items-start min-h-[400px] md:min-h-0" variants={cardVariants}>
                <div className="self-stretch flex items-center justify-center overflow-hidden">
                  <img src="/lovable-uploads/6f1d8fae-f221-48b9-8563-1a3a0c19843a.png" alt="Income visualization" className="w-full h-auto object-contain" />
                </div>
                <div className="self-stretch p-6 md:p-12 flex flex-col justify-center items-center gap-6 md:gap-8 flex-1">
                  <div className="w-full max-w-3xl flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Medium length section heading goes here</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default FeaturesSection;