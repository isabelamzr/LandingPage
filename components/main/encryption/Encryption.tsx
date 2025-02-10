"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Encryption = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full gap-2">
      {/* Título Superior */}
      <div className="w-full max-w-[90%] z-[5]">
        <motion.div
          variants={slideInFromTop}
          className={`font-medium text-center mx-auto text-gray-200 ${
            isMobile 
              ? "text-[14px] leading-tight mb-4" 
              : "text-[20px] mb-8"
          }`}
        >
          Dedicate to learn {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ethical Hacking techniques
          </span> {" "}
          to improve security
        </motion.div>
      </div>

      {/* Container Principal - Cadeado + Kali Linux */}
      <div className="flex flex-col items-center z-[20] relative">
        <div className="group cursor-pointer">
          <div className="relative">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={isMobile ? 40 : 50}
              height={isMobile ? 40 : 50}
              className={`transition-all duration-200 ${
                isMobile 
                  ? "w-[40px] translate-y-2" 
                  : "w-[50px] translate-y-5"
              } group-hover:translate-y-11 absolute -top-4 left-1/2 -translate-x-1/2`}
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={isMobile ? 60 : 70}
              height={isMobile ? 60 : 70}
              className={isMobile ? "w-[60px]" : "w-[70px]"}
            />
          </div>
        </div>

        <div className="Welcome-box px-[15px] py-[4px] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Kali Linux</h1>
        </div>
      </div>

      {/* Vídeo Background */}
      <div className="w-full absolute inset-0 z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;