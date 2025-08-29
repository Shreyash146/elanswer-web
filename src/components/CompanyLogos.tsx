import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ShoppingCart, Users, Database, FileText, MessageSquare, Phone } from 'lucide-react';
import { useCalBooking } from '@/hooks/useCalBooking';

const CompanyLogos = () => {
  const { isCalLoaded } = useCalBooking();

  const capabilities = [
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: "Answer calls 24/7 with a natural, human-like voice. From booking appointments to answering FAQs, your business stays responsive without extra staff.",
      badge: "AI-Powered",
      badgeColor: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Smart Chatbots",
      description: "Handle 80% of customer queries instantly with personalized, always-on AI support.",
      badge: "Instant Replies",
      badgeColor: "bg-green-500"
    },
    {
      icon: Calendar,
      title: "Auto Booking",
      description: "Automate appointment booking, reminders, and follow-ups via WhatsApp, SMS, or email — saving staff 10+ hours/week.",
      badge: "24/7 Active",
      badgeColor: "bg-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "Cart Recovery",
      description: "Recover abandoned carts automatically and drive up to 30% more sales with personalized AI nudges.",
      badge: "High ROI",
      badgeColor: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Convert prospects into paying clients with intelligent follow-ups that never miss an opportunity.",
      badge: "Conversion Ready",
      badgeColor: "bg-green-500"
    },
    {
      icon: Database,
      title: "24/7 Support",
      description: "Keep track of every lead, client, and conversation. Automatically follow up with no-shows or cold leads.",
      badge: "Always Available",
      badgeColor: "bg-blue-500"
    }
  ];

  // Double for seamless loop
  const doubleCapabilities = [...capabilities, ...capabilities];

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

  return (
    <div className="w-full py-16 md:py-20 bg-black flex flex-col justify-center items-center gap-12 md:gap-20">
      <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col justify-start items-center gap-12 md:gap-20">
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
                <div className="text-gray-200 text-sm font-medium leading-5 font-sans">AI Automation Capabilities</div>
              </div>
            </motion.div>
            <motion.div
              className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans"
              variants={itemVariants}
            >
              AI Automation Capabilities
            </motion.div>
            <motion.div
              className="self-stretch text-center text-white opacity-80 text-base md:text-lg font-normal leading-6 md:leading-7 font-sans"
              variants={itemVariants}
            >
              Unlock growth with tailor-made AI workflows. From customer support to sales recovery — we help SMBs save time, cut costs, and grow revenue.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Carousel Section */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            initial={{ x: '0%' }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 60,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {doubleCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[20px] border border-[rgba(255,255,255,0.12)] p-6 md:p-8 w-[240px] md:w-[260px] h-[280px] md:h-[320px] flex flex-col items-start gap-4 md:gap-6"
                variants={itemVariants}
              >
                {/* Badge */}
                <div className={`absolute top-3 right-3 ${capability.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                  {capability.badge}
                </div>

                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white text-lg md:text-xl font-semibold leading-6 font-sans text-center">{capability.title}</div>
                </div>
                <div className="text-gray-200 text-sm font-normal leading-5 font-sans text-center flex-1 flex items-center">
                  {capability.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="w-full max-w-[600px] flex flex-col justify-start items-center gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="flex flex-col justify-start items-center gap-4" variants={itemVariants}>
            <motion.div
              className="text-center text-white text-2xl md:text-3xl font-semibold leading-tight font-sans"
              variants={itemVariants}
            >
              Ready to Automate?
            </motion.div>
            <motion.div
              className="text-center text-white opacity-80 text-base md:text-lg font-normal leading-6 md:leading-7 font-sans"
              variants={itemVariants}
            >
              See how AI can transform your business.
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-start items-center gap-4"
            variants={itemVariants}
          >
            <Button
              data-cal-namespace="discovery-call"
              data-cal-link="elanswer-ai-automation/discovery-call"
              data-cal-config='{"layout":"month_view"}'
              className="px-6 py-3 bg-white text-black rounded-full border border-white hover:bg-gray-100 transition-colors font-normal text-base leading-6 font-sans"
            >
              Book a Free Strategy Call
            </Button>
            <Button variant="outline" className="px-6 py-3 bg-transparent text-white rounded-full border border-white hover:bg-white hover:text-black transition-colors font-normal text-base leading-6 font-sans">
              See a Demo Workflow
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default CompanyLogos;