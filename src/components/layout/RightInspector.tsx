import React from 'react';
import { X, Info } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';

interface RightInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function RightInspector({ isOpen, onClose, title = "Inspector", children }: RightInspectorProps) {
  if (!isOpen) return null;

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Info className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        {children}
      </div>
    </div>
  );
}