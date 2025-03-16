'use client'

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { InfoIcon } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Navbar() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="w-full mt-4">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#0a2472]">Visionary Rights</h1>
        </div>
        
        <div className="flex w-30 items-center space-x-4 shadow-lg mx-2 p-2 rounded-lg relative">
          {/* Info Icon as a link to GitHub */}
          <a 
            href="https://github.com/tobilobasalawu/Visionary-Rights" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <InfoIcon className="h-5 w-5 text-primary" />
          </a>
          
          
          {/* User Profile Picture */}
          <div className="h-9 w-9 rounded-full overflow-hidden border border-border">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
