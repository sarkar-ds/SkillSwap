import React from 'react';
import { mockRegisteredUsers } from '../data/mockData';
import UserCard from './UserCard';

const RegisteredUsersSection = () => (
    <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Registered Users</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {mockRegisteredUsers.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    </section>
);

export default RegisteredUsersSection;

