"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import ContactIconList from "@/components/ContactIconList";
import Image from "next/image";
import purple from "@/public/original.jpg";
import { bio } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <div className="pt-10 sm:pt-1 flex flex-col gap-4">
      {/* Image */}
      <motion.div
        className="flex justify-center items-center p-2"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
      >
        <Image src={purple} width={150} alt="purple_profile" className="border-2 rounded-full opacity-90"/>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeInOut }}
        className="flex-1 justify-center items-center text-sm sm:text-base"
      >
        <div className="flex flex-col justify-center items-center">
          {bio.map((line, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              {line.type === "name" && (<h1 className="text-3xl font-medium">{line.text}</h1>)}
              {line.icon && (
                <div className="flex items-center gap-2 mt-4">
                  <FontAwesomeIcon icon={line.icon.icon} className="text-[var(--primary)]"/>
                  <p className="">{line.text}</p>
                </div>
              )}
            </div>
          ))}
          <ContactIconList isBox={true} />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
