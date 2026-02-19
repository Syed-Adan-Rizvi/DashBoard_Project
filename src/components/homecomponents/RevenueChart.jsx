"use client"; // Recharts client side chalta hai
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data (Image jaisa)
const data = [
  { name: 'Feb 3', requests: 0 },
  { name: 'Feb 4', requests: 0 },
  { name: 'Feb 5', requests: 0 },
  { name: 'Feb 6', requests: 0 },
  { name: 'Feb 7', requests: 0 },
  { name: 'Feb 8', requests: 2 }, // Graph upar gaya
  { name: 'Feb 9', requests: 0 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Daily Breakdown</h3>
          <p className="text-sm text-gray-500">Last 7 Days</p>
        </div>
        
        {/* Dropdown Button */}
        <button className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5" />
          </svg>
          Last 7 Days
        </button>
      </div>

      {/* CHART */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="requests" 
              stroke="#0ea5e9" // Blue line color
              strokeWidth={3} 
              dot={{ r: 4, fill: "#0ea5e9", strokeWidth: 2, stroke: "#fff" }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}