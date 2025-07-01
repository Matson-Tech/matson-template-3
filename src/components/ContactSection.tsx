
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 text-center">
              <div className="backdrop-blur-sm bg-purple-100/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 border border-purple-200/30">
                <Phone className="text-purple-600 w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Phone</h3>
              <EditableText
                value={weddingData.contact.phone}
                onSave={async (value) => {
                  await updateWeddingData({ contact: { ...weddingData.contact, phone: value } });
                }}
                isLoggedIn={isLoggedIn}
                className="text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 text-center">
              <div className="backdrop-blur-sm bg-purple-100/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 border border-purple-200/30">
                <Mail className="text-purple-600 w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Email</h3>
              <EditableText
                value={weddingData.contact.email}
                onSave={async (value) => {
                  await updateWeddingData({ contact: { ...weddingData.contact, email: value } });
                }}
                isLoggedIn={isLoggedIn}
                className="text-gray-700"
              />
            </div>

            {/* Address */}
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20 text-center">
              <div className="backdrop-blur-sm bg-purple-100/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 border border-purple-200/30">
                <MapPin className="text-purple-600 w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Address</h3>
              <EditableText
                value={weddingData.contact.address}
                onSave={async (value) => {
                  await updateWeddingData({ contact: { ...weddingData.contact, address: value } });
                }}
                isLoggedIn={isLoggedIn}
                className="text-gray-700"
                multiline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
