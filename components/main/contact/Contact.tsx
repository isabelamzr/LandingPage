"use client";

import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [status, setStatus] = useState({
    error: false,
    success: false,
    message: "",
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", damping: 30, stiffness: 100 },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", damping: 30, stiffness: 100 },
    },
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          setStatus({
            error: false,
            success: true,
            message: "Transmission successful.",
          });
          formRef.current?.reset();
          setTimeout(() => {
            setStatus({ error: false, success: false, message: "" });
          }, 2000);
        },
        () => {
          setStatus({
            error: true,
            success: false,
            message: "Transmission failed.",
          });
          setTimeout(() => {
            setStatus({ error: false, success: false, message: "" });
          }, 2000);
        }
      );
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(process.env.NEXT_PUBLIC_WHATSAPP_URL!, "_blank");
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center gap-[50px] h-full max-w-[1366px] mx-auto px-4 md:px-20 py-20 mt-10 relative"
    >
      {status.message && (
        <div
          className={`
            absolute z-[10000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3
            w-[300px] p-4 rounded-lg text-white text-center shadow-2xl 
            border border-opacity-20 border-white 
            ${status.success
              ? "bg-gradient-to-br from-[#2c3e50] to-[#34495e]"
              : "bg-gradient-to-br from-[#c0392b] to-[#e74c3c]"}
          `}
        >
          <p>{status.message}</p>
        </div>
      )}

      <motion.div
        initial="hidden"
        animate={controls}
        variants={slideInFromLeft}
        className="flex-1 flex flex-col gap-10 md:pr-20"
      >
        <h1 className="text-[68px] leading-[88px] font-bold text-white">
          Let&apos;s work together
        </h1>
        <div className="flex flex-col md:flex-col gap-10 text-white">
          <div>
            <h2 className="font-semibold mb-2">Mail</h2>
            <span className="font-light">isabelamzr.dev@gmail.com</span>
          </div>
          <div className="mt-5 md:mt-0">
            <h2 className="font-semibold mb-2">Current Location</h2>
            <span className="font-light">Belo Horizonte</span>
          </div>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(186,156,255,0.4)",
              borderColor: "#ba9cff",
              transition: { type: "tween", duration: 0.05, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95, boxShadow: "0 0 15px rgba(186,156,255,0.6)" }}
            onClick={handleWhatsAppClick}
            className="w-48 h-12 flex items-center justify-center gap-2 bg-transparent border border-white text-white rounded-md transition-all duration-75 mt-5 md:mt-5"
          >
            <MessageCircle size={16} />
            <span className="text-sm">WhatsApp</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={slideInFromRight}
        className="flex-1 relative mt-10 md:mt-0"
      >
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
          <motion.input
            type="text"
            name="name"
            required
            placeholder="Name"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 bg-[#ffffff10] border border-white text-white rounded-md focus:outline-none focus:border-[#ba9cff] transition-all duration-100"
          />
          <motion.input
            type="email"
            name="email"
            required
            placeholder="Email"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 bg-[#ffffff10] border border-white text-white rounded-md focus:outline-none focus:border-[#ba9cff] transition-all duration-100"
          />
          <motion.textarea
            name="message"
            rows={8}
            required
            placeholder="Message"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 bg-[#ffffff10] border border-white text-white rounded-md focus:outline-none focus:border-[#ba9cff] transition-all duration-100 resize-none"
          />
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(186,156,255,0.4)",
              borderColor: "#ba9cff",
              transition: { type: "tween", duration: 0.05, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95, boxShadow: "0 0 15px rgba(186,156,255,0.6)" }}
            type="submit"
            className="w-full h-12 bg-transparent border border-white text-white rounded-md transition-all duration-75"
          >
            Send mail
          </motion.button>
          <p className="text-[#ffffff80] italic text-sm mt-2">
            Thank you! I&apos;m excited to make this connection, expect a response within 1 business day.
          </p>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;