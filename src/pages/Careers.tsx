import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Zap, Heart, Globe, TrendingUp, Code, MessageSquare, BarChart3, Mail } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';

const Careers = () => {
  // Ensure scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We're at the forefront of AI automation, constantly pushing boundaries and exploring new possibilities."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "We believe in the power of diverse perspectives and collaborative problem-solving."
    },
    {
      icon: Heart,
      title: "Customer Impact",
      description: "Every solution we build directly helps small businesses grow and succeed."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We invest in our team's development and provide opportunities to learn cutting-edge technologies."
    }
  ];

  const openPositions = [
    {
      title: "AI Automation Engineer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build and optimize AI agents, chatbots, and workflow automations for SMBs.",
      requirements: ["3+ years in AI/ML development", "Experience with Python, Node.js", "Knowledge of automation platforms (n8n, Zapier)", "Strong problem-solving skills"],
      icon: Code
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time", 
      description: "Help our clients maximize value from AI automation solutions and drive retention.",
      requirements: ["2+ years in customer success", "Experience with SaaS products", "Excellent communication skills", "Understanding of business processes"],
      icon: MessageSquare
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Generate qualified leads and help SMBs discover the power of AI automation.",
      requirements: ["1+ years in B2B sales", "Experience with CRM systems", "Strong communication skills", "Interest in AI/automation space"],
      icon: BarChart3
    }
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Flexible remote work options",
    "Health, dental, and vision insurance",
    "Professional development budget",
    "Latest tech equipment provided",
    "Unlimited PTO policy",
    "Team retreats and events",
    "Work with cutting-edge AI technology"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="Careers at Elanswer - Join Our AI Automation Team"
        description="Join Elanswer's growing team of AI automation experts. Explore career opportunities in AI development, chatbot engineering, and business automation solutions."
        keywords="elanswer careers, AI automation jobs, chatbot developer jobs, voice AI careers, remote AI jobs, automation engineer positions"
        url="https://elanswer.com/careers"
        canonical="https://elanswer.com/careers"
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
              <Briefcase className="w-4 h-4 text-purple-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Careers</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Join Our Mission
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              Help us democratize AI automation for small and medium businesses. Build the future of work while making a real impact on businesses worldwide.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Company Values */}
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
                Our Values
              </h2>
              <p className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl mx-auto">
                We're building more than just AI solutions – we're creating a culture of innovation, collaboration, and meaningful impact.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.12)] p-6 md:p-8 flex flex-col items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Open Positions */}
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
                Open Positions
              </h2>
              <p className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl mx-auto">
                Join our growing team and help shape the future of AI automation for businesses.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-8"
              variants={containerVariants}
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[24px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-white text-2xl font-semibold leading-tight font-sans mb-2">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                              {position.department}
                            </span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                              {position.location}
                            </span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                              {position.type}
                            </span>
                          </div>
                        </div>
                        
                        <motion.button
                          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-full font-semibold text-base leading-6 font-sans transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open('mailto:aboutelanswer@gmail.com?subject=Application for ' + position.title, '_blank')}
                        >
                          Apply Now
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed font-sans mb-4">
                        {position.description}
                      </p>
                      
                      <div>
                        <h4 className="text-white text-lg font-semibold leading-tight font-sans mb-3">
                          Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-gray-300 text-base font-normal leading-relaxed font-sans flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-b from-[rgba(147,51,234,0.12)] to-[rgba(147,51,234,0.02)] rounded-[32px] border border-[rgba(147,51,234,0.2)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight font-sans mb-6">
                Benefits & Perks
              </h2>
              <p className="text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl mx-auto">
                We believe in taking care of our team so they can do their best work.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <p className="text-white text-base md:text-lg font-normal leading-relaxed font-sans">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-[32px] border border-purple-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                Don't See Your Role?
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                We're always looking for talented individuals who share our passion for AI automation. Send us your resume and let's talk!
              </p>
              <a
                href="mailto:aboutelanswer@gmail.com?subject=Career Inquiry"
                className="text-purple-400 hover:text-purple-300 text-xl font-semibold leading-6 font-sans transition-colors underline"
              >
                aboutelanswer@gmail.com
              </a>
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

export default Careers;
