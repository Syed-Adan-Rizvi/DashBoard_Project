import { BoltIcon, CalendarDaysIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function SubInfoCard({ type, value, subtext, icon: Icon, isBadge = false }) {
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden h-40 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
      
      {/* Label / Header */}
      <div className="flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase">
        <Icon className="w-5 h-5" />
        <span>{type}</span>
      </div>

      {/* Main Value */}
      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold text-gray-900 mt-2">{value}</h3>
        
        {/* Logic: Agar Badge hai to Badge dikhaye, warna simple text */}
        {isBadge ? (
          <span className="inline-block mt-2 px-3 py-1 bg-pink-100 text-pink-600 text-[10px] font-bold rounded-full tracking-wide">
            {subtext}
          </span>
        ) : (
          <p className="text-gray-400 text-sm mt-1 font-medium">{subtext}</p>
        )}
      </div>

      {/* Background Decorator Icon (Faded & Big) */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-50 opacity-50 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-32 h-32" />
      </div>

    </div>
  );
}