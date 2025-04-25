
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="content-container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/admin/dashboard" className="text-2xl font-bold text-gray-800 flex items-center">
            <span className="text-orange-500">Admin</span>
            <span className="mx-1">Dashboard</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/admin/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</Link>
          <Link to="/admin/posts" className="text-gray-600 hover:text-gray-900 transition-colors">Posts</Link>
          <Link to="/admin/create" className="text-gray-600 hover:text-gray-900 transition-colors">Create Post</Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">View Site</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
