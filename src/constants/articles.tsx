import reactTheme from "public/images/articles/react-theme.png";

export const articles = [
  {
    href: "https://medium.com/@sandeepshome.dev/react-theming-dark-mode-with-context-api-and-tailwindcss-b3ef50a9522b",
    title: "React theming",
    description: "React theming (dark mode) with Context API and tailwindcss",
    thumbnail: reactTheme,
    images: [reactTheme],
    stack: ["React", "ContextAPI", "Tailwindcss"],
    slug: "react-themeing",
    linkPlaceholder: "Read more",
    content: (
      <div>
        <p>
          In this article, we are going to implement theme toggling (dark mode)
          in React.js (version 18 and above). This tutorial is aimed at
          beginners to intermediate developers.
        </p>
        <p>
          There are multiple ways to achieve theme toggling, but from my
          personal experience, this is one of the best and most optimized
          approaches. In future sessions, we can explore additional features and
          optimizations. This method can also be extended to work with other
          state management libraries like Redux, Zustand, and more.
        </p>
      </div>
    ),
  },
];
