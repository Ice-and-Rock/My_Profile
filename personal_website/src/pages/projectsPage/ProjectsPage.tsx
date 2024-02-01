import { useState } from "react";
import { Link } from "react-router-dom";
import AsteroidImage from "../../assets/projectImages/AsteroidGame.png";
import JavascriptImage from "../../assets/projectImages/JavascriptQuiz.png";
import TradesMinImage from "../../assets/projectImages/TradesMin.png";
import WiseWalletImage from "../../assets/projectImages/WiseWalletKitchen.png";
import FlightPlanner from "../../assets/projectImages/FlightPlanner.png";

// Create an interface for the Navigation
interface ProjectsItem {
  name: string;
  description: string;
  href: string;
  // current: boolean;
  content: string;
  github: string;
  image: any;
}
const projects: ProjectsItem[] = [
  {
    name: "TradesMin",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: JavascriptImage,
  },
  {
    name: "DevDash - Dojo",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: JavascriptImage,
  },
  {
    name: "Javascript Quiz",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: JavascriptImage,
  },
  {
    name: "Kygystan Expedition Tracker",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: JavascriptImage,
  },
  {
    name: "Space Blaster",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/DailyJobList",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: AsteroidImage,
  },
  {
    name: "Tradesmin",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/Projects",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: TradesMinImage,
  },
  {
    name: "Cerium Flight Tracker",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/Accounts",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: FlightPlanner,
  },
  {
    name: "WiseWalletKitchen",
    description:
      "Here is a bunch of text Here is a bunch of text Here is a bunch of text",
    href: "/About",
    content: "this is the description of this project",
    github: "https://github.com/Ice-and-Rock",
    image: WiseWalletImage,
  },
];

const ProjectsPage = () => {
  const [projectItems, setProjectItems] = useState<ProjectsItem[]>(projects);

  return (
    <div className="flex bg-gray-800 text-white my-16 p-16 flex-col items-center justify-between">
      {projectItems.map((project, index) => (
        <Link
          key={project.name}
          to={project.href}
          aria-label={project.name ? "page" : undefined}
          className="flex bg-teal-900 p-4 mb-8 rounded-xl max-h-64"
        >
          <div className="flex-shrink-0 w-1/2 mr-4">
            <h2 className="text-2xl font-bold m-3">{project.name}</h2>
            <p className="text-md m-3 text-justify">{project.description}</p>
          </div>
          <img
            src={process.env.PUBLIC_URL + project.image}
            alt={"ARIA:" + project.name}
            className="w-1/2 rounded-lg"
          />
        </Link>
      ))}

    
    </div>
  );
};

export default ProjectsPage;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import AsteroidGame from '../assets/projectImages/AsteroidGame.png'

// // Create an interface for the Navigation
// interface ProjectsItem {
//   name: string;
//   href: string;
//   // current: boolean;
//   content: string;
//   image: any;
// }

// const Project: React.FC<ProjectsItem> = ({ name, href, content, image }) => (
//   <Link to={href} aria-label={name ? "page" : undefined}>
//     <div>{name}</div>
//     <img src={image} alt={"ARIA:" + name} />
//   </Link>
// );

// const projects: ProjectsItem[] = [
//   {
//     name: "Javascript Quiz",
//     href: "/",
//     content: "this is the description of this project",
//     image: "/projectImages/JavascriptQuiz.png",
//   },
//   {
//     name: "Space Blaster",
//     href: "/DailyJobList",
//     content: "this is the description of this project",
//     image: AsteroidGame,
//   },
//   {
//     name: "Tradesmin",
//     href: "/Projects",
//     content: "this is the description of this project",
//     image: "/projectImages/TradesMin.png",
//   },
//   {
//     name: "Cerium Flight Tracker",
//     href: "/Accounts",
//     content: "this is the description of this project",
//     image: "/ski.jpeg",
//   },
//   {
//     name: "WiseWalletKitchen",
//     href: "/About",
//     content: "this is the description of this project",
//     image: "/ski.jpeg",
// ];

// const ProjectsPage = () => {
//   const [projectItems, setProjectItems] = useState<ProjectsItem[]>(projects);

//   return (
//     <>
//       <text>This is some text</text>
//       <div className="flex bg-red-300 shadow m-4 p-4">
//         {projectItems.map((project) => (
//           <Project key={project.name} {...project} />
//         ))}
//         <img
//           src={process.env.PUBLIC_URL + '/projectImages/AsteroidGame.png'}
//           alt="A test image"
//         />
//       </div>
//     </>
//   );
// };

// export default ProjectsPage;
