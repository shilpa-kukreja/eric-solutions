"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DataManagement() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "CRF Design at ERIC",
      description:
        "At ERIC, we specialize in Case Report Form (CRF) design, ensuring seamless data collection, accuracy, and regulatory compliance in clinical trials. Our team develops customized CRFs tailored to study protocols, optimizing Electronic Data Capture (EDC) systems and paper-based workflows for efficient data management.",
    },
    {
      title: "Database Design (eCRF & Paper) at ERIC",
      description:
        "Our team develops customized, protocol-driven databases optimized for Electronic Data Capture (EDC) systems and traditional paper-based workflows. With a focus on data integrity, validation, and regulatory adherence, we create structured, audit-ready databases that streamline clinical trial management and improve efficiency.",
    },
    {
      title: "Data Management & SAS Programming at ERIC",
      description:
        "At ERIC, our Data Management (DM) and SAS Programming team ensures accurate, efficient, and regulatory-compliant clinical trial data processing. We specialize in data cleaning, validation, transformation, and statistical programming, enabling seamless CDISC SDTM & ADaM compliance.",
    },
    {
      title: "Blinded Data Entry at ERIC",
      description:
        "At ERIC, we ensure accurate and unbiased blinded data entry for clinical trials, maintaining data integrity and regulatory compliance. Our trained professionals handle electronic (eCRF) and paper-based data entry with strict quality control measures, minimizing errors and ensuring data confidentiality..",
    },
    {
      title: "Data Validation at ERIC",
      description:
        "At ERIC, we ensure clinical trial data accuracy, consistency, and compliance through a rigorous data validation process. Our experts implement automated and manual validation checks to identify discrepancies, ensuring high-quality, regulatory-compliant datasets.",
    },
    {
      title: "Clinical Data Coding",
      description:
        "At ERIC, we ensure standardized and compliant clinical data coding for accurate medical terminology classification in clinical trials. Our experts use industry-standard dictionaries such as MedDRA and WHODrug to code adverse events (AEs), concomitant medications, and medical history, ensuring regulatory compliance and data consistency.",
    },
    {
      title: "External Data Handling at ERIC",
      description:
        "At ERIC, we specialize in external data handling, seamlessly integrating data from central labs, biomarkers, imaging, and other third-party vendors into clinical trial databases. Our team ensures data consistency, accuracy, and regulatory compliance through rigorous data reconciliation, validation, and standardization processes.",
    },
    {
      title: "SAE Reconciliation at ERIC",
      description:
        "At ERIC, we ensure accurate and compliant Serious Adverse Event (SAE) reconciliation, aligning clinical and safety databases to maintain data integrity in clinical trials. Our experts systematically compare SAE data from clinical trial records and pharmacovigilance databases, identifying and resolving discrepancies to meet regulatory requirements.",
    },
    {
      title: "Medical Review at ERIC",
      description:
        "At ERIC, our Medical Review process ensures the accuracy, consistency, and clinical relevance of trial data. Our medical experts conduct comprehensive data assessments, identifying discrepancies, protocol deviations, and safety concerns to maintain regulatory compliance and data integrity.",
    },
    {
      title: "Protocol Validation at ERIC",
      description:
        "At ERIC, we ensure rigorous protocol validation to confirm that clinical trials adhere to regulatory guidelines, study objectives, and data integrity standards. Our experts conduct comprehensive protocol reviews, verifying consistency across Case Report Forms (CRFs), Electronic Data Capture (EDC) systems, and statistical analysis plans.",
    },
    {
      title: "Database Closure at ERIC",
      description:
        "At ERIC, we ensure a seamless and compliant database closure process, marking the final stage of clinical data management. Our team conducts comprehensive data validation, discrepancy resolution, and quality checks to confirm data accuracy and integrity before locking the database.",
    },
    {
      title: "Data Mapping (CDISC) at ERIC",
      description:
        "At ERIC, we specialize in CDISC-compliant data mapping, ensuring seamless conversion of clinical trial data into SDTM (Study Data Tabulation Model) and ADaM (Analysis Data Model) formats. Our experts align raw data with CDISC standards, enhancing data consistency, traceability, and regulatory compliance for streamlined submissions to the FDA, EMA, and other regulatory bodies.",
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
              Data Management Services
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
                  ERIC Data Management:
                  <span className="text-[#3B82F6]">
                    {" "}
                    Comprehensive Clinical Data Management
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
                  At ERIC, our Clinical Data Management (CDM) team oversees
                  every stage of the clinical trial process, from Case Report
                  Form (CRF) design and Electronic Data Capture (EDC)
                  development to database lock.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  With extensive experience across various therapeutic areas, we
                  utilize EDC and paper-based systems while adhering to strict
                  quality standards. Our expertise in advanced data management
                  technologies ensures accurate, efficient, and compliant
                  clinical trials.
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
                    <p className="text-gray-600 text-[17px] leading-relaxed text-justify">
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
