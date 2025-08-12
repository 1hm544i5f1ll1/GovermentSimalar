import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Map, FileText, Brain, Zap, Users, BarChart3, Shield, Radio, AlertTriangle, FlaskRound as Flask, Clock } from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Globe', href: '/globe', icon: Globe },
  { name: 'City', href: '/city', icon: Map },
  { name: 'Policy', href: '/policy', icon: FileText },
  { name: 'Advisor', href: '/advisor', icon: Brain },
  { name: 'Scenario', href: '/scenarios', icon: Zap },
  { name: 'Citizens', href: '/citizens', icon: Users },
  { name: 'Metrics', href: '/metrics', icon: BarChart3 },
  { name: 'Transparency', href: '/transparency', icon: Shield },
  { name: 'Media', href: '/media', icon: Radio },
  { name: 'Anti-Corruption', href: '/anticorruption', icon: AlertTriangle },
  { name: 'RL Lab', href: '/rl', icon: Flask },
  { name: 'Build Queue', href: '/queue', icon: Clock },
];

export function LeftRail() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white">GovSim</h1>
        <p className="text-gray-400 text-sm mt-1">Governance Platform</p>
      </div>
      
      <nav className="flex-1 px-4 pb-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
                          (item.href !== '/' && location.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}