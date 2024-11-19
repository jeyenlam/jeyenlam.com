"use client";
import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isActive, setIsActive] = useState("About");
  const [isExpandedNav, setIsExpandedNav] = useState(false);

  return (
    <>
      <motion.div
        className={
          isExpandedNav
            ? "flex justify-center border-r-4 h-screen border-zinc-00"
            : "flex justify-center w-14 h-screen border-r-4 border-zinc-00"
        }
        initial={{ width: "15rem" }} // Initial collapsed width
        animate={{ width: isExpandedNav ? "15rem" : "6rem" }} // Animate expanded/collapsed width
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition timing
      >
        <nav className="flex flex-col h-1/2 mt-10 justify-evenly items-center bg-slate-00">
          {/* Toggle button for expanding/collapsing */}
          <motion.div
            onClick={() => setIsExpandedNav(!isExpandedNav)}
            className="cursor-pointer mb-10"
          >
            <FontAwesomeIcon icon={isExpandedNav ? faAngleLeft : faBars} />
          </motion.div>

          {/* Navigation links */}
          <ul className="flex flex-col justify-around bg-slate-00">
            {navLinks.map((navLink) => (
              <li
                key={navLink.name}
                className={
                  isExpandedNav
                    ? "text-lg flex items-center p-2"
                    : "text-lg flex items-center p-2"
                }
              >
                <Link
                  href={navLink.url}
                  onClick={() => setIsActive(navLink.name)}
                  className={`flex items-center px-2 rounded-sm ${
                    isActive === navLink.name
                      ? "border-b-4 border-zinc-900 border font-bold bg-blue-800 text-lime-200"
                      : "border-l-4 border-transparent justify-start"
                  } ${
                    isExpandedNav ? "w-40 h-10" : "w-10 h-10 justify-center"
                  }`}
                >
                  <FontAwesomeIcon icon={navLink.icon} />
                  {isExpandedNav && (
                    <span className="pl-2">{navLink.name}</span>
                  )}{" "}
                  {/* Only show text when expanded */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Nav;
