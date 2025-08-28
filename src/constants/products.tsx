import occsiaLandingDarkPage from "public/images/projects/occasia/landing-page-dark.png";
import occsiaLandingLightPage from "public/images/projects/occasia/landing-page-light.png";
import occsiaTemplatePage from "public/images/projects/occasia/speech-template.png";
import occsiaSpeechPage from "public/images/projects/occasia/speech.png";
import weatherPage1 from "public/images/projects/weather/page-1.png";
import weatherPage2 from "public/images/projects/weather/page-2.png";
import weatherPage3 from "public/images/projects/weather/page-3.png";
import hotelPage1 from "public/images/projects/hotel/page-1.png";
import hotelPage2 from "public/images/projects/hotel/page-2.png";
import hotelPage3 from "public/images/projects/hotel/page-3.png";
import beeJokesPage1 from "public/images/projects/bee-jokes/page-1.png";
import textWardenPage1 from "public/images/projects/text-warden/page-1.png";
import memoryGamePage1 from "public/images/projects/memory-game/page-1.png";
import memoryGamePage2 from "public/images/projects/memory-game/page-2.png";
import memoryGamePage3 from "public/images/projects/memory-game/page-3.png";
import ticTacToePage1 from "public/images/projects/tictactoe/page-1.png";
import ticTacToePage2 from "public/images/projects/tictactoe/page-2.png";
import ticTacToePage3 from "public/images/projects/tictactoe/page-3.png";
import collage from "public/images/projects/html-css-js/collage.jpg";
import project1 from "public/images/projects/html-css-js/project-1.png";
import project2 from "public/images/projects/html-css-js/project-2.png";
import project3 from "public/images/projects/html-css-js/project-3.png";

