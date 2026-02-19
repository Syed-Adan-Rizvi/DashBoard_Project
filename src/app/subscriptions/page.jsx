import SubInfoCard from '@/components/subpagecomponents/SubInfoCard';
import SubHistoryTable from '@/components/subpagecomponents/SubHistoryTable';
import { BoltIcon, CalendarDaysIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen pb-10">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Subscriptions</h1>
        <p className="text-gray-500 mt-2 text-sm">View your plan details and usage history</p>
      </div>

      {/* Cards Section (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Active Plan */}
        <SubInfoCard 
          type="Active Plan" 
          value="Advanced" 
          subtext="ACTIVE" 
          isBadge={true} 
          icon={BoltIcon} 
        />

        {/* Card 2: Next Billing */}
        <SubInfoCard 
          type="Next Billing" 
          value="15/03/2026" 
          subtext="" 
          icon={CalendarDaysIcon} 
        />

        {/* Card 3: Total Usage */}
        <SubInfoCard 
          type="Total Usage (Current)" 
          value="15234" 
          subtext="Requests used this period" 
          icon={CreditCardIcon} 
        />
        
      </div>

      {/* History Table Section */}
      <SubHistoryTable />

    </div>
  );
}