import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiHome } from "react-icons/hi";
// import { IoPersonOutline } from "react-icons/io";

import Harley from "@/public/harley.png";
import TripTales from "@/public/triptales.png";
import vocalize from "@/public/vocalize.png";
import portfolio from "@/public/portfolio.png";
import chat from "@/public/chat.png";

import { GoHome } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWorkOutline, MdOutlineEmail } from "react-icons/md";
import { SiPolywork } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: <GoHome />,
  },
  {
    name: "About",
    hash: "#about",
    icon: <RxPerson />,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: <SiPolywork />,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: <MdOutlineWorkOutline />,
  },

  {
    name: "Contact",
    hash: "#contact",
    icon: <MdOutlineEmail />,
  },
] as const;

export const projectsData = [
  {
    title: "Harley Davidson",
    description:
      "Developed a groundbreaking Harley Davidson Showcase platform, on which you can see real time data of Harley Davidson bikes, and also you can add your own bike to the platform.",

    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Mongoose", "Redux"],
    imageUrl: Harley,
    live: "https://harley-davidson.vercel.app/",
    code: "https://github.com/shivamtiwari9118/Harley-Davidson",
  },
  {
    title: "TripTales",
    description:
      "Build and optimize your itineraries with our free AI trip planner. Designed for vacations and everyday adventures.",

    tags: [
      "Zustand",
      "Socket.io",
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind",
    ],
    imageUrl: TripTales,
    live: "https://trip-tales-navy.vercel.app/",
    code: "https://github.com/shivamtiwari9118/TripTales",
  },
  // {
  //   title: " Digital Portfolio",
  //   description:
  //     "Engineered and launched a sleek and responsive personal portfolio website,effectively showcasing my expertise, projects, and accomplishments.",
  //   tags: ["Next.js", "Typescript", "Tailwind", "Framer"],
  //   imageUrl: portfolio,
  //   live: "https://jabeed.vercel.app/",
  //   code: "https://jabeed.vercel.app/",
  // },
  // {
  //   title: "The Filmagic",
  //   description:
  //     "Created a movie streaming app with real-time access to detailed information on movies, TV shows, cast, related videos, and insider details using TMDB API.",
  //   tags: ["React", "SCSS", "React Router", "Redux", "TMDB API"],
  //   imageUrl: filmagic,
  //   live: "https://filmagic-jabeed.vercel.app/",
  //   code: "https://github.com/iamjabeed/Filmagic",
  // },

  // {
  //   title: "Vocalize",
  //   description:
  //     "Created a React app with advanced speech recognition technology, providing users with an interactive and hands-free experience.",
  //   tags: ["React", "HTML5", "Tailwind", "Framer"],
  //   imageUrl: vocalize,
  //   live: "https://vocalize-blush.vercel.app/",
  //   code: "https://github.com/iamjabeed/Vocalize",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SCSS",
  "JAVA",
  "JavaScript",
  "React",
  "Redux",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Postman",
  "Docker",
  "Java",
  "Git",
  "VsCode",
  "Figma",
] as const;

// export const skillsData = [
//   { skillName: "HTML", skillUrl: HTML },
//   { skillName: "CSS", skillUrl: CSS },
//   { skillName: "Tailwind CSS", skillUrl: tailwind },
//   { skillName: "Sass", skillUrl: sass },
//   { skillName: "JavaScript", skillUrl: javascript },
//   { skillName: "React", skillUrl: react },
//   { skillName: "Redux", skillUrl: redux },
//   { skillName: "TypeScript", skillUrl: typescript },
//   { skillName: "Next.js", skillUrl: nextjs },
//   { skillName: "Node.js", skillUrl: node },
//   { skillName: "Express.js", skillUrl: expressjs },
//   { skillName: "MongoDB", skillUrl: mongodb },
//   { skillName: "MySQL", skillUrl: mysql },
//   { skillName: "Docker", skillUrl: docker },
//   { skillName: "Java", skillUrl: java },
//   { skillName: "Git", skillUrl: git },
//   { skillName: "GitHub", skillUrl: github },
//   { skillName: "VsCode", skillUrl: vscode },
//   { skillName: "Figma", skillUrl: figma },
//   { skillName: "Postman", skillUrl: postman },
// ] as const;
