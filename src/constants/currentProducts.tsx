import zuviloPage1 from "public/images/projects/zuvlio/page-1.png";
import zuviloPage2 from "public/images/projects/zuvlio/page-2.png";
import zuviloPage3 from "public/images/projects/zuvlio/page-3.png";
import passloomPage1 from "public/images/projects/passloom/page-1.png";

export const currentProducts = [
  {
    title: "Zuvilo",
    description:
      "A modern application that helps developers to showcase their projects and ideas.",
    thumbnail: zuviloPage1,
    images: [zuviloPage1, zuviloPage2, zuviloPage3],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Clerk",
      "ShadcnUI",
      "Stripe",
      "Webhooks",
      "Typescript",
      "Postgres",
    ],
    slug: "zuvilo",
    content: (
      <div>
        <p>
          A full-stack SaaS application for developers to showcase their
          projects and ideas. Devs can select from a wide range of project
          categories including Web, Native, ML/AI etc. Code marketplace can be
          implemented top on this project.
        </p>
        <p>Hope this SaaS will be shiping soon.</p>
      </div>
    ),
  },
  {
    title: "Passloom",
    description: "Slick and robust app for hosting and managing webinars.",
    thumbnail: passloomPage1,
    images: [passloomPage1],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Express",
      "Monorepo",
      "Stripe",
      "Webhooks",
      "Typescript",
      "Postgres",
    ],
    slug: "passloom",
    content: (
      <div>
        <p>
          Modern and robust SaaS for hosting and managing webinars. This is my
          first monorepo application, I&apos;m very exited with this one, but
          due to some unavoidable circumstances the project is getting delayed.{" "}
        </p>
        <p>Starting working on this project ASAP.</p>
      </div>
    ),
  },
];
