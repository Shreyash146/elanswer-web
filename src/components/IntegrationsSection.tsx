import React from 'react';
import { motion } from 'framer-motion';
import { 
  Slack, 
  Mail, 
  Calendar, 
  MessageSquare, 
  Database, 
  CreditCard, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Zap,
  Globe,
  Phone
} from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    { icon: Slack, name: 'Slack', delay: 0 },
    { icon: Mail, name: 'Email', delay: 0.5 },
    { icon: Calendar, name: 'Google Calendar', delay: 1.0 },
    { icon: MessageSquare, name: 'WhatsApp', delay: 1.5 },
    { icon: Database, name: 'CRM Systems', delay: 2.0 },
    { icon: CreditCard, name: 'Stripe', delay: 0.2 },
    { icon: ShoppingCart, name: 'Shopify', delay: 0.7 },
    { icon: Users, name: 'HubSpot', delay: 1.2 },
    { icon: BarChart3, name: 'Analytics', delay: 1.7 },
    { icon: Zap, name: 'Zapier', delay: 0.4 },
    { icon: Globe, name: 'WordPress', delay: 0.9 },
    { icon: Phone, name: 'Twilio', delay: 1.4 }
  ];

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Integrate With Tools You Know and Love
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ElAnswer seamlessly connects with 100+ popular business tools and platforms
          </motion.p>
          <motion.a
            href="#"
            className="inline-block mt-4 text-primary hover:text-primary-dark font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View our complete integration list →
          </motion.a>
        </div>

        <div className="relative h-96 overflow-hidden">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            
            // Create scattered positioning
            const positions = [
              { left: '10%', top: '20%' },
              { right: '15%', top: '10%' },
              { left: '20%', top: '60%' },
              { right: '25%', top: '70%' },
              { left: '35%', top: '30%' },
              { right: '35%', top: '45%' },
              { left: '50%', top: '15%' },
              { right: '45%', top: '80%' },
              { left: '65%', top: '50%' },
              { right: '10%', top: '30%' },
              { left: '80%', top: '25%' },
              { right: '20%', top: '55%' }
            ];

            const position = positions[index % positions.length];

            return (
              <motion.div
                key={integration.name}
                className="absolute"
                style={position}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: integration.delay,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-lg border border-border group hover:shadow-xl transition-all duration-300"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: integration.delay * 2
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:from-accent group-hover:to-primary transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;