import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
  const projects = useSelector(state => state.portfolio.projects);

  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-300 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <ul className="list-disc ml-5 mb-4">
              {project.description.map((desc, dIndex) => (
                <li key={dIndex} className="mb-1">{desc}</li>
              ))}
            </ul>
            <p className="mt-2"><strong>Technologies:</strong> {project.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
