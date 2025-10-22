import React from 'react';

const GetStartedSection = ({ onOpenModal }) => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Start your learning journey today!
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Join thousands of learners and find the perfect partner to achieve your goals.
          </p>
          <button 
            onClick={onOpenModal}
            className="bg-white text-purple-700 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            ✨ Plan My Learning Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;

