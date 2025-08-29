import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, AlertTriangle, Globe, Server, Key, Eye, FileCheck, Users, ArrowRight } from 'lucide-react';
import NavbarWithModal from '@/components/NavbarWithModal';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

const ComplianceSecurity = () => {
  const certifiedVendors = [
    {
      category: "Cloud Hosting",
      providers: ["AWS", "Google Cloud", "Azure"],
      certifications: ["SOC 2", "ISO 27001", "GDPR", "HIPAA-ready"],
      icon: Server
    },
    {
      category: "Payments",
      providers: ["Stripe", "PayPal", "Razorpay"],
      certifications: ["PCI DSS compliant"],
      icon: Key
    },
    {
      category: "Messaging & Communication",
      providers: ["Twilio", "WhatsApp Business API"],
      certifications: ["GDPR & CCPA compliant"],
      icon: Globe
    },
    {
      category: "AI Platforms",
      providers: ["OpenAI", "Google Healthcare APIs", "Whisper"],
      certifications: ["HIPAA-ready", "Enterprise-grade security"],
      icon: Eye
    }
  ];

  const securityCommitments = [
    {
      title: "End-to-End Security",
      description: "We use encryption (TLS/SSL) and secure APIs for all data transmissions.",
      icon: Lock,
      implemented: true
    },
    {
      title: "Minimal Data Storage",
      description: "Wherever possible, we avoid storing sensitive customer data on our servers.",
      icon: Server,
      implemented: true
    },
    {
      title: "Privacy by Design",
      description: "Our automations are designed to comply with GDPR, CCPA, and global data privacy regulations.",
      icon: Shield,
      implemented: true
    },
    {
      title: "Custom Policies",
      description: "We work with clients to implement data handling practices that meet their internal standards.",
      icon: FileCheck,
      implemented: true
    }
  ];

  const technicalImplementations = [
    {
      feature: "GDPR Cookie Consent",
      description: "Comprehensive cookie management with granular user controls",
      status: "Implemented"
    },
    {
      feature: "Security Headers",
      description: "CSP, HSTS, X-Frame-Options, and other security headers",
      status: "Implemented"
    },
    {
      feature: "Vulnerability Scanning",
      description: "Automated security scanning and threat detection",
      status: "Implemented"
    },
    {
      feature: "Data Backup & Recovery",
      description: "Automated backup systems with integrity verification",
      status: "Implemented"
    },
    {
      feature: "Rate Limiting",
      description: "API protection and abuse prevention mechanisms",
      status: "Implemented"
    },
    {
      feature: "Performance Monitoring",
      description: "Core Web Vitals optimization and real-time monitoring",
      status: "Implemented"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Head */}
      <SEOHead 
        title="Compliance & Security - Elanswer AI Automation"
        description="Learn about Elanswer's comprehensive approach to data security, compliance, and privacy. We work with certified vendors and follow industry best practices to ensure your AI automation solutions are secure and compliant."
        keywords="elanswer compliance, AI security, data privacy, GDPR compliance, HIPAA ready, SOC 2, ISO 27001, PCI DSS, enterprise security"
        url="https://elanswer.com/compliance-security"
        canonical="https://elanswer.com/compliance-security"
      />

      {/* Navbar */}
      <div className="relative z-50">
        <NavbarWithModal />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Compliance & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Security</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              At Elanswer, we take data security and compliance seriously. Our mission is to help small and medium businesses harness the power of AI automation while ensuring the highest standards of privacy, safety, and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-indigo-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Approach to Compliance</h2>
            </div>
            
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are not just building AI workflows — we are building them responsibly. While Elanswer itself does not hold direct certifications such as HIPAA, SOC 2, ISO 27001, or PCI DSS, we carefully choose and integrate platforms, APIs, and cloud providers that are already certified and compliant.
            </p>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl">
              <p className="text-indigo-200 font-medium">
                This means your solutions are powered by enterprise-grade infrastructure trusted worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certified Vendors Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Certified Vendors We Work With</h2>
            </div>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We rely on globally trusted platforms with proven security and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifiedVendors.map((vendor, index) => (
              <motion.div
                key={vendor.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <vendor.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{vendor.category}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">Providers:</p>
                  <div className="flex flex-wrap gap-2">
                    {vendor.providers.map((provider) => (
                      <span key={provider} className="px-3 py-1 bg-indigo-900/30 text-indigo-200 rounded-full text-sm">
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {vendor.certifications.map((cert) => (
                      <span key={cert} className="px-3 py-1 bg-green-900/30 text-green-200 rounded-full text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Commitments Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Data Security & Privacy Commitments</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <commitment.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-white mr-2">{commitment.title}</h3>
                      {commitment.implemented && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Security Implementation</h2>
            </div>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our website implements enterprise-grade security measures and compliance features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalImplementations.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{item.feature}</h3>
                  <span className="px-2 py-1 bg-green-900/30 text-green-200 rounded-full text-xs flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Legal Disclaimer</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Elanswer is not a certified compliance body and does not independently hold certifications such as HIPAA, SOC 2, ISO 27001, or PCI DSS. Instead, we design solutions using third-party platforms, APIs, and cloud providers that maintain these certifications.
              </p>

              <p className="text-gray-300 leading-relaxed">
                While we follow industry best practices to ensure data security and privacy, ultimate compliance depends on the configuration of your chosen tools, infrastructure, and workflows. Clients are responsible for verifying that the implemented solution meets their internal policies and industry-specific regulatory requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-indigo-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why This Matters for You</h2>
            </div>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              By choosing Elanswer, you're not only adopting AI-powered automation — you're also ensuring:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Trusted Infrastructure",
                description: "Your systems are built on trusted, compliant infrastructure.",
                icon: Server
              },
              {
                title: "Cost & Time Savings",
                description: "You save time and cost by leveraging ready-made compliance from vendors.",
                icon: CheckCircle
              },
              {
                title: "Peace of Mind",
                description: "You gain peace of mind that your business is secure and future-proof.",
                icon: Shield
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to scale with AI automation that's safe, secure, and compliant?
              </h3>

              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default ComplianceSecurity;
