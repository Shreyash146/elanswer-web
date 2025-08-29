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
      title: "Boutique Store: $1,200/Month Recovered",
      before: "The boutique was losing sales due to missed follow-ups with online shoppers.",
      after: "Our AI follow-up system automatically re-engaged abandoned carts, recovering $1,200 in revenue every month and increasing repeat purchases.",
      metrics: [
        { label: "Revenue Recovered", value: "$1,200/month" },
        { label: "Repeat Purchases", value: "+18%" },
        { label: "Customer Retention", value: "+22%" }
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Dental Clinic: 40 Hours/Week Saved",
      before: "Staff spent over 40 hours weekly managing phone calls and appointment reminders.",
      after: "Our AI booking agent automated scheduling and follow-ups, reducing missed appointments by 60% and freeing staff time for patient care.",
      metrics: [
        { label: "Time Saved", value: "40 hrs/week" },
        { label: "Missed Appointments", value: "-60%" },
        { label: "Patient Satisfaction", value: "+25%" }
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Restaurant: 25% More Bookings",
      before: "The restaurant faced frequent no-shows and underutilized tables.",
      after: "Our AI reservation system optimized table allocation and automated confirmations, boosting bookings by 25% and cutting no-shows nearly in half.",
      metrics: [
        { label: "Bookings Increase", value: "+25%" },
        { label: "No-Show Reduction", value: "-45%" },
        { label: "Average Revenue per Table", value: "+15%" }
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
              
              <div className="text-white text-xl md:text-2xl font-semibold leading-tight mb-6 font-sans">
                {study.title}
              </div>

              {/* Before/After Section */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="text-red-400 text-xs font-semibold mb-2 uppercase tracking-wide">Before</div>
                  <div className="text-gray-300 text-sm font-normal leading-5 font-sans">
                    {study.before}
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="text-green-400 text-xs font-semibold mb-2 uppercase tracking-wide">After</div>
                  <div className="text-gray-300 text-sm font-normal leading-5 font-sans">
                    {study.after}
                  </div>
                </div>
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