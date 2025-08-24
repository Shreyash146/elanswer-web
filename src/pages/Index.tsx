
import HeroSection from '@/components/HeroSection';
import CompanyLogos from '@/components/CompanyLogos';
import NicheHighlightsSection from '@/components/NicheHighlightsSection';
import ServicePackagesSection from '@/components/ServicePackagesSection';
import UseCaseExamplesSection from '@/components/UseCaseExamplesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyLogos />
      <NicheHighlightsSection />
      <ServicePackagesSection />
      <UseCaseExamplesSection />
      <TestimonialsSection />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
};

export default Index;
