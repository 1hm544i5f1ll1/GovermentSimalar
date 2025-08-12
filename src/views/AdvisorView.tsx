import React from 'react';
import { Brain, TrendingUp, Users, Target } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

export function AdvisorView() {
  const recommendations = [
    {
      advisor: 'Economist',
      title: 'Optimize Tax Structure',
      confidence: 0.89,
      impact: 'High',
      description: 'Implement progressive taxation with carbon pricing to improve revenue while incentivizing green behavior.',
      tradeoffs: ['Short-term GDP reduction', 'Long-term sustainability gains']
    },
    {
      advisor: 'Sociologist', 
      title: 'Expand Social Services',
      confidence: 0.76,
      impact: 'Medium',
      description: 'Increase funding for education and healthcare to improve social cohesion and productivity.',
      tradeoffs: ['Higher public spending', 'Improved social mobility']
    },
    {
      advisor: 'Strategist',
      title: 'Infrastructure Investment',
      confidence: 0.92,
      impact: 'High',
      description: 'Focus on sustainable transport and digital infrastructure for long-term competitiveness.',
      tradeoffs: ['Large upfront costs', 'Significant economic multiplier effects']
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Advisory Council</h2>
          <p className="text-gray-400">Strategic recommendations from specialized AI advisors</p>
        </div>
        <Badge variant="enacted">3 Active Advisors</Badge>
      </div>

      <Tabs defaultValue="economist" className="space-y-4">
        <TabsList>
          <TabsTrigger value="economist">Economist</TabsTrigger>
          <TabsTrigger value="sociologist">Sociologist</TabsTrigger>
          <TabsTrigger value="strategist">Strategist</TabsTrigger>
          <TabsTrigger value="consensus">Best Compromise</TabsTrigger>
        </TabsList>

        <TabsContent value="economist">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>Economic Analysis</span>
                </CardTitle>
              </CardHeader>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Current Economic Health</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">GDP Growth:</span>
                      <span className="text-green-400 ml-2">+3.2%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Unemployment:</span>
                      <span className="text-yellow-400 ml-2">4.1%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Inflation:</span>
                      <span className="text-red-400 ml-2">2.8%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Debt/GDP:</span>
                      <span className="text-orange-400 ml-2">68%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Risk Assessment</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Market Volatility</span>
                      <Badge variant="medium">Medium</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Fiscal Sustainability</span>
                      <Badge variant="high">High</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Trade Disruption</span>
                      <Badge variant="low">Low</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-900/20 border border-blue-700 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">Carbon Tax Implementation</span>
                    <Badge variant="high">89% Confidence</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Progressive carbon pricing starting at $40/ton, increasing 5% annually
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">+$2.1B Revenue</span>
                    <span className="text-blue-400">-15% Emissions</span>
                  </div>
                </div>

                <div className="p-3 bg-gray-700 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">R&D Tax Credits</span>
                    <Badge variant="medium">74% Confidence</Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Expand tech innovation incentives to boost productivity
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sociologist">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>Social Cohesion Analysis</span>
                </CardTitle>
              </CardHeader>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Social Indicators</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Social Trust Index</span>
                      <span className="text-green-400">0.72</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Income Inequality (Gini)</span>
                      <span className="text-yellow-400">0.31</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Social Mobility</span>
                      <span className="text-blue-400">0.68</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Sentiment Trends</h4>
                  <div className="h-24 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Social sentiment visualization</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Policy Recommendations</CardTitle>
              </CardHeader>
              
              <div className="space-y-3">
                <div className="p-3 bg-purple-900/20 border border-purple-700 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">Universal Basic Services</span>
                    <Badge variant="medium">76% Confidence</Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Expand access to healthcare, education, and digital services
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="strategist">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span>Strategic Assessment</span>
                </CardTitle>
              </CardHeader>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Competitive Position</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-700 rounded">
                      <div className="text-lg font-bold text-green-400">#3</div>
                      <div className="text-xs text-gray-400">Global Innovation</div>
                    </div>
                    <div className="text-center p-3 bg-gray-700 rounded">
                      <div className="text-lg font-bold text-blue-400">#7</div>
                      <div className="text-xs text-gray-400">Sustainability</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Initiatives</CardTitle>
              </CardHeader>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-900/20 border border-green-700 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">Smart City Infrastructure</span>
                    <Badge variant="high">92% Confidence</Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Integrated IoT and AI systems for urban optimization
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="consensus">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-orange-400" />
                <span>Best Compromise Solution</span>
              </CardTitle>
            </CardHeader>
            
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-600 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Integrated Policy Package</h3>
                <p className="text-gray-300 mb-4">
                  A balanced approach combining economic efficiency, social equity, and strategic positioning
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">+2.1%</div>
                    <div className="text-sm text-gray-400">Economic Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">+0.08</div>
                    <div className="text-sm text-gray-400">Social Cohesion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">+5</div>
                    <div className="text-sm text-gray-400">Global Ranking</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="primary" className="flex-1">
                    Apply Recommendation
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Add to Experiment Queue
                  </Button>
                </div>
              </div>

              {/* Trade-off Sliders */}
              <div>
                <h4 className="font-medium text-white mb-4">Adjust Trade-offs</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Economic vs Environmental</span>
                      <span className="text-sm text-blue-400">Balanced</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="50"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Short-term vs Long-term</span>
                      <span className="text-sm text-green-400">Long-term Focus</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="70"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}