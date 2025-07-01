
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';

const StorySection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section id="story" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
          <EditableText
            value={weddingData.story.title}
            onSave={async (value) => {
              await updateWeddingData({ story: { ...weddingData.story, title: value } });
            }}
            isLoggedIn={isLoggedIn}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
              <img
                src={weddingData.story.image}
                alt="Our Story"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
              <EditableText
                value={weddingData.story.content}
                onSave={async (value) => {
                  await updateWeddingData({ story: { ...weddingData.story, content: value } });
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

export default StorySection;
