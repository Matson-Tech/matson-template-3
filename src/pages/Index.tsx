
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl"></div>
        </div>
        
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 border border-white/20 shadow-xl relative z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-700 font-medium">Loading your wedding story...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        {/* Large floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-16 w-48 h-48 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-rose-200/50 to-pink-200/50 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-3/4 left-10 w-24 h-24 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-full blur-lg animate-bounce delay-300"></div>
        <div className="absolute top-10 right-1/3 w-36 h-36 bg-gradient-to-br from-violet-200/40 to-purple-200/40 rounded-full blur-xl animate-bounce delay-700"></div>
        
        {/* Small floating dots */}
        <div className="absolute top-1/3 left-3/4 w-12 h-12 bg-gradient-to-br from-pink-300/60 to-rose-300/60 rounded-full blur-sm animate-ping"></div>
        <div className="absolute bottom-1/2 right-10 w-8 h-8 bg-gradient-to-br from-purple-300/60 to-indigo-300/60 rounded-full blur-sm animate-ping delay-1000"></div>
        <div className="absolute top-2/3 left-20 w-16 h-16 bg-gradient-to-br from-blue-300/50 to-purple-300/50 rounded-full blur-md animate-ping delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-40 right-40 w-20 h-20 bg-gradient-to-br from-purple-200/40 to-pink-200/40 transform rotate-45 blur-lg animate-spin-slow"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 bg-gradient-to-br from-blue-200/40 to-purple-200/40 transform rotate-12 blur-md animate-pulse"></div>
      </div>

      {/* Main Content with enhanced glass effect */}
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
