import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';

const UseCaseExamplesSection = () => {
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

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Boutique Store: $1,200/mo Revenue Recovery",
      description: "Our abandoned cart AI agent helped a local boutique recover 35% of lost sales through personalized follow-up sequences and smart discount timing.",
      metrics: [
        { label: "Cart Recovery Rate", value: "35%" },
        { label: "Monthly Revenue Increase", value: "$1,200" },
        { label: "Setup Time", value: "2 weeks" }
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Dental Clinic: 40 Hours/Week Saved",
      description: "Automated appointment booking and patient follow-ups freed up front desk staff to focus on patient care instead of administrative tasks.",
      metrics: [
        { label: "Admin Time Saved", value: "40 hrs/week" },
        { label: "Missed Appointments", value: "-60%" },
        { label: "Patient Satisfaction", value: "+25%" }
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Restaurant: 25% More Bookings",
      description: "Smart reservation management and automated review requests increased table bookings and improved online reputation for a family restaurant.",
      metrics: [
        { label: "Booking Increase", value: "25%" },
        { label: "Review Response Rate", value: "85%" },
        { label: "Staff Hours Saved", value: "15/week" }
      ],
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
      <motion.div 
        className="w-full max-w-[1280px] flex flex-col justify-start items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8 mb-12" variants={itemVariants}>
          <motion.div className="self-stretch flex flex-col justify-start items-center gap-6" variants={itemVariants}>
            <motion.div 
              className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex justify-start items-center gap-2">
                <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Success Stories</div>
              </div>
            </motion.div>
            <motion.div 
              className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
              variants={itemVariants}
            >
              Real Results from Real Businesses
            </motion.div>
            <motion.div 
              className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans"
              variants={itemVariants}
            >
              See how small businesses like yours are saving time and growing revenue with AI automation
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.12)] flex flex-col p-8 hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${study.gradient} flex items-center justify-center mb-6`}>
                <study.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-white text-xl md:text-2xl font-semibold leading-tight mb-4 font-sans">
                {study.title}
              </div>
              
              <div className="text-gray-300 text-sm md:text-base font-normal leading-6 mb-6 font-sans">
                {study.description}
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.05)] rounded-lg">
                    <div className="text-gray-400 text-sm font-normal font-sans">{metric.label}</div>
                    <div className="text-white text-lg font-semibold font-sans">{metric.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default UseCaseExamplesSection;