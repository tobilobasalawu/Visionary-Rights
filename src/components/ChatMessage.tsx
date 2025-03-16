import React from 'react';

export default function ChatMessage() {
  return (
    <div className="flex flex-col gap-4">
      {/* Message Header */}
      <div className="flex justify-between items-center bg-white rounded-t-xl p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
            <UserIcon className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium">The advantages of Artificial Intelligence</span>
        </div>
        <button className="text-muted-foreground hover:text-primary">
          <EditIcon className="h-5 w-5" />
        </button>
      </div>
      
      {/* Message Content */}
      <div className="bg-white rounded-b-xl p-6 shadow-sm">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <SparkleIcon className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-4">
              Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:
            </p>
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <strong>Automation:</strong> AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.
              </li>
              <li>
                <strong>Decision-making:</strong> AI systems can analyze vast amounts of data, identify patterns, and make informed decisions based on that analysis. This ability is particularly useful in complex scenarios where humans may struggle to process large datasets or where quick and accurate decisions are crucial.
              </li>
              <li>
                <strong>Improved accuracy:</strong> AI algorithms can achieve high levels of accuracy and precision in tasks such as image recognition, natural language processing, and data analysis. They can eliminate human errors caused by fatigue, distractions, or bias, leading to more reliable and consistent results.
              </li>
              <li>
                <strong>Continuous operation:</strong> AI systems can work tirelessly without the need for breaks, resulting in uninterrupted 24/7 operations. This capability is especially beneficial in applications like customer support chatbots, manufacturing processes, and surveillance systems.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon({ className }: { className?: string }) {
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
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
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
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