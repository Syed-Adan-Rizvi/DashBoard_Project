
import StatsCard from '@/components/homecomponents/StatsCard'; 
import RevenueChart from '@/components/homecomponents/RevenueChart';
import { CalendarDaysIcon, ArrowTrendingUpIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';


export default async function  DashboardHome() {
  return (
    <div className="p-6 md:p-8 bg-white min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* TOP CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Cyan */}
        <StatsCard 
          title="Period" 
          value="Last 7 Days" 
          color="cyan" 
          icon={CalendarDaysIcon} 
        />

        {/* Card 2: Green */}
        <StatsCard 
          title="Average Daily Requests" 
          value="0.29" 
          color="green" 
          icon={ArrowTrendingUpIcon} 
        />

        {/* Card 3: Purple */}
        
        <StatsCard 
          title="Total Requests" 
          value="2" 
          color="purple" 
          icon={PresentationChartLineIcon} 
        />

      </div>

      {/* CHART SECTION */}
      <RevenueChart />

    </div>
  );
}




















// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
  
//     </div>
//   );
// }
