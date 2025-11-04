"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Janani A",
      title: "Quantum Support Engineer",
      organization: "IBM Quantum",
      session: "Qiskit & Quantum 101",
      date: "Nov 7",
      image: "/speakers/jahanvi_A.png",
      link: "https://www.linkedin.com/in/janani-anantha/", 
      bio: "Expert in quantum computing fundamentals and Qiskit SDK, helping developers worldwide build quantum applications.",
    },
    {
      name: "Kavitha Yogaraj",
      title: "Senior Quantum Computational Scientist",
      organization: "IBM Quantum",
      session: "Advanced Qiskit & Quantum 101",
      date: "Nov 8",
      image: "/speakers/Kavitha_Yogaraj.png",
      link: "https://www.linkedin.com/in/kavitha-yogaraj-b257aa30",
      bio: "Leading researcher in quantum algorithms and computational methods, specializing in advanced quantum circuit design.",
    },
    {
      name: "Dr. Anupama Ray",
      title: "Senior Research Scientist",
      organization: "IBM Quantum",
      session: "QML Session + Hackathon Kickoff",
      date: "Nov 10",
      image: "/speakers/Dr_Anupama_Ray.png",
      link: "https://www.linkedin.com/in/anupama-ray-55140826",
      bio: "Pioneer in Quantum Machine Learning research, bridging the gap between classical ML and quantum computing.",
    },
  ];

  return (
    <section id="speakers" className="py-16 px-4 bg-opacity-70 bg-white-300">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Featured Speakers
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            Learn from leading experts in quantum computing, industry researchers, and pioneers shaping the future of quantum technology.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md">
                    {speaker.date}
                  </span>
                </div>
                <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-indigo-950/50 flex items-center justify-center overflow-hidden p-8">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 z-0">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-130 rounded-full z-10"
                    />
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <Link href={speaker.link} target="_blank" rel="noopener noreferrer">
                    {speaker.name}
                    </Link>
                  </h3>
                  
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {speaker.title}
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {speaker.organization}
                  </p>

                  <div className="mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 font-semibold">
                      Session
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {speaker.session}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {speaker.bio}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/30 shadow-lg">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
              Interactive Sessions Ahead
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
              Each session includes interactive Q&A, hands-on demonstrations, and opportunities to connect with our expert speakers. 
              Don&apos;t miss this chance to learn from the pioneers of quantum computing!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