export const products = [
  {
    href: "https://github.com/sandeep-shome/Occasia.git",
    title: "Occasia",
    description: "An AI SaaS application for generating human like speeches",
    thumbnail: occsiaLandingDarkPage,
    images: [occsiaLandingLightPage, occsiaTemplatePage, occsiaSpeechPage],
    stack: [
      "Nextjs",
      "ShadcnUI",
      "Redux",
      "Typescript",
      "Gemini",
      "RazorPay",
      "Clerk",
      "Postgres",
      "Prisma",
    ],
    slug: "occasia",
    linkPlaceholder: "Github",
    content: (
      <div>
        <p>
          Occsia is a modern and easy to use generative AI SaaS, that helps to
          create human like speeches for all the different occasions and
          circumstances. Users are allowed to customize the speeches according
          to them with different moods, emotions and tones.
        </p>
        <p>
          Occasia is a fully ready to ship AI SaaS, with built in subscription
          option. It also provides a freemium model. App is completly secured
          with clerk authentication system.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/sandeep-shome/react-native-weather-app.git",
    title: "React native weather app",
    description: "Simple weather app created with React-native and Expo-cli",
    thumbnail: weatherPage1,
    images: [weatherPage1, weatherPage2, weatherPage3],
    stack: ["ReactNavtive", "Typescript", "Expo", "AndroidStudio", "AVD"],
    slug: "weather-app",
    linkPlaceholder: "Github",
    content: (
      <div>
        <p>
          Weather application made with react-native and expo cli. Also used
          android studio for the simulating and debugging purposes. Started my
          jouerny in the world of native apps with this.
        </p>
        <p>
          Weather API has been used for making this applications functioning.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/sandeep-shome/findbnb.git",
    title: "Findbnb",
    description: "Hotel booking application with MERN",
    thumbnail: hotelPage2,
    images: [hotelPage1, hotelPage2, hotelPage3],
    stack: ["React", "Express", "MongoDB", "Node", "Redux"],
    slug: "findbnb",
    linkPlaceholder: "Github",
    content: (
      <div>
        <p>
          Findbnb is a full-stack hotel booking application made with MERN as
          tech stack. We can book hotels or can create our own property listing
          with admin pannel. Host can customize the property according to them,
          we provide a fully flexible customization feature.
        </p>
        <p>
          An user can book hotels directly from our site, or can add to their
          wishlist for letter preferences. The project is inspired by an Youtube
          content creator. Assets has been taken from that particular project
        </p>
      </div>
    ),
  },
  {
    href: "https://www.npmjs.com/package/bee-jokes",
    title: "Bee-jokes",
    description: "node module for generating random jokes",
    thumbnail: beeJokesPage1,
    images: [beeJokesPage1],
    stack: ["Typescript", "Node", "Tsup", "Husky", "vitest"],
    slug: "bee-jokes",
    linkPlaceholder: "npm",
    content: (
      <div>
        <p>
          bee-jokes is a lightweight TypeScript/JavaScript package that delivers
          clean, categorized, and multilingual jokes — fast and ready to sting
          your apps with humor! Fetch jokes by ID, tag, category, or at random
          and keep your projects buzzing with laughter.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.npmjs.com/package/text-warden",
    title: "text-warden",
    description:
      "A lightweight utility library for detecting sensitive or unsafe text content in strings.",
    thumbnail: textWardenPage1,
    images: [textWardenPage1],
    stack: ["Typescript", "Node", "Tsup", "Husky", "vitest"],
    slug: "text-warden",
    linkPlaceholder: "npm",
    content: (
      <div>
        <p>
          A lightweight utility library for detecting and sanitizing sensitive
          or unsafe text content in strings. Ideal for filtering offensive
          words, enforcing content policies, or building text moderation
          features in Node.js and frontend applications
        </p>
      </div>
    ),
  },
  {
    href: "https://melodious-meringue-56d4fb.netlify.app/",
    title: "Memory game",
    description: "A lightweight and easy memory game",
    thumbnail: memoryGamePage1,
    images: [memoryGamePage1, memoryGamePage2, memoryGamePage3],
    stack: ["html", "css", "js", "netlify"],
    slug: "memory-game",
    linkPlaceholder: "Live",
    content: (
      <div>
        <p>
          A memory game, often called Concentration, is a classic card game that
          challenges players recall and concentration. The game is simple yet
          highly engaging, making it a popular choice for all ages. It begins
          with a set of cards laid face down on a surface, each card having a
          matching pair somewhere within the set. The cards are thoroughly
          shuffled and arranged in a grid, so their initial positions are
          unknown to the players.
        </p>
      </div>
    ),
  },
  {
    href: "https://noughtscrossess.netlify.app/",
    title: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe, also known as Noughts and Crosses, widely recognized game played on a simple 3x3 grid.",
    thumbnail: ticTacToePage2,
    images: [ticTacToePage1, ticTacToePage2, ticTacToePage3],
    stack: ["html", "css", "js", "netlify"],
    slug: "tic-tac-toe",
    linkPlaceholder: "Live",
    content: (
      <div>
        <p>
          Tic-Tac-Toe, also known as Noughts and Crosses, is a classic and
          widely recognized game played on a simple 3x3 grid. The game involves
          two players, typically designated as &quot;X&quot; and &quot;O,&quot;
          who take turns marking a space on the grid. The objective is for a
          player to be the first to get three of their marks in a row—either
          horizontally, vertically, or diagonally.
        </p>
        <p>
          The game begins with an empty grid. Player &quot;X&quot; usually goes
          first, followed by player &quot;O,&quot; and turns alternate until one
          player wins or the grid is completely filled. If a player successfully
          places three of their marks in a row, they are declared the winner.
          The game ends in a &quot;draw&quot; or &quot;cat&apos;s game&quot; if
          all nine squares are filled without either player achieving a line of
          three.
        </p>
      </div>
    ),
  },
  {
    href: "https://gist.github.com/sandeep-shome/4ed0b6f5bcf4a83d88a897f10aaa2b70",
    title: "Html-css-js projects",
    description: "A bunch of html-css-js projects are listed here",
    thumbnail: collage,
    images: [project1, project2, project3],
    stack: ["html", "css", "js", "netlify"],
    slug: "html-css-js",
    linkPlaceholder: "Gist",
    content: (
      <div>
        <p>
          A bunch of html-css-js projects with their github and live link are
          listed here. All this projects are deployed using netlify and vercel.
        </p>
      </div>
    ),
  },
];
