"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface EditionDropdownProps {
  currentYear: string;
  textColor?: string;
}

const editions = [
  { year: "2025", path: "/", label: "2025" },
  { year: "2024", path: "/2024", label: "2024" },
];

export function EditionDropdown({
  currentYear,
  textColor = "text-white",
}: EditionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center space-x-1 ${textColor} hover:opacity-75 transition-opacity text-sm uppercase tracking-wider`}
      >
        <span>Editions</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-20 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {editions.map((edition) => (
              <Link
                key={edition.year}
                href={edition.path}
                className={`block px-3 py-2 text-center text-gray-800 hover:bg-gray-100 transition-colors ${
                  edition.year === currentYear
                    ? "bg-gray-100 font-semibold"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {edition.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
