import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Phone } from 'lucide-react';

const LeadCaptureSection = () => {
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
        duration: 0.6
      }
    }
  };

  const contactOptions = [
    {
      icon: Calendar,
      title: "Book a Free Demo",
      description: "See our AI agents in action with a personalized 30-minute demo",
      action: "Schedule Demo",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Get Custom Quote",
      description: "Tell us about your business and get a tailored automation plan",
      action: "Contact Sales",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Quick Consultation",
      description: "15-minute call to discuss your automation needs and possibilities",
      action: "Call Now",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <>
      <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
        <motion.div 
          className="w-full max-w-[1280px] flex flex-col justify-start items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8" variants={itemVariants}>
            <motion.div className="self-stretch flex flex-col justify-start items-center gap-6" variants={itemVariants}>
              <motion.div 
                className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3"
                variants={itemVariants}
              >
                <div className="flex justify-start items-center gap-2">
                  <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Get Started</div>
                </div>
              </motion.div>
              <motion.div 
                className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
                variants={itemVariants}
              >
                Ready to automate your business?
              </motion.div>
              <motion.div 
                className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans"
                variants={itemVariants}
              >
                Join hundreds of small businesses already saving time and growing revenue with AI automation. No technical skills required.
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12"
            variants={containerVariants}
          >
            {contactOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.12)] flex flex-col items-center p-8 hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center text-white text-xl md:text-2xl font-semibold leading-tight mb-4 font-sans">
                  {option.title}
                </div>
                
                <div className="text-center text-gray-300 text-sm md:text-base font-normal leading-6 mb-6 font-sans">
                  {option.description}
                </div>
                
                <Button className="w-full py-3 bg-white hover:bg-gray-100 text-black rounded-full font-normal text-base leading-6 font-sans transition-colors">
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="text-gray-400 text-sm font-normal leading-5 font-sans mb-2">
              Questions? Email us at
            </div>
            <a 
              href="mailto:hello@elanswer.com" 
              className="text-blue-400 hover:text-blue-300 text-base font-medium leading-6 font-sans transition-colors"
            >
              hello@elanswer.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default LeadCaptureSection;