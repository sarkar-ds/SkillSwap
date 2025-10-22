import React, { useState } from 'react';
import { CloseIcon } from '../assets/icons.jsx';

const LearningPathModal = ({ isOpen, onClose, generateLearningPath }) => {
  const [goal, setGoal] = useState('');
  const [learningPath, setLearningPath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!goal.trim()) {
      setError("Please enter a learning goal.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    try {
      const result = await generateLearningPath(goal);
      setLearningPath(result);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset state when closing the modal
    setGoal('');
    setLearningPath(null);
    setIsLoading(false);
    setError(null);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Plan Your Learning Journey</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {!learningPath ? (
            <>
              <p className="text-gray-300 mb-4">
                Describe what you want to learn, and our AI will generate a personalized step-by-step plan for you. For example, "I want to learn how to build web applications with React."
              </p>
              <textarea
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Enter your learning goal..."
                className="w-full h-32 p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                disabled={isLoading}
              />
              {error && <p className="text-red-400 mt-2">{error}</p>}
              <div className="mt-6 text-right">
                <button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-transform"
                >
                  {isLoading ? 'Generating...' : 'Generate Plan'}
                </button>
              </div>
            </>
          ) : (
            <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4 text-purple-300">{learningPath.title}</h3>
                <p className="text-gray-300 mb-6">{learningPath.introduction}</p>
                {learningPath.steps.map((step, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-700 rounded-lg bg-gray-800/50">
                        <h4 className="font-bold text-lg text-white">{index + 1}. {step.title}</h4>
                        <p className="text-gray-400 mt-1">{step.description}</p>
                    </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPathModal;


