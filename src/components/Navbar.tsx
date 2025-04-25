
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="content-container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
            <span className="text-orange-500">Learn</span>
            <span className="mx-1">What</span>
            <span className="text-blue-500">Matters</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/tags/dsa" className="text-gray-600 hover:text-gray-900 transition-colors">DSA</Link>
          <Link to="/tags/interview-questions" className="text-gray-600 hover:text-gray-900 transition-colors">Interview Questions</Link>
          <Link to="/tags/algorithms" className="text-gray-600 hover:text-gray-900 transition-colors">Algorithms</Link>
          <Link to="/tags/system-design" className="text-gray-600 hover:text-gray-900 transition-colors">System Design</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Search size={20} />
          </Button>
          <Link to="/admin/login" className="hidden md:inline-block">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
