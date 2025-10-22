import React from 'react';

const UserCard = ({ user, isActive = false }) => (
    <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/30 border border-gray-700">
        {isActive && (
            <div className="absolute top-4 right-4 h-3 w-3 bg-green-400 rounded-full border-2 border-gray-800" title="Active Now"></div>
        )}
        <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500/50" />
        <h3 className="text-xl font-semibold text-white">{user.name}</h3>
        <p className="text-purple-400 mb-2">{user.skill}</p>
        <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
    </div>
);

export default UserCard;

