import React, { useEffect, useState } from 'react';

const Explore = ({ onNavigate }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [skill, setSkill] = useState('');

  // const fetchUsers = async (params = {}) => {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const query = new URLSearchParams(params).toString();
  //     const res = await fetch(`/api/users?${query}`);
  //     const data = await res.json();
  //     if (!res.ok) throw new Error(data?.message || 'Failed to load users');
  //     setUsers(data.users || []);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const API = import.meta.env.VITE_API_URL;

const fetchUsers = async (params = {}) => {
  setLoading(true);
  setError('');
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API}/api/users?${query}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || 'Failed to load users');
    setUsers(data.users || []);
  } catch (err) {
    setError(err.message || 'Something went wrong');
  } finally {
    setLoading(false);
  }
};


  // Redirect to login if no token present
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      if (typeof onNavigate === 'function') onNavigate('login');
      return;
    }
    fetchUsers();
  }, [onNavigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUsers({ search, skill });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Explore Learners & Mentors</h1>
          <p className="text-gray-400 mt-2">Find people to learn from and teach to.</p>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name or skill"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
          />
          <input
            type="text"
            placeholder="Filter by specific skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
          />
          <button
            type="submit"
            className="md:col-span-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-colors"
          >
            Search
          </button>
        </form>

        {loading && (
          <div className="text-gray-400">Loading users...</div>
        )}
        {error && (
          <div className="text-red-400 mb-4">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((u) => (
              <div key={u._id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-4">
                  <img src={u.avatar} alt={u.fullName} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-lg">{u.fullName}</div>
                    <div className="text-sm text-gray-400">Joined {new Date(u.joinDate).toLocaleDateString()}</div>
                  </div>
                </div>
                {u.bio && (
                  <p className="text-gray-300 mt-3 text-sm line-clamp-3">{u.bio}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-700/50">Teaches: {u.skillToTeach}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pink-600/20 text-pink-300 border border-pink-700/50">Learns: {u.skillToLearn}</span>
                </div>
                {typeof u.rating === 'number' && (
                  <div className="mt-3 text-sm text-gray-400">Rating: {u.rating} ({u.totalReviews || 0} reviews)</div>
                )}
              </div>
            ))}
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="text-gray-400">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default Explore;
