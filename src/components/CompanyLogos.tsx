import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, Calendar, ShoppingCart, Users, Clock, Zap, BarChart } from 'lucide-react';

const CompanyLogos = () => {
  const capabilities = [
    { icon: Brain, label: "AI Agents" },
    { icon: MessageSquare, label: "Smart Chatbots" },
    { icon: Calendar, label: "Auto Booking" },
    { icon: ShoppingCart, label: "Cart Recovery" },
    { icon: Users, label: "Lead Nurturing" },
    { icon: Clock, label: "24/7 Support" },
    { icon: Zap, label: "Quick Setup" },
    { icon: BarChart, label: "Analytics" }
  ];

  // Triple for seamless loop
  const tripleCapabilities = [...capabilities, ...capabilities, ...capabilities];

  return (
    <div className="w-full bg-black py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            AI Automation Capabilities
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive automation solutions for your business
          </p>
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            initial={{ x: '0%' }}
            animate={{ x: '-33.333%' }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {tripleCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-gradient-to-b from-[#161A1E] to-[#08090A] rounded-2xl border border-[rgba(255,255,255,0.12)] p-6 min-w-[200px] flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-medium text-center">
                  {capability.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default CompanyLogos;