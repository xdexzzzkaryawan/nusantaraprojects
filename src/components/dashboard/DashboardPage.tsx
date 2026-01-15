import React from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Clock,
  DollarSign,
  Zap,
  Sparkles,
  Key,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Play,
} from 'lucide-react';

type Page = 'dashboard' | 'generate' | 'templates' | 'analytics' | 'pricing' | 'api-keys' | 'tutorials';

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
}

const stats = [
  { label: 'Videos Generated', value: '127', icon: Video, color: 'from-violet-500 to-purple-600', change: '+12%' },
  { label: 'Total Render Time', value: '42.5h', icon: Clock, color: 'from-blue-500 to-cyan-600', change: '+8%' },
  { label: 'Estimated Revenue', value: '$3,247', icon: DollarSign, color: 'from-green-500 to-emerald-600', change: '+23%' },
  { label: 'API Usage', value: '89%', icon: Zap, color: 'from-orange-500 to-red-600', change: '-5%' },
];

const recentVideos = [
  {
    id: 1,
    title: 'Best Wireless Earbuds Under $50',
    platform: 'TikTok',
    duration: '30s',
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1590658165737-15a047b7a0ad?w=400&h=300&fit=crop',
    views: '12.4K',
    created: '2 hours ago',
  },
  {
    id: 2,
    title: 'Top 5 Fitness Gadgets',
    platform: 'Reels',
    duration: '60s',
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=300&fit=crop',
    views: '8.2K',
    created: '5 hours ago',
  },
  {
    id: 3,
    title: 'Ultimate Skincare Routine',
    platform: 'Shorts',
    duration: '30s',
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop',
    views: '15.8K',
    created: '1 day ago',
  },
  {
    id: 4,
    title: 'Gaming Setup Tour 2024',
    platform: 'TikTok',
    duration: '15s',
    status: 'rendering',
    thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
    views: '-',
    created: 'Just now',
  },
];

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's what's happening with your AI videos.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded-lg ${
                  stat.change.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => onNavigate('generate')}
          className="group bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-left hover:scale-[1.02] transition-all duration-200 shadow-xl shadow-violet-500/20"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Generate New Video</h3>
          <p className="text-violet-100/70">Create AI-powered videos in seconds</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => onNavigate('api-keys')}
          className="group bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-left hover:border-slate-700 hover:scale-[1.02] transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <Key className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Manage API Keys</h3>
          <p className="text-slate-400">Configure your AI service keys</p>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => onNavigate('analytics')}
          className="group bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-left hover:border-slate-700 hover:scale-[1.02] transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">View Analytics</h3>
          <p className="text-slate-400">Track performance and revenue</p>
        </motion.button>
      </div>

      {/* Recent Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Videos</h2>
          <button className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {recentVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden bg-slate-800">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {video.status === 'completed' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                )}
                {video.status === 'rendering' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white truncate mb-1">{video.title}</h3>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span>{video.platform}</span>
                  <span>•</span>
                  <span>{video.duration}</span>
                  {video.status === 'completed' && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {video.views}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex-shrink-0 text-right">
                {video.status === 'completed' ? (
                  <div className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm font-medium">
                    Completed
                  </div>
                ) : (
                  <div className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-lg text-sm font-medium">
                    Rendering
                  </div>
                )}
                <div className="text-xs text-slate-500 mt-1">{video.created}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
