"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten overflow-hidden rounded-full relative border-accent border-1">
          <Image
            src="/assets/amirali-e.png"
            property
            quality={100}
            fill
            alt="image"
            className="object-cover object-top"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Photo;
