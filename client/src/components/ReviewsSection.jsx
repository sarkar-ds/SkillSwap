import React from 'react';
import { mockReviews } from '../data/mockData';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What People are Saying
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover why learners and teachers love our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

