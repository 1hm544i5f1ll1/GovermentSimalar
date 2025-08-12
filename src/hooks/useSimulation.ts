import { useState } from 'react';
import type { SimulationState, Alert, Project } from '../types';

export function useSimulation() {
  const [simulation, setSimulation] = useState<SimulationState>({
    isRunning: false,
    speed: 1,
    currentTime: new Date(),
  });

  const [alerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'warning',
      message: 'Traffic congestion increasing in downtown area',
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'info',
      message: 'New policy proposal ready for review',
      timestamp: new Date(),
    },
  ]);

  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'Metro Line Extension',
      type: 'Infrastructure',
      cost: 2500000000,
      eta: new Date(Date.now() + 18 * 30 * 24 * 60 * 60 * 1000),
      priority: 'high',
      status: 'active',
    },
    {
      id: '2',
      name: 'Solar Farm Installation',
      type: 'Energy',
      cost: 150000000,
      eta: new Date(Date.now() + 8 * 30 * 24 * 60 * 60 * 1000),
      priority: 'medium',
      status: 'active',
    },
    {
      id: '3',
      name: 'Public Housing Development',
      type: 'Housing',
      cost: 500000000,
      eta: new Date(Date.now() + 24 * 30 * 24 * 60 * 60 * 1000),
      priority: 'high',
      status: 'queued',
    },
  ]);

  const [notifications] = useState<string[]>([
    'Policy simulation completed',
    'New citizen feedback received',
    'Budget allocation updated',
  ]);

  const toggleSimulation = () => {
    setSimulation(prev => ({ ...prev, isRunning: !prev.isRunning }));
  };

  const changeSpeed = (speed: 1 | 5 | 10) => {
    setSimulation(prev => ({ ...prev, speed }));
  };

  return {
    simulation,
    alerts,
    projects,
    notifications,
    toggleSimulation,
    changeSpeed,
  };
}