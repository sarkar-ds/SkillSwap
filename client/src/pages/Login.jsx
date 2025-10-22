import React, { useState } from 'react';

const Login = ({ onNavigate, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || 'Login failed');
      }
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }
      if (typeof onAuthSuccess === 'function') onAuthSuccess();
      else if (typeof onNavigate === 'function') onNavigate('explore');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8 pt-24">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.1)_0%,_rgba(0,0,0,0)_50%)]"></div>
      
      {/* Main card container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Gradient border card */}
        <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 p-[2px]">
            <div className="absolute inset-0 rounded-2xl bg-black"></div>
          </div>
          
          {/* Card content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back to <span className="text-purple-400">SkillSwap</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Sign in to continue your learning journey
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-sm text-red-400">{error}</div>
              )}
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Enter your password"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <button 
                  type="button"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-purple-700 hover:to-pink-600 transform hover:scale-[1.02]'}`}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Register link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <button 
                  onClick={() => onNavigate('register')}
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
