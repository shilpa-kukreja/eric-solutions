"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import {motion} from "framer-motion";

export default function ClinicalOperations() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "Expert Project Management for Clinical Development Programs",
      description:
        "We specialize in the seamless management of clinical development programs, ensuring precision, compliance, and efficiency at every stage. Our expertise drives successful outcomes while adhering to global standards and timelines.",
    },
    {
      title: "Quality Clinical Monitoring: On-Site, Remote, and Centralized",
      description:
        "Eric Solutions delivers exceptional clinical monitoring solutions, offering flexibility through on-site, remote, and centralized approaches. As part of our commitment to innovation, we provide a cutting-edge remote monitoring platform designed to support decentralized clinical trials, ensuring efficiency, compliance, and seamless data management.",
    },
    {
      title: "Optimized Resourcing for Maximum Efficiency",
      description:
        "We specialize in delivering optimized resourcing strategies tailored to your needs, ensuring the right talent and tools are in place to drive efficiency, reduce costs, and achieve exceptional results.",
    },
    {
      title:
        "Smart Study Start-Up: Streamlined Site Onboarding and Regulatory Approvals",
      description:
        "Our smart study start-up approach ensures optimized site onboarding and accelerated regulatory approvals, reducing delays and enhancing efficiency. By leveraging proven strategies and innovative tools, we help you kick off clinical trials faster and with greater confidence.",
    },
    {
      title: "Site and Patient Solutions: Enhancing Recruitment and Engagement",
      description:
        "Eric Solutions specializes in innovative site and patient solutions, focusing on effective recruitment and meaningful patient engagement. Through strategic partnerships with leading site networks, we ensure seamless trial execution and improved patient participation, driving successful clinical outcomes.",
    },
  ];

  const features = [
    {
      title: "Accurate, Complete, and Consistent Data Collection",
      points: [
        "We ensure precise, thorough, and reliable data collection, minimizing errors and discrepancies throughout the clinical trial process. Our robust systems and meticulous approach guarantee data integrity, supporting confident decision-making and regulatory compliance.",
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
        viewport={{once:true}}
      >
          <h1 className="text-center text-3xl md:text-4xl font-bold mt-28">
            Clinical Operation & Project Management
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
        viewport={{once:true}}
      >
              <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mt-0 mt-5">
                Clinical Operation &
                <span className="text-[#3B82F6]"> Project Management</span>
              </h2>

              </motion.div>

              <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >
              <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                Our core strength lies in project management, supported by
                comprehensive and consistent processes that meet global
                regulatory standards.
              </p>
              </motion.div>

              <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >

              <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                At Eric Solutions, we combine services and systems to deliver
                tailored solutions with faster timelines and cost-effective
                results, ensuring exceptional value for our clients.
              </p>
              </motion.div>
              <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >
              <button className="bg-blue-500 font-bold text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Book Free Demo
              </button>
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

      <section className="bg-gray-50/2 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
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
        viewport={{once:true}}
        className="sm:max-w-5xl max-w-7xl sm:ml-15 ml-0"
      >
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 text-xl">
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

      {/* Features */}
      <section className="bg-[#0059B2] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
      >
          <h2 className="text-left text-2xl font-bold mb-12 tracking-wide uppercase">
            Eric Solutions Clinical Monitoring: Delivering Optimized Solutions
          </h2>
          </motion.div>

          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
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
