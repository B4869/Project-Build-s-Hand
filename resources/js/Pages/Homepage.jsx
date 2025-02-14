import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Homepage() {
  const messages = [
    "This is a Minecraft chat that can help make writing mods easier",
    "Start creating your Minecraft mod with ease!",
    "Enhance your Minecraft experience with custom mods",
    "Build, modify, and share your Minecraft mods easily",
    "A chatbot that helps you code Minecraft mods effortlessly"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const typingSpeed = 40;
    const delayBetweenLoops = 2000;

    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        const newMessage = messages[Math.floor(Math.random() * messages.length)];
        setMessage(newMessage);
        setDisplayedText("");
        setIndex(0);
      }, delayBetweenLoops);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, message]);

  return (
    <div className="min-h-screen relative bg-[#1a1a1a] font-prompt">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ิbackgroud.png"
          alt="Background"
          className="object-cover w-full h-full brightness-50"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
          <a href="/" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-gray-200 transition-colors mb-4 sm:mb-0">
            Build'S Gauntlet
          </a>

          <div className="flex gap-6 ml-auto mr-20 sm:mr-32 md:mr-48">
            <a
              href="/about"
              className="text-lg sm:text-xl font-semibold text-white border-2 border-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transform hover:scale-105"
            >
              SignUP
            </a>
            <a
              href="/chat"
              className="text-lg sm:text-xl font-semibold text-white border-2 border-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent transform hover:scale-105"
            >
              SignIN
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex min-h-[80vh] px-4">
          <div className="text-left pl-4 sm:pl-8 md:pl-12 mt-24 sm:mt-32 md:mt-40 max-w-2xl">
            <motion.h2
              key={message}
              className="text-xl sm:text-2xl md:text-3xl text-white mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayedText}
            </motion.h2>
            <a href="/chat" className="inline-block mt-6 sm:mt-8">
              <button className="bg-blue-500 bg-opacity-30 backdrop-blur-md border border-blue-300 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-5 text-lg sm:text-xl rounded-2xl shadow-lg transition-all duration-300 hover:bg-opacity-50 hover:scale-105 transform hover:shadow-2xl">
                GET STARTED
              </button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
