// @flow strict
"use client";

import { useState, useEffect } from "react";
import { FiArrowUp, FiChevronUp } from "react-icons/fi";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;

      setScrollProgress(scroll * 100);
      setShowBackToTop(totalScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-glow-primary transition-all duration-300 transform hover:scale-110 z-40 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <FiChevronUp className="w-6 h-6" />
      </button>

      {/* Floating Progress Indicator */}
      <div className={`fixed bottom-8 left-8 z-40 transition-all duration-300 ${
        showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center shadow-lg">
            <div className="relative w-12 h-12">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${scrollProgress * 0.01 * 100}, 100`}
                  className="text-gray-600"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray={`${scrollProgress}, 100`}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white">{Math.round(scrollProgress)}%</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default ScrollProgress;