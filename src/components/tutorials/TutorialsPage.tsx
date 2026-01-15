import React from 'react';
import { motion } from 'motion/react';
import { Play, BookOpen, Video, Lightbulb, ExternalLink, Clock } from 'lucide-react';

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with AI Video Generation',
    description: 'Learn the basics of creating your first AI-powered video in minutes',
    duration: '5 min',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    category: 'Beginner',
  },
  {
    id: 2,
    title: 'Writing Effective Prompts for Viral Content',
    description: 'Master the art of prompt engineering for maximum engagement',
    duration: '8 min',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    category: 'Intermediate',
  },
  {
    id: 3,
    title: 'Optimizing for TikTok, Reels, and Shorts',
    description: 'Platform-specific strategies for each social media channel',
    duration: '12 min',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop',
    category: 'Advanced',
  },
  {
    id: 4,
    title: 'Affiliate Marketing Best Practices',
    description: 'How to create high-converting affiliate videos that drive sales',
    duration: '15 min',
    type: 'article',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    category: 'Business',
  },
  {
    id: 5,
    title: 'Advanced Template Customization',
    description: 'Customize templates to match your brand and style',
    duration: '10 min',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop',
    category: 'Advanced',
  },
  {
    id: 6,
    title: 'API Integration Guide',
    description: 'Integrate AI video generation into your existing workflows',
    duration: '20 min',
    type: 'article',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    category: 'Developer',
  },
];

const quickTips = [
  {
    title: 'Hook in 3 Seconds',
    description: 'Grab attention within the first 3 seconds to prevent viewers from scrolling away.',
    icon: Lightbulb,
  },
  {
    title: 'Use Trending Audio',
    description: 'Leverage trending sounds and music to increase discoverability on platforms.',
    icon: Lightbulb,
  },
  {
    title: 'Clear Call-to-Action',
    description: 'Always end with a specific action for viewers to take (link in bio, comment, share).',
    icon: Lightbulb,
  },
  {
    title: 'Test Multiple Versions',
    description: 'Create variations of the same content to A/B test what resonates with your audience.',
    icon: Lightbulb,
  },
];

export function TutorialsPage() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Tutorials & Resources</h1>
        <p className="text-slate-400">Learn how to create viral content and maximize your earnings</p>
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 rounded-2xl p-5"
            >
              <Icon className="w-8 h-8 text-violet-400 mb-3" />
              <h3 className="font-bold text-white mb-2">{tip.title}</h3>
              <p className="text-sm text-slate-400">{tip.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Tutorial Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Video Tutorials & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="group bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-200 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-slate-800 overflow-hidden">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  {tutorial.type === 'video' ? (
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-violet-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {tutorial.category}
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {tutorial.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    {tutorial.type === 'video' ? (
                      <>
                        <Video className="w-4 h-4" />
                        <span>Video Tutorial</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-4 h-4" />
                        <span>Article</span>
                      </>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Need More Help?</h2>
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
          Can't find what you're looking for? Our support team is here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Contact Support
          </button>
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-xl font-medium transition-all duration-200">
            Join Community
          </button>
        </div>
      </motion.div>
    </div>
  );
}
