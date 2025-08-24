import { motion } from 'framer-motion';
import { Search, Code, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We identify high-ROI automation opportunities.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      number: "02",
      icon: Code,
      title: "Development",
      description: "You validate; we build & test.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Deployment",
      description: "Immediate value, fully integrated into your operations.",
      gradient: "from-pink-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers AI automation solutions in weeks, not months
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${step.gradient} border border-border hover:border-primary/30 transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-primary mr-4">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;