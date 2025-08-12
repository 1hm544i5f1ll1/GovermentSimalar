import React, { useState } from 'react';
import { Layers, Filter, Bookmark, RotateCcw } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

export function GlobeView() {
  const [selectedLayers, setSelectedLayers] = useState(['political', 'risk']);
  
  const layers = [
    { id: 'political', name: 'Political Boundaries', color: 'blue' },
    { id: 'risk', name: 'Climate Risk', color: 'red' },
    { id: 'gdp', name: 'GDP Per Capita', color: 'green' },
    { id: 'emissions', name: 'CO₂ Emissions', color: 'orange' },
    { id: 'population', name: 'Population Density', color: 'purple' },
  ];

  const regions = [
    { name: 'North America', risk: 'medium', gdp: 45000, emissions: 16.5 },
    { name: 'Europe', risk: 'low', gdp: 35000, emissions: 8.9 },
    { name: 'Asia Pacific', risk: 'high', gdp: 15000, emissions: 7.2 },
  ];

  const toggleLayer = (layerId: string) => {
    setSelectedLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    );
  };

  return (
    <div className="flex-1 flex">
      {/* Left Panel */}
      <div className="w-80 p-4 space-y-4 overflow-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Layers className="w-5 h-5" />
              <span>Layer Controls</span>
            </CardTitle>
          </CardHeader>
          
          <div className="space-y-3">
            {layers.map((layer) => (
              <div key={layer.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full bg-${layer.color}-500`} />
                  <span className="text-gray-300 text-sm">{layer.name}</span>
                </div>
                <input
                  type="checkbox"
                  checked={selectedLayers.includes(layer.id)}
                  onChange={() => toggleLayer(layer.id)}
                  className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </CardTitle>
          </CardHeader>
          
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="high">High Risk</Badge>
              <Badge variant="medium">GDP {'>'} $30k</Badge>
              <Badge variant="low">Low Emissions</Badge>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bookmark className="w-5 h-5" />
              <span>Bookmarks</span>
            </CardTitle>
          </CardHeader>
          
          <div className="space-y-2">
            {regions.map((region, index) => (
              <div key={index} className="p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">{region.name}</span>
                  <Badge variant={region.risk as 'low' | 'medium' | 'high'}>{region.risk}</Badge>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  GDP: ${region.gdp.toLocaleString()} | Emissions: {region.emissions}t CO₂
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-4xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">3D Globe View</h3>
            <p className="text-gray-400">Interactive 3D visualization with hex overlay</p>
            <p className="text-gray-500 text-sm mt-2">Layers: {selectedLayers.join(', ')}</p>
          </div>
        </div>

        {/* Globe Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button variant="secondary" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset View
          </Button>
        </div>
      </div>
    </div>
  );
}