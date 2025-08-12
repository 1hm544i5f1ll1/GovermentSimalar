import React from 'react';
import { Search, Play, Pause, Clock, Bell, User } from 'lucide-react';
import { Button } from '../ui/Button';
import type { SimulationState, Alert } from '../../types';

interface TopBarProps {
  simulation: SimulationState;
  alerts: Alert[];
  onSimulationToggle: () => void;
  onSpeedChange: (speed: 1 | 5 | 10) => void;
}

export function TopBar({ simulation, alerts, onSimulationToggle, onSpeedChange }: TopBarProps) {
  return (
    <div className="h-16 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search regions, policies..."
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      {/* Simulation Controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSimulationToggle}
            className="text-white"
          >
            {simulation.isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <div className="flex items-center space-x-1">
            {[1, 5, 10].map((speed) => (
              <Button
                key={speed}
                variant={simulation.speed === speed ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => onSpeedChange(speed as 1 | 5 | 10)}
                className="text-white"
              >
                {speed}×
              </Button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 text-gray-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              {simulation.currentTime.toLocaleDateString()} {simulation.currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Alerts */}
        <Button variant="ghost" size="sm" className="text-white relative">
          <Bell className="w-4 h-4" />
          {alerts.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {alerts.length}
            </span>
          )}
        </Button>

        {/* User */}
        <Button variant="ghost" size="sm" className="text-white">
          <User className="w-4 h-4" />
          <span className="ml-2">Admin</span>
        </Button>
      </div>
    </div>
  );
}