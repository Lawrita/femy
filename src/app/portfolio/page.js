"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React foodSite",
    desc: "The website features a responsive design that adjusts seamlessly to various screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices.",
    image: "/weedmenu.jpg",
    link: "https://www.figma.com/design/MDCc86p4ZyH6z7Hlq5CdE9/Hng-stage-2?node-id=0-1&t=ZQrsJCGEDYVv3cqC-1",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React Tourist Site",
    desc: "Explore Wonders is a captivating tourist website designed to provide visitors with detailed information about top attractions and travel experiences. The site features a user-friendly interface that highlights key destinations, offers interactive elements, and ensures an engaging browsing experience",
    image: "/more.jpg",
    link: "https://www.figma.com/design/6GgIPJcpYPiqg4Hpw82y6l/Untitled?node-id=1-1047&t=2LTqtA4q1vsXj0oO-1",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React real Estate Site",
    desc: "Real Estate Hub is a comprehensive real estate website designed to provide users with a seamless experience for browsing and finding properties. The site features a clean and intuitive interface, offering detailed property listings, search functionality, and interactive elements to enhance user engagement.",
    image: "/recent.jpg",
    link: "https://www.figma.com/design/Ajj7SBuWVCvkkUBWfqNByP/Untitled?node-id=1-3&t=gHd2bgs1U44HGPL4-1s",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-2 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1>{item.title}</h1>
                  <div className="relative h-40 w-40 md:w-96 md:h-64 lg:w-[500px]lg:h[350px]xl:w-[600px] xl:h-[420px]">
                    <Image src={item.image} alt={item.title} fill />
                  </div>
                  <p className="w-50 md:w-96 lg:w-[500px]lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex  justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-red-300 text-gray-600 font-semibold m-2 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/*circle*/}
      <div className="bg-gradient-to-t  to-red-300 from-blue-500 w-screen h-screen flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="text-4xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                UI-UX Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            aria-label="Hire me"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-red-300 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
          >
            Hire me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
