import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Sparkles, TrendingUp, Heart, ShoppingBag, Star, Search } from 'lucide-react';

type Page = 'dashboard' | 'generate' | 'templates' | 'analytics' | 'pricing' | 'api-keys' | 'tutorials';

interface PromptTemplatesPageProps {
  onNavigate: (page: Page) => void;
}

const templates = [
  {
    id: 1,
    category: 'Affiliate Hard Sell',
    title: 'Product Review Viral Hook',
    icon: TrendingUp,
    color: 'from-red-500 to-orange-600',
    prompt: 'Create a 30-second TikTok promoting [PRODUCT]. Start with "I can\'t believe I waited this long to try this!" Show the product in action, highlight 3 key benefits with text overlays, and end with "Link in bio for 50% off!"',
    tags: ['High-conversion', 'Direct'],
  },
  {
    id: 2,
    category: 'Soft Sell Storytelling',
    title: 'Personal Transformation Story',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    prompt: 'Create a 60-second Instagram Reel about how [PRODUCT] changed my daily routine. Start with "Before vs After", tell a relatable story about the problem, show the solution, and end with a subtle product recommendation.',
    tags: ['Storytelling', 'Relatable'],
  },
  {
    id: 3,
    category: 'COD Product Promo',
    title: 'Unboxing & First Impressions',
    icon: ShoppingBag,
    color: 'from-blue-500 to-cyan-600',
    prompt: 'Create a 30-second unboxing video for [PRODUCT]. Start with excitement, show what\'s in the box, demonstrate first use, and end with "Cash on delivery available!" Include upbeat music and quick cuts.',
    tags: ['E-commerce', 'COD'],
  },
  {
    id: 4,
    category: 'Viral Hook Templates',
    title: 'Problem-Solution Format',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-600',
    prompt: 'Create a 15-second YouTube Short. Start with "POV: You finally found the solution to [PROBLEM]". Show the problem in a funny way, then reveal [PRODUCT] as the solution. Use trending audio and text overlays.',
    tags: ['Viral', 'Trendy'],
  },
  {
    id: 5,
    category: 'Affiliate Hard Sell',
    title: 'Price Comparison Shock',
    icon: Star,
    color: 'from-yellow-500 to-orange-600',
    prompt: 'Create a 30-second video comparing expensive alternatives to [PRODUCT]. Show name brands vs this affordable option, highlight the price difference dramatically, and end with "Same quality, fraction of the price!"',
    tags: ['Comparison', 'Value'],
  },
  {
    id: 6,
    category: 'Soft Sell Storytelling',
    title: 'Day in the Life',
    icon: Heart,
    color: 'from-green-500 to-emerald-600',
    prompt: 'Create a 60-second vlog-style video showing how [PRODUCT] fits into a productive morning routine. Make it aesthetic and aspirational. Naturally integrate the product without being pushy. End with "Shop the look in bio".',
    tags: ['Lifestyle', 'Aesthetic'],
  },
  {
    id: 7,
    category: 'Viral Hook Templates',
    title: 'Controversial Opinion Hook',
    icon: TrendingUp,
    color: 'from-red-500 to-pink-600',
    prompt: 'Create a 30-second video starting with "Unpopular opinion: [CONTROVERSIAL TAKE]" then reveal [PRODUCT] as proof. Use caption "You\'re gonna hate me for this..." Include engagement-baiting elements.',
    tags: ['Engagement', 'Controversial'],
  },
  {
    id: 8,
    category: 'COD Product Promo',
    title: 'Limited Time Offer',
    icon: ShoppingBag,
    color: 'from-orange-500 to-red-600',
    prompt: 'Create a 15-second urgency-driven video for [PRODUCT]. Show timer counting down, highlight "Only 50 left in stock!", demonstrate key feature quickly, and end with "Order now, pay when it arrives!"',
    tags: ['Urgency', 'Scarcity'],
  },
];

export function PromptTemplatesPage({ onNavigate }: PromptTemplatesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(templates.map(t => t.category)));

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    onNavigate('generate');
  };

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Prompt Templates</h1>
        <p className="text-slate-400">Pre-built prompts to jumpstart your video creation</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates..."
            className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
            !selectedCategory
              ? 'bg-violet-500 text-white'
              : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
          }`}
        >
          All Templates
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-violet-500 text-white'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTemplates.map((template, index) => {
          const Icon = template.icon;
          return (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-slate-400 mb-1">{template.category}</div>
                  <h3 className="font-bold text-white mb-2">{template.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prompt */}
              <div className="mb-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-300 leading-relaxed">{template.prompt}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleUseTemplate(template.prompt)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Use Template</span>
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(template.prompt)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white rounded-xl transition-all duration-200"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-600" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No templates found</h3>
          <p className="text-slate-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
