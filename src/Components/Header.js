"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlinks from "@/Components/Navlinks";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const header = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(225, 225, 225)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(225, 225, 225)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/*nav-menu*/}
        <div className="hidden md:flex gap-4 w-1/3">
          {links.map((link) => (
            <Navlinks link={link} key={link.title} />
          ))}
        </div>
        {/*logo*/}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Thato</span>
            <span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">
              UI/UX
            </span>
          </Link>
        </div>
        {/*scoial menu-icons*/}
        <div className="hidden md:flex gap-8 ml-20 w-1/3">
          <Link href="https://www.behance.net/femitheophilus">
            <img src="/behance.jpeg" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/femi-theophilus-42822b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="/linkedin.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61554737093693">
            <img src="/facebook.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/thato.uiux?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <img src="/instagram.png" alt="" width={24} height={24} />
          </Link>
        </div>
        {/*responsive menu*/}
        <div className="md:hidden">
          {/*menu Button*/}
          <button
            className=" w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((open) => !open)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left "
            ></motion.div>
          </button>
          {/*menu List*/}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute text-4xl top-0 left-0 w-screen h-screen bg-black
 text-white flex flex-col items-center justify-center gap-8 z-10"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default header;
