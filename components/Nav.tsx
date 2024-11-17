"use client"
import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isActive, setIsActive] = useState("About");
  const [isExpandedNav, setIsExpandedNav] = useState(false);

  return (
    <>
      <motion.div
        className={isExpandedNav ? "flex justify-center h-screen bg-black text-white" : "flex justify-center w-14 h-screen bg-black text-white"}
        initial={{ width: "10rem" }} // Initial collapsed width
        animate={{ width: isExpandedNav ? "10rem" : "3.5rem" }} // Animate expanded/collapsed width
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition timing
      >
        <nav className="flex flex-col h-2/5 mt-10 justify-evenly items-center bg-slate-00">
          {/* Toggle button for expanding/collapsing */}
          <motion.div
            onClick={() => setIsExpandedNav(!isExpandedNav)}
            className="cursor-pointer mb-10"
          >
            <FontAwesomeIcon icon={isExpandedNav ? faAngleLeft : faBars} />
          </motion.div>

          {/* Navigation links */}
          <ul className="w-full h-3/5 flex flex-col justify-around bg-slate-00">
            {navLinks.map((navLink) => (
              <li key={navLink.name} className="text-xs flex items-center p-2">
                <Link href={navLink.url} onClick={() => setIsActive(navLink.name)} className={isActive === navLink.name ? "flex items-center text-violet-500 rounded-sm" : "flex items-center justify-start rounded-sm"}>
                  <FontAwesomeIcon icon={navLink.icon} />
                  {isExpandedNav && <span className="pl-2">{navLink.name}</span>} {/* Only show text when expanded */}
                </Link>
              </li>
            ))}
            <hr className="opacity-45" />
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Nav;
