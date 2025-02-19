"use client";
import React from "react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/app/context";

const Nav = () => {
  const context = useAppContext();

  if (!context) {
    return null;
  }

  const {
    isActive,
    theme,
    setTheme,
    handleNavLinkOnClick,
  } = context;

  return (
    <motion.nav className="backdrop-blur-3xl backdrop-contrast-100 z-50 h-10 flex items-center fixed w-full sm:h-full sm:w-20 justify-center sm:items-start sm:text-xl"
      // initial={{ padding: "1.5rem" }}
    >
      {/* Nav links */}
      <ul className="sm:pt-4 flex sm:flex-col sm:items-center gap-8">
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
