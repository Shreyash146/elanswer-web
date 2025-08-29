import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
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
      id: "information-we-collect",
      title: "1. Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "a. Personal Data",
          text: "While using our Site or Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to: Name, Email address, Phone number, Business name and details, Payment information (processed by third-party payment providers), Any other information you voluntarily provide to us through forms, support requests, or direct communication."
        },
        {
          subtitle: "b. Usage Data", 
          text: "We automatically collect information on how the Site and Services are accessed and used (\"Usage Data\"). This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data."
        },
        {
          subtitle: "c. Cookies and Tracking Technologies",
          text: "We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site."
        }
      ]
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      icon: Eye,
      content: [
        {
          text: "Elanswer uses the collected data for various purposes, including: To provide and maintain our Services, To notify you about changes to our Services, To allow you to participate in interactive features of our Services when you choose to do so, To provide customer support, To gather analysis or valuable information so that we can improve our Services, To monitor the usage of our Services, To detect, prevent, and address technical issues, To provide you with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or inquired about."
        }
      ]
    },
    {
      id: "disclosure-information",
      title: "3. Disclosure of Your Information", 
      icon: Users,
      content: [
        {
          text: "We may disclose your personal information in the good faith belief that such action is necessary to: Comply with a legal obligation, Protect and defend the rights or property of Elanswer, Prevent or investigate possible wrongdoing in connection with the Services, Protect the personal safety of users of the Services or the public, Protect against legal liability. We may also share your information with trusted third-party partners and service providers that help us operate our business, such as payment processors, analytics providers, and marketing platforms. These third parties are obligated to maintain the confidentiality of your information."
        }
      ]
    },
    {
      id: "security-data",
      title: "4. Security of Data",
      icon: Lock,
      content: [
        {
          text: "The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
        }
      ]
    },
    {
      id: "data-protection-rights",
      title: "5. Your Data Protection Rights",
      icon: Shield,
      content: [
        {
          text: "You have certain data protection rights, including: The right to access, update, or delete the information we have on you. The right of rectification to have your information corrected if that information is inaccurate or incomplete. The right to object to our processing of your Personal Data. The right to request the restriction of processing your personal information. The right to data portability to receive a copy of your Personal Data in a structured, machine-readable format. The right to withdraw consent at any time where Elanswer relied on your consent to process your personal information. If you wish to exercise any of these rights, please contact us at aboutelanswer@gmail.com."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="Privacy Policy - Elanswer AI Automation"
        description="Read Elanswer's privacy policy to understand how we collect, use, and protect your personal information when using our AI automation services."
        keywords="elanswer privacy policy, data protection, AI automation privacy, personal information security"
        url="https://elanswer.com/privacy-policy"
        canonical="https://elanswer.com/privacy-policy"
        noIndex={true}
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
              <Shield className="w-4 h-4 text-blue-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Legal</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              This Privacy Policy describes how Elanswer collects, uses, and discloses your information when you use our website and AI automation services.
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
            className="bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] rounded-[32px] border border-[rgba(255,255,255,0.12)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              <p className="text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans">
                By accessing or using the Site and our Services, you agree to the collection and use of your information in accordance with this policy.
              </p>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
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
                        <h3 className="text-blue-300 text-lg font-semibold leading-tight font-sans">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed font-sans">
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

      {/* Additional Sections */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Links to Other Sites */}
            <motion.div
              className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[24px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8"
              variants={itemVariants}
            >
              <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-4">
                6. Links to Other Sites
              </h3>
              <p className="text-gray-300 text-base font-normal leading-relaxed font-sans">
                Our Site may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
              </p>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[24px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8"
              variants={itemVariants}
            >
              <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-4">
                7. Changes to This Privacy Policy
              </h3>
              <p className="text-gray-300 text-base font-normal leading-relaxed font-sans">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-16 md:py-20 bg-black">
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
                8. Contact Us
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                If you have any questions about this Privacy Policy, please contact us by email:
              </p>
              <a
                href="mailto:aboutelanswer@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-xl font-semibold leading-6 font-sans transition-colors underline"
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

export default PrivacyPolicy;
