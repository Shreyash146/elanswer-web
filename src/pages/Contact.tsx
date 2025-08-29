import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Calendar, Users } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { useCalBooking } from '@/hooks/useCalBooking';

const Contact = () => {
  // Ensure scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isCalLoaded } = useCalBooking();

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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "aboutelanswer@gmail.com",
      action: "mailto:aboutelanswer@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a free consultation to discuss your needs",
      contact: "15-30 min call",
      action: "cal",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Quick Chat",
      description: "Start a conversation about your automation needs",
      contact: "Live chat support",
      action: "mailto:aboutelanswer@gmail.com?subject=Quick Chat Request",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "Remote-First Company\nServing Businesses Globally"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Friday\n9:00 AM - 6:00 PM IST"
    },
    {
      icon: Users,
      title: "Response Time",
      info: "Email: Within 24 hours\nDemo Requests: Same day"
    }
  ];



  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="Contact Elanswer - Get Your AI Automation Quote"
        description="Contact Elanswer for AI automation solutions. Book a free consultation, get a custom quote, or chat with our experts about chatbots, voice AI, and workflow automation."
        keywords="contact elanswer, AI automation quote, free consultation, chatbot development, voice AI services, workflow automation contact"
        url="https://elanswer.com/contact"
        canonical="https://elanswer.com/contact"
      />

      {/* Navbar */}
      <div className="relative z-50">
        <NavbarWithModal />
      </div>

      {/* Hero Section */}
      <div className="w-full py-20 md:py-32 bg-black flex flex-col justify-center items-center">
        <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col justify-start items-center gap-12 md:gap-20">
          <motion.div
            className="w-full max-w-[850px] flex flex-col justify-start items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3" variants={itemVariants}>
              <Mail className="w-4 h-4 text-cyan-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Contact</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              Ready to automate your business workflows? Let's discuss how AI can save you time, boost sales, and help you scale smarter.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans mb-6">
                Choose Your Preferred Way
              </h2>
              <p className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl mx-auto">
                Whether you want to book a demo, send an email, or have a quick chat, we're here to help.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] rounded-[24px] border border-[rgba(255,255,255,0.12)] p-6 md:p-8 flex flex-col items-center text-center gap-6 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => {
                    if (method.action === "cal") {
                      // Cal.com booking will be handled by data attributes
                    } else {
                      window.open(method.action, '_blank');
                    }
                  }}
                  {...(method.action === "cal" ? {
                    "data-cal-namespace": "discovery-call",
                    "data-cal-link": "elanswer-ai-automation/discovery-call",
                    "data-cal-config": '{"layout":"month_view"}'
                  } : {})}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight font-sans mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans mb-4">
                      {method.description}
                    </p>
                    <p className="text-cyan-300 text-lg font-semibold leading-6 font-sans">
                      {method.contact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Office Information */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans mb-6">
                Business Information
              </h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {officeInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8 flex flex-col items-center text-center gap-4"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold leading-tight font-sans mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans whitespace-pre-line">
                      {info.info}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-[32px] border border-cyan-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                Don't let manual processes slow down your business. Let's discuss how AI automation can transform your workflows and boost your productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  data-cal-namespace="discovery-call"
                  data-cal-link="elanswer-ai-automation/discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full font-semibold text-lg leading-6 font-sans transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Demo
                </motion.button>
                <motion.a
                  href="mailto:aboutelanswer@gmail.com"
                  className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-full font-semibold text-lg leading-6 font-sans transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
