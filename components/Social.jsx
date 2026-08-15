import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Amirali-Mirabdolah" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/amirali-mirabdolah/",
  },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            className={iconStyles}
            key={index}
            href={social.path}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
