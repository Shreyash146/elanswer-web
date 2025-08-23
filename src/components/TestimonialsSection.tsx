import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Our AI chatbot handles 80% of customer inquiries automatically. It's freed up our team to focus on complex sales opportunities.",
      name: "Sarah Chen",
      role: "Owner, TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The abandoned cart recovery agent increased our online sales by 35%. It's like having a dedicated sales assistant working 24/7.",
      name: "Marcus Rodriguez",
      role: "E-commerce Manager, Urban Boutique",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "Appointment booking automation has transformed our clinic. Patients love the instant scheduling and we've reduced no-shows by 60%.",
      name: "Dr. Emily Johnson",
      role: "Family Medicine Clinic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The AI handles our reservation system and review requests perfectly. We've seen a 25% increase in bookings and our Google rating improved to 4.8 stars.",
      name: "Tony Martinelli",
      role: "Owner, Bella Vista Restaurant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "Setup was incredibly smooth. Within two weeks, our AI agent was handling lead qualification and our sales team could focus on closing deals.",
      name: "Jennifer Park",
      role: "Marketing Director, GreenTech Services",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The customer service automation has been a game-changer. Response times improved from hours to seconds, and customer satisfaction is at an all-time high.",
      name: "David Thompson",
      role: "Operations Manager, HomeCare Plus",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "We were skeptical about AI, but the results speak for themselves. Our follow-up process is now automated and we're closing 40% more deals.",
      name: "Rachel Kim",
      role: "Sales Manager, Local Insurance Agency",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "The voice agent handles our phone inquiries better than our previous staff. It never gets tired and always provides consistent information.",
      name: "Michael Foster",
      role: "Owner, Foster Plumbing Services",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face"
    },
    {
      text: "Our team productivity has skyrocketed. The AI handles routine tasks so we can focus on strategic growth and customer relationships.",
      name: "Lisa Martinez",
      role: "CEO, Digital Marketing Co.",
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
