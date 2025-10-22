import React from 'react';

const ReviewCard = ({ review }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-4">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/50" />
            <div>
                <h4 className="font-semibold text-lg text-white">{review.name}</h4>
            </div>
        </div>
        <p className="text-gray-400 italic">"{review.review}"</p>
    </div>
);

export default ReviewCard;

