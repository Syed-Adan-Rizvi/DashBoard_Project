import SettingsHeader from '@/components/settingscomponent/SettingsHeader';
import ProfileForm from '@/components/settingscomponent/ProfileForm';
import APIKeyCard from '@/components/settingscomponent/APIKeyCard';
import { LockClosedIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function SettingsPage() {
  return (
    // Parent div relative rakha hai taki sticky header kaam kare
    <div className="min-h-screen bg-gray-50/50 pb-10">
      
      {/* GLASSY STICKY HEADER */}
      <SettingsHeader />

      {/* CONTENT CONTAINER */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        
        {/* Profile Section */}
        <ProfileForm />

        {/* API Key Section */}
        <APIKeyCard />

        {/* Password Section (Inline code for simplicity as it's similar to Profile) */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-pink-50 rounded-xl text-pink-500">
              <LockClosedIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Change Password</h3>
              <p className="text-sm text-gray-500">Update your account password</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Current Password</label>
              <div className="relative">
                <input type="password" placeholder="Enter current password" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" />
                <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">New Password</label>
              <div className="relative">
                 <input type="password" placeholder="Enter new password" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" />
                 <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Confirm New Password</label>
              <div className="relative">
                 <input type="password" placeholder="Enter confirm new password" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" />
                 <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div className="pt-4">
               <button className="px-6 py-3 bg-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed">
                 Update Password
               </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}