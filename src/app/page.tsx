import { Container } from "@/components/Container";
import { CurrentProducts } from "@/components/CurrentProducts";
import { EducationHistory } from "@/components/EducationHistory";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Sandeep</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer from India who loves to{" "}
        <Highlight>build products</Highlight> and web applications that solve
        real-world problems. My primary focus is on creating{" "}
        <Highlight>developer-centric</Highlight> apps.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently expanding my expertise in{" "}
        <Highlight>Generative AI</Highlight> and{" "}
        <Highlight>native app</Highlight> development, with a goal of building
        impactful <Highlight>SaaS</Highlight> solutions.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;m Currently working on
      </Heading>
      <CurrentProducts />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Education
      </Heading>
      <EducationHistory />
      <TechStack />
    </Container>
  );
}
