"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { EditionDropdown } from "@/components/EditionDropdown";
import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  activeSection: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: (section: string) => void;
  sections: string[];
};

export default function Navbar({
  activeSection,
  isMenuOpen,
  onMenuToggle,
  onNavigate,
  sections,
}: NavbarProps) {
  return (
    <>
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
              onClick={onMenuToggle}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          <ul className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => onNavigate(section)}
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
            <li>
              <Link href="https://forms.gle/aZx7QwmFeFUDpWbA6" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg">
                  Register
                </button>
              </Link>
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
                    onClick={() => onNavigate(section)}
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
              <li className="pt-4">
                <Link href="https://forms.gle/aZx7QwmFeFUDpWbA6" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                    Register Now
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
