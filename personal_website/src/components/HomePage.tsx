import React from "react";
import { Link } from "react-router-dom";

import AboutMe from "./myInfo/AboutMe";
import MyIntestests from "./myInfo/MyIntestests";
import Projects from "./myInfo/Projects";
import Qualifications from "./myInfo/Qualifications";
import WorkHistory from "./myInfo/WorkHistory";

const HomePage = () => {
  return (
    <div className="flex flex-col bg-gray-800 ">
      <p>Welcome to the HomePage</p>
      <AboutMe />
      <Projects />
      <WorkHistory />
      <Qualifications />
      <MyIntestests />
    </div>
  );
};

export default HomePage;
