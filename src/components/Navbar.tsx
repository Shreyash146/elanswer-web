import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: 'Features',
    active: true
  }, {
    name: 'Pricing',
    active: false
  }, {
    name: 'Blog',
    active: false
  }, {
    name: 'About Us',
    active: false
  }, {
    name: 'Contact',
    active: false
  }];

  return (
    <nav className="absolute top-4 left-4 right-4 z-50 flex justify-center">
      <div style={{
        background: 'rgba(21, 22, 26, 0.80)',
        width: '1029px'
      }} className="px-4 py-3 rounded-2xl border border-[rgba(255,255,255,0.12)] backdrop-blur-[20px] flex justify-between items-center bg-[#15161a]/80">
        {/* Logo and Brand */}
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-3">
            <h1 className="text-white text-lg font-semibold leading-7 font-sans">Webfluin</h1>
          </div>
          
          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden lg:block w-px h-4 bg-white/24"></div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-between items-center gap-8">
            {navItems.map(item => (
              <button key={item.name} className="px-2.5 py-2 text-sm leading-5 font-sans text-white transition-opacity hover:opacity-80 font-normal">
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Get Started Button - Desktop */}
        <div className="hidden lg:block">
          <Button className="px-4 py-2.5 text-sm font-semibold leading-5 text-white rounded-xl border border-white/32 font-sans" style={{
            background: 'linear-gradient(180deg, #6445F5 0%, #4128BA 100%)'
          }}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#15161a]/95 border-white/12 backdrop-blur-[20px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map(item => (
                  <button key={item.name} className="text-left px-4 py-3 text-base text-white font-semibold transition-opacity hover:opacity-80" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </button>
                ))}
                
                <div className="px-4 pt-4">
                  <Button className="w-full px-4 py-3 text-sm font-semibold text-white rounded-xl border border-white/32" style={{
                    background: 'linear-gradient(180deg, #6445F5 0%, #4128BA 100%)'
                  }} onClick={() => setIsOpen(false)}>
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
