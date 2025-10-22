import React from 'react';

const SkillCard = ({ skill }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 border border-gray-700 flex flex-col items-center justify-center">
        <div className="text-4xl mb-3">{skill.icon}</div>
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
    </div>
);

export default SkillCard;

