import { CheckCircleIcon, CalendarDaysIcon, ClockIcon, ArrowUpRightIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function BillingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      
      {/* CARD 1: CURRENT PLAN */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
            <CheckCircleIcon className="w-6 h-6" />
          </div>
          <ArrowUpRightIcon className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors cursor-pointer" />
        </div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Plan</p>
        <h3 className="text-2xl font-extrabold text-gray-900 mt-1">Advanced</h3>
        <p className="text-sm text-gray-500 mt-1">Expires on 3/15/2026</p>
      </div>

      {/* CARD 2: NEXT INVOICE */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <CalendarDaysIcon className="w-6 h-6" />
          </div>
          <ArrowUpRightIcon className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors cursor-pointer" />
        </div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Next Invoice</p>
        <h3 className="text-2xl font-extrabold text-gray-900 mt-1">Mar 15, 2026</h3>
        <p className="text-sm text-gray-500 mt-1">Amount: $99.00 USD</p>
      </div>

      {/* CARD 3: TOTAL SPENT */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
            <ClockIcon className="w-6 h-6" />
          </div>
          <ArrowUpRightIcon className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors cursor-pointer" />
        </div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Spent</p>
        <h3 className="text-2xl font-extrabold text-gray-900 mt-1">$1,452.00</h3>
        <p className="text-sm text-gray-500 mt-1">Since June 2025</p>
      </div>

      {/* CARD 4: PAYMENT METHOD (DARK CARD) */}
      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg relative text-white flex flex-col justify-between overflow-hidden">
        {/* Background Gradient for subtle effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

        <div className="flex justify-between items-center mb-6">
           <div className="flex items-center gap-2">
              <CreditCardIcon className="w-5 h-5 text-gray-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Success Payment</span>
           </div>
           <div className="w-8 h-5 bg-gray-600 rounded-sm opacity-50"></div> {/* Chip imitation */}
        </div>

        <div>
            <p className="text-2xl font-mono tracking-widest mb-4">•••• •••• •••• 4242</p>
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-[10px] text-gray-400 uppercase">Expires</p>
                    <p className="text-sm font-bold">12 / 2026</p>
                </div>
                <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-[10px] font-bold uppercase rounded text-white transition-colors">
                    Update
                </button>
            </div>
        </div>
      </div>

    </div>
  );
}