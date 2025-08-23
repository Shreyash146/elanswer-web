import React from 'react';
import { Badge } from '@/components/ui/badge';
const Footer = () => {
  return <div className="w-full bg-black overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full py-16 flex flex-col justify-center items-center gap-12">
        <div className="w-full max-w-[1216px] px-4 md:px-8 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-8">
          {/* Brand Section */}
          <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-start items-center gap-1.5">
              <div className="text-gray-100 text-xl font-semibold leading-[30px] font-sans">Webfluin</div>
              <div className="px-1 py-1.5 bg-transparent rounded border-2 border-indigo-400 flex justify-center items-center">
                <div className="text-indigo-600 text-xs font-bold leading-[10px] font-sans">LAND</div>
              </div>
            </div>
            <div className="text-gray-300 text-base font-normal leading-6 font-sans">
              Redefining possibilities and driving progress through technology and creativity.
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products Column */}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-gray-400 text-base font-medium leading-6 font-sans">Products</div>
                <div className="flex flex-col gap-4">
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Sitesprint
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                      Boardly
                    </div>
                    <Badge className="bg-green-800 text-green-200 border-green-600 text-xs">
                      Badge
                    </Badge>
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Vistadash
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Lumina
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Spectra
                  </div>
                </div>
              </div>
            </div>

            {/* Support Column */}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="text-gray-400 text-base font-medium leading-6 font-sans">Support</div>
                <div className="flex flex-col gap-4">
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Contact
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Community
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Live chat
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Guides
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Feedback
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
                    Careers
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Partnerships
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Blog
                  </div>
                  <div className="text-gray-100 text-base font-medium leading-6 font-sans cursor-pointer hover:text-gray-300 transition-colors">
                    Press
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