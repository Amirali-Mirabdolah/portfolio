"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { calculateAge } from "@/lib/calculateAge";

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
    {
      fieldName: "Age",
      fieldValue: calculateAge("2002"),
    },
    {
      fieldName: "Military Service Status",
      fieldValue: "Educational Exemption",
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
      company: "Tejarat Electronic Taban",
      position: "FrontEnd Developer",
      duration: "Sep 2025 – Mar 2026",
    },
    {
      company: "Azhman Madar",
      position: "FrontEnd Developer",
      duration: "Jan 2024 – June 2024",
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
      degree: "Master's degree in Software Engineering",
      duration: "Oct 2025 – Present",
    },
    {
      university: "Islamic Azad University",
      degree: "Bachelor's degree in Computer Engineering",
      duration: "Feb 2021 – Feb 2025",
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
    // {
    //   icon: <MaterialUiIcon/>,
    //   name: "MUI",
    // },
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

          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="experience"
              className="w-full"
            >
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl flex items-center max-w-60 min-h-15 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="education"
              className="w-full"
            >
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-l flex items-center max-w-80 min-h-15 text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.university}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="skills"
              className="w-full h-full"
            >
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-7.5 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-150 text-white/60 mx-auto">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7.5">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delay={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-37.5 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-7.5">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 max-w-195 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-3"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default page;
