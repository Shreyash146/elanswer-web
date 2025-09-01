import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, ExternalLink, FileX, Copyright, Mail } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';

const Disclaimer = () => {
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
      id: "no-professional-advice",
      title: "1. No Professional Advice",
      icon: Info,
      content: [
        {
          text: "The information on the Site and our Services does not constitute professional business, legal, financial, or any other kind of advice. Any use of our Services or reliance on information from the Site is solely at your own risk. The results you achieve from using our Services will depend on numerous factors, including your specific business needs, industry, market conditions, and your implementation of our solutions. We cannot and do not guarantee any specific outcomes or financial results."
        }
      ]
    },
    {
      id: "external-links-disclaimer",
      title: "2. External Links Disclaimer",
      icon: ExternalLink,
      content: [
        {
          text: "The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties, or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us."
        },
        {
          text: "We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services."
        }
      ]
    },
    {
      id: "errors-omissions-disclaimer",
      title: "3. Errors and Omissions Disclaimer",
      icon: FileX,
      content: [
        {
          text: "While we have made every attempt to ensure that the information contained in the Site is from reliable sources, Elanswer is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Site is provided \"as is,\" with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information."
        }
      ]
    },
    {
      id: "fair-use-disclaimer",
      title: "4. Fair Use Disclaimer",
      icon: Copyright,
      content: [
        {
          text: "The Site and our Services may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of AI automation, and to provide our Services. We believe this constitutes a \"fair use\" of any such copyrighted material as provided for in Section 107 of the U.S. Copyright Law. If you wish to use copyrighted material from the Site for your own purposes that go beyond \"fair use,\" you must obtain permission from the copyright owner."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="Disclaimer - Elanswer AI Automation"
        description="Read Elanswer's disclaimer regarding our AI automation services, including limitations, warranties, and liability information for our chatbot and workflow solutions."
        keywords="elanswer disclaimer, AI automation disclaimer, service limitations, liability disclaimer"
        url="https://elanswer.com/disclaimer"
        canonical="https://elanswer.com/disclaimer"
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
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Legal</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Disclaimer
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              Important information about the use of our website and AI automation services. Please read carefully before using our services.
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
            className="bg-gradient-to-b from-[rgba(255,165,0,0.12)] to-[rgba(255,165,0,0.02)] rounded-[32px] border border-[rgba(255,165,0,0.2)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  Important Notice
                </h2>
                <p className="text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans">
                  The information provided by Elanswer ("we," "us," or "our") on elanswer.com (the "Site") and through our AI automation services (the "Services") is for general informational and educational purposes only. All information on the Site and our Services is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our Services.
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
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
                        <h3 className="text-orange-300 text-lg font-semibold leading-tight font-sans">
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

      {/* Contact Section */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-[32px] border border-orange-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                5. Contact Us
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email:
              </p>
              <a
                href="mailto:aboutelanswer@gmail.com"
                className="text-orange-400 hover:text-orange-300 text-xl font-semibold leading-6 font-sans transition-colors underline"
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

export default Disclaimer;
