import React from 'react';
import { mockActiveUsers } from '../data/mockData';
import UserCard from './UserCard';

const CurrentlyActiveUsersSection = () => (
    <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Currently Active</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {mockActiveUsers.map(user => <UserCard key={user.id} user={user} isActive={true} />)}
            </div>
        </div>
    </section>
);

export default CurrentlyActiveUsersSection;

