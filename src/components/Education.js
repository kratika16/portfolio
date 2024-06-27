import React from 'react';
import { useSelector } from 'react-redux';

const Education = () => {
  const education = useSelector(state => state.portfolio.education);

  return (
    <section id="education" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Education</h2>
      <div className="bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
        <p className="italic mb-2">{education.institution}</p>
        <p className="mb-2">Duration: {education.duration}</p>
        <p className="mb-2">GPA: {education.gpa}</p>
        <p className="mb-2">Major: {education.major}</p>
      </div>
    </section>
  );
};

export default Education;
