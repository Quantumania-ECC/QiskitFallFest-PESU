"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnersSection() {
  const sponsors = [
    { name: "IBM Qiskit", logo: "/2025/ibm_q.png" },
    { name: "PES University", logo: "/pes.jpg" },
  ];

  return (
    <section id="partners" className="py-10 bg-white bg-opacity-40 px-4">
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Quantum Allies
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-70 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center hover:bg-opacity-80 transition-all duration-300 shadow-lg"
            >
              <Image src={sponsor.logo} alt={sponsor.name} width={400} height={400} className="mb-4 object-fit" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                {sponsor.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
