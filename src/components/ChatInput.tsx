import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

export default function ChatInput() {
  return (
    <div className="flex items-center gap-4">
      <Input 
        placeholder="Type your messages..." 
        className="flex-1 h-12 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
      />
      <Button className='text-white'>Send</Button>
    </div>
  );
}