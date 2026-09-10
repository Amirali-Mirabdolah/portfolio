"use client";

import React from "react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "emy style",
    description:
      "An e-commerce website built with React and Tailwind CSS, featuring React Query for data fetching and Redux for state management.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
    ],
    image: "",
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
      { name: "Html 5" },
      { name: "Css 3" },
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
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
    ],
    image: "",
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
      { name: "Html 5" },
      { name: "Css 3" },
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
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: "",
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
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: "",
    live: "",
    github: "https://github.com/Amirali-Mirabdolah/taskam",
    isCompleted: true,
    isVibeCoding: true,
  },
];

function page() {
  return <div>work page</div>;
}

export default page;
