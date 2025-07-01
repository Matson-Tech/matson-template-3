
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WeddingContext } from '@/contexts/WeddingContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AllWishes = () => {
  const context = useContext(WeddingContext);

  if (!context) return null;

  const { weddingWishes } = context;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/50">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">All Wedding Wishes</h1>
          </div>

          <div className="space-y-6">
            {weddingWishes.length === 0 ? (
              <p className="text-center text-gray-600">No wishes yet. Be the first to leave a wish!</p>
            ) : (
              weddingWishes.map((wish) => (
                <div key={wish.id} className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-gray-800 mb-2">{wish.name}</h3>
                  <p className="text-gray-700">{wish.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWishes;
