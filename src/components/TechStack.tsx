import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next2.png",
      className: "h-10 w-10",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",
      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
    {
      title: "C",
      src: "/images/logos/c.png",
      className: "h-10 w-10",
    },
    {
      title: "C++",
      src: "/images/logos/cplus.png",
      className: "h-10 w-10",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",
      className: "h-10 w-10",
    },
    {
      title: "python",
      src: "/images/logos/python.png",
      className: "h-10 w-10",
    },
    {
      title: "Express",
      src: "/images/logos/express.svg",
      className: "h-10 w-10",
    },
    {
      title: "React",
      src: "/images/logos/react.svg",
      className: "h-10 w-10",
    },
    {
      title: "Typescript",
      src: "/images/logos/typescript.png",
      className: "h-10 w-10",
    },
    {
      title: "Javascript",
      src: "/images/logos/javascript.png",
      className: "h-10 w-10",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongo.png",
      className: "h-10 w-10",
    },
    {
      title: "Postgres",
      src: "/images/logos/postgres.png",
      className: "h-10 w-10",
    },
    {
      title: "Github",
      src: "/images/logos/github.png",
      className: "h-10 w-10",
    },
    {
      title: "Hono",
      src: "/images/logos/flame.png",
      className: "h-10 w-10",
    },
    {
      title: "MySql",
      src: "/images/logos/mysql.png",
      className: "h-10 w-10",
    },
    {
      title: "php",
      src: "/images/logos/php.png",
      className: "h-10 w-10",
    },
    {
      title: "Redis",
      src: "/images/logos/redis.png",
      className: "h-10 w-10",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",
      className: "h-10 w-10",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
