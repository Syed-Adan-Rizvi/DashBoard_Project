import { CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function SubHistoryTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-8">
      
      <h3 className="text-xl font-bold text-gray-900 mb-6">Subscription History</h3>

      {/* Table Container for Responsiveness */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          {/* Table Head */}
          <thead>
            <tr className="text-left border-b border-gray-100">
              <th className="pb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Plan Details</th>
              <th className="pb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Duration</th>
              <th className="pb-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-[40%]">Usage</th>
              <th className="pb-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm">
            <tr>
              {/* Column 1: Plan Name */}
              <td className="py-6 font-bold text-gray-900 text-lg align-top">
                Advanced
              </td>

              {/* Column 2: Duration */}
              <td className="py-6 align-top">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-green-600 font-medium bg-green-50 w-fit px-2 py-1 rounded-md text-xs">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Start: Jun 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500 font-medium bg-red-50 w-fit px-2 py-1 rounded-md text-xs">
                    <CalendarIcon className="w-4 h-4" />
                    <span>End: Mar 15, 2026</span>
                  </div>
                </div>
              </td>

              {/* Column 3: Usage Progress Bar */}
              <td className="py-6 px-4 align-top">
                <div className="flex justify-between mb-2 text-xs font-semibold">
                  <span className="text-gray-600">Requests: 15234 / 50000</span>
                  <span className="text-pink-500">34,766 left</span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  {/* Progress Bar Fill (Gradient) */}
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: '35%' }} // Yahan dynamic width aayegi
                  ></div>
                </div>
              </td>

              {/* Column 4: Status Badge */}
              <td className="py-6 text-right align-top">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded-md uppercase tracking-wide">
                  <BoltIcon className="w-3 h-3" /> ACTIVE
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-400">Showing 1 to 1 of 1 subscriptions</p>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white shadow-lg shadow-purple-500/30 text-sm font-bold">1</button>
        </div>
      </div>

    </div>
  );
}

// Icon for the table status
import { BoltIcon } from '@heroicons/react/24/solid';