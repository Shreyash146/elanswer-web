import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const faqs = [
    {
      question: "What businesses do you work with?",
      answer: "We specialize in SMBs across e-commerce, healthcare, restaurants, and local services. Our AI automation solutions are tailored to each industry's unique needs and workflows."
    },
    {
      question: "How long does implementation take?",
      answer: "We aim for under one week for starter workflows. More complex enterprise solutions typically take 2-4 weeks, depending on the scope and integration requirements."
    },
    {
      question: "How do you price your services?",
      answer: "Our pricing starts at $500/month for basic automation workflows, $1,000/month for comprehensive solutions, and custom pricing for enterprise-level implementations."
    },
    {
      question: "Do you offer training or documentation?",
      answer: "Yes—we provide automated handover documentation and quick-start guides with every project. We also offer training sessions to ensure your team can effectively use and maintain the solutions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our AI automation services
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:bg-accent/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;