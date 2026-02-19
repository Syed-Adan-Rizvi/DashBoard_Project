"use client";
import { useState } from 'react';
import PricingCard from '@/components/packagescomponent/PricingCard';
import FAQItem from '@/components/packagescomponent/FAQItem';
import { ShieldCheckIcon, GlobeAltIcon, BoltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function PackagesPage() {
  const [isYearly, setIsYearly] = useState(false);

  // === PRICING DATA ===
  const plans = [
    {
      name: "Basic",
      monthlyPrice: 19,
      description: "Perfect for individuals getting started.",
      buttonText: "Upgrade Now",
      features: ["1,000 API requests/month", "Basic try-on generation", "Email support", "720p output quality", "5 saved looks"]
    },
    {
      name: "Pro",
      monthlyPrice: 49,
      description: "Great for growing businesses.",
      buttonText: "Upgrade Now",
      features: ["10,000 API requests/month", "Advanced try-on generation", "Priority email support", "1080p output quality", "50 saved looks", "Batch processing", "Custom model uploads"]
    },
    {
      name: "Advanced",
      monthlyPrice: 99,
      description: "For large-scale operations.",
      buttonText: "Upgrade Now",
      features: ["50,000 API requests/month", "Premium try-on generation", "24/7 priority support", "4K output quality", "Unlimited saved looks", "Batch processing", "Custom model upload", "API webhooks", "Dedicated account manager"]
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      description: "Custom solutions for enterprises.",
      buttonText: "Contact Sales",
      features: ["Unlimited API requests", "Ultra-low latency generation", "Dedicated support team", "8K output quality", "Unlimited everything", "Custom integrations", "SLA guarantee", "On-premise deployment", "White-label solution", "Custom AI model training"]
    }
  ];

  return (
    <div className="min-h-screen pb-10">
      
      {/* HEADER & TOGGLE */}
      <div className="text-center mb-16 mt-8">
        <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
          Scalable Pricing
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Flexible plans for <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">every growth stage</span>
        </h1>
        <p className="text-gray-500 mb-8">Unlock the full potential of AI virtual try-ons. Save 20% on yearly plans.</p>

        {/* TOGGLE SWITCH */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-bold ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
          
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 relative ${isYearly ? 'bg-purple-600' : 'bg-gray-200'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
          
          <span className={`text-sm font-bold ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Yearly <span className="text-green-500 text-xs ml-1">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-24 items-center">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
        ))}
      </div>


      {/* DARK FEATURE SECTION */}
      <div className="bg-[#13131a] rounded-[2.5rem] p-8 md:p-16 max-w-7xl mx-auto mb-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Left: Features */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Everything you need to scale your ecommerce</h2>
            <p className="text-gray-400 mb-10">Join 5,000+ brands using LookCheck to power their virtual shopping experience.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <ShieldCheckIcon className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Enterprise Security</h4>
                <p className="text-xs text-gray-500">SOC2 Type II Compliant</p>
              </div>
              <div>
                <GlobeAltIcon className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Global CDN</h4>
                <p className="text-xs text-gray-500">Fast load times everywhere</p>
              </div>
              <div>
                <BoltIcon className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-white font-bold mb-1">99.9% Uptime</h4>
                <p className="text-xs text-gray-500">Reliability guaranteed</p>
              </div>
              <div>
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Expert Support</h4>
                <p className="text-xs text-gray-500">24/7 dedicated help</p>
              </div>
            </div>
          </div>

          {/* Right: Dark FAQ */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-2">
               <FAQItem isDark={true} question="Can I change plans anytime?" answer="Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately." />
               <FAQItem isDark={true} question="What happens if I exceed my API limit?" answer="We will notify you when you reach 80% of your limit. You can upgrade or pay for overages." />
               <FAQItem isDark={true} question="Do you offer custom enterprise solutions?" answer="Absolutely! Contact our sales team for tailored packages with custom limits." />
               <FAQItem isDark={true} question="Is there a free trial available?" answer="Yes, we offer a 14-day free trial on the Pro plan so you can test all features." />
            </div>
          </div>
        </div>
      </div>


      {/* BOTTOM LIGHT FAQ SECTION */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Got questions?</h2>
        <p className="text-gray-500 mb-10">Everything you need to know about LookCheck pricing.</p>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-left">
           <FAQItem question="Can I change plans anytime?" answer="Yes, you can easily upgrade or downgrade your plan from your dashboard settings. Prorated charges may apply." />
           <FAQItem question="What happens if I cancel my subscription?" answer="Your subscription will remain active until the end of the billing period, after which your account will revert to the free tier." />
           <FAQItem question="Do you offer refunds?" answer="We offer a 30-day money-back guarantee if you are not satisfied with our service, no questions asked." />
           <FAQItem question="Is there a free trial available?" answer="Yes, all paid plans come with a 7-day free trial so you can experience the power of LookCheck risk-free." />
        </div>
      </div>

    </div>
  );
}