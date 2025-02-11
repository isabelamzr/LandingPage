"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Encryption = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      className={`flex flex-col relative items-center min-h-screen w-full ${
        isMobile ? "mb-0" : "mb-14"
      }`}
    >
      <div className="absolute w-auto h-auto top-0 z-[30]">
        <motion.div
          variants={slideInFromTop}
          className={`font-medium text-center w-full mx-auto text-gray-200 ${
            isMobile ? "text-[18px] px-4 mb-6" : "text-[28px] mb-8"
          }`}
        >
          Dedicate to learn{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ethical Hacking techniques
          </span>{" "}
          to improve security
        </motion.div>
      </div>

      <div
        className="w-full flex-1 relative"
        style={{
          height: isMobile ? "auto" : "72vh"
        }}
      >
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="group cursor-pointer relative">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={isMobile ? 40 : 50}
              height={isMobile ? 40 : 50}
              className={`transition-all duration-200 ${
                isMobile
                  ? "w-[40px] -translate-y-2"
                  : "w-[50px] translate-y-[-12px]"
              } group-hover:translate-y-8 absolute left-1/2 -translate-x-1/2 ${
                isMobile ? "-top-4" : "-top-[14px]"
              }`}
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={isMobile ? 60 : 70}
              height={isMobile ? 60 : 70}
              className={`${isMobile ? "w-[60px]" : "w-[70px]"} relative z-10`}
            />
          </div>

          <div className="Welcome-box px-[15px] py-[4px] border my-[20px] border-[#7042f88b] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Kali Linux</h1>
          </div>
        </div>

        <div className="w-full flex items-center justify-center absolute top-1/2 -translate-y-1/2">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className={`${isMobile ? "h-[300px] w-full object-contain" : "w-full h-auto"}`}
            src="/encryption.webm/"
          />
        </div>
      </div>
    </div>
  );
};

export default Encryption;
