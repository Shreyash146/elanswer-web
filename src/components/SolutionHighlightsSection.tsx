import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, Shield } from 'lucide-react';

const SolutionHighlightsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const solutions = [
    {
      icon: Bot,
      title: "Custom AI Agent Engineering",
      description: "Tailored AI agents designed specifically for your business processes and customer interactions."
    },
    {
      icon: Workflow,
      title: "Fully Managed Workflow Pipelines",
      description: "End-to-end automation workflows that handle complex business processes seamlessly."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Monitor performance, track ROI, and gain insights into your automated processes."
    },
    {
      icon: Shield,
      title: "Secure Access Control & Permissions",
      description: "Enterprise-grade security with role-based access control and data protection."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete AI Solution Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate and scale your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionHighlightsSection;