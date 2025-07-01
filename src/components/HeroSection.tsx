
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';

const HeroSection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Glass Card Container */}
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-2xl">
          {/* Wedding Quote */}
          <div className="mb-8">
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

          {/* Couple Names */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <EditableText
                value={weddingData.couple.groomName}
                onSave={async (value) => {
                  await updateWeddingData({ couple: { ...weddingData.couple, groomName: value } });
                }}
                isLoggedIn={isLoggedIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
              />
              <div className="text-3xl md:text-4xl text-purple-400 font-light">&</div>
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

          {/* Couple Image */}
          <div className="mt-12">
            <div className="relative inline-block">
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-4 border border-white/20">
                <img
                  src={weddingData.couple.image}
                  alt="Wedding Couple"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
