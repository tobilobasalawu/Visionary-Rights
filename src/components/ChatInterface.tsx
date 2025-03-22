'use client';
import React, { useState } from 'react';
import ChatInput from './ChatInput';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleSend = async (situation) => {
    setMessages((prev) => [...prev, { text: situation, sender: 'user' }]);
    setLoading(true); // Start loading animation

    try {
      const response = await fetch('http://localhost:3001/api/rights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ situation }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("API Response:", data);

      // Extract rights and recommendations
      const formattedText = [
        ...(Array.isArray(data.rights) 
          ? data.rights.map((right) => right.title || JSON.stringify(right)) 
          : typeof data.rights === 'object' 
            ? [JSON.stringify(data.rights)] 
            : [data.rights]),
        ...(Array.isArray(data.recommendations) 
          ? data.recommendations 
          : typeof data.recommendations === 'object' 
            ? [JSON.stringify(data.recommendations)] 
            : [data.recommendations])
      ].join("\n\n"); // Separate rights and recommendations with new lines

      setMessages((prev) => [...prev, { text: formattedText, sender: 'ai' }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { text: "Error fetching response. Please try again.", sender: 'ai' }]);
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen" style={{ marginTop: '5rem' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Describe Your Situation</h2>
          <h3 className="text-xl mb-6 text-center">
            Provide details about your legal situation, and we'll help you understand your rights.
          </h3>
        </div>
        
        {/* Chat Messages */}
        <div className="flex flex-col gap-4 mb-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex items-center ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              {msg.sender === 'user' && (
                <img src="https://github.com/shadcn.png" alt="User" className="w-8 h-8 rounded-full mr-2" />
              )}
              <p className={`p-2 rounded-lg text-left max-w-xs md:max-w-sm ${
                msg.sender === 'ai' ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'
              }`}>
                {msg.text}
              </p>
              {msg.sender === 'ai' && (
                <img src="https://vercel.com/api/www/avatar" alt="AI" className="w-8 h-8 rounded-full ml-2" />
              )}
            </div>
          ))}

          {/* Loading Animation */}
          {loading && (
            <div className="flex justify-end items-center mt-2">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
              <span className="ml-2 text-gray-500">Thinking...</span>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="mb-4">
          <ChatInput onSend={handleSend} />
        </div>
        
        {/* Footer */}
        <div className="text-xs text-muted-foreground text-center mt-2">
          <p>
            Free Research Preview. This application does not provide legal advice, consult with a qualified attorney for specific legal guidance. 
            <span className="text-primary font-medium"> Visionary Rights 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
}
