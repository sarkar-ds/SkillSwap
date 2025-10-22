import React from 'react';

// Social media icons can be simple SVGs or components.
const SocialIcon = ({ children }) => (
  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* About Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">About</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Who are we?</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">SkillSwap around the world</a></li>
            </ul>
          </div>

          {/* All Subjects Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">All subjects</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Arts & hobbies</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Professional Development</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Computer Sciences</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Languages</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Music</a></li>
            </ul>
          </div>
          
          {/* Join the adventure Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Join the adventure</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">The SkillSwap Blog</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Help</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Need help?</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Follow Us Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-white mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </SocialIcon>
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </SocialIcon>
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 1.043c-1.063.048-1.674.21-2.227.427a3.896 3.896 0 00-1.37 1.37c-.217.553-.38 1.164-.427 2.227-.046 1.023-.058 1.353-.058 3.682s.012 2.658.058 3.682c.047 1.063.21 1.674.427 2.227a3.896 3.896 0 001.37 1.37c.553.217 1.164.38 2.227.427 1.023.046 1.353.058 3.682.058s2.658-.012 3.682-.058c1.063-.047 1.674-.21 2.227-.427a3.896 3.896 0 001.37-1.37c.217-.553.38-1.164.427-2.227.046-1.023.058-1.353.058-3.682s-.012-2.658-.058-3.682c-.047-1.063-.21-1.674-.427-2.227a3.896 3.896 0 00-1.37-1.37c-.553-.217-1.164-.38-2.227-.427-1.023-.046-1.353-.058-3.682-.058s-2.658.012-3.682.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.942a3.193 3.193 0 110 6.386 3.193 3.193 0 010-6.386z" clipRule="evenodd"></path></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2025 SkillSwap. Learn with the best!</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

