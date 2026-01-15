import React, { useState } from 'react';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { GenerateVideoPage } from './components/generate/GenerateVideoPage';
import { PromptTemplatesPage } from './components/templates/PromptTemplatesPage';
import { AnalyticsPage } from './components/analytics/AnalyticsPage';
import { PricingPage } from './components/pricing/PricingPage';
import { ApiKeysPage } from './components/api-keys/ApiKeysPage';
import { TutorialsPage } from './components/tutorials/TutorialsPage';

type Page = 'login' | 'register' | 'dashboard' | 'generate' | 'templates' | 'analytics' | 'pricing' | 'api-keys' | 'tutorials';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigateToRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <RegisterPage onRegister={handleLogin} onNavigateToLogin={() => setCurrentPage('login')} />;
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;
      case 'generate':
        return <GenerateVideoPage />;
      case 'templates':
        return <PromptTemplatesPage onNavigate={setCurrentPage} />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'pricing':
        return <PricingPage />;
      case 'api-keys':
        return <ApiKeysPage />;
      case 'tutorials':
        return <TutorialsPage />;
      default:
        return <DashboardPage onNavigate={setCurrentPage} />;
    }
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-slate-950">{renderPage()}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout}>
        {renderPage()}
      </DashboardLayout>
    </div>
  );
}
