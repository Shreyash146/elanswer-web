import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Linkedin, X, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCalBooking } from '@/hooks/useCalBooking';

const Footer = () => {
  const { isCalLoaded } = useCalBooking();

  return (
    <div className="w-full bg-black overflow-hidden">
      {/* Section 1 - Top Row (Brand + CTA) */}
      <div className="w-full py-16 md:py-20 border-b border-gray-800">
        <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left (40%) - Brand */}
          <div className="w-full lg:w-2/5 flex flex-col justify-start items-start gap-6">
            <div className="flex justify-start items-center gap-2">
              <div className="text-white text-3xl md:text-4xl font-bold leading-tight font-sans">elanswer</div>
              <div className="px-3 py-1.5 bg-transparent rounded-lg border border-gray-600 flex justify-center items-center">
                <div className="text-gray-400 text-sm font-bold leading-tight font-sans">AI</div>
              </div>
            </div>
            <div className="text-gray-300 text-xl font-normal leading-relaxed font-sans max-w-md">
              AI Automation for Growth-Driven Businesses.
            </div>
          </div>

          {/* Right (60%) - CTA */}
          <div className="w-full lg:w-3/5 flex flex-col justify-start items-start lg:items-end gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                data-cal-namespace="discovery-call"
                data-cal-link="elanswer-ai-automation/discovery-call"
                data-cal-config='{"layout":"month_view"}'
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl font-semibold text-lg leading-6 font-sans shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Free Demo
              </Button>
            </motion.div>
            <div className="text-gray-400 text-base font-normal leading-relaxed font-sans text-left lg:text-right max-w-md lg:max-w-none">
              Get automation tips & case studies in your inbox.
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Middle Row (Navigation Columns) */}
      <div className="w-full py-16 md:py-20">
        <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Services */}
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="text-white text-base font-bold uppercase tracking-wider leading-6 font-sans">
              Services
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Chatbots & Virtual Assistants
              </a>
              <a href="#" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Voice AI Agents
              </a>
              <a href="#" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Workflow Automation
              </a>
              <a href="#" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Custom Integrations
              </a>
              <a href="#" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Data & Analytics
              </a>
              <a href="#" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                AI Consultation
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="text-white text-base font-bold uppercase tracking-wider leading-6 font-sans">
              Company
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Blog
              </Link>
              <Link to="/careers" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Careers
              </Link>
              <Link to="/contact" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Contact
              </Link>
              <a href="mailto:aboutelanswer@gmail.com" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Mail
              </a>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="text-white text-base font-bold uppercase tracking-wider leading-6 font-sans">
              Legal
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/compliance-security" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Compliance & Security
              </Link>
              <Link to="/privacy-policy" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Disclaimer
              </Link>
              <Link to="/cookie-policy" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Cookie Policy
              </Link>
              <Link to="/refund-policy" className="text-gray-300 text-base font-normal leading-6 font-sans cursor-pointer hover:text-white transition-all duration-300">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Column 4: Empty for spacing or future use */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* Section 3 - Bottom Bar (Minimal) */}
      <div className="w-full py-8 border-t border-gray-800">
        <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Copyright */}
          <div className="text-gray-400 text-base font-normal leading-6 font-sans">
            © 2025 Elanswer. All rights reserved.
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center gap-8">
            <motion.a
              href="https://linkedin.com/company/elanswer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Footer;