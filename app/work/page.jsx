"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "emy style",
    description:
      "An e-commerce website built with React and Tailwind CSS, featuring React Query for data fetching and Redux for state management.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/emystyle.png",
    live: "https://emy-style-01.vercel.app/",
    github: "https://github.com/Amirali-Mirabdolah/emy-style",
    isCompleted: true,
    isVibeCoding: false,
  },
  {
    num: "02",
    category: "fullstack",
    title: "chat application",
    description:
      "A full-stack real-time chat application built with Next.js and TypeScript, using Convex as a Backend-as-a-Service and shadcn/ui for the interface and clerk for authentication.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Convex" },
      { name: "Clerk" },
      { name: "shadcn/ui" },
    ],
    image: "",
    live: "",
    github: "https://github.com/Amirali-Mirabdolah/chat-application",
    isCompleted: false,
    isVibeCoding: false,
  },
  {
    num: "03",
    category: "frontend",
    title: "coffee",
    description:
      "A frontend project built to practice and explore Tailwind CSS, focusing on responsive layouts and utility-first styling.",
    stack: [{ name: "Tailwind CSS" }],
    image: "/assets/work/coffee.png",
    live: "",
    github: "https://github.com/Amirali-Mirabdolah/coffee",
    isCompleted: true,
    isVibeCoding: false,
  },
  {
    num: "04",
    category: "frontend",
    title: "zinama",
    description:
      "A modern web application built with Next.js, JavaScript, Tailwind CSS, and shadcn/ui, focusing on a clean and responsive user interface.",
    stack: [
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: "",
    live: "",
    github: "https://github.com/Amirali-Mirabdolah/zinama",
    isCompleted: false,
    isVibeCoding: false,
  },
  {
    num: "05",
    category: "frontend",
    title: "zinama plus",
    description:
      "A modern movie discovery platform built with Next.js and TypeScript, using the TMDB API to browse and explore movies with a clean, responsive interface powered by shadcn/ui.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/zinamaplus.png",
    live: "https://zinama-plus.vercel.app/",
    github: "https://github.com/Amirali-Mirabdolah/zinama-plus",
    isCompleted: true,
    isVibeCoding: true,
  },
  {
    num: "06",
    category: "frontend",
    title: "taskam",
    description:
      "A full-stack project management platform inspired by tools like Trello and Jira. Built with Next.js and TypeScript, featuring Kanban boards, task management, calendars, timelines, comments, notifications, role-based access control, and a REST API.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/taskam.png",
    live: "",
    github: "https://github.com/Amirali-Mirabdolah/taskam",
    isCompleted: true,
    isVibeCoding: true,
  },
  {
    num: "06",
    category: "frontend",
    title: "BIT",
    description:
      "A production PWA payment application I worked on during my time at Tejarat Electronic Taban Company. Built with React and Material UI, the application delivers a seamless web-based payment experience similar to popular payment platforms.",
    stack: [{ name: "JavaScript" }, { name: "React.js" }, { name: "MUI" }],
    image: "/assets/work/bit.png",
    live: "https://bit.omidpayment.ir",
    github: "",
    isCompleted: false,
    isVibeCoding: false,
  },
];

function page() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className="container mx-auto">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center px-12 xl:px-0"
      >
        <div className="flex flex-col xl:flex-row xl:gap-7.5">
          <div className="w-full xl:w-[50%] xl:h-115 flex flex-col xl:justify-between order-2 xl:rounded-none">
            <div className="flex flex-col gap-7.5">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h3 className="text-[18px] -mt-4 font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delay={100}>
                      <Tooltip>
                        <TooltipTrigger className="size-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delay={100}>
                      <Tooltip>
                        <TooltipTrigger className="size-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-130 mb-12 rounded-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    className="w-full"
                    key={index}
                  >
                    <div className="h-115 relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default page;
