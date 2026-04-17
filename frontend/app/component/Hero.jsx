"use client";

import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden md:block relative w-full sm:mt-30 sm:pb-20 bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">
        <div className="relative z-20 flex items-center h-full mt-35 sm:mt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE SECTION */}
              <div className="order-1 md:order-2 flex justify-center pt-6 md:pt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-xl">
                  <img
                    src="/herosection/chakara.gif"
                    alt="animation"
                    className="w-130 object-contain pr-1"
                  />

                  <img
                    src="/herosection/chakara/centerpart.png"
                    alt="middle layer"
                    className="absolute top-[23.7%] left-[21.5%] w-[275px] object-contain z-10 pointer-events-none"
                  />

                  {/* DB Designer */}

                  <Link href="/agents/db-designer">
                    <motion.img
                      src="/herosection/chakara/1.png"
                      className="absolute w-[142px] top-[18.9%] left-[6.5%] cursor-pointer z-20"
                      whileHover={{ x: -3, y: -1 }}
                    />
                  </Link>

                  {/* Data Entry */}
                  <Link href="/agents/data-entry">
                    <motion.img
                      src="/herosection/chakara/2.png"
                      className="absolute w-[161.5px] object-contain z-20 top-[6.3%] left-[18.3%] cursor-pointer"
                      whileHover={{ x: -1, y: -3 }}
                    />
                  </Link>

                  {/* CRA */}
                  <Link href="/agents/cra">
                    <motion.img
                      src="/herosection/chakara/3.png"
                      className="absolute w-[161.5px] top-[6.6%] left-[44.6%] cursor-pointer z-20"
                      whileHover={{ x: 1, y: -3 }}
                    />
                  </Link>

                  {/* Statistics */}
                  <Link href="/agents/statistics">
                    <motion.img
                      src="/herosection/chakara/4.png"
                      className="absolute w-[140.5px] top-[19.4%] left-[59.4%] cursor-pointer z-20"
                      whileHover={{ x: 3, y: -1 }}
                    />
                  </Link>

                  {/* Medical Writer */}
                  <Link href="/agents/medical-writer">
                    <motion.img
                      src="/herosection/chakara/5.png"
                      className="absolute w-[147.5px] top-[49.8%] left-[58.1%] cursor-pointer z-20"
                      whileHover={{ x: 3, y: 1 }}
                    />
                  </Link>

                  {/* Document Manager */}
                  <Link href="/agents/document-manager">
                    <motion.img
                      src="/herosection/chakara/6.png"
                      className="absolute w-[285.5px] top-[68.4%] left-[20.4%] cursor-pointer z-20"
                      whileHover={{ x: 0, y: 3 }}
                    />
                  </Link>

                  {/* Project Manager */}
                  <Link href="/agents/project-manager">
                    <motion.img
                      src="/herosection/chakara/7.png"
                      className="absolute w-[148.9px] top-[49.8%] left-[6.5%] cursor-pointer z-20"
                      whileHover={{ x: -3, y: 1 }}
                    />
                  </Link>
                </div>
              </div>

              {/* TEXT */}
              <div className="order-2 md:order-1 text-white">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Clinical Trial
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Management Solutions
                </h1>

                <p className="mt-5 text-sm md:text-[16.5px] text-gray-400">
                  We are
                  <span className="font-bold text-white">
                    {" "}
                    Eric Solutions
                  </span>{" "}
                  , The Clinical trial Expert-
                  <br /> <br /> helping you optimize operations through
                  digitization.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 mb-6">
                  {/* <Link href="/contact">
                    <button className="bg-gray-200 text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-300 transition">
                      Request Demo
                    </button>
                  </Link> */}

                  <Link href="contact">
                    <button className="bg-blue-800 px-6 py-3 rounded-sm  hover:bg-[#1D4ED8] transition">
                      Register Now
                    </button>
                  </Link>

                  <Link href="#pricing">
                    <button className="bg-white text-black px-6 py-3 rounded-sm  hover:bg-gray-300 transition">
                      Why Eric ?
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="block md:hidden relative w-full sm:mt-30 sm:pb-20 bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">
        <div className="relative z-20 flex items-center h-full mt-35 sm:mt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <div className="order-1 md:order-2 flex justify-center pt-6 md:pt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-xl">
                  <img
                    src="/herosection/chakara.gif"
                    alt="animation"
                    className="w-130 object-contain pr-1"
                  />

                  <img
                    src="/herosection/chakara/centerpart.png"
                    alt="middle layer"
                    className="absolute top-[23%] left-[23%] w-[150px] object-contain z-10 pointer-events-none"
                  />

                  {/* DB Designer */}
                  <Link href="/agents/db-designer">
                    <motion.img
                      src="/herosection/chakara/1.png"
                      className="absolute w-[73.6px] top-[19.9%] left-[7.1%] cursor-pointer z-20"
                      whileHover={{ x: -3, y: -1 }}
                    />
                  </Link>

                  {/* Data Entry */}
                  <Link href="/agents/data-entry">
                    <motion.img
                      src="/herosection/chakara/2.png"
                      className="absolute w-[88.6px] top-[6.4%] left-[19.4%] cursor-pointer z-20"
                      whileHover={{ x: -1, y: -3 }}
                    />
                  </Link>

                  {/* CRA */}
                  <Link href="/agents/cra">
                    <motion.img
                      src="/herosection/chakara/3.png"
                      className="absolute w-[88.4px] top-[6.7%] left-[49%] cursor-pointer z-20"
                      whileHover={{ x: 1, y: -3 }}
                    />
                  </Link>

                  {/* Statistics */}
                  <Link href="/agents/statistics">
                    <motion.img
                      src="/herosection/chakara/4.png"
                      className="absolute w-[73.6px] top-[19.9%] left-[66.1%] cursor-pointer z-20"
                      whileHover={{ x: 3, y: -1 }}
                    />
                  </Link>

                  {/* Medical Writer */}
                  <Link href="/agents/medical-writer">
                    <motion.img
                      src="/herosection/chakara/5.png"
                      className="absolute w-[78.4px] top-[49.7%] left-[64.2%] cursor-pointer z-20"
                      whileHover={{ x: 3, y: 1 }}
                    />
                  </Link>

                  {/* Document Manager */}
                  <Link href="/agents/document-manager">
                    <motion.img
                      src="/herosection/chakara/6.png"
                      className="absolute w-[154.2px] top-[67.8%] left-[22%] cursor-pointer z-20"
                      whileHover={{ x: 0, y: 3 }}
                    />
                  </Link>

                  {/* Project Manager */}
                  <Link href="/agents/project-manager">
                    <motion.img
                      src="/herosection/chakara/7.png"
                      className="absolute w-[78px] top-[49.7%] left-[7.1%] cursor-pointer z-20"
                      whileHover={{ x: -3, y: 1 }}
                    />
                  </Link>
                </div>
              </div>

              {/* TEXT */}
              <div className="order-2 md:order-1 text-white">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  AI Agents Accelerating
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Clinical Trials - Responsibly
                </h1>

                <p className="mt-5 text-sm md:text-[15px] text-gray-400">
                  From protocol design to analysis-ready data,
                  <span className="font-bold text-white"> Eric AI</span> applies
                  Artificial
                  <br /> Intelligence deliberately to remove operational
                  bottlenecks in clinical
                  <br /> trials — with humans firmly in control.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 mb-6">
                  <Link href="/contact">
                    <button className="bg-gray-200 text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-300 transition">
                      Request Demo
                    </button>
                  </Link>

                  <Link href="#ai-agents">
                    <button className="bg-blue-800 px-6 py-3 rounded-sm font-medium hover:bg-[#1D4ED8] transition">
                      View AI Agents
                    </button>
                  </Link>

                  <Link href="#pricing">
                    <button className="bg-gray-200 text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-300 transition">
                      See Pricing
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
