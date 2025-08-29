import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingCart, Users, Database, MessageSquare, Phone } from 'lucide-react';

const LogoCarousel = () => {
  // Array of AI automation capabilities
  const capabilities = [
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: "Answer calls 24/7 with a natural, human-like voice. From booking appointments to answering FAQs, your business stays responsive without extra staff.",
      gradient: "from-blue-500 to-blue-600",
      badge: "AI-Powered",
      badgeColor: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Smart Chatbots",
      description: "Handle 80% of customer queries instantly with personalized, always-on AI support.",
      gradient: "from-cyan-500 to-cyan-600",
      badge: "Instant Replies",
      badgeColor: "bg-green-500"
    },
    {
      icon: Calendar,
      title: "Auto Booking",
      description: "Automate appointment booking, reminders, and follow-ups via WhatsApp, SMS, or email — saving staff 10+ hours/week.",
      gradient: "from-purple-500 to-purple-600",
      badge: "24/7 Active",
      badgeColor: "bg-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "Cart Recovery",
      description: "Recover abandoned carts automatically and drive up to 30% more sales with personalized AI nudges.",
      gradient: "from-green-500 to-green-600",
      badge: "High ROI",
      badgeColor: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Convert prospects into paying clients with intelligent follow-ups that never miss an opportunity.",
      gradient: "from-orange-500 to-orange-600",
      badge: "Conversion Ready",
      badgeColor: "bg-green-500"
    },
    {
      icon: Database,
      title: "24/7 Support",
      description: "Keep track of every lead, client, and conversation. Automatically follow up with no-shows or cold leads.",
      gradient: "from-pink-500 to-pink-600",
      badge: "Always Available",
      badgeColor: "bg-blue-500"
    }
  ];

  // Double the array for seamless looping
  const doubleCapabilities = [...capabilities, ...capabilities];
  return (
    <div className="w-full overflow-hidden bg-black py-0">
      <motion.div
        className="flex gap-6 md:gap-8"
        initial={{ opacity: 0, x: '0%' }}
        animate={{ opacity: 1, x: '-50%' }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          x: {
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
            delay: 0.5
          }
        }}
      >
        {doubleCapabilities.map((capability, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[20px] border border-[rgba(255,255,255,0.12)] p-6 md:p-8 w-[240px] md:w-[260px] h-[280px] md:h-[320px] flex flex-col items-start gap-4 md:gap-6"
          >
            {/* Badge */}
            <div className={`absolute top-3 right-3 ${capability.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
              {capability.badge}
            </div>

            <div className="flex flex-col items-center gap-3 w-full">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${capability.gradient} flex items-center justify-center`}>
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-white text-lg md:text-xl font-semibold leading-6 font-sans text-center">
                {capability.title}
              </div>
            </div>
            <div className="text-gray-200 text-sm font-normal leading-5 font-sans text-center flex-1 flex items-center">
              {capability.description}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default LogoCarousel;