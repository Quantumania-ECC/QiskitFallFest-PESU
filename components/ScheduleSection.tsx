"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EventTimeline from "@/components/EventTimeline";

export default function ScheduleSection() {
  const events = [
    {
      time: "Kickoff Event",
      title: "Guest Lectures & Inaugural Session",
      description:
        "Expert speakers from academia, industry, and IBM Quantum ecosystem sharing insights on quantum computing's transformative potential",
      details: [
        "Overview of quantum computing landscape",
        "Applications in healthcare, finance & AI",
        "Interactive Q&A with experts",
        "Inspiration for quantum journey",
      ],
    },
    {
      time: "November 7th (Tentative)",
      title: "Quantum & Qiskit 101 Workshop",
      description:
        "Foundational workshop introducing quantum computing fundamentals and hands-on Qiskit programming",
      details: [
        "Quantum theory basics",
        "Quantum circuits fundamentals",
        "Qiskit SDK hands-on experience",
        "Access to IBM Quantum hardware",
      ],
    },
    {
      time: "November 14th-15th (Tentative)",
      title: "Qiskit Fall Fest Hackathon",
      description:
        "16-hour hackathon where teams solve quantum computing challenges with mentorship from Qiskit Advocates",
      details: [
        "Teams of 2-4 participants",
        "Mentorship from experts",
        "Real-world problem statements",
        "Certificates & prizes for winners",
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
        <h3 className="my-6 text-center font-semibold text-gray-700 text-lg">
          Beyond Bits is a Qiskit Fall Fest 2025 Extension Event being organized by PES University Electronic City Campus.
          <br />
          <br />
          Qiskit Fall Fest is a series of student-led events conducted annually across the globe, featuring quantum computing and IBM
          Quantum&apos;s Qiskit programming language.
          <br />
          <br />
          Join us at Beyond Bits for comprehensive quantum computing education featuring guest lectures, hands-on workshops, and an
          exciting hackathon to inspire the next generation of quantum computing enthusiasts.
        </h3>

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
              <p className="text-gray-600 mb-4 font-semibold">{event.description}</p>
              <ul className="list-disc list-inside font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {event.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
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
                combining theoretical knowledge with practical experience. By the end of the event, participants will have foundational
                understanding of quantum computing, hands-on exposure to the Qiskit SDK, and the opportunity to apply their skills in a
                real-world hackathon setting with mentorship from industry experts and Qiskit Advocates.
              </p>
            </div>
          </div>
        </motion.div>
        <EventTimeline />
      </div>
    </section>
  );
}
