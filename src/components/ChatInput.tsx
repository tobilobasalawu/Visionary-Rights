'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

export default function ChatInput() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full max-w-4xl space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
        <button
          onClick={() => setInputValue('I was arrested without being told why.')}
          className="relative p-[1px] bg-secondary rounded-lg w-full max-w-md"
        >
          <span className="block bg-white px-6 py-3 rounded-lg text-sm text-left h-full flex items-center">
            I was arrested without being told why.
          </span>
        </button>
        <button
          onClick={() => setInputValue('My landlord entered my apartment without notice.')}
          className="relative p-[1px] bg-secondary rounded-lg w-full max-w-md"
        >
          <span className="block bg-white px-6 py-3 rounded-lg text-sm text-left h-full flex items-center">
            My landlord entered my apartment without notice.
          </span>
        </button>
        <button
          onClick={() => setInputValue('I was fired after reporting unsafe working conditions.')}
          className="relative p-[1px] bg-secondary rounded-lg w-full max-w-md"
        >
          <span className="block bg-white px-6 py-3 rounded-lg text-sm text-left h-full flex items-center">
            I was fired after reporting unsafe working conditions.
          </span>
        </button>
        <button
          onClick={() => setInputValue('Police want to search my car without a warrant.')}
          className="relative p-[1px] bg-secondary rounded-lg w-full max-w-md"
        >
          <span className="block bg-white px-6 py-3 rounded-lg text-sm text-left h-full flex items-center">
            Police want to search my car without a warrant.
          </span>
        </button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Provide details about your legal situation..."
          className="flex-[3] h-12 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
        />
        <Button className='text-white'>Send</Button>
      </div>
    </div>
  );
}