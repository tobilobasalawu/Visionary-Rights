import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#0a2472]">Visionary Rights</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notification Bell Icon */}
          <button className="p-2 rounded-full hover:bg-secondary transition-colors">
            <BellIcon className="h-5 w-5 text-primary" />
          </button>
          
          {/* Moon Icon for Dark Mode */}
          <button className="p-2 rounded-full hover:bg-secondary transition-colors">
            <MoonIcon className="h-5 w-5 text-primary" />
          </button>
          
          {/* User Profile Picture */}
          <div className="h-9 w-9 rounded-full overflow-hidden border border-border">
            <Image 
              src="/placeholder.svg?height=36&width=36" 
              alt="User profile picture" 
              width={36} 
              height={36}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// Icon components to mimic MagicUI style
function BellIcon({ className }: { className?: string }) {
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
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
