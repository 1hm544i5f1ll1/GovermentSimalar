import React from 'react';
import { Clock, Bell, Terminal } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import type { Project } from '../../types';

interface BottomDockProps {
  projects: Project[];
  notifications: string[];
}

export function BottomDock({ projects, notifications }: BottomDockProps) {
  const activeProjects = projects.filter(p => p.status === 'active').slice(0, 3);

  return (
    <div className="h-32 bg-gray-900 border-t border-gray-700 p-4 flex space-x-4">
      {/* Build Queue */}
      <Card className="flex-1" padding={false}>
        <div className="p-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="font-medium text-white">Active Projects</span>
            <Badge variant="default">{activeProjects.length}</Badge>
          </div>
        </div>
        <div className="p-3 space-y-2">
          {activeProjects.map((project) => (
            <div key={project.id} className="flex items-center justify-between text-sm">
              <span className="text-gray-300 truncate">{project.name}</span>
              <Badge variant={project.priority}>{project.priority}</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Notifications */}
      <Card className="flex-1" padding={false}>
        <div className="p-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-yellow-400" />
            <span className="font-medium text-white">Notifications</span>
            <Badge variant="default">{notifications.length}</Badge>
          </div>
        </div>
        <div className="p-3 space-y-2">
          {notifications.slice(0, 2).map((notification, index) => (
            <div key={index} className="text-sm text-gray-300 truncate">
              {notification}
            </div>
          ))}
        </div>
      </Card>

      {/* Console */}
      <Card className="flex-1" padding={false}>
        <div className="p-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="font-medium text-white">Console</span>
          </div>
        </div>
        <div className="p-3 font-mono text-xs text-green-400">
          <div>&gt; Simulation running at 5x speed</div>
          <div>&gt; Policy update queued</div>
          <div>&gt; Ready for commands</div>
        </div>
      </Card>
    </div>
  );
}