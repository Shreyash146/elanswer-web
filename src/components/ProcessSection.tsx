import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, Zap, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
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

  const process = [
    {
      step: "01",
      title: "Discover",
      description: "We start with a quick call to understand your business goals and pain points. No jargon, just clarity.",
      icon: Lightbulb,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Design",
      description: "Our team maps out the perfect AI workflow tailored for your business — from chatbots to automations.",
      icon: Settings,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Deploy",
      description: "We integrate and launch your AI solution with minimal disruption, ensuring everything runs smoothly.",
      icon: Zap,
      gradient: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Optimize",
      description: "We track performance, fine-tune the system, and help you scale as your business grows.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-gradient-to-b from-black to-gray-900 overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
      <motion.div 
        className="w-full max-w-[1280px] flex flex-col justify-start items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8 mb-12" variants={itemVariants}>
          <motion.div className="self-stretch flex flex-col justify-start items-center gap-6" variants={itemVariants}>
            <motion.div 
              className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex justify-start items-center gap-2">
                <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Our Process</div>
              </div>
            </motion.div>
            <motion.div 
              className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
              variants={itemVariants}
            >
              How We Bring AI Into Your Business
            </motion.div>
            <motion.div 
              className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans"
              variants={itemVariants}
            >
              Simple, transparent, and results-driven. Here's how we turn your workflows into powerful automations.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br from-[#1A1F26] via-[#161B22] to-[#0D1117] overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.08)] flex flex-col p-8 md:p-10 transition-all duration-500 shadow-xl hover:shadow-2xl ${
                step.gradient.includes('blue') ? 'hover:border-blue-500/30 hover:shadow-blue-500/10' :
                step.gradient.includes('purple') ? 'hover:border-purple-500/30 hover:shadow-purple-500/10' :
                step.gradient.includes('green') ? 'hover:border-green-500/30 hover:shadow-green-500/10' :
                'hover:border-orange-500/30 hover:shadow-orange-500/10'
              }`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              layout
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${
                step.gradient.includes('blue') ? 'from-blue-500/5 via-transparent to-blue-600/5' :
                step.gradient.includes('purple') ? 'from-purple-500/5 via-transparent to-purple-600/5' :
                step.gradient.includes('green') ? 'from-green-500/5 via-transparent to-green-600/5' :
                'from-orange-500/5 via-transparent to-orange-600/5'
              }`} />

              {/* Large Background Step Number */}
              <div className="absolute top-6 right-6 text-[140px] md:text-[160px] font-black text-white/3 leading-none select-none transition-all duration-500 group-hover:text-white/5">
                {step.step}
              </div>

              {/* Progress Indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent">
                <motion.div
                  className={`h-full bg-gradient-to-r ${step.gradient} opacity-60`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              </div>

              {/* Icon Container */}
              <div className="relative z-10 mb-8">
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} blur-xl opacity-50`} />
                  <step.icon className="w-10 h-10 text-white relative z-10" />
                </motion.div>
              </div>

              {/* Step Badge */}
              <div className="relative z-10 mb-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${step.gradient} text-white shadow-lg`}>
                  Step {step.step}
                </span>
              </div>

              {/* Title */}
              <div className="text-white text-2xl md:text-3xl font-bold leading-tight mb-6 font-sans relative z-10 group-hover:text-blue-50 transition-colors duration-300">
                {step.title}
              </div>

              {/* Description */}
              <div className="text-gray-300 text-base md:text-lg font-normal leading-relaxed font-sans relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                {step.description}
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}

          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Horizontal line connecting top row */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />

            {/* Vertical line connecting rows */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gray-600/50 to-transparent" />

            {/* Horizontal line connecting bottom row */}
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessSection;
