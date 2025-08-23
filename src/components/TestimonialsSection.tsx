import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "This tool has made data analysis straightforward. It's simple, clean, and effective.",
      name: "Breanna Butler",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The visualizations are stunning! They make even the most complex metrics easy to understand and act on.",
      name: "George Dean",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The ability to integrate data from multiple platforms is a huge win. Everything flows seamlessly into one clear view.",
      name: "Robert Nguyen",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "This product has simplified my life and enhanced my productivity. It's incredibly user-friendly, and the support team has been responsive and helpful. I'm truly impressed!",
      name: "Deanna Turner",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "I love how customizable it is. I've tailored it to track the exact KPIs that matter to my business.",
      name: "Michael Lee",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The dashboard is incredibly reliable, always providing real-time updates that help me stay informed.",
      name: "Sergio Williams",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "I've used many dashboards, but this one stands out for its accuracy and speed. It's perfect for keeping our team aligned.",
      name: "Scott Mcdaniel",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "This tool has made data analysis straightforward. It's simple, clean, and effective.",
      name: "Lisa Tran",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "Since adopting this tool, our team has been more productive, with fewer miscommunications about our performance data.",
      name: "April Gill",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=face"
    }
  ];

  // Double the testimonials array for seamless looping
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-black overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full py-16 md:py-24 flex flex-col justify-center items-center gap-12 md:gap-20">
        <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col justify-start items-center gap-12 md:gap-16">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-4">
            <div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3">
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Testimonials</div>
            </div>
            <div className="text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans">What our customers say</div>
            <div className="opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans">Find out why our users choose us and how our product has made a difference in their journey. Your success story could be the next one we feature!</div>
          </div>
          
          <div className="relative w-full h-[600px] overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Animated testimonials grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              {/* First column - normal speed */}
              <motion.div 
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: '0%' }}
                animate={{ 
                  opacity: 1, 
                  y: '-50%' 
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0 },
                  y: {
                    duration: 20,
                    delay: 0.5,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }}
              >
                {doubledTestimonials.slice(0, 6).map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
              
              {/* Second column - slower speed */}
              <motion.div 
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: '0%' }}
                animate={{ 
                  opacity: 1, 
                  y: '-50%' 
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: {
                    duration: 30,
                    delay: 0.7,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }}
              >
                {doubledTestimonials.slice(6, 12).map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
              
              {/* Third column - normal speed */}
              <motion.div 
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: '0%' }}
                animate={{ 
                  opacity: 1, 
                  y: '-50%' 
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 },
                  y: {
                    duration: 20,
                    delay: 0.9,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }}
              >
                {doubledTestimonials.slice(12, 18).map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="p-8 bg-gradient-to-b from-[rgba(196,227,255,0.10)] to-[rgba(196,227,255,0.02)] bg-black rounded-2xl border border-[rgba(255,255,255,0.12)] flex flex-col gap-8 flex-shrink-0">
      <div className="flex flex-col gap-8">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-200 text-base font-normal leading-6">{testimonial.text}</p>
        <div className="flex items-center gap-3">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="text-white text-sm font-semibold leading-5">{testimonial.name}</div>
            <div className="text-gray-200 text-sm font-normal leading-5">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
