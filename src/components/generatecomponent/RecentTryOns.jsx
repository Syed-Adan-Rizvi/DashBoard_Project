import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function RecentTryOns() {
  
  // Dummy Data (Image jaisa dikhne ke liye)
  const history = [
    { id: 1, status: 'Completed', type: 'success', text: 'Result', date: '2026-02-11', time: '14:32:15' },
    { id: 2, status: 'Completed', type: 'success', text: 'Result', date: '2026-02-11', time: '13:15:42' },
    { id: 3, status: 'Completed', type: 'success', text: 'Result', date: '2026-02-10', time: '18:05:33' },
    { id: 4, status: 'Failed',    type: 'failed',  text: 'Pants',  date: '2026-02-10', time: '16:30:22' },
  ];

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Recent Try-Ons</h3>
        <div className="h-px flex-1 bg-gray-200"></div> {/* Line separator */}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {history.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-64 hover:shadow-md transition-shadow">
            
            {/* Status Badge */}
            <div className="flex justify-end">
              <span className={`
                px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                ${item.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
              `}>
                {item.status}
              </span>
            </div>

            {/* Main Content (Result Text/Image) */}
            <div className="flex-1 flex items-center justify-center">
              <h2 className={`text-3xl font-bold ${item.type === 'success' ? 'text-purple-600' : 'text-gray-400'}`}>
                {item.text}
              </h2>
            </div>

            {/* Footer: Date & Icons */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-gray-400 font-medium">{item.date}</p>
                <p className="text-xs text-gray-400 font-medium">{item.time}</p>
              </div>

              {/* Mini Circles (Decorations) */}
              <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white"></div>
                 <div className="w-6 h-6 rounded-full bg-pink-100 border-2 border-white"></div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}