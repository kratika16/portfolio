import React from 'react';
import { useSelector } from 'react-redux';

const Achievements = () => {
  const achievements = useSelector(state => state.portfolio.achievements)
  return (
    <section id="achievements" className="p-4">
    <div>
      <h2 className="text-3xl font-bold mb-4 text-white">Achievements</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <div className="bg-gray-300 rounded-lg shadow-md p-6" key={index}>
            <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
            <p className="text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Achievements;
