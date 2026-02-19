import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function ProfileForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
          <UserCircleIcon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Profile Information</h3>
          <p className="text-sm text-gray-500">Update your personal details</p>
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
          <input type="text" defaultValue="Adan Rizvi" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
          <input type="email" defaultValue="Adan@lookcheck.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
          <input type="text" defaultValue="+92 300 1234567" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Company</label>
          <input type="text" defaultValue="LookCheck Inc." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" />
        </div>

      </div>
    </div>
  );
}