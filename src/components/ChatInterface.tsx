'use client';
import React, { useState } from 'react';
import ChatInput from './ChatInput';


export default function ChatInterface() {
  const [messages, setMessages] = useState([]); // State to hold messages

  const handleSend = async (situation) => {
    // Add user message to the messages state
    setMessages((prev) => [...prev, { text: situation, sender: 'user' }]);

    // Call the API to get the AI response
    try {
      const response = await fetch('http://localhost:3001/api/rights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ situation }),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      // Log the data received from the API
      console.log("Data received from API:", data);

      // Add AI response to the messages state
      setMessages((prev) => [...prev, { text: data.rights, sender: 'ai' }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen" style={{ marginTop: '5rem' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Describe Your Situation</h2>
          <h3 className="text-xl mb-6 text-center">Provide details about your legal situation, and we'll help you understand your rights.</h3>
        </div>
        
        {/* Chat Messages */}
        <div className="flex flex-col gap-4 mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-center ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
              {msg.sender === 'user' && (
                <img src="https://github.com/shadcn.png" alt="User" className="w-8 h-8 rounded-full mr-2" />
              )}
              <p className={`p-2 rounded-lg ${msg.sender === 'ai' ? 'bg-gray-200' : 'text-black'}`}>
                {msg.text}
              </p>
              {msg.sender === 'ai' && (
                <img src="https://vercel.com/api/www/avatar" alt="AI" className="w-8 h-8 rounded-full ml-2" />
              )}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="mb-4">
          <ChatInput onSend={handleSend} /> {/* Pass handleSend to ChatInput */}
        </div>
        
        {/* Footer */}
        <div className="text-xs text-muted-foreground text-center mt-2">
          <p>Free Research Preview. This application does not provide legal advice, consult with a qualified attorney for specific legal guidance. <span className="text-primary font-medium">Visionary Rights 2025</span></p>
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