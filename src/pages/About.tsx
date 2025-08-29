import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';

const About = () => {
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

  const features = [
    "Deep expertise in AI automations, workflows & SaaS",
    "Tailored solutions for SMBs starting at $500/mo", 
    "Transparent, partner-first approach — no fluff, just results",
    "Focus on practical ROI, not hype"
  ];

  const missionPoints = [
    {
      icon: Target,
      title: "Recover lost revenue",
      description: "abandoned carts, no-shows, missed leads"
    },
    {
      icon: Zap,
      title: "Save 20+ hours per week",
      description: "with smart automations"
    },
    {
      icon: Users,
      title: "Improve customer experience", 
      description: "with AI-powered assistants"
    },
    {
      icon: CheckCircle,
      title: "Free up teams",
      description: "to focus on high-value work"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="About Elanswer - AI Automation Experts"
        description="Learn about Elanswer's mission to help small and medium businesses automate workflows with AI agents, chatbots, and custom automation solutions. Meet our team of AI automation experts."
        keywords="about elanswer, AI automation company, business automation experts, AI chatbot developers, workflow automation team, small business AI solutions"
        url="https://elanswer.com/about"
        canonical="https://elanswer.com/about"
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
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">About Us</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              About Elanswer
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              We believe that small and medium businesses deserve access to the same powerful AI automations that big corporations use — without the huge budgets or complexity.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans">
                Who We Are
              </h2>
              <p className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl">
                At Elanswer, we are an AI automation agency that builds smart workflows and custom AI agents for e-commerce brands, healthcare providers, restaurants, and service businesses. Our solutions save time, cut costs, and boost revenue — so you can focus on growth while automation runs in the background.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] rounded-[32px] border border-[rgba(255,255,255,0.12)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col gap-8" variants={itemVariants}>
              <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans">
                Our Story
              </h2>
              <div className="flex flex-col gap-6 text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans">
                <p>
                  Hi, I'm <strong className="text-blue-400">Shreyash Jeughale</strong>, founder of Elanswer.
                </p>
                <p>
                  With expertise in AI automations, workflow design (n8n), and SaaS development, I've helped businesses build complex systems that work seamlessly.
                </p>
                <p>
                  But I saw a problem: most SMBs don't need massive, expensive AI projects. They need practical, affordable automations that deliver real results quickly.
                </p>
                <p>
                  <strong className="text-green-400">Elanswer was created to solve exactly that</strong> — to bring ROI-driven AI automation to everyday businesses.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col gap-6 text-center" variants={itemVariants}>
              <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans">
                Our Mission
              </h2>
              <p className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans">
                Our mission is simple:<br />
                <span className="text-blue-400 font-semibold">👉 Help small & medium businesses grow with affordable, scalable AI solutions.</span>
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.12)] p-6 md:p-8 flex flex-col items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Elanswer Section */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans text-center"
              variants={itemVariants}
            >
              Why Choose Elanswer?
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 md:p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg font-normal leading-relaxed font-sans">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Let's Build Section */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans mb-6"
              variants={itemVariants}
            >
              Let's Build the Future Together
            </motion.h2>
            <motion.p 
              className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl mx-auto"
              variants={itemVariants}
            >
              Whether you're a boutique store, a clinic, a restaurant, or a local service provider — Elanswer helps you stay competitive with the right AI tools.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Lead Capture Section */}
      <LeadCaptureSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default About;
