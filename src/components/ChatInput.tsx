'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { BorderBeam } from './magicui/border-beam';

export default function ChatInput() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>

      <div className="flex items-center justify-center flex-col lg:flex-row w-full max-w-xl space-y-8 lg:space-y-0 lg:space-x-6 mb-6 ml-24">
        <button
          onClick={() => setInputValue('I was arrested without being told why.')}
          className="relative p-2 rounded-lg w-full max-w-xl mb-6 bg-transparent hover:bg-transparent transition duration-200 flex items-center justify-center"
        >
          <BorderBeam className='rounded-full' duration={8} size={100} />
          <span className="flex px-4 py-2 text-sm text-center h-full flex items-center">
            I was arrested without being told why.
          </span>
        </button>
        <button
          onClick={() => setInputValue('My landlord entered my apartment without notice.')}
          className="relative p-2 rounded-lg w-full max-w-2xl mb-6 bg-transparent hover:bg-transparent transition duration-200 flex items-center justify-center"
        >
          <BorderBeam className='rounded-full' duration={8} size={100} />
          <span className="block px-2 py-2 text-sm text-center h-full flex items-center">
            My landlord entered my apartment without notice.
          </span>
        </button>
        <button
          onClick={() => setInputValue('I was fired after reporting unsafe working conditions.')}
          className="relative p-2 rounded-lg w-full max-w-2xl mb-6 bg-transparent hover:bg-transparent transition duration-200 flex items-center justify-center"
        >
          <BorderBeam className='rounded-full' duration={8} size={100} />
          <span className="block px-4 py-2 text-sm text-center h-full flex items-center">
            I was fired after reporting unsafe working conditions.
          </span>
        </button>
        <button
          onClick={() => setInputValue('Police want to search my car without a warrant.')}
          className="relative p-2 rounded-lg w-full max-w-2xl mb-6 bg-transparent hover:bg-transparent transition duration-200 flex items-center justify-center"
        >
          <BorderBeam className='rounded-full' duration={8} size={100} />
          <span className="block px-4 py-2 text-sm text-center h-full flex items-center">
            Police want to search my car without a warrant.
          </span>
        </button>
      </div>
      
      <div className="relative overflow-hidden flex items-center gap-4 mt-20">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Provide details about your legal situation..."
          className="flex-[4] h-12 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
        />
        <Button className='text-white h-full'>Send</Button>
      </div>
    </div>
  );
}