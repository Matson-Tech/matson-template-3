
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';

const HeroSection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      {/* Additional floating elements specific to hero */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-20 h-20 bg-gradient-to-br from-rose-300/60 to-pink-300/60 rounded-full blur-md animate-bounce delay-200"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-300/60 to-indigo-300/60 rounded-full blur-lg animate-pulse delay-1500"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Enhanced Glass Card Container with stronger effect */}
        <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-12 border border-white/30 shadow-2xl relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-100/20 rounded-3xl"></div>
          
          <div className="relative z-10">
            {/* Wedding Quote with glass background */}
            <div className="mb-8">
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20 mb-4">
                <EditableText
                  value={weddingData.couple.weddingQuote}
                  onSave={async (value) => {
                    await updateWeddingData({ couple: { ...weddingData.couple, weddingQuote: value } });
                  }}
                  isLoggedIn={isLoggedIn}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light italic leading-relaxed"
                  multiline
                />
              </div>
            </div>

            {/* Couple Names with enhanced glass effect */}
            <div className="space-y-4">
              <div className="backdrop-blur-md bg-white/25 rounded-2xl p-8 border border-white/25 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="backdrop-blur-sm bg-gradient-to-r from-white/30 to-purple-100/30 rounded-xl p-4 border border-white/20">
                    <EditableText
                      value={weddingData.couple.groomName}
                      onSave={async (value) => {
                        await updateWeddingData({ couple: { ...weddingData.couple, groomName: value } });
                      }}
                      isLoggedIn={isLoggedIn}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
                    />
                  </div>
                  
                  <div className="backdrop-blur-sm bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full p-6 border border-white/20">
                    <div className="text-3xl md:text-4xl text-purple-600 font-light">&</div>
                  </div>
                  
                  <div className="backdrop-blur-sm bg-gradient-to-l from-white/30 to-pink-100/30 rounded-xl p-4 border border-white/20">
                    <EditableText
                      value={weddingData.couple.brideName}
                      onSave={async (value) => {
                        await updateWeddingData({ couple: { ...weddingData.couple, brideName: value } });
                      }}
                      isLoggedIn={isLoggedIn}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Couple Image with multiple glass layers */}
            <div className="mt-12">
              <div className="relative inline-block">
                {/* Outer glass container */}
                <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-6 border border-white/25 shadow-2xl">
                  {/* Inner glass frame */}
                  <div className="backdrop-blur-md bg-white/20 rounded-2xl p-4 border border-white/20">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={weddingData.couple.image}
                        alt="Wedding Couple"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg transition-transform hover:scale-105 duration-300"
                      />
                      {/* Image overlay for extra glass effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10 rounded-xl"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-300/60 to-pink-300/60 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-blue-300/60 to-purple-300/60 rounded-full blur-sm animate-ping"></div>
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gradient-to-br from-rose-300/60 to-pink-300/60 rounded-full blur-sm animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
