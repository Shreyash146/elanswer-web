import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onGetStartedClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#pricing') {
      e.preventDefault();
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="absolute top-6 left-6 right-6 z-[60] flex justify-center pointer-events-none">
      <motion.div
        className="w-full max-w-7xl px-8 py-5 rounded-3xl border border-[rgba(255,255,255,0.15)] backdrop-blur-[30px] bg-gradient-to-r from-[#15161a]/90 via-[#1a1b20]/85 to-[#15161a]/90 flex justify-between items-center shadow-2xl shadow-black/20 pointer-events-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left: Enhanced Logo */}
        <Link to="/">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3">
              {/* Logo with gradient effect */}
              <div className="relative">
                <h1 className="text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-2xl md:text-3xl font-black leading-tight font-sans">
                  Elanswer
                </h1>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 text-white/20 text-2xl md:text-3xl font-black leading-tight font-sans blur-sm -z-10">
                  Elanswer
                </div>
              </div>

              {/* Enhanced AI Badge */}
              <motion.div
                className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30 flex justify-center items-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-300 text-sm font-bold leading-tight font-sans">AI</div>
              </motion.div>
            </div>
          </motion.div>
        </Link>

        {/* Center: Enhanced Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative px-5 py-3 text-base font-medium text-white/70 hover:text-white transition-all duration-300 rounded-xl font-sans group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Active indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />

              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Right: Enhanced CTA Button - Desktop */}
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              onClick={onGetStartedClick}
              className="relative px-8 py-4 text-base font-bold text-white rounded-2xl font-sans overflow-hidden group transition-all duration-300 bg-gradient-to-r from-green-500 via-green-600 to-green-500 hover:from-green-400 hover:via-green-500 hover:to-green-400 border-2 border-green-400/40 hover:border-green-300/60 shadow-lg hover:shadow-2xl hover:shadow-green-500/25"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-300/30 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Animated shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              <span className="relative z-10 flex items-center gap-2">
                ✨ Get Started
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-gradient-to-b from-[#15161a]/95 to-[#1a1b20]/95 border-white/15 backdrop-blur-[30px]">
              <div className="flex flex-col space-y-8 mt-8">
                {/* Enhanced Mobile Logo */}
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <motion.div
                    className="flex items-center gap-3 px-4 pb-6 border-b border-white/15 cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-2xl font-black leading-tight font-sans">
                      Elanswer
                    </h1>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30 flex justify-center items-center backdrop-blur-sm">
                      <div className="text-blue-300 text-sm font-bold leading-tight font-sans">AI</div>
                    </div>
                  </motion.div>
                </Link>

                {/* Enhanced Mobile Navigation Links */}
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative text-left px-6 py-4 text-lg text-white/80 font-medium hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-400 to-purple-400 group-hover:h-8 transition-all duration-300 rounded-full" />
                    {item.name}
                  </motion.a>
                ))}

                {/* Enhanced Mobile CTA Button */}
                <motion.div
                  className="px-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      onGetStartedClick?.();
                    }}
                    className="relative w-full px-8 py-5 text-lg font-bold text-white rounded-2xl font-sans overflow-hidden group transition-all duration-300 bg-gradient-to-r from-green-500 via-green-600 to-green-500 hover:from-green-400 hover:via-green-500 hover:to-green-400 border-2 border-green-400/40 hover:border-green-300/60 shadow-lg hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-300/30 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ✨ Get Started
                    </span>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
