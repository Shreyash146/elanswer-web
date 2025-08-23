import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

const ServicePackagesSection = () => {
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

  const packages = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "1 AI Agent (Chatbot or Voice)",
        "Basic integrations",
        "Email support",
        "Setup & training included",
        "Monthly performance review"
      ],
      popular: false,
      icon: Zap,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Pro",
      price: "$1,000",
      period: "/month",
      description: "For growing businesses ready to scale their automation",
      features: [
        "3 AI Agents",
        "Advanced integrations",
        "Priority support",
        "Custom workflows",
        "Weekly optimization",
        "Analytics dashboard"
      ],
      popular: true,
      icon: Star,
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for established businesses with complex needs",
      features: [
        "Unlimited AI Agents",
        "Custom integrations",
        "Dedicated success manager",
        "Advanced analytics",
        "24/7 priority support",
        "White-label options"
      ],
      popular: false,
      icon: Star,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-20 bg-black flex flex-col justify-center items-center gap-12 md:gap-20">
      <motion.div 
        className="w-full max-w-[850px] flex flex-col justify-start items-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="self-stretch flex flex-col justify-start items-center gap-6" variants={itemVariants}>
          <motion.div 
            className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3"
            variants={itemVariants}
          >
            <div className="flex justify-start items-center gap-2">
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Pricing</div>
            </div>
          </motion.div>
          <motion.div 
            className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
            variants={itemVariants}
          >
            Simple, Transparent Pricing
          </motion.div>
          <motion.div 
            className="self-stretch text-center text-white opacity-80 text-base md:text-lg font-normal leading-6 md:leading-7 font-sans"
            variants={itemVariants}
          >
            Choose the perfect plan for your business size and needs
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {packages.map((pkg, index) => (
          <motion.div 
            key={index}
            className={`relative p-6 md:p-8 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[20px] flex flex-col justify-start items-start gap-6 md:gap-8 ${
              pkg.popular ? 'border-2 border-green-500' : 'border border-[rgba(255,255,255,0.12)]'
            }`}
            variants={cardVariants}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center`}>
                <pkg.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white text-xl md:text-2xl font-semibold leading-7 font-sans">{pkg.name}</div>
                <div className="text-gray-300 text-sm font-normal leading-5 font-sans">{pkg.description}</div>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <div className="text-white text-4xl md:text-5xl font-normal leading-tight font-sans">{pkg.price}</div>
              <div className="text-gray-300 text-lg font-normal leading-6 font-sans">{pkg.period}</div>
            </div>

            <div className="self-stretch flex flex-col gap-4">
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="text-gray-200 text-sm md:text-base font-normal leading-6 font-sans">{feature}</div>
                </div>
              ))}
            </div>

            <Button 
              className={`w-full py-3 rounded-full font-normal text-base leading-6 font-sans transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-white hover:bg-gray-100 text-black'
              }`}
            >
              {pkg.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicePackagesSection;