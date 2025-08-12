import React, { useState } from 'react';
import { FileText, GitBranch, Play, GitCompare as Compare, Vote } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import type { Policy } from '../types';

export function PolicyView() {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  
  const policies: Policy[] = [
    {
      id: '1',
      name: 'Carbon Tax Implementation',
      description: 'Progressive carbon pricing mechanism',
      status: 'proposed',
      impact: { economic: -2, social: 1, environmental: 8 },
      version: 3
    },
    {
      id: '2',
      name: 'Public Transport Expansion',
      description: 'Metro line extension and bus rapid transit',
      status: 'voted',
      impact: { economic: -5, social: 6, environmental: 4 },
      version: 2
    },
    {
      id: '3',
      name: 'Housing Affordability Act',
      description: 'Inclusionary zoning and rent stabilization',
      status: 'draft',
      impact: { economic: -1, social: 7, environmental: 0 },
      version: 1
    }
  ];

  return (
    <div className="flex-1 flex">
      {/* Policy Tree */}
      <div className="w-80 p-4 space-y-4 overflow-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GitBranch className="w-5 h-5" />
              <span>Policy Tree</span>
            </CardTitle>
          </CardHeader>
          
          <div className="space-y-2">
            {policies.map((policy) => (
              <div 
                key={policy.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedPolicy?.id === policy.id ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setSelectedPolicy(policy)}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-medium">{policy.name}</span>
                  <Badge variant={policy.status}>{policy.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">v{policy.version}</span>
                  <div className="flex space-x-1">
                    <span className={`text-xs px-1 rounded ${policy.impact.economic >= 0 ? 'bg-green-600' : 'bg-red-600'}`}>
                      E{policy.impact.economic > 0 ? '+' : ''}{policy.impact.economic}
                    </span>
                    <span className={`text-xs px-1 rounded ${policy.impact.social >= 0 ? 'bg-green-600' : 'bg-red-600'}`}>
                      S{policy.impact.social > 0 ? '+' : ''}{policy.impact.social}
                    </span>
                    <span className={`text-xs px-1 rounded ${policy.impact.environmental >= 0 ? 'bg-green-600' : 'bg-red-600'}`}>
                      En{policy.impact.environmental > 0 ? '+' : ''}{policy.impact.environmental}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <div className="space-y-2">
          <Button className="w-full" variant="primary">
            <Play className="w-4 h-4 mr-2" />
            Run What-If Analysis
          </Button>
          <Button className="w-full" variant="outline">
            <Compare className="w-4 h-4 mr-2" />
            Compare A/B Test
          </Button>
          <Button className="w-full" variant="outline">
            <Vote className="w-4 h-4 mr-2" />
            Propose for Vote
          </Button>
        </div>
      </div>

      {/* Policy Editor */}
      <div className="flex-1 p-6">
        {selectedPolicy ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedPolicy.name}</h2>
                <p className="text-gray-400">{selectedPolicy.description}</p>
              </div>
              <Badge variant={selectedPolicy.status}>{selectedPolicy.status}</Badge>
            </div>

            <Tabs defaultValue="editor" className="space-y-4">
              <TabsList>
                <TabsTrigger value="editor">Policy Editor</TabsTrigger>
                <TabsTrigger value="constraints">Constraints</TabsTrigger>
                <TabsTrigger value="impact">Impact Preview</TabsTrigger>
                <TabsTrigger value="history">Version History</TabsTrigger>
              </TabsList>

              <TabsContent value="editor">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Policy Configuration</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Implementation Timeline
                      </label>
                      <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white">
                        <option>6 months</option>
                        <option>1 year</option>
                        <option>2 years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Allocation (millions)
                      </label>
                      <input 
                        type="number" 
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                        placeholder="Enter budget"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Target Metrics
                      </label>
                      <textarea 
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white h-24"
                        placeholder="Define success criteria..."
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="impact">
                <Card>
                  <CardHeader>
                    <CardTitle>Projected Impact Analysis</CardTitle>
                  </CardHeader>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {selectedPolicy.impact.economic > 0 ? '+' : ''}{selectedPolicy.impact.economic}%
                      </div>
                      <div className="text-gray-400 text-sm">Economic Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        +{selectedPolicy.impact.social}%
                      </div>
                      <div className="text-gray-400 text-sm">Social Benefit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        +{selectedPolicy.impact.environmental}%
                      </div>
                      <div className="text-gray-400 text-sm">Environmental Gain</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 h-32 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-400">Impact simulation visualization</span>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Version History</CardTitle>
                  </CardHeader>
                  
                  <div className="space-y-3">
                    {[...Array(selectedPolicy.version)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-700 rounded">
                        <div>
                          <span className="text-white font-medium">Version {selectedPolicy.version - i}</span>
                          <div className="text-gray-400 text-sm">
                            {i === 0 ? 'Current version' : `${i + 1} versions ago`}
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                          {new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400">Select a Policy</h3>
              <p className="text-gray-500">Choose a policy from the tree to view and edit</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}