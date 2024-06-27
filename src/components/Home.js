import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Achievements from "./Achievements";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-2/12 md:w-1/4 lg:w-1/6 fixed h-screen bg-gray-900 text-white  p-2 md: p-4 overflow-y-auto flex justify-center	">
        <Navbar />
      </div>
      <div className="w-10/12 md:w-3/4 lg:w-5/6 p-2 md: p-4 ml-auto overflow-y-auto bg-gray-700">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
