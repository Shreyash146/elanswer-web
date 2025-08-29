
import HeroSection from '@/components/HeroSection';
import CompanyLogos from '@/components/CompanyLogos';
import NicheHighlightsSection from '@/components/NicheHighlightsSection';
import ServicePackagesSection from '@/components/ServicePackagesSection';
import UseCaseExamplesSection from '@/components/UseCaseExamplesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import StructuredData from '@/components/StructuredData';
import SEOHead from '@/components/SEOHead';
import SecurityComplianceSection from '@/components/SecurityComplianceSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Head */}
      <SEOHead
        title="Elanswer – AI Automation & Workflow Solutions for Businesses"
        description="Elanswer helps small & medium businesses automate workflows with AI agents, SaaS solutions, and custom automations. Save time, boost sales, and scale smarter."
        keywords="AI automation, workflow automation, AI chatbots, voice AI, business automation, SaaS solutions, customer service automation, small business AI, automated workflows"
        url="https://elanswer.com/"
        image="https://elanswer.com/og-image.png"
      />

      {/* Structured Data */}
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="service" />

      <HeroSection />
      <CompanyLogos />
      <NicheHighlightsSection />
      <ServicePackagesSection />
      <UseCaseExamplesSection />
      <TestimonialsSection />
      <ProcessSection />
      <SecurityComplianceSection />
      <FAQSection />
      <LeadCaptureSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
