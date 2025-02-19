"use client";
import React from "react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/app/context";
import CustomTooltip from "./CustomTooltip";

const Nav = () => {
  const context = useAppContext();

  const {
    isActive,
    theme,
    setTheme,
    handleNavLinkOnClick,
  } = context;

  return (
    <motion.nav className="flex flex-col sm:h-screen items-center sm:text-xl"
      initial={{ padding: "1.5rem" }}
    >
      {/* Nav links */}
      <ul className="flex sm:flex-col items-center gap-8">
        {navLinks.map((navLink, index) => (
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
