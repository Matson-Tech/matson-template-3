
import { useContext } from 'react';
import { WeddingContext } from '@/contexts/WeddingContext';
import EditableText from './EditableText';
import { Clock } from 'lucide-react';

const ScheduleSection = () => {
  const context = useContext(WeddingContext);
  
  if (!context) return null;
  
  const { weddingData, isLoggedIn, updateWeddingData } = context;

  return (
    <section id="schedule" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-12 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Wedding Schedule</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {weddingData.schedule.map((item, index) => (
              <div key={item.id} className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="backdrop-blur-sm bg-purple-100/50 rounded-full p-3 border border-purple-200/30">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <EditableText
                        value={item.time}
                        onSave={async (value) => {
                          const updatedSchedule = [...weddingData.schedule];
                          updatedSchedule[index] = { ...item, time: value };
                          await updateWeddingData({ schedule: updatedSchedule });
                        }}
                        isLoggedIn={isLoggedIn}
                        className="text-lg font-semibold text-purple-600"
                      />
                      
                      <EditableText
                        value={item.event}
                        onSave={async (value) => {
                          const updatedSchedule = [...weddingData.schedule];
                          updatedSchedule[index] = { ...item, event: value };
                          await updateWeddingData({ schedule: updatedSchedule });
                        }}
                        isLoggedIn={isLoggedIn}
                        className="text-xl font-bold text-gray-800"
                      />
                    </div>
                    
                    <EditableText
                      value={item.description}
                      onSave={async (value) => {
                        const updatedSchedule = [...weddingData.schedule];
                        updatedSchedule[index] = { ...item, description: value };
                        await updateWeddingData({ schedule: updatedSchedule });
                      }}
                      isLoggedIn={isLoggedIn}
                      className="text-gray-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
