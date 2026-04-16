"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";

export default function ClinicalOperations() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "Portfolio Management",
      points: [
        "Provides consolidated views across studies with data import support for investigators, sites, and contacts",
        "Offers calendar visibility for events scheduled within each study and by team members.",
        "Dashboards display portfolio and summary data points, with visualizations by study, region, country, and monitor, including download capabilities.",
        "Defines critical information at the study level, including subject visit schedules, CRA monitoring frequency, study milestones, protocol violations, and study documents.",
        "The outsourcing tab offers a straightforward yet comprehensive overview of study components, identifying external vendors by task, country, and primary point of contact.",
        "Milestone management allows complete customization of key dates for study progress and events.",
      ],
    },
    {
      title: "Ensuring Participant Safety and Well-Being",
      points: [
        "We prioritize the safety and well-being of clinical trial participants by proactively monitoring their health and promptly addressing adverse events and safety concerns. Our vigilant approach ensures a secure and ethical trial environment, fostering trust and compliance.",
      ],
    },
    {
      title: "Ensuring Protocol Adherence and Procedural Compliance",
      points: [
        "We guarantee that your clinical trial is conducted in strict alignment with the study protocol and defined procedures. Our meticulous oversight ensures consistency, accuracy, and compliance, safeguarding the integrity and success of your trial.",
      ],
    },
    {
      title: "Ensuring Regulatory Compliance and GCP Standards",
      points: [
        "We ensure full compliance with regulatory requirements and guidelines, including Good Clinical Practice (GCP) standards. Our rigorous processes and expert oversight guarantee that your trial meets all regulatory expectations, maintaining integrity and trust throughout the clinical research process.",
      ],
    },
    {
      title: "Facilitating Timely and Accurate Reporting",
      points: [
        "We enable the timely and precise reporting of trial progress, data, and safety information, ensuring transparency and efficiency. Our streamlined processes and advanced tools keep stakeholders informed, supporting informed decision-making and regulatory compliance.",
      ],
    },
  ];

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Eric Clinical Trial Management Software(CTMS)
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
                <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mt-0 mt-5">
                  Scalable and Cost Effective
                  <span className="text-[#3B82F6]">
                    {" "}
                    Clinical Study Solutions
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
                  ERIC CTMS is designed to provide the benefits of a Clinical
                  Trial Management System (CTMS) without the substantial upfront
                  financial and resource commitments typical of traditional
                  enterprise systems or the inefficiencies inherent in
                  spreadsheet trackers..
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  ERIC CTMS offers drug developers a scalable and cost-effective
                  solution to enhance management, performance, and reduce study
                  startup costs in clinical trials.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <button className="bg-blue-500 font-bold text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                  Book Free Demo
                </button>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src="/technologies/ctms.gif" // place image inside public folder
                alt="Clinical Operations"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0059B2] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-2xl font-bold mb-12 tracking-wide uppercase text-center">
              Features
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  {/* Title Row */}
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => toggleFeature(index)}
                  >
                    <span className="text-5xl font-light mt-[-10px]">
                      {openIndex === index ? "×" : "+"}
                    </span>

                    <h3 className="text-xl font-semibold ">{feature.title}</h3>
                  </div>

                  {/* Description */}
                  {openIndex === index && (
                    <ul className="mt-4 ml-7 space-y-2 text-lg text-blue-100 list-disc max-w-5xl text-justify">
                      {feature.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
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
