"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditionDropdown } from "@/components/EditionDropdown";
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
      className="min-h-screen text-gray-900 bg-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/2025/Full_Illustration.png')",
      }}
    >
      <div className="bg-white bg-opacity-80 min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/2025/qiskit logo.svg"
                alt="Qiskit Fall Fest 2025 Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <Link href="/">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Qiskit Fall Fest 2025
                </h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
            <ul className="hidden md:flex items-center space-x-6">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScroll(section)}
                    className={`text-sm uppercase tracking-wider ${
                      activeSection === section
                        ? "text-blue-600"
                        : "text-gray-700"
                    } hover:text-blue-500 transition-colors`}
                  >
                    {section}
                  </button>
                </li>
              ))}
              <li>
                <EditionDropdown currentYear="2025" textColor="text-gray-700" />
              </li>
            </ul>
          </nav>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white bg-opacity-95 z-40 flex items-center justify-center"
            >
              <ul className="flex flex-col space-y-4">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleScroll(section)}
                      className={`text-lg uppercase tracking-wider ${
                        activeSection === section
                          ? "text-blue-600"
                          : "text-gray-700"
                      } hover:text-blue-500 transition-colors`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
                <li className="pt-4">
                  <EditionDropdown
                    currentYear="2025"
                    textColor="text-gray-700"
                  />
                </li>
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
                  onClick={() => handleScroll("schedule")}
                >
                  Explore Schedule
                </Button>
                <Link href="#registration">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg">
                    Register Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section
            id="schedule"
            className="min-h-screen py-10 px-4 bg-gray-50 bg-opacity-60"
          >
            <div className="container mx-auto">
              <h2
                className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Event Horizon
              </h2>
              <h3 className="my-6 text-center font-semibold text-gray-700 text-lg">
                Beyond Bits is a Qiskit Fall Fest 2025 Extension Event being
                organized by PES University Electronic City Campus. <br />
                <br />
                Qiskit Fall Fest is a series of student-led events conducted
                annually across the globe, featuring quantum computing and IBM
                Quantum&apos;s Qiskit programming language. <br />
                <br />
                Join us at Beyond Bits for comprehensive quantum computing
                education featuring guest lectures, hands-on workshops, and an
                exciting hackathon to inspire the next generation of quantum
                computing enthusiasts.
              </h3>
              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                {[
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
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-80 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-blue-600 mb-2 font-semibold">
                      {event.time}
                    </p>
                    <p className="text-gray-600 mb-4 font-semibold">
                      {event.description}
                    </p>
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
                      The primary objective of Beyond Bits is to provide students
                      with a comprehensive introduction to quantum computing,
                      combining theoretical knowledge with practical experience. By
                      the end of the event, participants will have foundational
                      understanding of quantum computing, hands-on exposure to the
                      Qiskit SDK, and the opportunity to apply their skills in a
                      real-world hackathon setting with mentorship from industry
                      experts and Qiskit Advocates.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="partners" className="py-10 bg-white bg-opacity-40 px-4">
            <div className="container mx-auto">
              <h2
                className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Quantum Allies
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                {[
                  {
                    name: "IBM Qiskit",
                    logo: "/2025/IBM Quantum Logo.png",
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
                    className="bg-white bg-opacity-70 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center hover:bg-opacity-80 transition-all duration-300 shadow-lg"
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={400}
                      height={400}
                      className="mb-4 object-contain"
                    />
                    <h3
                      className="text-2xl font-semibold text-gray-800"
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
            className="py-10 px-4 bg-gray-50 bg-opacity-60"
          >
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
                  <h3
                    className="text-2xl font-semibold mb-4 text-gray-800"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    Quantumania - PESU ECC&apos;s Quantum Club
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Igniting students&apos; curiosity through introductory
                    sessions, innovative workshops and collaborative projects.
                  </p>
                  <Link
                    href="https://quanad.pes.edu/club"
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white bg-opacity-70 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 shadow-lg"
                >
                  <h3
                    className="text-2xl font-semibold mb-4 text-gray-800"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    QuaNaD - Quantum and Nano Devices Lab, PESU
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pushing the boundaries of quantum science, from quantum dots
                    to revolutionary computing paradigms and next-gen energy
                    solutions.
                  </p>
                  <Link
                    href="https://quanad.pes.edu/"
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Discover Quantum Innovations
                  </Link>
                </motion.div>
              </div>
              <div className="mt-12 text-center">
                {/* Quantum physicist illustrations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                  {[
                    { name: "Einstein", image: "/2025/Crop_Einstein.png" },
                    {
                      name: "Heisenberg",
                      image: "/2025/Crop_Heisenbergpng.png",
                    },
                    {
                      name: "Schrödinger",
                      image: "/2025/Crop_Schrodinger.png",
                    },
                    { name: "Future", image: "/2025/Crop_Future.png" },
                  ].map((physicist, index) => (
                    <motion.div
                      key={physicist.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 + index * 0.1 }}
                      className="text-center"
                    >
                      <Image
                        src={physicist.image}
                        alt={physicist.name}
                        width={150}
                        height={150}
                        className="mx-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                      />
                      <p className="mt-2 text-sm text-gray-600 font-semibold">
                        {physicist.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 bg-opacity-90 py-6">
          <div className="container mx-auto px-4 text-center text-white">
            <p>2025 Qiskit Fall Fest Extension Event - PES University ECC</p>
            <p>
              Contact us at:{" "}
              <a href="mailto:quantumania.ec@pes.edu" className="text-blue-300">
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
              className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
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
