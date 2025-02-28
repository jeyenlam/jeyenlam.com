"use client";
import React from "react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/app/context";
import { useIsMobile, useScrollDirection } from "@/lib/hooks";

const Nav = () => {
  const context = useAppContext();
  if (!context) { return null}

  const {
    isActive,
    theme,
    setTheme,
    handleNavLinkOnClick,
  } = context;

  const scrollDirection = useScrollDirection(100)
  const isMobile = useIsMobile();

  const navY = isMobile
  ? scrollDirection === "down"
    ? "-100%"
    : "0%"
  : "0%";


  return (
    <motion.nav 
      className="z-40 bg- flex items-center fixed w-full sm:h-full sm:w-20 justify-center sm:items-start sm:text-xl"
      animate={{ y: navY}}
      transition={{duration:0.6, ease: "easeOut"}}
    >
      {/* Nav links */}
      <ul className="sm:pt-4 flex sm:flex-col sm:items-center gap-8 px-6 py-2 rounded-full">
        {navLinks.map((navLink, _index) => (
          <li key={navLink.name}>
            <button
              onClick={() => handleNavLinkOnClick(navLink)}
              className={`${ isActive === navLink.name ? "text-[var(--primary)] duration-200" : ""}`}
            >
              <FontAwesomeIcon icon={navLink.icon} className=" "/>
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
