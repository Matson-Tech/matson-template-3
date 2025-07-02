
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';

const HeroSection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
      style={{
        backgroundImage: `url(${weddingData.couple.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Additional floating elements specific to hero */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-20 h-20 bg-gradient-to-br from-rose-300/60 to-pink-300/60 rounded-full blur-md animate-bounce delay-200"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-300/60 to-indigo-300/60 rounded-full blur-lg animate-pulse delay-1500"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Enhanced Glass Card Container with stronger effect */}
        <div className="backdrop-blur-xl bg-white/50 rounded-3xl p-12 border border-white/40 shadow-2xl relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-purple-100/30 rounded-3xl"></div>
          
          <div className="relative z-10">
            {/* Wedding Quote with glass background */}
            <div className="mb-8">
              <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/30 mb-4">
                <EditableText
                  value={weddingData.couple.weddingQuote}
                  onSave={async (value) => {
                    await updateWeddingData({ couple: { ...weddingData.couple, weddingQuote: value } });
                  }}
                  isLoggedIn={isLoggedIn}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-light italic leading-relaxed"
                  multiline
                />
              </div>
            </div>

            {/* Couple Names with enhanced glass effect */}
            <div className="space-y-4">
              <div className="backdrop-blur-md bg-white/35 rounded-2xl p-8 border border-white/35 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="backdrop-blur-sm bg-gradient-to-r from-white/40 to-purple-100/40 rounded-xl p-4 border border-white/30">
                    <EditableText
                      value={weddingData.couple.groomName}
                      onSave={async (value) => {
                        await updateWeddingData({ couple: { ...weddingData.couple, groomName: value } });
                      }}
                      isLoggedIn={isLoggedIn}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
                    />
                  </div>
                  
                  <div className="backdrop-blur-sm bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full p-6 border border-white/30">
                    <div className="text-3xl md:text-4xl text-purple-700 font-light">&</div>
                  </div>
                  
                  <div className="backdrop-blur-sm bg-gradient-to-l from-white/40 to-pink-100/40 rounded-xl p-4 border border-white/30">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
