import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "How long does it take to set up an AI automation?",
      answer: "Most of our projects are ready within 2–3 weeks. For simple workflows, setup can be completed in just a few days."
    },
    {
      question: "Do I need technical knowledge to use your AI solutions?",
      answer: "Not at all. We handle the entire setup, and you'll get a simple dashboard and training to manage everything without coding."
    },
    {
      question: "Can AI really work for my industry?",
      answer: "Yes! We've successfully implemented AI solutions for e-commerce, healthcare, real estate, restaurants, and more. We tailor everything to your specific workflows."
    },
    {
      question: "What's the cost of getting started?",
      answer: "We offer flexible plans depending on your needs. Most clients start with a pilot project under $1,000 to see ROI before scaling."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We don't just deliver and disappear. Our team provides continuous monitoring, optimization, and support as your business grows."
    },
    {
      question: "Is my data safe with AI automations?",
      answer: "Absolutely. We follow industry-grade security practices and ensure your data is always encrypted and handled with care."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
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
                <div className="text-gray-200 text-sm font-medium leading-5 font-sans">FAQ</div>
              </div>
            </motion.div>
            <motion.div 
              className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.div>
            <motion.div 
              className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans"
              variants={itemVariants}
            >
              Got questions? We've answered the most common ones to help you feel confident before working with us.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-[900px] flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br from-[#1A1F26] via-[#161B22] to-[#0D1117] overflow-hidden rounded-[28px] border transition-all duration-500 shadow-lg ${
                openIndex === index
                  ? 'border-blue-500/40 shadow-blue-500/20 shadow-2xl'
                  : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] hover:shadow-xl'
              }`}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              layout
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Question Button */}
              <motion.button
                className="relative w-full p-6 md:p-8 flex items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-[28px]"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Question Number */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Question Text */}
                  <div className="text-white text-lg md:text-xl font-semibold leading-tight font-sans group-hover:text-blue-100 transition-colors duration-300">
                    {faq.question}
                  </div>
                </div>

                {/* Toggle Icon */}
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ml-4 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/30'
                      : 'bg-white/8 group-hover:bg-white/12'
                  }`}
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                    scale: openIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </motion.div>
              </motion.button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="relative px-6 md:px-8 pb-6 md:pb-8">
                      {/* Separator Line */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />

                      {/* Answer Text */}
                      <div className="ml-12 text-gray-300 text-base md:text-lg font-normal leading-relaxed font-sans">
                        {faq.answer}
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute bottom-2 right-6 w-2 h-2 rounded-full bg-blue-500/40" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
