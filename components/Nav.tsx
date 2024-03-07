"use client"

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import {motion} from 'framer-motion'

const Nav = () => {
  return (
    <motion.div className="relative z-[2000] w-screen h-[7rem] bg-slate-00">
      <motion.nav className="hidden lg:flex w-full h-full pl-[30rem] pr-[7rem] justify-center items-center text-slate-300 bg-slate-00"
      >
        <ul className="w-full flex flex-row justify-around">
          {links.map((link) => (
            <li>
              <Link className=" hover:text-[#DECEFF]" href={link.hash}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default Nav;
