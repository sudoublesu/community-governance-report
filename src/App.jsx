import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Menu, X } from 'lucide-react';
import './App.css';

// Import page components
import HomePage from './components/HomePage';
import ExecutiveSummary from './components/ExecutiveSummary';
import GlobalPerspective from './components/GlobalPerspective';
import ChinaContext from './components/ChinaContext';
import ShanghaiStatus from './components/ShanghaiStatus';
import SWOTAnalysis from './components/SWOTAnalysis';
import BestPractices from './components/BestPractices';
import StrategicRecommendations from './components/StrategicRecommendations';
import DataInsights from './components/DataInsights';
import Conclusion from './components/Conclusion';

const pages = [
  { path: '/', component: HomePage, title: '首页', id: 'home' },
  { path: '/executive-summary', component: ExecutiveSummary, title: '执行摘要', id: 'executive' },
  { path: '/global-perspective', component: GlobalPerspective, title: '全球视野', id: 'global' },
  { path: '/china-context', component: ChinaContext, title: '中国坐标', id: 'china' },
  { path: '/shanghai-status', component: ShanghaiStatus, title: '上海现状', id: 'shanghai' },
  { path: '/swot-analysis', component: SWOTAnalysis, title: 'SWOT分析', id: 'swot' },
  { path: '/best-practices', component: BestPractices, title: '标杆案例', id: 'cases' },
  { path: '/strategic-recommendations', component: StrategicRecommendations, title: '战略建议', id: 'strategy' },
  { path: '/data-insights', component: DataInsights, title: '数据洞察', id: 'data' },
  { path: '/conclusion', component: Conclusion, title: '结论与展望', id: 'conclusion' }
];

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPageIndex = pages.findIndex(page => page.path === location.pathname);
  const canGoPrev = currentPageIndex > 0;
  const canGoNext = currentPageIndex < pages.length - 1;

  const goToPrev = () => {
    if (canGoPrev) {
      navigate(pages[currentPageIndex - 1].path);
    }
  };

  const goToNext = () => {
    if (canGoNext) {
      navigate(pages[currentPageIndex + 1].path);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors"
              >
                <Home size={20} />
                <span className="hidden sm:block font-medium">上海社区治理报告</span>
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {pages.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => navigate(page.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === page.path
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-orange-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      navigate(page.path);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === page.path
                        ? 'bg-orange-500 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {page.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-slate-900/95 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`p-2 rounded-full transition-colors ${
              canGoPrev
                ? 'text-white hover:bg-slate-700 hover:text-orange-400'
                : 'text-slate-500 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-white text-sm font-medium">
            {currentPageIndex + 1} / {pages.length}
          </div>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`p-2 rounded-full transition-colors ${
              canGoNext
                ? 'text-white hover:bg-slate-700 hover:text-orange-400'
                : 'text-slate-500 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {pages.map((page) => (
              <Route
                key={page.id}
                path={page.path}
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <page.component />
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

