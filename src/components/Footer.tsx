
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="text-orange-500">Learn</span>
              <span className="mx-1">What</span>
              <span className="text-blue-500">Matters</span>
            </Link>
            <p className="text-gray-600 mt-4">
              Helping CS students focus on what truly matters for interview success.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/tags/dsa" className="text-gray-600 hover:text-gray-900 transition-colors">DSA</Link></li>
              <li><Link to="/tags/algorithms" className="text-gray-600 hover:text-gray-900 transition-colors">Algorithms</Link></li>
              <li><Link to="/tags/interview-questions" className="text-gray-600 hover:text-gray-900 transition-colors">Interview Questions</Link></li>
              <li><Link to="/tags/system-design" className="text-gray-600 hover:text-gray-900 transition-colors">System Design</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmaps" className="text-gray-600 hover:text-gray-900 transition-colors">DSA Roadmaps</Link></li>
              <li><Link to="/sheets" className="text-gray-600 hover:text-gray-900 transition-colors">Question Sheets</Link></li>
              <li><Link to="/tags/career" className="text-gray-600 hover:text-gray-900 transition-colors">Career Advice</Link></li>
              <li><Link to="/tags/java" className="text-gray-600 hover:text-gray-900 transition-colors">Java Resources</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Learn What Matters. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
