"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { IIcon } from "@/lib/myInterface";

const Nav = () => {
  const [isActive, setIsActive] = useState("About");
  const [isExpandedNav, setIsExpandedNav] = useState(false);

  const handleMinimizingNav = () => {
    if (window.innerWidth < 1200){
      setIsExpandedNav(false);
    }
  }

  const handleNavMenuOnClick = () => {
    setIsExpandedNav(!isExpandedNav);
  }

  const handleNavLinkOnClick = ( navLink: IIcon ) => {
    setIsExpandedNav(isExpandedNav === true ? !isExpandedNav : isExpandedNav); // only minimizing nav when expended
    setIsActive(navLink.name);

    let sectionId = navLink.url.slice(1); //get rid of "#"
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener("resize", handleMinimizingNav);

    return () => {
      window.removeEventListener("resize", handleMinimizingNav)
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
        initial={{ width: "15rem" }}
        animate={{ width: isExpandedNav ? "15rem" : "6rem" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <nav className="flex flex-col h-1/2 mt-10 xl:justify-evenly items-center bg-zinc-00">
          {/* Menu button for expanding/collapsing nav bar */}
          <motion.div
            initial={{opacity:0, y: 50}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1, delay:1, ease: "easeOut"}}
            onClick={handleNavMenuOnClick}
            className="cursor-pointer mb-10"
          >
            <FontAwesomeIcon className="hidden xl:block text-indigo-200" icon={isExpandedNav ? faArrowLeft : faBars} />
          </motion.div>

          {/* Nav links */}
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
                <button
                  // href={navLink.url}
                  onClick={() => handleNavLinkOnClick(navLink)}
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
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Nav;
