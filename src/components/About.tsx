"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Sandeep Shome - a passionate developer, avid
          writer, and a connoisseur of awesome development & design. Welcome to
          my corner of the digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          With the years of experiences, I am a seasoned full-stack developer
          with a strong passion for building innovative products. My journey
          began with a focus on web development, where I honed my skills in both
          front-end and back-end technologies. I&apos;ve had the opportunity to
          work on a diverse range of projects, from creating scalable web
          applications to designing intuitive user interfaces that enhance the
          user experience.
        </Paragraph>

        <Paragraph className=" mt-4">
          My passion lies in building developer-centric tools that streamline
          workflows and empower other developers. I believe that by creating
          efficient and user-friendly solutions for my peers, I can contribute
          to a more productive and collaborative tech community. This drive has
          led me to explore and integrate emerging technologies into my work.
        </Paragraph>
        <Paragraph className=" mt-4">
          I am currently expanding my expertise in Generative AI and native app
          development, with a keen interest in building SaaS products that solve
          complex, real-world problems. My goal is to leverage these
          cutting-edge technologies to create impactful solutions that not only
          meet but exceed user expectations. I am a firm believer in continuous
          learning and am always on the lookout for new challenges that allow me
          to grow as a developer and a problem-solver.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this journey of bytes and narratives, logic and creativity,
          code and prose. Together, we can explore the boundless possibilities
          of technology and storytelling, all while reveling in the sheer beauty
          of thoughtful design.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
