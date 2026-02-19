import { CheckIcon } from '@heroicons/react/24/solid';

export default function PricingCard({ plan, isYearly }) {
  // Calculate Price: Agar yearly hai to 20% off
  const price = isYearly 
    ? (plan.monthlyPrice * 0.8).toFixed(0) // 20% discount rounded
    : plan.monthlyPrice;

  const isPro = plan.name === "Pro"; // Pro plan dark hai
  const isAdvanced = plan.name === "Advanced"; // Advanced active hai

  return (
    <div className={`
      relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300
      ${isPro 
        ? 'bg-[#13131a] border-gray-800 text-white shadow-2xl shadow-purple-900/20 scale-105 z-10' 
        : 'bg-white border-gray-100 text-gray-900 hover:shadow-xl hover:shadow-gray-100'
      }
    `}>
      
      {/* Most Popular Badge for Pro */}
      {isPro && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest shadow-lg shadow-purple-500/40">
          Most Popular
        </div>
      )}

      {/* Plan Name */}
      <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isPro ? 'text-purple-400' : 'text-gray-400'}`}>
        {plan.name}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-extrabold">${price}</span>
        <span className={`text-sm ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>
          /mo {isYearly && 'billed yearly'}
        </span>
      </div>
      
      <p className={`text-xs mb-8 ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>
        {plan.description}
      </p>

      {/* Features List */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isPro ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
              <CheckIcon className="w-2.5 h-2.5" />
            </div>
            <span className={isPro ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button className={`
        w-full py-3 rounded-xl font-bold text-sm transition-all
        ${isPro 
          ? 'bg-linear-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30' 
          : isAdvanced
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-[#13131a] text-white hover:bg-gray-800'
        }
      `}>
        {isAdvanced ? 'CURRENT PLAN ACTIVE' : plan.buttonText}
      </button>

    </div>
  );
}