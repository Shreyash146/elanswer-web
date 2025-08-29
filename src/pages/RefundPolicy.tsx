import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, XCircle, CheckCircle, FileText, Calendar, Settings, Mail } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const RefundPolicy = () => {
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

  const sections = [
    {
      id: "general-policy",
      title: "1. General Policy",
      icon: XCircle,
      content: [
        {
          text: "All payments for our AI automation services are non-refundable. Our pricing is based on the value delivered through the setup, maintenance, and ongoing support of custom AI agents and workflows. Once a service has been initiated and payment has been made, we do not offer refunds, partial refunds, or credits."
        }
      ]
    },
    {
      id: "exceptions-policy",
      title: "2. Exceptions to the General Policy",
      icon: CheckCircle,
      content: [
        {
          text: "We will consider a refund in the following limited circumstance:"
        },
        {
          subtitle: "Failure to Deliver",
          text: "If we are unable to provide the core service that was explicitly agreed upon in a written proposal or contract, and after a reasonable and good-faith effort to resolve the issue within a 30-day period, the service remains non-functional or undelivered."
        },
        {
          text: "In this specific case, you may be entitled to a refund of the initial setup fee or the first monthly payment, at our sole discretion."
        }
      ]
    },
    {
      id: "request-refund",
      title: "3. How to Request a Refund",
      icon: FileText,
      content: [
        {
          text: "To be considered for a refund under the \"Failure to Deliver\" exception, you must:"
        },
        {
          text: "• Submit a written request to us at aboutelanswer@gmail.com within 30 days of the initial payment date.\n• Your request must include a detailed explanation of the issue and all relevant communication or documentation.\n• Upon receipt of your request, we will review the matter and respond within 14 business days."
        }
      ]
    },
    {
      id: "subscription-cancellation",
      title: "4. Subscription Cancellation",
      icon: Calendar,
      content: [
        {
          text: "You may cancel your monthly subscription at any time. Cancellation will take effect at the end of your current billing cycle. A cancellation does not entitle you to a refund for any payments already made. You will retain access to your services until the end of the paid-for period."
        }
      ]
    },
    {
      id: "changes-policy",
      title: "5. Changes to This Policy",
      icon: Settings,
      content: [
        {
          text: "We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Services after any changes constitutes your acceptance of the new policy."
        }
      ]
    }
  ];

  const policyHighlights = [
    {
      title: "Non-Refundable Services",
      description: "All payments are generally non-refundable once services begin",
      icon: XCircle,
      color: "from-red-500 to-red-600"
    },
    {
      title: "30-Day Exception Window",
      description: "Refund requests must be submitted within 30 days",
      icon: Calendar,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Failure to Deliver Only",
      description: "Refunds only considered if core service cannot be delivered",
      icon: CheckCircle,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Flexible Cancellation",
      description: "Cancel subscription anytime at end of billing cycle",
      icon: Settings,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
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
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Legal</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Refund Policy
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              We are committed to providing high-quality AI automation services. This Refund Policy outlines the terms under which refunds may be provided.
            </motion.p>

            <motion.div 
              className="text-center text-gray-400 text-sm font-normal leading-relaxed font-sans"
              variants={itemVariants}
            >
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-b from-[rgba(16,185,129,0.12)] to-[rgba(16,185,129,0.02)] rounded-[32px] border border-[rgba(16,185,129,0.2)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <DollarSign className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  Thank You for Choosing Elanswer
                </h2>
                <p className="text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans">
                  We value your trust in our AI automation services and want to ensure you understand our refund policy clearly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Policy Highlights */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-center text-white text-3xl md:text-4xl font-semibold leading-tight font-sans"
              variants={itemVariants}
            >
              Key Policy Points
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {policyHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8 flex flex-col items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[24px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                    {section.title}
                  </h2>
                </div>

                <div className="ml-16 space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-3">
                      {item.subtitle && (
                        <h3 className="text-emerald-300 text-lg font-semibold leading-tight font-sans">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed font-sans whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-[32px] border border-emerald-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                6. Contact Us
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                If you have any questions about our Refund Policy, please contact us by email:
              </p>
              <a
                href="mailto:aboutelanswer@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 text-xl font-semibold leading-6 font-sans transition-colors underline"
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

export default RefundPolicy;
