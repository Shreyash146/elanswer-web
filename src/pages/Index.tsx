
import HeroSection from '@/components/HeroSection';
import CompanyLogos from '@/components/CompanyLogos';
import FeaturesSection from '@/components/FeaturesSection';
import StatisticsSection from '@/components/StatisticsSection';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyLogos />
      <FeaturesSection />
      <StatisticsSection />
      <CallToActionSection />
      <TestimonialsSection />
      <Footer />
      
      {/* New full-width div block with gradient background */}
      <div 
        className="w-full h-[534px]" 
        style={{
          backgroundImage: 'url(/lovable-uploads/920baf6a-ca4a-4dab-ac22-c6616b8b2705.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
};

export default Index;
