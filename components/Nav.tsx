"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import ScrollToSection from "@/hooks/ScrollToSection";

const Nav = () => {

  const [isActive, setIsActive] = useState("About");
  const [isExpandedNav, setIsExpandedNav] = useState(false);

  const handleExpendedNavWhenScreenIsSmall = () => {
    if (window.innerWidth < 1200){
      setIsExpandedNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleExpendedNavWhenScreenIsSmall);

    return () => {
      window.removeEventListener("resize", handleExpendedNavWhenScreenIsSmall)
    };
  }, [])

  return (
    <>
      <motion.div
        className={
          isExpandedNav
            ? "flex justify-center h-screen bg-zinc-800"
            : "flex justify-center w-14 h-screen border-zinc-00 bg-zinc-800"
        }
        initial={{ width: "15rem" }} // Initial collapsed width
        animate={{ width: isExpandedNav ? "15rem" : "6rem" }} // Animate expanded/collapsed width
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition timing
      >
        <nav className="flex flex-col h-1/2 mt-10 xl:justify-evenly items-center bg-zinc-00">
          {/* Toggle button for expanding/collapsing */}
          <motion.div
            initial={{opacity:0, y: 50}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1, delay:1, ease: "easeOut"}}
            onClick={() => setIsExpandedNav(!isExpandedNav)}
            className="cursor-pointer mb-10"
          >
            <FontAwesomeIcon className="hidden xl:block text-indigo-200" icon={isExpandedNav ? faArrowLeft : faBars} />
          </motion.div>

          {/* Navigation links */}
          <motion.ul className="flex flex-col justify-around">
            {navLinks.map((navLink) => (
              <motion.li
                key={navLink.name}
                initial={{opacity:0, y: 50}}
                animate={{opacity:1, y:0}}
                transition={{duration: 1, delay:1, ease: "easeOut"}}
                className={
                  isExpandedNav
                    ? "text-lg flex items-center p-2"
                    : "text-lg flex items-center p-2"
                }
              >
                <Link
                  href={navLink.url}
                  onClick={() => {setIsActive(navLink.name)}}
                  className={`flex items-center px-2 rounded-sm ${
                    isActive === navLink.name
                      ? "rounded-xl border-b-4 border-zinc-900 border font-bold text-zinc-900 bg-indigo-400"
                      : "border-transparent justify-start text-indigo-200"
                  } ${
                    isExpandedNav ? "w-40 h-10" : "w-10 h-10 justify-center"
                  }`}
                >
                  <FontAwesomeIcon icon={navLink.icon} />
                  {isExpandedNav && (
                    <span className="pl-2">{navLink.name}</span>
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Nav;
