"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EventTimeline from "@/components/EventTimeline";

export default function ScheduleSection() {
  const events = [
    {
      time: "Nov 7 - Nov 10",
      title: "Online Lectures & Workshops",
      description:
        "A series of online sessions designed to introduce participants to the world of quantum computing with foundational understanding and practical experience.",
      details: [
        "Quantum mechanics fundamentals",
        "Quantum algorithms & Qiskit framework",
        "Programming techniques & workflows",
        "Hands-on experience with quantum concepts",
      ],
    },
    {
      time: "Nov 10 - Nov 15",
      title: "5-Day Online Hackathon",
      description:
        "Teams of 3 tackle problem statements given by Qiskit in an intensive online hackathon format with expert mentorship.",
      details: [
        "Kickoff on Nov 10th",
        "Teams of 3 participants",
        "Qiskit problem statements",
        "Mentorship from Qiskit Advocates",
      ],
    },
    {
      time: "November 15th",
      title: "In-Person Project Presentation & Finale",
      description:
        "The final day features 5-6 hours of in-person presentations where top teams present their solutions to judges and winners are announced.",
      details: [
        "Offline presentation at PESU ECC",
        "Top teams present to judges",
        "Live demonstrations & Q&A",
        "Winners announced & prizes awarded",
      ],
    },
  ];

  return (
    <section id="schedule" className="min-h-screen py-10 px-4 bg-gray-50 bg-opacity-60">
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Event Horizon
        </h2>
        <div className="my-8 text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-6">
            Beyond Bits is a Qiskit Fall Fest 2025 Extension Event at PES University Electronic City Campus.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md space-y-4 text-left">
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-4">
              Event Structure
            </h4>
            
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-bold text-blue-600">Part 1:</span> Online lectures and workshops (Nov 7-10) introducing quantum computing fundamentals, 
                quantum algorithms, and the Qiskit framework with hands-on programming experience.
              </p>
              
              <p className="text-gray-700">
                <span className="font-bold text-purple-600">Part 2:</span> 5-day online hackathon (Nov 10-15) in teams of 3, tackling Qiskit problem statements, 
                culminating in an in-person finale on Nov 15th where top teams present solutions to judges.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-80 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h3>
              <p className="text-blue-600 mb-2 font-semibold">{event.time}</p>
              <p className="text-gray-600 mb-2 font-semibold">{event.description}</p>
              <ul className="space-y-1">
                {event.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 text-lg mt-0.5">•</span>
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Event Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 bg-opacity-80 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Event Objectives
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src="/2025/Simplified_Illustration.png"
                alt="Beyond Bits 2025"
                width={600}
                height={450}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed">
                The primary objective of Beyond Bits is to provide students with a comprehensive introduction to quantum computing,
                combining theoretical knowledge with practical experience. Participants will gain foundational understanding through 
                expert-led online sessions, followed by hands-on application in a competitive hackathon environment. The event culminates 
                in an exciting in-person finale where top teams showcase their quantum computing solutions, compete for prizes, and 
                celebrate the spirit of quantum innovation with mentorship from industry experts and Qiskit Advocates.
              </p>
            </div>
          </div>
        </motion.div>
        <EventTimeline />
      </div>
    </section>
  );
}
