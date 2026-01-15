import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  DollarSign,
  Eye,
  Heart,
  Share2,
  Download,
  Calendar,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { date: 'Jan 8', revenue: 420, views: 12500 },
  { date: 'Jan 9', revenue: 580, views: 15200 },
  { date: 'Jan 10', revenue: 750, views: 18900 },
  { date: 'Jan 11', revenue: 620, views: 16300 },
  { date: 'Jan 12', revenue: 890, views: 22100 },
  { date: 'Jan 13', revenue: 1240, views: 28500 },
  { date: 'Jan 14', revenue: 980, views: 24200 },
];

const platformData = [
  { name: 'TikTok', value: 45, color: '#000000' },
  { name: 'Reels', value: 35, color: '#E4405F' },
  { name: 'Shorts', value: 20, color: '#FF0000' },
];

const topVideos = [
  {
    id: 1,
    title: 'Best Wireless Earbuds Under $50',
    views: '42.5K',
    revenue: '$847',
    engagement: '8.2%',
    trend: 'up',
  },
  {
    id: 2,
    title: 'Top 5 Fitness Gadgets',
    views: '38.2K',
    revenue: '$623',
    engagement: '6.8%',
    trend: 'up',
  },
  {
    id: 3,
    title: 'Ultimate Skincare Routine',
    views: '35.1K',
    revenue: '$582',
    engagement: '7.4%',
    trend: 'down',
  },
  {
    id: 4,
    title: 'Gaming Setup Tour 2024',
    views: '28.3K',
    revenue: '$441',
    engagement: '5.9%',
    trend: 'up',
  },
];

export function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d');
  const [manualRevenue, setManualRevenue] = useState('');

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Revenue</h1>
          <p className="text-slate-400">Track your performance and earnings</p>
        </div>

        {/* Time Range Selector */}
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                timeRange === range
                  ? 'bg-violet-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {range === '7d' ? 'Last 7 days' : range === '30d' ? 'Last 30 days' : 'Last 90 days'}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Revenue',
            value: '$3,247',
            change: '+23.4%',
            icon: DollarSign,
            color: 'from-green-500 to-emerald-600',
            positive: true,
          },
          {
            label: 'Total Views',
            value: '127.5K',
            change: '+18.2%',
            icon: Eye,
            color: 'from-blue-500 to-cyan-600',
            positive: true,
          },
          {
            label: 'Engagement Rate',
            value: '7.2%',
            change: '+2.1%',
            icon: Heart,
            color: 'from-pink-500 to-rose-600',
            positive: true,
          },
          {
            label: 'Total Shares',
            value: '8.4K',
            change: '-3.2%',
            icon: Share2,
            color: 'from-violet-500 to-purple-600',
            positive: false,
          },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-lg ${
                  stat.positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {stat.positive ? (
                    <ArrowUp className="w-3 h-3" />
                  ) : (
                    <ArrowDown className="w-3 h-3" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Revenue Over Time</h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
              <span className="text-slate-400">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></div>
              <span className="text-slate-400">Views</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis yAxisId="left" stroke="#94a3b8" />
            <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '12px',
              }}
              labelStyle={{ color: '#f1f5f9' }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="url(#colorRevenue)"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', r: 4 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="views"
              stroke="url(#colorViews)"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 4 }}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="colorViews" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Platform Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {platformData.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: platform.color }}
                  ></div>
                  <span className="text-sm text-slate-300">{platform.name}</span>
                </div>
                <span className="text-sm font-medium text-white">{platform.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Manual Revenue Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Manual Revenue Entry</h2>
          <p className="text-sm text-slate-400 mb-4">
            Track revenue from external sources or offline sales
          </p>
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                type="number"
                value={manualRevenue}
                onChange={(e) => setManualRevenue(e.target.value)}
                placeholder="Enter amount (e.g., 150.00)"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Add Revenue
            </button>
          </div>
          <div className="mt-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Manually Added This Month</span>
              <span className="font-medium text-white">$847.00</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Performing Videos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Top Performing Videos</h2>
          <button className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
            View all
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Video</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Views</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Revenue</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Engagement</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Trend</th>
              </tr>
            </thead>
            <tbody>
              {topVideos.map((video) => (
                <tr
                  key={video.id}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-white">{video.title}</div>
                  </td>
                  <td className="py-4 px-4 text-right text-slate-300">{video.views}</td>
                  <td className="py-4 px-4 text-right font-medium text-green-400">{video.revenue}</td>
                  <td className="py-4 px-4 text-right text-slate-300">{video.engagement}</td>
                  <td className="py-4 px-4 text-right">
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-medium ${
                        video.trend === 'up'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-red-500/10 text-red-400'
                      }`}
                    >
                      {video.trend === 'up' ? (
                        <ArrowUp className="w-3 h-3" />
                      ) : (
                        <ArrowDown className="w-3 h-3" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
