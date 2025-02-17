"use client";
import React, { useEffect } from "react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/app/context";

const Nav = () => {

  const context = useAppContext();
  if (!context) { return null };

  const { 
    isExpandedNav,
    isActive,
    theme,  
    setTheme,
    handleNavMenuOnClick,
    handleMinimizingNav,
    handleNavLinkOnClick,
  } = context;


  useEffect(() => {
    window.addEventListener("resize", handleMinimizingNav);

    return () => {
      window.removeEventListener("resize", handleMinimizingNav)
    };
  }, [])

  return (
    <>
      <motion.nav
        className="flex w-screen h-16 sm:justify-center sm:h-screen"
        initial={{ width: "15rem" }}
        animate={{ width: isExpandedNav ? "15rem" : "5rem"}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <nav className="flex w-screen sm:flex-col sm:items-center">
          {/* Menu button for expanding/collapsing nav bar */}
          <motion.div
            initial={{opacity:0, y: -50}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.65, delay:0.7, ease: "easeOut"}}
            onClick={handleNavMenuOnClick}
            className="sm:mt-10 cursor-pointer"
          >
            <FontAwesomeIcon className="hidden xl:block" icon={isExpandedNav ? faArrowLeft : faBars} />
          </motion.div>

          {/* Nav links */}
          <motion.ul className="xl:mt-10 gap-y-4 flex w-screen items-center sm:flex-col justify-around">            
            {navLinks.map((navLink, index) => (
              <motion.li
                key={navLink.name}
                initial={{opacity:0, y: -50}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.65, delay:0.7, ease: "easeOut"}}
                className="text-xl flex items-center"
              >
                <button
                  onClick={() => handleNavLinkOnClick(navLink)}
                  className={`flex items-center rounded-lg ${
                    isActive === navLink.name
                      ? "rounded-lg font-medium box"
                      : "border-transparent justify-start"
                  } ${
                    isExpandedNav ? "pl-4 w-40 h-10" : "p-3 justify-center"
                  }`}
                >
                  <FontAwesomeIcon icon={navLink.icon} />
                  {isExpandedNav && (
                    <span className="pl-2">{navLink.name}</span>
                  )}
                </button>
              </motion.li>
            ))}
            <motion.li
              initial={{opacity:0, y: -50}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.65, delay:0.7, ease: "easeOut"}}
              className="flex">
            <button className="sm:mt-10" onClick={() => setTheme(theme === "light" ? "dark" : "light")}><FontAwesomeIcon icon={faWandMagicSparkles}/></button>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.nav>
    </>
  );
};

export default Nav;
