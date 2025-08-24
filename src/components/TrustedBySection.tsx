import { motion } from 'framer-motion';
import { Store, Heart, UtensilsCrossed, Wrench } from 'lucide-react';

const TrustedBySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const industries = [
    { name: "E-commerce", icon: Store },
    { name: "Clinics", icon: Heart },
    { name: "Restaurants", icon: UtensilsCrossed },
    { name: "Local Services", icon: Wrench }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Trusted by Growth-Driven Brands
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {industry.name}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Seamless integrations across your tools — plug into CRMs, WhatsApp, Google Calendar, and more.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;