import React from 'react';

export default function ModelSelector() {
  return (
    <div className="flex bg-white rounded-lg shadow-lg p-1">
      <button className="flex items-center gap-2 bg-secondary rounded-md px-4 py-2 text-sm font-medium">
        <SparkleIcon className="h-4 w-4 text-primary" />
        VR - 5 
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-md transition-colors">
        <LightningIcon className="h-4 w-4" />
        VR - 4 
      </button>
    </div>
  );
}

function SparkleIcon({ className }: { className?: string }) {
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
      <path d="M12 3l1.88 5.76a1 1 0 0 0 .95.69h6.08a1 1 0 0 1 .59 1.8l-4.93 3.58a1 1 0 0 0-.36 1.12l1.88 5.76a1 1 0 0 1-1.54 1.12l-4.93-3.58a1 1 0 0 0-1.18 0l-4.93 3.58a1 1 0 0 1-1.54-1.12l1.88-5.76a1 1 0 0 0-.36-1.12l-4.93-3.58a1 1 0 0 1 .59-1.8h6.08a1 1 0 0 0 .95-.69L12 3z" />
    </svg>
  );
}

function LightningIcon({ className }: { className?: string }) {
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
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}