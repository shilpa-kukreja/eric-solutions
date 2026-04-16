"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Biostatistics() {
  const services = [
    {
      title: "Precise Sample Size Calculation",
      description:
        "We provide accurate and scientifically validated sample size calculations tailored to your study design. Our expertise ensures optimal participant numbers, balancing statistical power, resource efficiency, and reliable trial outcomes.",
    },
    {
      title: "Expert Statistical Input in Protocol Development",
      description:
        "We offer specialized statistical input during protocol design, ensuring robust methodologies, clear endpoints, and optimal trial structures. Our contributions enhance the scientific rigor and feasibility of your study, setting the foundation for successful clinical outcomes.",
    },
    {
      title: "Comprehensive Statistical Analysis Plans",
      description:
        "We develop detailed and tailored Statistical Analysis Plans (SAPs) that outline precise methodologies, endpoints, and analytical approaches for your clinical trials. Our plans ensure clarity, consistency, and regulatory compliance, supporting robust data interpretation and reliable study outcomes.",
    },
    {
      title: "Expert Interim Analysis for Informed Decision-Making",
      description:
        "We conduct thorough interim analyses to evaluate ongoing clinical trial data, providing critical insights for informed decision-making. Our approach ensures timely adjustments, enhances trial efficiency, and maintains the integrity of your study while safeguarding patient safety.",
    },
    {
      title: "Clear and Comprehensive Tables, Listings, and Figures (TLFs)",
      description:
        "We deliver meticulously crafted tables, listings, and figures (TLFs) that present clinical trial data with clarity and precision. Our TLFs enhance data interpretation, support regulatory submissions, and provide actionable insights for informed decision-making.",
    },
    {
      title:
        "Comprehensive Statistical Reports & CDISC-Compliant Data Submissions for USFDA",
      description:
        "We provide detailed statistical reports and ensure seamless CDISC-compliant data submissions tailored to meet USFDA requirements. Our expertise guarantees accuracy, regulatory compliance, and timely submissions, supporting successful clinical trial outcomes and approvals.",
    },
  ];

  return (
    <>
      <section className="w-full sm:pt-26 pt-18">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src="/worldmap/blob.svg"
            alt="footer background"
            className="w-[700px] md:w-[950px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Top Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-28">
              Biostatistics{" "}
            </h1>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mt-10 mt-5">
                  Comprehensive Data Analysis Across{" "}
                  <span className="text-[#3B82F6]">
                    {" "}
                    Clinical Development Stages
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  ERIC excels in analyzing data from all phases of clinical
                  development, leveraging diverse designs and statistical
                  hypotheses. Our expertise includes interim analyses, adaptive
                  and sequential designs, and sample size adjustments to ensure
                  robust and flexible trial outcomes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  Additionally, we actively participate in Independent Data
                  Monitoring Committees (IDMCs), offering unbiased statistical
                  support and aiding in critical decision-making processes
                  independently of the sponsor.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Link href="/contact-us">
                  <button className="bg-blue-500 font-bold text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                    Book Free Demo
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src="/solutions/clinical.gif" // place image inside public folder
                alt="Clinical Operations"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="bg-gray-50/2 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">
              Services We <span className="text-[#3B82F6]">Offer</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:max-w-5xl max-w-7xl sm:ml-15 ml-0"
          >
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div key={index} className="flex gap-5 text-xl">
                  {/* Number */}
                  <div className="w-[30px] h-[30px] p-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-[17px] leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     
      <Newsletter />
    </>
  );
}
