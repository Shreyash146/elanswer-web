import React from 'react';
import { Badge } from '@/components/ui/badge';
const Footer = () => {
  return <div className="w-full bg-black overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full py-16 flex flex-col justify-center items-center gap-12">
        <div className="w-full max-w-[1216px] px-4 md:px-8 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-8">
          {/* Brand Section */}
          <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-start items-center gap-1.5">
              <div className="text-gray-100 text-xl font-semibold leading-[30px] font-sans">elanswer.com</div>
              <div className="px-1 py-1.5 bg-transparent rounded border-2 border-green-400 flex justify-center items-center">
                <div className="text-green-400 text-xs font-bold leading-[10px] font-sans">AI</div>
              </div>
            </div>
            <div className="text-gray-300 text-base font-normal leading-6 font-sans">
              AI automation solutions for small businesses. Save time, grow faster with intelligent agents.
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services Column */}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-gray-400 text-base font-medium leading-6 font-sans">Services</div>
                <div className="flex flex-col gap-4">
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    AI Chatbots
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Voice Agents
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Workflow Automation
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Custom Integrations
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Analytics & Reporting
                  </div>
                </div>
              </div>
            </div>

            {/* Support Column */}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-gray-400 text-base font-medium leading-6 font-sans">Support</div>
                <div className="flex flex-col gap-4">
                  <a href="mailto:hello@elanswer.com" className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Contact
                  </a>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Documentation
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Setup Guide
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    FAQs
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Schedule Demo
                  </div>
                </div>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-gray-400 text-base font-medium leading-6 font-sans">Company</div>
                <div className="flex flex-col gap-4">
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    About
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Case Studies
                  </div>
                  <a href="https://linkedin.com/company/elanswer" target="_blank" rel="noopener noreferrer" className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    LinkedIn
                  </a>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Blog
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Partners
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-gray-400 text-base font-medium leading-6 font-sans">Legal</div>
                <div className="flex flex-col gap-4">
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Privacy
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Terms
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Disclaimer
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Accessibility
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Cookie
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Footer;