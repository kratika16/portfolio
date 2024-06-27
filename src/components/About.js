import React from "react";
import TypingEffect from "./TypingEffect";

const About = () => {
  return (
    <section id="about" className="p-4">
      {/* <h2 className="text-2xl font-bold">About</h2> */}
      <div className="bg-gray-300 rounded-lg p-4">
        <TypingEffect/>
      </div>
    </section>
  );
};

export default About;
