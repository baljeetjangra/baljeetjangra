import React, { useState, useEffect } from 'react';

export const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('Initializing');

  const stages = [
    'Initializing',
    'Loading Components',
    'Connecting to Azure',
    'Preparing Portfolio',
    'Almost Ready'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 15, 100);
        
        // Update stage based on progress
        const stageIndex = Math.floor((newProgress / 100) * stages.length);
        setLoadingStage(stages[Math.min(stageIndex, stages.length - 1)]);
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="animate-ping absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-75"></div>
          </div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-12 max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="space-y-4">
            {/* Animated Name */}
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent tracking-tight">
                Baljeet Jangra
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl rounded-full animate-pulse"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-indigo-200 text-lg tracking-wide">
              Azure Data Engineer
            </p>
          </div>

          {/* Orbital Rings */}
          <div className="absolute -inset-16 flex items-center justify-center">
            <div className="w-32 h-32 border border-indigo-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
            </div>
            <div className="absolute w-40 h-40 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            </div>
            <div className="absolute w-48 h-48 border border-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '16s' }}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            {/* Progress Percentage */}
            <div className="absolute -top-8 left-0 right-0 flex justify-between text-xs text-indigo-300">
              <span>{Math.round(progress)}%</span>
              <span className="font-medium">{loadingStage}</span>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <p className="text-slate-300 text-sm animate-pulse">
            Preparing your experience...
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <span>Optimizing performance</span>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-indigo-400/30 rounded-tl-2xl"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-purple-400/30 rounded-bl-2xl"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-pink-400/30 rounded-br-2xl"></div>
    </div>
  );
};