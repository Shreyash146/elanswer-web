import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';

const Blog = () => {
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

  const blogPosts = [
    {
      title: "How AI Chatbots Are Revolutionizing Customer Service: A 2025 Guide",
      excerpt: "Discover the revolutionary ways AI chatbots transform customer service. Learn how they offer 24/7 support, cut costs, personalize experiences, and boost customer satisfaction.",
      author: "Shreyash Jeughale",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI Automation",
      image: "/api/placeholder/400/250",
      slug: "ai-chatbots-transform-customer-service",
      featured: true
    },
    {
      title: "5 Workflow Automations Every E-commerce Store Needs",
      excerpt: "From abandoned cart recovery to inventory management, learn which automations can boost your e-commerce revenue by 30%.",
      author: "Shreyash Jeughale",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "E-commerce",
      image: "/api/placeholder/400/250",
      slug: "workflow-automations-ecommerce"
    },
    {
      title: "The ROI of AI Automation for Small Businesses",
      excerpt: "Real case studies showing how SMBs achieved 300% ROI within 6 months of implementing AI automation solutions.",
      author: "Shreyash Jeughale",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Business Growth",
      image: "/api/placeholder/400/250",
      slug: "roi-ai-automation-small-businesses"
    },
    {
      title: "Voice AI Agents: The Future of Phone Support",
      excerpt: "How voice AI can handle appointment bookings, customer inquiries, and support calls 24/7 without human intervention.",
      author: "Shreyash Jeughale",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Voice AI",
      image: "/api/placeholder/400/250",
      slug: "voice-ai-agents-phone-support"
    },
    {
      title: "Integrating AI with Your Existing CRM System",
      excerpt: "Step-by-step guide to seamlessly connect AI automations with popular CRM platforms like HubSpot, Salesforce, and Pipedrive.",
      author: "Shreyash Jeughale",
      date: "November 20, 2024",
      readTime: "8 min read",
      category: "Integration",
      image: "/api/placeholder/400/250",
      slug: "integrating-ai-crm-system"
    },
    {
      title: "Common AI Automation Mistakes to Avoid",
      excerpt: "Learn from the most common pitfalls businesses face when implementing AI automation and how to avoid them.",
      author: "Shreyash Jeughale",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      image: "/api/placeholder/400/250",
      slug: "ai-automation-mistakes-avoid"
    }
  ];

  const categories = [
    "All Posts",
    "AI Automation", 
    "E-commerce",
    "Business Growth",
    "Voice AI",
    "Integration",
    "Best Practices"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead
        title="AI Automation Blog - Expert Insights & Tutorials"
        description="Discover the latest AI automation strategies, tutorials, and case studies. Learn how to implement chatbots, voice AI, and workflow automation for your business."
        keywords="AI automation blog, chatbot tutorials, voice AI guides, workflow automation tips, business automation strategies, AI implementation guides"
        url="https://elanswer.com/blog"
        canonical="https://elanswer.com/blog"
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
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Blog</div>
            </motion.div>
            
            <motion.h1 
              className="text-center text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight font-sans"
              variants={itemVariants}
            >
              AI Automation Insights
            </motion.h1>
            
            <motion.p 
              className="text-center text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-4xl"
              variants={itemVariants}
            >
              Stay updated with the latest trends, tips, and case studies in AI automation for small and medium businesses.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="w-full py-8 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] rounded-[32px] border border-[rgba(255,255,255,0.12)] p-8 md:p-12 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <motion.div className="flex-1" variants={itemVariants}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight font-sans mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full font-semibold text-base leading-6 font-sans transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-96 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center"
                variants={itemVariants}
              >
                <BookOpen className="w-16 h-16 text-indigo-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
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
                Latest Articles
              </h2>
              <p className="text-white opacity-80 text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl mx-auto">
                Practical insights and actionable tips to help you succeed with AI automation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {blogPosts.slice(1).map((post, index) => (
                <Link key={index} to={`/blog/${post.slug}`}>
                  <motion.article
                    className="bg-gradient-to-b from-[rgba(196,227,255,0.08)] to-[rgba(196,227,255,0.02)] rounded-[24px] border border-[rgba(255,255,255,0.08)] overflow-hidden group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-indigo-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-white text-xl font-semibold leading-tight font-sans mb-3 group-hover:text-indigo-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base font-normal leading-relaxed font-sans mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date.split(',')[0]}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
          <motion.div
            className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[32px] border border-indigo-500/20 p-8 md:p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex flex-col items-center gap-6" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight font-sans">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-lg font-normal leading-relaxed font-sans max-w-2xl">
                Get the latest AI automation insights, case studies, and tips delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full font-semibold text-base leading-6 font-sans transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
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

export default Blog;
