import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Settings, User, CreditCard, Shield, Eye, XCircle, AlertCircle, Scale, Mail } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';

const TermsOfService = () => {
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
      id: "services-provided",
      title: "1. Services Provided",
      icon: Settings,
      content: [
        {
          text: "Elanswer provides AI automation services for businesses, including but not limited to AI chatbots, AI voice agents, automated booking systems, and workflow automations. The specific features of the Services are described on the Site and in any separate agreements or proposals between you and Elanswer."
        }
      ]
    },
    {
      id: "your-account",
      title: "2. Your Account",
      icon: User,
      content: [
        {
          text: "If you are a client of Elanswer, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated. You are responsible for safeguarding your password and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
        }
      ]
    },
    {
      id: "pricing-payment",
      title: "3. Pricing and Payment",
      icon: CreditCard,
      content: [
        {
          subtitle: "Service Plans",
          text: "Our Services are offered on a subscription basis as outlined on our Pricing page. You agree to pay all fees for the plan you select."
        },
        {
          subtitle: "Billing",
          text: "All payments are processed through a third-party payment processor. You agree to provide a valid payment method and authorize our payment processor to charge your card on a recurring basis."
        },
        {
          subtitle: "Refunds",
          text: "All payments are non-refundable, except as explicitly stated in our Refund Policy."
        },
        {
          subtitle: "Changes to Pricing",
          text: "We reserve the right to change our pricing at any time. We will provide you with reasonable notice of any price change before it takes effect."
        }
      ]
    },
    {
      id: "user-responsibilities",
      title: "4. User Responsibilities and Prohibited Activities",
      icon: AlertCircle,
      content: [
        {
          text: "You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You are responsible for all your activities in connection with the Services. Prohibited activities include, but are not limited to:"
        },
        {
          text: "• Using the Services for any illegal or unauthorized purpose.\n• Using our AI agents or automations to send unsolicited or spam messages.\n• Impersonating any person or entity.\n• Violating the intellectual property rights of others.\n• Uploading or distributing any malicious software, viruses, or harmful code."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property Rights",
      icon: Shield,
      content: [
        {
          subtitle: "Our Content",
          text: "All content on the Site, including text, graphics, logos, images, and software, is the property of Elanswer or its licensors and is protected by copyright and other intellectual property laws."
        },
        {
          subtitle: "Your Content",
          text: "You retain all intellectual property rights in any data, content, or other materials you provide to us to use with the Services (\"Your Content\"). You grant us a limited, non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display Your Content solely for the purpose of providing and improving the Services."
        }
      ]
    },
    {
      id: "confidentiality",
      title: "6. Confidentiality",
      icon: Eye,
      content: [
        {
          text: "Both parties agree to treat all non-public information received from the other party as confidential. This includes, but is not limited to, business plans, financial information, technical data, and client information. We will not use your confidential information for any purpose other than to fulfill our obligations under these Terms."
        }
      ]
    },
    {
      id: "termination",
      title: "7. Termination",
      icon: XCircle,
      content: [
        {
          text: "We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will cease immediately."
        }
      ]
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability",
      icon: AlertCircle,
      content: [
        {
          text: "In no event shall Elanswer, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; or (iii) unauthorized access, use, or alteration of your transmissions or content."
        }
      ]
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      icon: Scale,
      content: [
        {
          text: "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="Terms of Service - Elanswer AI Automation"
        description="Read Elanswer's terms of service for our AI automation services, including chatbots, voice AI, and workflow automation solutions."
        keywords="elanswer terms of service, AI automation terms, service agreement, chatbot terms"
        url="https://elanswer.com/terms-of-service"
        canonical="https://elanswer.com/terms-of-service"
        noIndex={false}
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
              <FileText className="w-4 h-4 text-green-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Legal</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Terms of Service
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              These Terms of Service govern your use of our website and AI automation services. Please read carefully before using our services.
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
            className="bg-gradient-to-b from-[rgba(34,197,94,0.12)] to-[rgba(34,197,94,0.02)] rounded-[32px] border border-[rgba(34,197,94,0.2)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <FileText className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  Welcome to Elanswer!
                </h2>
                <p className="text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans">
                  By accessing or using the Site or our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Site or the Services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full py-16 md:py-20 bg-black">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
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
                        <h3 className="text-green-300 text-lg font-semibold leading-tight font-sans">
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
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-[32px] border border-green-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                10. Contact Us
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                If you have any questions about these Terms, please contact us at:
              </p>
              <a
                href="mailto:aboutelanswer@gmail.com"
                className="text-green-400 hover:text-green-300 text-xl font-semibold leading-6 font-sans transition-colors underline"
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

export default TermsOfService;
