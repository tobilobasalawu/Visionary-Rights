import React from 'react';
import ModelSelector from './ModelSelector';
import ChatInput from './ChatInput';

export default function ChatInterface() {
  return (
    <div className="flex flex-col items-center min-h-screen" style={{ marginTop: '10rem' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Model Selector */}
        <div className="flex justify-center mt-4">
          <ModelSelector />
        </div>
        
        {/* Regenerate Button */}
        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-2 text-primary border border-border rounded-full px-4 py-2 hover:bg-secondary transition-colors">
            <RefreshIcon className="h-4 w-4" />
            Regenerate response
          </button>
        </div>
        
        {/* Chat Input */}
        <div className="mt-4 mb-8 flex justify-center">
          <div className="w-full max-w-md">
            <ChatInput />
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-xs text-muted-foreground text-center mt-4">
          <p>Free Research Preview. Visionaary Rights may produce inaccurate information about people, places, or facts. <span className="text-primary font-medium">Visionary Rights 2025</span></p>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
    </svg>
  );
}