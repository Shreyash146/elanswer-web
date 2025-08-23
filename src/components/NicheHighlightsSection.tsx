import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, ShoppingCart, Calendar } from 'lucide-react';

const NicheHighlightsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  const useCases = [
    {
      icon: Stethoscope,
      title: "AI Front Desk for Clinics",
      description: "Automate appointment booking, patient inquiries, and follow-up calls. Reduce admin work by 80% while improving patient experience.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Agent for E-commerce",
      description: "Intelligent recovery sequences that adapt to customer behavior. Recover 30-40% of abandoned carts with personalized messaging.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Reservation & Review Automation for Restaurants",
      description: "Handle reservations, send reminders, and request reviews automatically. Increase bookings by 25% and improve online reputation.",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
      <div className="w-full max-w-screen-xl flex flex-col justify-start items-center gap-12 md:gap-20">
        <motion.div 
          className="w-full max-w-3xl flex flex-col justify-start items-center gap-4" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3" variants={itemVariants}>
            <div className="flex justify-start items-center gap-2">
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Use Cases</div>
            </div>
          </motion.div>
          <motion.div className="self-stretch flex flex-col justify-start items-center gap-6" variants={itemVariants}>
            <motion.div className="self-stretch text-center text-white text-4xl md:text-6xl font-normal leading-tight md:leading-[67.20px] font-sans" variants={itemVariants}>
              AI Solutions for Every Industry
            </motion.div>
            <motion.div className="self-stretch text-center text-white text-base md:text-lg font-normal leading-6 md:leading-7 font-sans" variants={itemVariants}>
              Specialized automation that understands your business needs
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.12)] flex flex-col justify-start items-center p-8 hover:border-[rgba(255,255,255,0.2)] transition-colors duration-300"
              variants={cardVariants}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center text-white text-xl md:text-2xl font-medium leading-tight mb-4 font-sans">
                {useCase.title}
              </div>
              <div className="text-center opacity-80 text-white text-sm md:text-base font-normal leading-6 font-sans">
                {useCase.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NicheHighlightsSection;