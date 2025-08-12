export interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  timestamp: Date;
}

export interface SimulationState {
  isRunning: boolean;
  speed: 1 | 5 | 10;
  currentTime: Date;
}

export interface Region {
  id: string;
  name: string;
  type: 'country' | 'city' | 'district';
  coordinates: [number, number];
  metrics: {
    gdp: number;
    population: number;
    emissions: number;
    risk: number;
  };
}

export interface Policy {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'simulated' | 'proposed' | 'voted' | 'enacted';
  impact: {
    economic: number;
    social: number;
    environmental: number;
  };
  version: number;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  cost: number;
  eta: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'queued' | 'active' | 'paused' | 'completed';
}