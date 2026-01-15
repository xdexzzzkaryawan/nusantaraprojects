import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Key, Eye, EyeOff, Save, AlertCircle, CheckCircle, BarChart, RefreshCw } from 'lucide-react';

interface ApiKeyConfig {
  name: string;
  key: string;
  enabled: boolean;
  usage: number;
  limit: number;
  color: string;
}

export function ApiKeysPage() {
  const [useOwnKeys, setUseOwnKeys] = useState(false);
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({});
  const [apiKeys, setApiKeys] = useState<{ [key: string]: ApiKeyConfig }>({
    openai: {
      name: 'OpenAI',
      key: '',
      enabled: true,
      usage: 1247,
      limit: 10000,
      color: 'from-green-500 to-emerald-600',
    },
    gemini: {
      name: 'Google Gemini',
      key: '',
      enabled: true,
      usage: 892,
      limit: 5000,
      color: 'from-blue-500 to-cyan-600',
    },
    stability: {
      name: 'Stability AI',
      key: '',
      enabled: false,
      usage: 0,
      limit: 1000,
      color: 'from-purple-500 to-pink-600',
    },
    elevenlabs: {
      name: 'ElevenLabs Voice',
      key: '',
      enabled: true,
      usage: 3421,
      limit: 10000,
      color: 'from-orange-500 to-red-600',
    },
  });

  const [savedStatus, setSavedStatus] = useState<{ [key: string]: boolean }>({});

  const handleKeyChange = (service: string, value: string) => {
    setApiKeys({
      ...apiKeys,
      [service]: { ...apiKeys[service], key: value },
    });
  };

  const toggleVisibility = (service: string) => {
    setShowKeys({
      ...showKeys,
      [service]: !showKeys[service],
    });
  };

  const handleSave = (service: string) => {
    setSavedStatus({ ...savedStatus, [service]: true });
    setTimeout(() => {
      setSavedStatus({ ...savedStatus, [service]: false });
    }, 2000);
  };

  const toggleEnabled = (service: string) => {
    setApiKeys({
      ...apiKeys,
      [service]: { ...apiKeys[service], enabled: !apiKeys[service].enabled },
    });
  };

  const maskKey = (key: string) => {
    if (!key) return '';
    if (key.length < 8) return '••••••••';
    return key.substring(0, 4) + '••••••••' + key.substring(key.length - 4);
  };

  return (
    <div className="p-4 lg:p-8 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">API Key Management</h1>
        <p className="text-slate-400">Configure your AI service API keys for video generation</p>
      </div>

      {/* Platform vs Own Keys Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
      >
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white mb-2">API Key Source</h2>
            <p className="text-sm text-slate-400 mb-4">
              Choose whether to use our platform's API credits or bring your own API keys
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setUseOwnKeys(false)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  !useOwnKeys
                    ? 'border-violet-500 bg-violet-500/10'
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className="font-medium text-white mb-1">Platform API</div>
                <div className="text-sm text-slate-400">Use our shared API credits</div>
              </button>

              <button
                onClick={() => setUseOwnKeys(true)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  useOwnKeys
                    ? 'border-violet-500 bg-violet-500/10'
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
              >
                <div className="font-medium text-white mb-1">Your API Keys</div>
                <div className="text-sm text-slate-400">Use your own API keys</div>
              </button>
            </div>
          </div>
        </div>

        {!useOwnKeys && (
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-300">
              You're using our platform API. Your usage is counted towards your plan's quota.
            </div>
          </div>
        )}
      </motion.div>

      {/* API Keys List */}
      {useOwnKeys && (
        <div className="space-y-4">
          {Object.entries(apiKeys).map(([service, config], index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${config.color} rounded-xl flex items-center justify-center`}>
                    <Key className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{config.name}</h3>
                    <p className="text-sm text-slate-400">API Key Configuration</p>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.enabled}
                    onChange={() => toggleEnabled(service)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-violet-500 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-slate-300">Enabled</span>
                </label>
              </div>

              {/* API Key Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  API Key
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type={showKeys[service] ? 'text' : 'password'}
                      value={config.key}
                      onChange={(e) => handleKeyChange(service, e.target.value)}
                      placeholder={`Enter your ${config.name} API key`}
                      className="w-full px-4 py-3 pr-12 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                    <button
                      onClick={() => toggleVisibility(service)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      {showKeys[service] ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => handleSave(service)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                      savedStatus[service]
                        ? 'bg-green-500 text-white'
                        : 'bg-violet-500 hover:bg-violet-600 text-white'
                    }`}
                  >
                    {savedStatus[service] ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Saved</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>Save</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Usage Stats */}
              {config.enabled && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <BarChart className="w-4 h-4" />
                      API Usage This Month
                    </span>
                    <span className="text-white font-medium">
                      {config.usage.toLocaleString()} / {config.limit.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${config.color}`}
                      style={{ width: `${(config.usage / config.limit) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Help Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 rounded-2xl p-6"
      >
        <h3 className="font-bold text-violet-300 mb-3 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          How to Get API Keys
        </h3>
        <div className="space-y-3 text-sm text-slate-300">
          <div>
            <strong className="text-white">OpenAI:</strong> Visit{' '}
            <a href="https://platform.openai.com/api-keys" className="text-violet-400 hover:text-violet-300">
              platform.openai.com/api-keys
            </a>
          </div>
          <div>
            <strong className="text-white">Google Gemini:</strong> Visit{' '}
            <a href="https://makersuite.google.com/app/apikey" className="text-violet-400 hover:text-violet-300">
              makersuite.google.com/app/apikey
            </a>
          </div>
          <div>
            <strong className="text-white">Stability AI:</strong> Visit{' '}
            <a href="https://platform.stability.ai/account/keys" className="text-violet-400 hover:text-violet-300">
              platform.stability.ai/account/keys
            </a>
          </div>
          <div>
            <strong className="text-white">ElevenLabs:</strong> Visit{' '}
            <a href="https://elevenlabs.io/app/settings/api" className="text-violet-400 hover:text-violet-300">
              elevenlabs.io/app/settings/api
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
