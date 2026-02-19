import BillingCards from '@/components/billingcomponents/BillingCards';
import BillingTable from '@/components/billingcomponents/BillingTable';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function BillingPage() {
  return (
    <div className="min-h-screen pb-10">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Billing & Invoices</h1>
            <p className="text-gray-500 mt-2 text-sm">Manage your subscription, secure payments, and billing history.</p>
        </div>

        <div className="flex gap-3">
            {/* Download Button */}
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span>Download All</span>
            </button>

            {/* Upgrade Button (Gradient) */}
            <button className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-pink-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-[1.02]">
                Upgrade Plan
            </button>
        </div>
      </div>

      {/* CARDS SECTION */}
      <BillingCards />

      {/* TABLE SECTION */}
      <BillingTable />

    </div>
  );
}