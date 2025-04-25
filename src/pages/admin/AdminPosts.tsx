
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PencilIcon, TrashIcon, PlusCircle, Search } from 'lucide-react';
import { blogPosts } from '@/data/blog-data';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/formatters';
import { toast } from '@/components/ui/sonner';

const AdminPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Check if admin is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Initialize posts from localStorage or fallback to imported data
  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(blogPosts);
      // Initialize localStorage with the default posts
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }
  }, []);
  
  // Filter posts based on search term
  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    const allPosts = storedPosts ? JSON.parse(storedPosts) : blogPosts;
    
    if (searchTerm) {
      setPosts(
        allPosts.filter((post: BlogPost) => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    } else {
      setPosts(allPosts);
    }
  }, [searchTerm]);

  const handleDelete = (postId: string) => {
    // Get current posts from localStorage
    const storedPosts = localStorage.getItem('blogPosts');
    const allPosts = storedPosts ? JSON.parse(storedPosts) : blogPosts;
    
    // Filter out the deleted post
    const updatedPosts = allPosts.filter((post: BlogPost) => post.id !== postId);
    
    // Update localStorage
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    // Update state
    setPosts(updatedPosts);
    
    toast.success("Post deleted successfully!");
  };

  const handleEdit = (postSlug: string) => {
    navigate(`/admin/edit/${postSlug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Manage Posts ({posts.length})</h1>
            
            <div className="flex w-full sm:w-auto gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
                onClick={() => navigate('/admin/create')}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> New Post
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-md shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Tags</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell className="hidden md:table-cell">{formatDate(post.publishedAt)}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(post.slug)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPosts;
