import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Phone } from 'lucide-react';
import { useCalBooking } from '@/hooks/useCalBooking';

const LeadCaptureSection = () => {
  const { isCalLoaded } = useCalBooking();

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
      description: "See our AI agents in action with a personalized 30-minute demo.",
      action: "Book My Free Demo",
      gradient: "from-green-500 to-green-600",
      isPrimary: true
    },
    {
      icon: Mail,
      title: "Get Custom Quote",
      description: "Receive a tailored automation plan built for your business.",
      action: "Get My Custom Plan",
      gradient: "from-blue-500 to-blue-600",
      isPrimary: false
    },
    {
      icon: Phone,
      title: "Quick Consultation",
      description: "Have 15 minutes? Talk to our expert about your needs.",
      action: "Book My 15-Min Call",
      gradient: "from-purple-500 to-purple-600",
      isPrimary: false
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
                Automate Your Business. Save Time. Grow Revenue.
              </motion.div>
              <motion.div
                className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans"
                variants={itemVariants}
              >
                Trusted by small businesses to cut costs, recover lost sales, and boost customer satisfaction — no tech skills required.
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Primary CTA - Featured */}
          <motion.div
            className="w-full max-w-[600px] mt-12"
            variants={itemVariants}
          >
            {contactOptions.filter(option => option.isPrimary).map((option, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-green-500/20 to-green-600/10 overflow-hidden rounded-[32px] border-2 border-green-500/50 flex flex-col items-center p-8 md:p-10 hover:border-green-500/70 transition-all duration-300 shadow-lg shadow-green-500/20"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <option.icon className="w-10 h-10 text-white" />
                </div>

                <div className="text-center text-white text-2xl md:text-3xl font-bold leading-tight mb-4 font-sans">
                  {option.title}
                </div>

                <div className="text-center text-gray-200 text-base md:text-lg font-normal leading-6 mb-8 font-sans">
                  {option.description}
                </div>

                <Button
                  data-cal-namespace="discovery-call"
                  data-cal-link="elanswer-ai-automation/discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full max-w-[300px] py-4 px-8 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg leading-6 font-sans transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 max-w-[800px]"
            variants={containerVariants}
          >
            {contactOptions.filter(option => !option.isPrimary).map((option, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.12)] flex flex-col items-center p-6 hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-4`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-center text-white text-lg md:text-xl font-semibold leading-tight mb-3 font-sans">
                  {option.title}
                </div>

                <div className="text-center text-gray-300 text-sm md:text-base font-normal leading-5 mb-5 font-sans">
                  {option.description}
                </div>

                <Button
                  data-cal-namespace="discovery-call"
                  data-cal-link="elanswer-ai-automation/discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full py-3 bg-white hover:bg-gray-100 text-black rounded-full font-medium text-base leading-6 font-sans transition-colors"
                >
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Signal */}
          <motion.div
            className="mt-12 text-center max-w-[600px]"
            variants={itemVariants}
          >
            <div className="text-gray-400 text-sm md:text-base font-normal leading-6 font-sans">
              "No obligations. Cancel anytime. Average demo results: +25% more bookings, +40 hours saved per week."
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-8 text-center"
            variants={itemVariants}
          >
            <div className="text-gray-500 text-sm font-normal leading-5 font-sans mb-2">
              Questions? Email us at
            </div>
            <a
              href="mailto:aboutelanswer@gmail.com"
              className="text-blue-400 hover:text-blue-300 text-base font-medium leading-6 font-sans transition-colors"
            >
              aboutelanswer@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>


    </>
  );
};

export default LeadCaptureSection;