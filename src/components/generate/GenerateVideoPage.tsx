import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, Play, Download, Share2, Settings, RefreshCw } from 'lucide-react';

export function GenerateVideoPage() {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState<'tiktok' | 'reels' | 'shorts'>('tiktok');
  const [duration, setDuration] = useState<'15' | '30' | '60'>('30');
  const [language, setLanguage] = useState('en-US');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setProgress(0);
    setGeneratedVideo(null);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setGeneratedVideo('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Generate Video</h1>
        <p className="text-slate-400">Describe your video idea and let AI create it for you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Input Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Prompt Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
          >
            <label className="block text-sm font-medium text-slate-300 mb-3">
              What kind of video do you want to create?
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type what kind of video you want, just like chatting...

Example: Create a viral TikTok promoting wireless earbuds under $50. Start with a hook about how expensive AirPods are, then show these affordable alternatives. Add energetic music and text overlays. End with a link in bio CTA."
                rows={10}
                className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
              />
              <div className="absolute bottom-4 right-4 text-xs text-slate-500">
                {prompt.length} characters
              </div>
            </div>
          </motion.div>

          {/* Generate Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 disabled:from-slate-700 disabled:to-slate-700 text-white rounded-xl p-5 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-500/25 disabled:shadow-none disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center gap-3">
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generating Video...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Generate Video</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </div>
          </motion.button>

          {/* Progress Bar */}
          <AnimatePresence>
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Generating your video</span>
                    <span className="text-violet-400 font-medium">{progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-violet-500 to-purple-600"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                    <span>Processing scenes • Adding voiceover • Generating subtitles</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Video Preview */}
          <AnimatePresence>
            {generatedVideo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Your Video is Ready!</h3>
                  <button
                    onClick={() => setGeneratedVideo(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="relative aspect-[9/16] max-w-sm mx-auto bg-slate-800 rounded-xl overflow-hidden mb-4">
                  <img
                    src={generatedVideo}
                    alt="Generated video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-xl transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Download</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-xl transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-xl transition-colors">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Edit</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Options Panel */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 space-y-6"
          >
            <h3 className="font-bold text-white">Video Options</h3>

            {/* Platform */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Platform
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['tiktok', 'reels', 'shorts'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      platform === p
                        ? 'bg-violet-500 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {p === 'tiktok' ? 'TikTok' : p === 'reels' ? 'Reels' : 'Shorts'}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['15', '30', '60'] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      duration === d
                        ? 'bg-violet-500 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {d}s
                  </button>
                ))}
              </div>
            </div>

            {/* Voice Language */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Voice Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              >
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
                <option value="de-DE">German</option>
                <option value="pt-BR">Portuguese (BR)</option>
                <option value="ja-JP">Japanese</option>
                <option value="ko-KR">Korean</option>
              </select>
            </div>

            {/* Advanced Options */}
            <div className="pt-4 border-t border-slate-700">
              <h4 className="text-sm font-medium text-slate-300 mb-3">Advanced</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-violet-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
                    defaultChecked
                  />
                  <span className="text-sm text-slate-400">Auto-generate subtitles</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-violet-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
                    defaultChecked
                  />
                  <span className="text-sm text-slate-400">Add background music</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-violet-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-slate-400">Include CTA overlay</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Tips Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 rounded-2xl p-6"
          >
            <h3 className="font-bold text-violet-300 mb-3">💡 Pro Tips</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Start with a strong hook in first 3 seconds</li>
              <li>• Keep it simple and focused on one product</li>
              <li>• Use emotional language in your prompts</li>
              <li>• Mention specific benefits, not features</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
