"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsSection() {
  return (
    <section className="bg-[#f5f6f8] py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-15">

        {/* ROW 1 (TEXT LEFT - IMAGE RIGHT) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              SOLUTIONS
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
            Effortless Solutions for Rapid Productivity </h2>

            <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
            At Eric Solutions, we deliver user-focused solutions that ensure rapid results. Experience the ease and intuitiveness of our systems, designed to eliminate heavy customizations and steep learning curves. With just 90 minutes of guided onboarding, your team will be proficient and productive within hours, not weeks or months.            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 -top-4 w-[230px] h-[315px] sm:w-[350px] sm:h-[450px] bg-orange-400 z-0 "></div>

            <Image
              src="/solution/solutions.jpg" // replace with your image
              alt="solutions"
              width={600}
              height={400}
              className="relative z-10 object-cover"
            />
          </motion.div>
        </div>

        {/* ROW 2 (IMAGE LEFT - TEXT RIGHT) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="absolute -bottom-4 -left-4 -top-4 w-[230px] h-[300px] sm:w-[350px] sm:h-[430px] bg-[#0a0736] z-0 "></div>

            <Image
              src="/solution/support.jpg" // replace with your image
              alt="support"
              width={600}
              height={400}
              className="relative z-10  object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              SUPPORT
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
            Exceptional Support for Your Success
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
            More than just software—our lab-trained experts provide training and guidance to maximize the value of your investment every step of the way.            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}