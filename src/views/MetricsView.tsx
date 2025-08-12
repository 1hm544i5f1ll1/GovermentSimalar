import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export function MetricsView() {
  const kpis = [
    { name: 'Human Development Index', value: 0.89, change: +0.02, trend: 'up', status: 'good' },
    { name: 'GDP Per Capita', value: '$45,230', change: '+3.2%', trend: 'up', status: 'good' },
    { name: 'CO₂ Emissions', value: '8.2t', change: '-1.5t', trend: 'down', status: 'good' },
    { name: 'Traffic Congestion', value: '23%', change: '+2%', trend: 'up', status: 'warning' },
    { name: 'Housing Affordability', value: '67%', change: '-3%', trend: 'down', status: 'warning' },
    { name: 'Corruption Index', value: '2.1', change: '-0.3', trend: 'down', status: 'good' },
  ];

  const alerts = [
    { metric: 'Air Quality', message: 'PM2.5 levels exceeding WHO guidelines in downtown area', severity: 'high' },
    { metric: 'Housing', message: 'Rental prices increased 15% in Q3', severity: 'medium' },
    { metric: 'Transport', message: 'New metro line ahead of schedule', severity: 'low' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* KPI Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpis.map((kpi, index) => (
            <Card key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">{kpi.name}</span>
                {kpi.status === 'good' ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{kpi.value}</span>
                <div className="flex items-center space-x-1">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Time Series Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Trends Over Time</CardTitle>
        </CardHeader>
        
        <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <p className="text-gray-300">Interactive time-series charts</p>
            <p className="text-gray-500 text-sm">GDP, HDI, Emissions trends</p>
          </div>
        </div>
      </Card>

      {/* Alerts and Anomalies */}
      <Card>
        <CardHeader>
          <CardTitle>Alerts & Anomalies</CardTitle>
        </CardHeader>
        
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
              <AlertCircle className={`w-5 h-5 mt-0.5 ${
                alert.severity === 'high' ? 'text-red-500' : 
                alert.severity === 'medium' ? 'text-yellow-500' : 
                'text-blue-500'
              }`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">{alert.metric}</span>
                  <Badge variant={alert.severity as 'high' | 'medium' | 'low'}>
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-gray-300 text-sm mt-1">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pareto Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Issue Priority Matrix</CardTitle>
          </CardHeader>
          
          <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <p className="text-gray-300">Pareto analysis chart</p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Correlation Matrix</CardTitle>
          </CardHeader>
          
          <div className="h-48 bg-gray-700 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <p className="text-gray-300">KPI correlations</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}