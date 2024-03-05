import React from "react";
import profile from "@/assets/profile.jpeg";
import Image from "next/image";

const SideBarL = () => {
  return (
    <div className="absolute top-0 left-0 -z-[100] pt-[7rem] pb-10 w-[30rem] h-screen px-20 flex flex-col justify-center items-center flex-wrap text-slate-400">
      <div className="w-full">
        <Image className="" width="200" src={profile} alt="profile" />
      </div>
      <div className="w-full pt-10">
        <h2 className="text-7xl text-[#DECEFF]">
          <strong>Yen Lam</strong>
        </h2>
        <h1 className="text-7xl text-slate-300">
          Web <br />
          Developer
        </h1>
        <div className="w-full pt-5 ">
          <p>
            Computer Science Undergrad @ GVSU <br />
            Aspiring SWE focusing on Website Development <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBarL;
