"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OrganizersSection() {
  const physicists = [
    { name: "Einstein", image: "/2025/Crop_Einstein.png" },
    { name: "Heisenberg", image: "/2025/Crop_Heisenbergpng.png" },
    { name: "Schrödinger", image: "/2025/Crop_Schrodinger.png" },
    { name: "Future", image: "/2025/Crop_Future.png" },
  ];

  return (
    <section id="organizers" className="py-10 px-4 bg-gray-50 bg-opacity-60">
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold pb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Organizers
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-70 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Quantumania - PESU ECC&apos;s Quantum Club
            </h3>
            <p className="text-gray-600 mb-4">
              Igniting students&apos; curiosity through introductory sessions, innovative workshops and collaborative projects.
            </p>
            <Link href="https://quanad.pes.edu/club" className="text-blue-600 hover:text-blue-500 transition-colors">
              Learn More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-70 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              QuaNaD - Quantum and Nano Devices Lab, PESU
            </h3>
            <p className="text-gray-600 mb-4">
              Pushing the boundaries of quantum science, from quantum dots to revolutionary computing paradigms and next-gen energy solutions.
            </p>
            <Link href="https://quanad.pes.edu/" className="text-blue-600 hover:text-blue-500 transition-colors">
              Discover Quantum Innovations
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {physicists.map((physicist, index) => (
              <motion.div key={physicist.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 + index * 0.1 }} className="text-center">
                <Image
                  src={physicist.image}
                  alt={physicist.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-gray-600 font-semibold">{physicist.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
