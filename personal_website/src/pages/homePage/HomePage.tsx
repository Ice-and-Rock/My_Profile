import React from "react";
import { Link } from "react-router-dom";

import AboutMe from "./components/myInfo/AboutMe";
import MyIntestests from "./components/myInfo/MyIntestests";
import Projects from "./components/myInfo/Projects";
import Qualifications from "./components/myInfo/Qualifications";
import WorkHistory from "./components/myInfo/WorkHistory";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-gray-800 ">
      <AboutMe />
      <Projects />
      <WorkHistory />
      <Qualifications />
      <MyIntestests />
    </div>
  );
};

export default HomePage;
