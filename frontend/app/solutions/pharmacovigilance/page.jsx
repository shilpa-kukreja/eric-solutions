"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MedicalWriting() {
  const services = [
    {
      title: "Efficient Case Processing and Reporting",
      description:
        "We specialize in streamlined case processing and accurate reporting, ensuring timely and precise handling of safety data. Our robust systems and expert oversight enhance compliance, improve efficiency, and support proactive risk management in pharmacovigilance.",
    },
    {
      title: "Comprehensive Serious Adverse Event (SAE) Management",
      description:
        "We provide end-to-end Serious Adverse Event (SAE) management, ensuring timely detection, accurate reporting, and effective resolution. Our systematic approach enhances patient safety, maintains regulatory compliance, and supports robust risk management throughout the clinical trial process.",
    },
    {
      title: "Proactive Signal Management",
      description:
        "We offer advanced signal management solutions designed to detect, assess, and mitigate potential safety signals early. Our systematic approach ensures timely identification of risks, supports data-driven decision-making, and maintains compliance with regulatory requirements, safeguarding patient safety throughout the product lifecycle.",
    },
    {
      title:
        "Expert Contributions to Safety Sections of Clinical Study Reports",
      description:
        "We provide specialized expertise in developing and reviewing safety sections for clinical study reports. Our meticulous approach ensures accurate, comprehensive, and regulatory-compliant documentation, highlighting critical safety data and supporting informed decision-making for your clinical trials.",
    },
    {
      title:
        "Streamlined Preparation and Submission of Drug Safety Update Reports (DSURs)",
      description:
        "We specialize in the efficient preparation and timely submission of Drug Safety Update Reports (DSURs), ensuring compliance with regulatory requirements. Our expert team delivers accurate, comprehensive, and well-organized reports, providing a clear overview of safety data and supporting ongoing risk-benefit assessments.",
    },
    {
      title: "Strategic Risk Management Planning and Implementation",
      description:
        "We offer end-to-end risk management solutions, from meticulous planning to seamless implementation. Our proactive approach identifies, assesses, and mitigates potential risks, ensuring patient safety, regulatory compliance, and the successful execution of your clinical trials.",
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
              Pharmacovigilance{" "}
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
                  ERIC Pharmacovigilance:
                  <span className="text-[#3B82F6]">
                    {" "}
                    Meeting Your Pharmacovigilance and Drug Safety Needs.
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
                  ERIC delivers tailored solutions to address your evolving
                  pharmacovigilance and drug safety challenges. Through
                  well-defined processes and seamless integration of data from
                  diverse sources, we ensure robust safety monitoring.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  By combining advanced technology with expert resources, we
                  enhance efficiency, maintain compliance with stringent
                  regulatory standards, and safeguard patient well-being.
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
