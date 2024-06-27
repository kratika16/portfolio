import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Experience = () => {
  const experiences = useSelector(state => state.portfolio.experience);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (index) => {
    setSelectedExperience(index);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6 bg-gray-300 rounded-lg p-4">
          <div className="cursor-pointer" onClick={() => openModal(index)}>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="italic">{exp.company}, {exp.location}</p>
            <p>{exp.duration}</p>
          </div>
          {selectedExperience === index && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-300 p-6 rounded-lg max-w-3xl overflow-y-auto h-[36rem] relative">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">{exp.role} - {exp.company}</h2>
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} className="mb-6">
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    <p className="italic">{project.duration}</p>
                    <ul className="list-disc ml-5 mt-2">
                      {project.description.map((desc, dIndex) => (
                        <li key={dIndex} className="mb-1">{desc}</li>
                      ))}
                    </ul>
                    <p className="mt-2"><strong>Technologies:</strong> {project.tech.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
