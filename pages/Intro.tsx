"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import ContactIconList from "@/components/ContactIconList";
import Image from "next/image";
import purple from "@/public/original1.jpg";
import { bio } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <section id="intro">
      <div className="p-2 mt-8 flex flex-col gap-4">
        {/* Big Text Box */}
        <motion.div
          className="flex box h-24 flex-col justify-center items-center rounded-xl p-2 pt-2 relative"
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
        >
          <Image
            src={purple}
            width={150}
            alt="purple_profile"
            className="absolute top-4  border shadow rounded-full"
          />
        </motion.div>

        {/* Small Text Box */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9, ease: easeInOut }}
          className="flex-1 mt-16 justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center">
            {bio.map((line, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                {line.type === "name" && (
                  <h1 className="text-3xl font-medium">{line.text}</h1>
                )}
                {line.icon && (
                  <div className="flex items-center gap-2 mt-4">
                    <FontAwesomeIcon
                      className="teritary"
                      icon={line.icon.icon}
                    />
                    <p className="">{line.text}</p>
                  </div>
                )}
              </div>
            ))}
            <ContactIconList isBox={true}/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
