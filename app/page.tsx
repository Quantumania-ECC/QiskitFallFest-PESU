"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ["home", "schedule", "partners", "organizers"];

  const handleScroll = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-white bg-[#1c1c1c] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SZS341VSZ83wNn30pLYOQYABbvcLgA.png')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5QvuVEoNby0GEtnMJE8SBNGQug6rDm.png"
                alt="Qiskit Fall Fest 2024 Logo"
                className="h-12 w-12"
              />
              <Link href="/">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Beyond Bits
                </h1>
              </Link>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
            <ul className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScroll(section)}
                    className={`text-sm uppercase tracking-wider ${
                      activeSection === section
                        ? "text-purple-400"
                        : "text-white"
                    } hover:text-purple-300 transition-colors`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center"
            >
              <ul className="flex flex-col space-y-4">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleScroll(section)}
                      className={`text-lg uppercase tracking-wider ${
                        activeSection === section
                          ? "text-purple-400"
                          : "text-white"
                      } hover:text-purple-300 transition-colors`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Qiskit Fall Fest 2024
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-3xl md:text-5xl mb-4 font-bold"
              >
                Beyond Bits
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-xl md:text-2xl mb-8"
              >
                PES University Electronic City Campus, Bangalore
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="space-y-4 md:space-y-0 md:space-x-4"
              >
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
                  onClick={() => handleScroll("schedule")}
                >
                  Explore Schedule
                </Button>
                <Link href="https://forms.gle/LGUPTEpi8YDAbb6b9">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg">
                    Join the Quantum Revolution
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section
            id="schedule"
            className="min-h-screen py-20 px-4 bg-black bg-opacity-20"
          >
            <div className="container mx-auto">
              <h2
                className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Event Horizon
              </h2>
              <h3 className="my-6 text-center font-semibold text-purple-300 text-lg">
                Beyond Bits is a Qiskit Fall Fest 2024 Extension Event being
                organized by PES University Electronic City Campus. <br />
                <br />
                Qiskit Fall Fest is a series of student-led events conducted
                annually across the globe, featuring quantum computing and IBM
                Quantum&apos;s Qiskit programming language. <br />
                <br />
                Join us at Beyond Bits for hands-on quantum computing workshops,
                insightful lectures, and a hackathon to foster innovation and
                encourage students to embark on their quantum computing journey.
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    time: "22nd October, 2024",
                    title: "Quantum Computing 101 Workshop",
                    description:
                      "Dive into the quantum realm and get hands-on experience with Qiskit through an introductory workshop",
                    details: [
                      "Introduction to Quantum Computing",
                      "Entanglement Exploration",
                      "Quantum Algorithms Applications",
                      "Qiskit Programming Basics",
                    ],
                  },
                  {
                    time: "14th - 24th November, 2024",
                    title: "Beyond Bits Hackathon",
                    description:
                      "Forge quantum solutions in a series of coding challenges provided by IBM Qiskit",
                    details: [
                      "Apply Qiskit knowledge",
                      "Explore new use cases",
                      "Build quantum circuit programming skills",
                      "Earn certificates",
                    ],
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-15 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-25 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-purple-300 mb-2">{event.time}</p>
                    <p className="text-gray-300 mb-4 font-semibold">
                      {event.description}
                    </p>
                    <ul className="list-disc list-inside font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      {event.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 flex justify-center items-center w-full">
                <Image
                  src="/event.jpeg"
                  alt="Event Picture"
                  width={800}
                  height={600}
                  className="w-full max-w-4xl h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </section>

          <section
            id="partners"
            className="min-h-screen py-20 bg-black bg-opacity-50 px-4"
          >
            <div className="container mx-auto">
              <h2
                className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Quantum Allies
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                {[
                  {
                    name: "IBM Qiskit",
                    logo: "/qiskit_ff_logo.jpg",
                  },
                  {
                    name: "PES University",
                    logo: "/pes.jpg",
                  },
                ].map((sponsor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={400}
                      height={400}
                      className="mb-4 object-contain"
                    />
                    <h3
                      className="text-2xl font-semibold"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      {sponsor.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="organizers"
            className="min-h-screen py-20 px-4 bg-black bg-opacity-20"
          >
            <div className="container mx-auto">
              <h2
                className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Organizers
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    Quantumania - PESU ECC&apos;s Quantum Club
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Igniting students&apos; curiosity through introductory
                    sessions, innovative workshops and collaborative projects.
                  </p>
                  <Link
                    href="https://quanad.pes.edu/club"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
                >
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    QuaNaD - Quantum and Nano Devices Lab, PESU
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Pushing the boundaries of quantum science, from quantum dots
                    to revolutionary computing paradigms and next-gen energy
                    solutions.
                  </p>
                  <Link
                    href="https://quanad.pes.edu/"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Discover Quantum Innovations
                  </Link>
                </motion.div>
              </div>
              <div className="mt-12 text-center">
                <Image
                  src="/Blog-Image_02 copy.png"
                  alt="Quantum Research Team"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-black bg-opacity-50 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Qiskit Fall Fest - PES University ECC</p>
            <p>
              Contact us at:{" "}
              <a
                href="mailto:quantumania.ec@pes.edu"
                className="text-purple-300"
              >
                quantumania.ec@pes.edu
              </a>
            </p>
          </div>
        </footer>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ChevronUpIcon className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
