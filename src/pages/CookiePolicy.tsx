import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, BarChart3, Settings, Target, Users, Mail } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const CookiePolicy = () => {
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
      id: "what-are-cookies",
      title: "1. What Are Cookies?",
      icon: Info,
      content: [
        {
          text: "Cookies are small files that are placed on your computer, mobile device, or any other device by a website. They contain details of your browsing history on that website and have many functions, such as remembering your preferences, helping you navigate between pages efficiently, and generally improving your user experience."
        }
      ]
    },
    {
      id: "how-we-use-cookies",
      title: "2. How We Use Cookies",
      icon: Settings,
      content: [
        {
          text: "We use cookies for the following purposes:"
        },
        {
          subtitle: "To Enable Website Functionality",
          text: "We use cookies that are essential for the operation of our website. This includes enabling core functions like site navigation and access to secure areas. The website cannot function properly without these cookies."
        },
        {
          subtitle: "For Analytics and Performance",
          text: "We use cookies to collect information about how visitors use our website, such as which pages are visited most often and if they get error messages from web pages. These cookies do not collect information that identifies you as an individual. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how the website works."
        },
        {
          subtitle: "For Marketing and Advertising",
          text: "We use third-party cookies to track your behavior on our website to provide you with relevant advertisements for our services on other sites and social media platforms. These cookies may collect information about your browsing habits to make advertising more relevant to you."
        }
      ]
    },
    {
      id: "types-of-cookies",
      title: "3. Types of Cookies We Use",
      icon: Cookie,
      content: [
        {
          subtitle: "Essential Cookies",
          text: "These cookies are strictly necessary to provide you with services available through our Site and to enable you to use some of its features. Without these cookies, services like secure login and shopping carts cannot be provided."
        },
        {
          subtitle: "Analytics Cookies",
          text: "These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you."
        },
        {
          subtitle: "Functionality Cookies",
          text: "These cookies allow our website to remember choices you make when you use the Site, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you visit the Site."
        },
        {
          subtitle: "Advertising Cookies",
          text: "These cookies are used to deliver advertisements that are more relevant to you and your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of the advertising campaigns."
        }
      ]
    },
    {
      id: "your-choices",
      title: "4. Your Choices Regarding Cookies",
      icon: Target,
      content: [
        {
          text: "You can control and manage cookies in various ways. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer."
        },
        {
          text: "Please note that if you choose to refuse cookies, you may not be able to use the full functionality of the Site."
        }
      ]
    },
    {
      id: "third-party-cookies",
      title: "5. Third-Party Cookies",
      icon: Users,
      content: [
        {
          text: "Our website may use third-party services that may also place cookies on your device. For example, we use Google Analytics to help us analyze how our Site is used. We recommend that you review the privacy and cookie policies of these third parties."
        }
      ]
    }
  ];

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Strictly necessary for website operation",
      color: "from-red-500 to-red-600",
      icon: Settings
    },
    {
      name: "Analytics Cookies", 
      description: "Help us understand website usage",
      color: "from-blue-500 to-blue-600",
      icon: BarChart3
    },
    {
      name: "Functionality Cookies",
      description: "Remember your preferences and choices",
      color: "from-green-500 to-green-600", 
      icon: Target
    },
    {
      name: "Advertising Cookies",
      description: "Deliver relevant advertisements",
      color: "from-purple-500 to-purple-600",
      icon: Users
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
              <Cookie className="w-4 h-4 text-yellow-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Legal</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              Cookie Policy
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              This Cookie Policy explains what cookies are and how we use them on our website. Learn about the types of cookies we use and your choices.
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
            className="bg-gradient-to-b from-[rgba(251,191,36,0.12)] to-[rgba(251,191,36,0.02)] rounded-[32px] border border-[rgba(251,191,36,0.2)] p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <Cookie className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                  Understanding Cookies
                </h2>
                <p className="text-white opacity-90 text-lg md:text-xl font-normal leading-relaxed font-sans">
                  We encourage you to read this policy so that you can understand what type of information we collect using cookies and how that information is used.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Cookie Types Overview */}
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
              Types of Cookies We Use
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.08)] p-6 md:p-8 flex flex-col items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-2">
                      {type.name}
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans">
                      {type.description}
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center flex-shrink-0">
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
                        <h3 className="text-yellow-300 text-lg font-semibold leading-tight font-sans">
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
      <div className="w-full py-16 md:py-20 bg-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-[32px] border border-yellow-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                6. Contact Us
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                If you have any questions about this Cookie Policy, you can contact us by email:
              </p>
              <a
                href="mailto:aboutelanswer@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 text-xl font-semibold leading-6 font-sans transition-colors underline"
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

export default CookiePolicy;
