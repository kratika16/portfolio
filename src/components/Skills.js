import React from 'react';
import { useSelector } from 'react-redux';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiTypescript, SiJest, SiCplusplus, SiAzuredevops } from 'react-icons/si';

const skillIcons = {
  "React.js": <FaReact />,
  "JavaScript": <FaJs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Redux": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  "TypeScript": <SiTypescript />,
  "Jest": <SiJest />,
  // "Material UI": <SiMaterialUi />,
  "C++": <SiCplusplus />,
  "SQL": <FaDatabase />,
  "Azure": <SiAzuredevops />,
  "Power BI": <FaMicrosoft />
};

const Skills = () => {
  const skills = useSelector(state => state.portfolio.skills);

  return (
    <section id="skills" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col md: flex-row items-center p-4 bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="text-3xl text-blue-500 mr-4">
              {skillIcons[skill] || <FaReact />} 
            </div>
            <div className="text-lg font-medium">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
