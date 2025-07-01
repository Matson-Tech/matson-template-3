
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import WeddingDetailsSection from '@/components/WeddingDetailsSection';
import ScheduleSection from '@/components/ScheduleSection';
import GallerySection from '@/components/GallerySection';
import WishesSection from '@/components/WishesSection';
import AdditionalInfoSection from '@/components/AdditionalInfoSection';
import ContactSection from '@/components/ContactSection';
import JewellerSection from '@/components/JewellerSection';

const Index = () => {
  const context = useContext(WeddingContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { globalIsLoading } = context;

  if (globalIsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-700 font-medium">Loading your wedding story...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <WeddingDetailsSection />
        <ScheduleSection />
        <GallerySection />
        <WishesSection />
        <AdditionalInfoSection />
        <ContactSection />
        <JewellerSection />
      </main>
    </div>
  );
};

export default Index;
