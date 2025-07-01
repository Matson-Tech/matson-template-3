
import { useContext, useState } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Heart, Send } from 'lucide-react';

const WishesSection = () => {
  const context = useContext(WeddingContext);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (!context) return null;
  
  const { weddingWishes, addWish, setWeddingWishes } = context;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      const newWish = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim()
      };
      
      await addWish(newWish);
      setWeddingWishes(prev => [newWish, ...prev.slice(0, 2)]);
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error adding wish:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishes" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Guest Wishes</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Wishes Form */}
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Heart className="text-red-500" size={20} />
                Leave a Wish
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="wishName">Your Name</Label>
                  <Input
                    id="wishName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="wishMessage">Your Message</Label>
                  <textarea
                    id="wishMessage"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border rounded-lg resize-none h-32 backdrop-blur-sm bg-white/50 border-white/30"
                    placeholder="Share your wishes for the happy couple..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Wish
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Recent Wishes */}
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Recent Wishes</h3>
                <Link to="/wishes">
                  <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/50">
                    View All
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {weddingWishes.length === 0 ? (
                  <p className="text-center text-gray-600 py-8">No wishes yet. Be the first to leave a wish!</p>
                ) : (
                  weddingWishes.slice(0, 3).map((wish) => (
                    <div key={wish.id} className="backdrop-blur-sm bg-white/30 rounded-xl p-4 border border-white/20">
                      <h4 className="font-semibold text-gray-800 mb-2">{wish.name}</h4>
                      <p className="text-gray-700 text-sm">{wish.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
