"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
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
        className="flex justify-center h-screen bg-zinc-800 px-2"
        initial={{ width: "15rem" }}
        animate={{ width: isExpandedNav ? "15rem" : "4rem"}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <nav className="flex flex-col h-1/2 mt-10 xl:justify-evenly items-center">
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
                className="sm:text-lg flex items-center p-2"
              >
                <button
                  onClick={() => handleNavLinkOnClick(navLink)}
                  className={`flex items-center px-2 rounded-lg ${
                    isActive === navLink.name
                      ? "rounded-lg border-b-2 md:border-b-4 border-zinc-900 border font-bold text-zinc-900 bg-indigo-400"
                      : "border-transparent justify-start text-indigo-200"
                  } ${
                    isExpandedNav ? "w-40 h-10" : "w-8 sm:w-10 h-8 sm:h-10 justify-center"
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
