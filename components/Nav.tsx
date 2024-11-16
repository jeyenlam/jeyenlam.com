"use client"

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import {motion} from 'framer-motion'

const Nav = () => {
  return (
    <motion.div className="flex justify-center z-[2000] w-screen h-[7rem] bg-slate-00">
      <motion.nav className="flex w-1/2 h-full justify-center items-center"
      >
        <ul className="w-full flex flex-row justify-around">
          {links.map((link) => (
            <li>
              <Link href={link.hash}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default Nav;
