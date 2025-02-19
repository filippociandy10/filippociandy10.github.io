"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Your Name
      </motion.h1>
      <p className="text-xl text-gray-400 mt-2">I build cool things for the web.</p>
    </main>
  );
}
