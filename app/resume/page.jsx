"use client";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I'm a Front-End developer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills to improve my craft.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Seyed Amirali Mirabdolah",
    },
    {
      fieldName: "Phone",
      fieldValue: "+98 903 78 919 88",
    },
    {
      fieldName: "Gmail",
      fieldValue: "amiralimirabdolah@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iranian",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have experience in building web applications using JS, React, Next.js, and other modern technologies.",
  items: [
    {
      company: "Azhman Madar",
      position: "Front-End Developer",
      duration: "Jan 2024 – June 2024",
    },
    {
      company: "Tejarat Electronic Taban",
      position: "Front-End Developer",
      duration: "Sep 2025 – Mar 2026",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "I have a Bachelor's degree in Computer Engineering and I’m currently pursuing a Master's degree in Computer Engineering, specializing in Software Engineering.",
  items: [
    {
      university: "Islamic Azad University",
      degree: "Bachelor's degree in Computer Engineering",
      duration: "Feb 2021 – Feb 2025",
    },
    {
      university: "Islamic Azad University",
      degree: "Master's degree in Computer Engineering - Software",
      duration: "Oct 2025 – Present",
    },
  ],
};

const skills = {
  icon: "",
  title: "My Skills",
  description:
    "I have experience with various programming languages and frameworks, including JavaScript, React, Next.js, and more.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-15"
        >
          <TabsList className="flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div>content</div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default page;
