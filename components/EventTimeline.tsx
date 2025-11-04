import React from 'react';

const EventTimeline = () => {
  const events = [
    { time: 'Nov 7', title: 'Qiskit & Quantum 101 (Online)', description: 'Janani A, Quantum Support Engineer, IBM Quantum' },
    { time: 'Nov 8', title: 'Advanced Qiskit & Quantum 101 (Online)', description: 'Kavitha Yogaraj, Senior Quantum Computational Scientist, IBM Quantum' },
    { time: 'Nov 10', title: 'QML Session + Hackathon Kickoff (Online)', description: 'Dr. Anupama Ray, Senior Research Scientist, IBM Quantum' },
    { time: 'Nov 15', title: 'Hackathon Finale (Offline)', description: 'Present your projects, compete, and celebrate the spirit of quantum innovation!' },
  ];

  return (
    <div className="py-16 bg-transparent">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          <span className="text-blue-900">Event Timeline</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50 transform -translate-x-1/2 z-10"></div>
                <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`inline-block max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="mb-2">
                        <span className="inline-block px-4 py-1.5 text-xs font-bold text-white bg-purple-400/95 dark:bg-purple-600/95 rounded-full shadow-md">
                          {event.time}
                        </span>
                      </div>

                      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-white/10 dark:border-white/20 rounded-lg p-4 shadow-sm">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-1">{event.title}</h3>
                        <p className="text-gray-800 dark:text-gray-200 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;