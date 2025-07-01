
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';
import { Info } from 'lucide-react';

const AdditionalInfoSection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section id="info" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Info className="text-purple-600" size={32} />
              <EditableText
                value={weddingData.moreInfo.title}
                onSave={async (value) => {
                  await updateWeddingData({ moreInfo: { ...weddingData.moreInfo, title: value } });
                }}
                isLoggedIn={isLoggedIn}
                className="text-3xl font-bold text-gray-800"
              />
            </div>
            
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20">
              <EditableText
                value={weddingData.moreInfo.content}
                onSave={async (value) => {
                  await updateWeddingData({ moreInfo: { ...weddingData.moreInfo, content: value } });
                }}
                isLoggedIn={isLoggedIn}
                className="text-gray-700 leading-relaxed text-lg"
                multiline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;
