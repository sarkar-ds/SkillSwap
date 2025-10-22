import React from 'react';
import { skills } from '../data/mockData';
import SkillCard from './SkillCard';

const SkillsSection = () => (
    <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Explore a World of Knowledge</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
            </div>
        </div>
    </section>
);

export default SkillsSection;

