"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  onExploreSchedule: () => void;
};

export default function HeroSection({ onExploreSchedule }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Qiskit Fall Fest 2025
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-5xl mb-4 font-bold text-gray-800"
        >
          Beyond Bits
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl md:text-2xl mb-8 text-gray-700"
        >
          PES University Electronic City Campus, Bangalore
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center"
        >
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
            onClick={onExploreSchedule}
          >
            Explore Schedule
          </Button>
          <Link href="https://forms.gle/aZx7QwmFeFUDpWbA6">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg">
              Register Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
