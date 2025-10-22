import React, { useState } from 'react';

const Header = ({ onNavigate, currentPage, isAuthenticated, onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (page) => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-lg">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button 
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 text-2xl font-bold text-white tracking-wider hover:text-purple-400 transition-colors"
                    aria-label="SkillSwap Home"
                >
                    <img src="/logo(3).png" alt="SkillSwap logo" className="h-8 w-8" />
                    <span>
                        Skill<span className="text-purple-500">Swap</span>
                    </span>
                </button>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                     <button 
                        onClick={() => handleNavigation('home')}
                        className={`transition-colors ${currentPage === 'home' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                     >
                        Home
                     </button>
                     <button 
                        onClick={() => handleNavigation('explore')}
                        className={`transition-colors ${currentPage === 'explore' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                     >
                        Explore
                     </button>
                     {!isAuthenticated ? (
                       <>
                         <button 
                            onClick={() => handleNavigation('login')}
                            className={`transition-colors ${currentPage === 'login' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                         >
                            Login
                         </button>
                         <button 
                            onClick={() => handleNavigation('register')}
                            className={`transition-colors ${currentPage === 'register' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                         >
                            Register
                         </button>
                       </>
                     ) : (
                       <button 
                          onClick={() => { if (typeof onLogout === 'function') onLogout(); }}
                          className="transition-colors text-gray-300 hover:text-white"
                       >
                          Logout
                       </button>
                     )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
                    <div className="container mx-auto px-6 py-4 space-y-4">
                        <button 
                            onClick={() => handleNavigation('home')}
                            className={`block w-full text-left transition-colors py-2 ${currentPage === 'home' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => handleNavigation('explore')}
                            className={`block w-full text-left transition-colors py-2 ${currentPage === 'explore' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                        >
                            Explore
                        </button>
                        {!isAuthenticated ? (
                          <>
                            <button 
                                onClick={() => handleNavigation('login')}
                                className={`block w-full text-left transition-colors py-2 ${currentPage === 'login' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                                Login
                            </button>
                            <button 
                                onClick={() => handleNavigation('register')}
                                className={`block w-full text-left transition-colors py-2 ${currentPage === 'register' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                                Register
                            </button>
                          </>
                        ) : (
                          <button 
                              onClick={() => { setIsMobileMenuOpen(false); if (typeof onLogout === 'function') onLogout(); }}
                              className="block w-full text-left transition-colors py-2 text-gray-300 hover:text-white"
                          >
                              Logout
                          </button>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

