
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-blog-navy border-b border-gray-800 py-4">
      <div className="content-container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-blog-orange">Learn</span>
            <span className="mx-1">What</span>
            <span className="text-blog-teal">Matters</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/tags/dsa" className="text-gray-300 hover:text-white transition-colors">DSA</Link>
          <Link to="/tags/interview-questions" className="text-gray-300 hover:text-white transition-colors">Interview Questions</Link>
          <Link to="/tags/algorithms" className="text-gray-300 hover:text-white transition-colors">Algorithms</Link>
          <Link to="/tags/system-design" className="text-gray-300 hover:text-white transition-colors">System Design</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Search size={20} />
          </Button>
          <Link to="/admin" className="hidden md:inline-block">
            <Button variant="outline" className="border-blog-orange text-blog-orange hover:bg-blog-orange hover:text-white">
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
