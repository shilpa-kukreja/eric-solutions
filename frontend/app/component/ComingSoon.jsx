"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EricComingSoon() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md h-[300px] md:h-[400px]">
            <Image
              src="/comingsoon/logo.gif"
              alt="Eric AI Coming Soon"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Eric AI is <span className="text-[#0B5EA8]">Coming Soon</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We are building something powerful. Eric AI will transform the way
            you interact with technology using intelligent automation and smart
            solutions.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Get Notified
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
