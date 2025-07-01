
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';

const GallerySection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData } = context;

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Gallery</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingData.gallery.map((image, index) => (
              <div key={image.id} className="backdrop-blur-sm bg-white/20 rounded-2xl p-4 border border-white/20">
                <div className="relative group">
                  <img
                    src={image.url}
                    alt={image.caption || `Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 text-white p-3 rounded-b-xl">
                      <p className="text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
