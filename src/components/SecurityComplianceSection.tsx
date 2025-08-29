import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecurityComplianceSection = () => {
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

  const trustedPlatforms = ["AWS", "Google Cloud", "Stripe", "Twilio", "OpenAI"];

  return (
    <div className="w-full h-full px-4 md:px-16 py-6 md:py-8 bg-gradient-to-b from-black to-gray-900 overflow-hidden flex flex-col justify-start items-center gap-3 md:gap-4">
      <motion.div
        className="w-full max-w-[1280px] flex flex-col justify-start items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div
          className="w-full max-w-[600px] flex flex-col justify-start items-center gap-2 md:gap-3 mb-4"
          variants={itemVariants}
        >
          <motion.div
            className="px-3 py-1 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-2"
            variants={itemVariants}
          >
            <div className="flex justify-start items-center gap-2">
              <Lock className="w-3 h-3 text-green-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Security & Compliance</div>
            </div>
          </motion.div>

          <motion.div
            className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
            variants={itemVariants}
          >
            Secure & Compliant by Design
          </motion.div>

          <motion.div
            className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans"
            variants={itemVariants}
          >
            Protected with enterprise-grade security. Built on trusted platforms like AWS, Google Cloud, Stripe, Twilio, and OpenAI.
          </motion.div>
        </motion.div>

        {/* Trusted Platforms */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-2 mb-3"
          variants={itemVariants}
        >
          {trustedPlatforms.map((platform, index) => (
            <motion.div
              key={platform}
              className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-gray-300 text-sm font-medium hover:border-green-500/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {platform}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col justify-start items-center gap-2"
          variants={itemVariants}
        >
          <motion.div
            className="text-center text-gray-300 text-base font-normal leading-6 font-sans"
            variants={itemVariants}
          >
            Learn more about Compliance & Security
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 font-semibold text-base leading-5 font-sans shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => window.location.href = '/compliance-security'}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecurityComplianceSection;
