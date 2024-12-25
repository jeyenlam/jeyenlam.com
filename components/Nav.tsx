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
        className="flex justify-center h-screen bg-zinc-900"
        initial={{ width: "15rem" }}
        animate={{ width: isExpandedNav ? "15rem" : "3.2rem"}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <nav className="flex flex-col pt-10 xl:pt-20 items-center">
          {/* Menu button for expanding/collapsing nav bar */}
          <motion.div
            initial={{opacity:0, y: -50}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.65, delay:0.7, ease: "easeOut"}}
            onClick={handleNavMenuOnClick}
            className="cursor-pointer xl:mb-10"
          >
            <FontAwesomeIcon className="hidden xl:block text-indigo-300" icon={isExpandedNav ? faArrowLeft : faBars} />
          </motion.div>

          {/* Nav links */}
          <motion.ul className="flex flex-col justify-around">
            {navLinks.map((navLink, index) => (
              <motion.li
                key={navLink.name}
                initial={{opacity:0, y: -50}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.65, delay:0.7, ease: "easeOut"}}
                className="pt-5 sm:text-base flex items-center"
              >
                <button
                  onClick={() => handleNavLinkOnClick(navLink)}
                  className={`flex items-center rounded-lg ${
                    isActive === navLink.name
                      ? "rounded-lg font-bold bg-indigo-500 text-zinc-900"
                      : "border-transparent justify-start text-indigo-300"
                  } ${
                    isExpandedNav ? "pl-4 w-40 h-10" : "w-8 h-8 justify-center"
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
