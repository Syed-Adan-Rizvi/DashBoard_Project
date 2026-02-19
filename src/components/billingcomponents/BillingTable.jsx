import { DocumentTextIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function BillingTable() {
  
  // Dummy Data to match image
  const invoices = [
    { id: "INV-2026-001", date: "Feb 1, 2026", name: "Farhan Badr", email: "farhan@lookcheck.com", plan: "ADVANCED", amount: "$99.00", status: "Paid" },
    { id: "INV-2026-002", date: "Feb 1, 2026", name: "Sarah Wilson", email: "sarah@example.com", plan: "PRO", amount: "$49.00", status: "Paid" },
    { id: "INV-2026-003", date: "Feb 5, 2026", name: "Mike Johnson", email: "mike@example.com", plan: "BASIC", amount: "$19.00", status: "Pending" },
    { id: "INV-2026-004", date: "Jan 1, 2026", name: "Emily Chen", email: "emily@example.com", plan: "ADVANCED", amount: "$99.00", status: "Paid" },
    { id: "INV-2026-005", date: "Jan 15, 2026", name: "Alex Kumar", email: "alex@example.com", plan: "PRO", amount: "$49.00", status: "Overdue" },
  ];

  // Helper for status badge colors
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-600';
      case 'Pending': return 'bg-gray-100 text-gray-600';
      case 'Overdue': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
      
      {/* TABS (History / Upcoming) */}
      <div className="flex items-center gap-2 mb-6 bg-gray-50 w-fit p-1 rounded-xl">
        <button className="px-6 py-2 bg-white text-gray-900 font-bold text-sm rounded-lg shadow-sm">History</button>
        <button className="px-6 py-2 text-gray-500 font-medium text-sm hover:bg-gray-200/50 rounded-lg transition-colors">Upcoming</button>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
                type="text" 
                placeholder="Invoice number, email..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
            <button className="px-4 py-1.5 bg-purple-600 text-white text-xs font-bold uppercase rounded-full">All</button>
            <button className="px-4 py-1.5 border border-gray-200 text-gray-500 text-xs font-bold uppercase rounded-full hover:bg-gray-50">Paid</button>
            <button className="px-4 py-1.5 border border-gray-200 text-gray-500 text-xs font-bold uppercase rounded-full hover:bg-gray-50">Pending</button>
            <button className="px-4 py-1.5 border border-gray-200 text-gray-500 text-xs font-bold uppercase rounded-full hover:bg-gray-50">Overdue</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
            <thead>
                <tr className="text-left border-b border-gray-100">
                    <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-4">Invoice</th>
                    <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Customer</th>
                    <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Plan</th>
                    <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {invoices.map((inv) => (
                    <tr key={inv.id} className="group hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0">
                        {/* Invoice Col */}
                        <td className="py-4 pl-4 align-top">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                                    <DocumentTextIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{inv.id}</p>
                                    <p className="text-xs text-gray-400 mt-0.5 uppercase">{inv.date}</p>
                                </div>
                            </div>
                        </td>

                        {/* Customer Col */}
                        <td className="py-4 align-top">
                            <div className="flex items-center gap-3">
                                {/* Initials Avatar */}
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                    {inv.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{inv.name}</p>
                                    <p className="text-xs text-gray-400">{inv.email}</p>
                                </div>
                            </div>
                        </td>

                        {/* Plan Col */}
                        <td className="py-4 align-middle">
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md tracking-wide">
                                {inv.plan}
                            </span>
                        </td>

                        {/* Amount Col */}
                        <td className="py-4 align-middle font-bold text-gray-900">{inv.amount}</td>

                        {/* Status Col */}
                        <td className="py-4 align-middle">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${getStatusStyle(inv.status)}`}>
                                {inv.status}
                            </span>
                        </td>
                        
                        {/* Action Col (Empty in design but kept for structure) */}
                         <td className="py-4 align-middle">
                            <button className="text-gray-400 hover:text-purple-600 font-bold text-xs">View</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500 font-medium">Showing 1 to 5 of 8 entries</p>
        <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400">
                <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white shadow-lg shadow-purple-500/30 text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-xs font-bold">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600">
                <ChevronRightIcon className="w-4 h-4" />
            </button>
        </div>
      </div>

    </div>
  );
}