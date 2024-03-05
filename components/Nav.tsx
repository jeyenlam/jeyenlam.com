"use client"

import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import {motion} from 'framer-motion'
import Image from "next/image";
import logo from '@/assets/Frame 1.png'

const Nav = () => {
  return (
    <motion.div className="w-screen">
      <motion.nav className="w-screen h-[7rem] flex justify-center items-center text-slate-300"
      >
        <ul className="w-[50%] h-full flex flex-row justify-around items-center">
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
