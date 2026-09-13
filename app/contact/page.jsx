"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+98 903 78 919 88",
  },
  {
    icon: <FaEnvelope />,
    title: "Gmail",
    description: "amiralimirabdolah@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Tehran, Rudehen",
  },
];

function page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-9">
          <div className="xl:w-[54%] order-2 xl:order-0">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/60">
                I&apos;m looking for a collaborative environment where I can learn
                from others, share my knowledge, and continuously grow while
                contributing to meaningful projects and a strong team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  placeholder="Email"
                />
                <Input
                  type="phonenumber"
                  placeholder="Phone number"
                />
              </div>
              <Textarea
                className="h-50"
                placeholder="Type Your Message Here"
              />
              <Button
                size="md"
                className="max-w-40"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="size-13 xl:size-18 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-7 ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default page;
