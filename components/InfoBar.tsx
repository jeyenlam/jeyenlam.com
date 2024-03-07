import React from "react";
import profile from "@/assets/profile.jpeg";
import Image from "next/image";
import Link from "next/link";

const InfoBar = () => {
  return (
    <div className="top-0 left-0 z-[1000] lg:h-screen flex flex-col justify-start items-start p-10 md:p-20 flex-wrap lg:items-center text-slate-400 sm:w-[33rem] bg-slate-00">
      <div className="">
        <Image className="" width="200" src={profile} alt="profile" />
        <br/>
        <h2 className="text-5xl sm:text-7xl text-[#DECEFF]">
          <strong>Yen Lam</strong>
        </h2>
        <h1 className="text-5xl sm:text-7xl text-slate-300">
          Web <br />
          Developer
        </h1>
        <div className="w-full pt-5 text-sm">
          <p>
            Computer Science Undergrad @ <Link target='_blank' className="text-slate-300 hover:text-[#DECEFF] hover:border-b hover:border-[#DECEFF]" href='https://www.gvsu.edu/'>GVSU</Link> <br />
            Aspiring SWE focusing on Website Development <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
