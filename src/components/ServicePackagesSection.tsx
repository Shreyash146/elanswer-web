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
      price: "$399",
      period: "/mo",
      description: "For small businesses starting with AI.",
      features: [
        "1 AI Agent (voice or chatbot)",
        "1,000 conversations / mo",
        "Basic integrations (Sheets, HubSpot Starter)",
        "Email support (24h response)",
        "Cancel anytime"
      ],
      popular: false,
      icon: Zap,
      gradient: "from-blue-500 to-blue-600",
      highlight: "💡 Great for local service providers & freelancers."
    },
    {
      name: "Growth",
      price: "$899",
      period: "/mo",
      description: "For growing teams that want ROI.",
      features: [
        "3 AI Agents (voice + chatbot + automation)",
        "10,000 conversations / mo",
        "Multi-channel (Web, WhatsApp, Slack, Email)",
        "Custom workflows",
        "Analytics dashboard",
        "Priority chat + email support"
      ],
      popular: true,
      icon: Star,
      gradient: "from-green-500 to-green-600",
      highlight: "💡 Perfect for D2C brands, clinics & service-based businesses."
    },
    {
      name: "Scale",
      price: "$1,999",
      period: "/mo",
      description: "For businesses ready to scale AI.",
      features: [
        "5 AI Agents across teams",
        "50,000 conversations / mo",
        "Advanced integrations (Shopify, Salesforce, Stripe)",
        "Custom dashboards + ROI tracking",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      popular: false,
      icon: Star,
      gradient: "from-purple-500 to-purple-600",
      highlight: "💡 Best for mid-sized companies & multi-location businesses."
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Pricing",
      description: "For enterprises with complex needs.",
      features: [
        "Unlimited AI Agents & conversations",
        "Enterprise integrations (SAP, MS Teams, APIs)",
        "Advanced security & compliance",
        "Dedicated success manager",
        "SLA-backed 24/7 support"
      ],
      popular: false,
      icon: Star,
      gradient: "from-orange-500 to-orange-600",
      highlight: "💡 Built for enterprises that want to automate across entire departments."
    }
  ];

  return (
    <div id="pricing" className="w-full h-full py-16 md:py-20 bg-black flex flex-col justify-center items-center gap-12 md:gap-20">
      <div className="w-full max-w-[1500px] px-4 md:px-8 flex flex-col justify-start items-center gap-12 md:gap-20">
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
          className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-[1600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`group relative p-6 md:p-8 bg-gradient-to-br from-[#1A1F26] via-[#161B22] to-[#0D1117] rounded-[28px] flex flex-col justify-start items-start gap-6 md:gap-8 min-h-[600px] transition-all duration-500 shadow-xl hover:shadow-2xl ${
              pkg.popular
                ? 'border-2 border-green-500/60 shadow-green-500/20 hover:border-green-500/80 hover:shadow-green-500/30 scale-105'
                : 'border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] hover:scale-102'
            }`}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            layout
          >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[28px] ${
              pkg.popular
                ? 'bg-gradient-to-br from-green-500/5 via-transparent to-green-600/5'
                : 'bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3'
            }`} />

            {/* Popular Badge */}
            {pkg.popular && (
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-500/30 border border-green-400/30">
                  ⭐ Most Popular
                </div>
              </motion.div>
            )}
            
            <div className="flex flex-col gap-6 md:gap-8 w-full relative z-10">
              {/* Enhanced Icon and Title Section */}
              <div className="flex flex-col gap-4">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} blur-xl opacity-50`} />
                  <pkg.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>

                <div className="text-white text-2xl md:text-3xl font-bold leading-tight font-sans group-hover:text-blue-50 transition-colors duration-300">
                  {pkg.name}
                </div>
              </div>

              {/* Enhanced Price Display */}
              <div className="flex items-baseline gap-2">
                <div className={`text-4xl md:text-5xl font-black leading-tight font-sans transition-all duration-300 ${
                  pkg.popular ? 'text-green-400 group-hover:scale-105' : 'text-white group-hover:scale-105'
                }`}>
                  {pkg.price}
                </div>
                <div className="text-gray-400 text-lg font-medium leading-6 font-sans">
                  {pkg.period}
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="text-gray-300 text-base md:text-lg font-normal leading-relaxed font-sans group-hover:text-gray-200 transition-colors duration-300">
                {pkg.description}
              </div>
            </div>

            {/* Enhanced Features List */}
            <div className="self-stretch flex flex-col gap-4 relative z-10">
              {pkg.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  className="flex items-start gap-3 group/feature"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: featureIndex * 0.1 }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 group-hover/feature:bg-green-500/30 transition-colors duration-300">
                    <Check className="w-3 h-3 text-green-400 group-hover/feature:text-green-300 transition-colors duration-300" />
                  </div>
                  <div className="text-gray-200 text-sm md:text-base font-normal leading-relaxed font-sans group-hover/feature:text-gray-100 transition-colors duration-300">
                    {feature}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Highlight */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 relative z-10">
              <div className="text-blue-300 text-sm font-medium leading-relaxed font-sans">
                {pkg.highlight}
              </div>
            </div>

            {/* Enhanced Button */}
            <motion.div
              className="relative z-10 w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className={`w-full py-4 rounded-2xl font-semibold text-base leading-6 font-sans transition-all duration-300 shadow-lg hover:shadow-xl ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-2 border-green-400/30 hover:border-green-400/50'
                    : pkg.name === 'Enterprise'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-2 border-orange-400/30 hover:border-orange-400/50'
                      : 'bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black border-2 border-gray-300/30 hover:border-gray-300/50'
                }`}
              >
                {pkg.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePackagesSection;