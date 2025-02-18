"use client";
import React, { useEffect } from "react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "@/app/context";

const Nav = () => {
  const context = useAppContext();

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
      window.removeEventListener("resize", handleMinimizingNav);
    };
  }, []);

  return (
    <motion.nav className="flex flex-col p-2 sm:h-screen items-center"
      initial={{ padding: "2rem" }}
    >
      {/* Nav links */}
      <ul className="flex sm:flex-col items-center gap-8">
        {navLinks.map((navLink, index) => (
          <li key={navLink.name} className="text-xl flex items-center">
            <button
              onClick={() => handleNavLinkOnClick(navLink)}
              className={`flex items-center rounded-lg 
                ${ isActive === navLink.name ? "rounded-lg font-medium text-[var(--primary)]" : "border-transparent justify-start"}
              `}
            >
              <FontAwesomeIcon icon={navLink.icon} />
              {isExpandedNav && <span className="pl-2">{navLink.name}</span>}
            </button>
          </li>
        ))}
        <li className="flex">
          <button
            className="sm:mt-10"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
