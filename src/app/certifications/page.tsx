import { Certificates } from "@/components/Certificates";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Sandeep Shome",
  description:
    "Sandeep Shome is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been achived
      </Heading>
      <Certificates />
    </Container>
  );
}
