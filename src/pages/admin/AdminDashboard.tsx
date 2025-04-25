
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { blogPosts, tags } from '@/data/blog-data';
import { BlogPost } from '@/types/blog';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  
  // Check if admin is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
    
    // Get posts from localStorage or use default
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(blogPosts);
      // Initialize localStorage with the default posts if not yet set
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate('/admin/create')}
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{posts.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{tags.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {posts.slice(0, 3).map((post) => (
                    <li key={post.id} className="text-sm text-gray-600">{post.title}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/admin/posts')}
                  >
                    Manage Posts
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/admin/create')}
                  >
                    Create New Post
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                  >
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
