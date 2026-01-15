import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    icon: Sparkles,
    color: 'from-slate-500 to-slate-600',
    description: 'Perfect for testing and exploration',
    features: [
      '5 videos per month',
      'Basic templates',
      '720p resolution',
      'Watermark included',
      'Community support',
      '30s max duration',
    ],
    limitations: [
      'No API access',
      'Limited voice options',
    ],
    cta: 'Current Plan',
    highlighted: false,
  },
  {
    name: 'Basic',
    price: 29,
    icon: Zap,
    color: 'from-blue-500 to-cyan-600',
    description: 'Great for solo creators',
    features: [
      '50 videos per month',
      'All templates',
      '1080p resolution',
      'No watermark',
      'Priority support',
      '60s max duration',
      'Custom branding',
      'Basic analytics',
    ],
    limitations: [],
    cta: 'Upgrade to Basic',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 79,
    icon: Crown,
    color: 'from-violet-500 to-purple-600',
    description: 'Best for professionals',
    popular: true,
    features: [
      'Unlimited videos',
      'All templates + custom',
      '4K resolution',
      'No watermark',
      '24/7 priority support',
      'Unlimited duration',
      'Custom branding',
      'Advanced analytics',
      'API access',
      'Team collaboration (3 seats)',
      'Premium voices',
      'Early feature access',
    ],
    limitations: [],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: null,
    icon: Rocket,
    color: 'from-orange-500 to-red-600',
    description: 'Custom solution for agencies',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Custom AI training',
      'Volume discounts',
    ],
    limitations: [],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const comparisonFeatures = [
  {
    category: 'Video Generation',
    features: [
      { name: 'Videos per month', free: '5', basic: '50', pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Max duration', free: '30s', basic: '60s', pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Resolution', free: '720p', basic: '1080p', pro: '4K', enterprise: '4K' },
      { name: 'Watermark', free: 'Yes', basic: 'No', pro: 'No', enterprise: 'No' },
    ],
  },
  {
    category: 'Templates & Customization',
    features: [
      { name: 'Template library', free: 'Basic', basic: 'All', pro: 'All + Custom', enterprise: 'All + Custom' },
      { name: 'Custom branding', free: false, basic: true, pro: true, enterprise: true },
      { name: 'Voice options', free: '5', basic: '20', pro: 'All', enterprise: 'All + Custom' },
    ],
  },
  {
    category: 'Features',
    features: [
      { name: 'Analytics', free: false, basic: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
      { name: 'API access', free: false, basic: false, pro: true, enterprise: true },
      { name: 'Team collaboration', free: false, basic: false, pro: '3 seats', enterprise: 'Unlimited' },
      { name: 'White-label', free: false, basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Support level', free: 'Community', basic: 'Priority', pro: '24/7 Priority', enterprise: 'Dedicated' },
      { name: 'SLA', free: false, basic: false, pro: false, enterprise: true },
    ],
  },
];

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
        <p className="text-slate-400 text-lg mb-6">
          Select the perfect plan for your content creation needs
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-3 p-1 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
              billingCycle === 'monthly'
                ? 'bg-violet-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annually')}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
              billingCycle === 'annually'
                ? 'bg-violet-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Annually
            <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const monthlyPrice = plan.price;
          const annualPrice = plan.price ? Math.floor(plan.price * 12 * 0.8) : null;
          
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 ${
                plan.highlighted
                  ? 'border-2 border-violet-500 shadow-2xl shadow-violet-500/20'
                  : 'border border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.price !== null ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? monthlyPrice : Math.floor(annualPrice! / 12)}
                      </span>
                      <span className="text-slate-400">/mo</span>
                    </div>
                    {billingCycle === 'annually' && (
                      <div className="text-sm text-slate-500 mt-1">
                        ${annualPrice} billed annually
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-4xl font-bold text-white">Custom</div>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-xl font-medium mb-6 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-800 hover:bg-slate-750 text-white'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Feature Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 lg:p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Detailed Feature Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-400">Feature</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-slate-400">Free</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-slate-400">Basic</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-violet-400">Pro</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-slate-400">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-slate-800/30">
                    <td colSpan={5} className="py-3 px-4 font-medium text-white">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr
                      key={featureIndex}
                      className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-slate-300">{feature.name}</td>
                      <td className="py-4 px-4 text-center text-sm text-slate-400">
                        {typeof feature.free === 'boolean' ? (
                          feature.free ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span>-</span>
                          )
                        ) : (
                          feature.free
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm text-slate-400">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span>-</span>
                          )
                        ) : (
                          feature.basic
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm text-violet-300 font-medium">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span>-</span>
                          )
                        ) : (
                          feature.pro
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm text-slate-400">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span>-</span>
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 lg:p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              q: 'Can I change plans anytime?',
              a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
            },
            {
              q: 'Is there a free trial for paid plans?',
              a: 'Yes, all paid plans come with a 7-day free trial. No credit card required.',
            },
            {
              q: 'What happens if I exceed my limit?',
              a: 'You\'ll be notified and can upgrade anytime. Extra videos can be purchased as needed.',
            },
          ].map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium text-white">{faq.q}</h3>
              <p className="text-sm text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
