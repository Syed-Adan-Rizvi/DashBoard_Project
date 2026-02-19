import { CalendarDaysIcon, ChartBarIcon, SignalIcon } from '@heroicons/react/24/outline';

export default function StatsCard({ title, value, color, icon: Icon }) {
  
  // Colors set karne ke liye logic
  const colorClasses = {
    cyan: "bg-[#17a2b8]",   // Blue/Cyan wala card
    green: "bg-[#28a745]",  // Green wala card
    purple: "bg-[#d63384]", // Purple wala card
  };

  return (
    <div className={`${colorClasses[color]} rounded-xl p-6 text-white shadow-lg relative overflow-hidden`}>
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <p className="text-sm font-medium opacity-90 mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        {Icon && <Icon className="w-8 h-8 opacity-80" />}
      </div>
      
      {/* Thoda decoration/background effect */}
      <div className="absolute -bottom-4 -right-4 bg-white/10 w-24 h-24 rounded-full blur-xl"></div>
    </div>
  );
}