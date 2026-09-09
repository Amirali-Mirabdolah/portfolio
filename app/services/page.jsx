"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description:
      "Building modern and responsive web applications with React and Next.js, with a focus on clean UI, reusable components, and a smooth user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Exploring Back-End Development",
    description:
      "Exploring backend development through real-world projects, including building a chat application with Convex for backend functionality and data management.",
    href: "https://github.com/Amirali-Mirabdolah/chat-application",
  },
  {
    num: "03",
    title: "AI-Powered Development",
    description:
      "Trained through a hands-on bootcamp on LLMs and AI coding agents, including Cursor, Codex, ChatGPT, and GitHub Copilot. I have also applied these tools in practical projects and built portfolio work with AI-assisted development.",
    href: "https://starcoach.ir/certificate/STC20264008",
  },
];

function page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-15"
        >
          {services.map((service) => {
            return (
              <div
                className="flex flex-1 flex-col gap-6 justify-center group"
                key={service.num}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="size-17.5 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default page;
