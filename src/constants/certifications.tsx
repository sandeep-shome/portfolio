import tataCertificate from "public/images/certificates/tata.jpeg";
import reactCertificate from "public/images/certificates/react.png";
import cloudCap from "public/images/certificates/cloud.jpg";
import hakathon1 from "public/images/certificates/haka-1.jpg";
import hakathon2 from "public/images/certificates/haka-2.jpg";
import hakathon3 from "public/images/certificates/haka-3.jpg";
import interC1 from "public/images/certificates/inter-1.jpg";
import interC2 from "public/images/certificates/inter-2.png";

export const certificates = [
  {
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_yZzx5ZRSApgTaR2G3_1753942238461_completion_certificate.pdf",
    title: "Tata - Forage",
    description:
      "Data Visualisation: Empowering Business with Effective Insights",
    thumbnail: tataCertificate,
    images: [tataCertificate],
    stack: ["Data Visualisation", "PowerBI"],
    slug: "tata-forage",
    linkPlaceholder: "Credentials",
    content: (
      <div>
        <p>
          I&apos;m pleased to share that I&apos;ve successfully completed a new
          certification to further enhance my skills and professional
          development. This achievement reflects my ongoing commitment to
          learning and staying updated in a rapidly evolving industry.
        </p>
      </div>
    ),
  },
  {
    href: "https://moonshot.scaler.com/s/li/Sfhl_O6uvT",
    title: "React - Scaler",
    description: "Scaler React.js Certification",
    thumbnail: reactCertificate,
    images: [reactCertificate],
    stack: ["React"],
    slug: "react-scaler",
    linkPlaceholder: "Credentials",
    content: (
      <div>
        <p>
          Successfully completed Scaler&apos;s React.js Certification Course,
          gaining hands-on experience in building dynamic and scalable web
          applications. This certification validates my proficiency in React.js
          concepts, including component-based architecture, state management,
          hooks, and performance optimization. Excited to leverage these skills
          in real-world projects!
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Google Arcade",
    description: "Google cloud cap",
    thumbnail: cloudCap,
    images: [cloudCap],
    stack: ["Google", "Cloud", "AI"],
    slug: "google-arcade",
    content: (
      <div>
        <p>
          Successfully completed Google arcade challanges, gaining hands-on
          experience in GCP and generative AI. Excited to leverage these skills
          in real-world projects!
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "HackFusion",
    description: "Got 3rd position in inter college hakathon 2025",
    thumbnail: hakathon1,
    images: [hakathon1, hakathon2, hakathon3],
    stack: ["Nextjs", "Express", "Cloud", "AI", "X"],
    slug: "hackfusion",
    content: (
      <div>
        <p>
          Attending my first on-campus hackathon at George College 133 as a team
          leader was an incredible experience. We came close to winning, but I
          realized there were still gaps in our skills and knowledge. It was a
          great learning opportunity, and I&apos;m excited to keep improving for
          the next challenge!
        </p>
        <p>
          I was building an AI agent to automate the twitter postings, due to
          some unavoidable circumstances the deadline has been reduced and the
          project remain uncomplete. Judgements are given on the design and the
          idea.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "C programming marathon",
    description: "Bronze Medalist in inter-college C programming marathon C",
    thumbnail: interC1,
    images: [interC1, interC2],
    stack: ["C", "cpp"],
    slug: "inter-c",
    content: (
      <div>
        <p>
          Awarded the Bronze Medal in an inter-college C Programming contest,
          showcasing my proficiency and competitive edge in programming.
        </p>
      </div>
    ),
  },
];
