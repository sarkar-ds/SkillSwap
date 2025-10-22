import React, { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Explore from './pages/Explore';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorage = () => setIsAuthenticated(!!localStorage.getItem('token'));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('explore');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'register':
        return <Register onNavigate={setCurrentPage} onAuthSuccess={handleAuthSuccess} />;
      case 'login':
        return <Login onNavigate={setCurrentPage} onAuthSuccess={handleAuthSuccess} />;
      case 'explore':
        return <Explore onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="bg-black text-white font-sans antialiased">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      {renderPage()}
    </div>
  );
}

export default App;

