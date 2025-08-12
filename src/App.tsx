import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { LeftRail } from './components/layout/LeftRail';
import { RightInspector } from './components/layout/RightInspector';
import { BottomDock } from './components/layout/BottomDock';
import { GlobeView } from './views/GlobeView';
import { MetricsView } from './views/MetricsView';
import { PolicyView } from './views/PolicyView';
import { AdvisorView } from './views/AdvisorView';
import { useSimulation } from './hooks/useSimulation';

// Placeholder components for other views
const PlaceholderView = ({ title }: { title: string }) => (
  <div className="flex-1 flex items-center justify-center bg-gray-800">
    <div className="text-center">
      <div className="text-6xl mb-4">🚧</div>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400">This view is under construction</p>
    </div>
  </div>
);

function App() {
  const { simulation, alerts, projects, notifications, toggleSimulation, changeSpeed } = useSimulation();
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [inspectorContent, setInspectorContent] = useState<React.ReactNode>(null);

  const openInspector = (title: string, content: React.ReactNode) => {
    setInspectorContent(content);
    setInspectorOpen(true);
  };

  return (
    <Router>
      <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
        <TopBar 
          simulation={simulation}
          alerts={alerts}
          onSimulationToggle={toggleSimulation}
          onSpeedChange={changeSpeed}
        />
        
        <div className="flex-1 flex overflow-hidden">
          <LeftRail />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/globe" replace />} />
                  <Route path="/globe" element={<GlobeView />} />
                  <Route path="/city" element={<PlaceholderView title="City View" />} />
                  <Route path="/city/:id" element={<PlaceholderView title="City View" />} />
                  <Route path="/policy" element={<PolicyView />} />
                  <Route path="/advisor" element={<AdvisorView />} />
                  <Route path="/scenarios" element={<PlaceholderView title="Scenario Simulator" />} />
                  <Route path="/citizens" element={<PlaceholderView title="Citizen Hub" />} />
                  <Route path="/metrics" element={<MetricsView />} />
                  <Route path="/transparency" element={<PlaceholderView title="Transparency Hub" />} />
                  <Route path="/media" element={<PlaceholderView title="Media & Info Flow" />} />
                  <Route path="/anticorruption" element={<PlaceholderView title="Anti-Corruption" />} />
                  <Route path="/rl" element={<PlaceholderView title="RL Lab" />} />
                  <Route path="/queue" element={<PlaceholderView title="Build Queue" />} />
                </Routes>
              </div>
              
              <RightInspector 
                isOpen={inspectorOpen}
                onClose={() => setInspectorOpen(false)}
                title="Inspector"
              >
                {inspectorContent || (
                  <div className="text-center py-8">
                    <p className="text-gray-400">Select an item to view details</p>
                  </div>
                )}
              </RightInspector>
            </div>
            
            <BottomDock projects={projects} notifications={notifications} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;