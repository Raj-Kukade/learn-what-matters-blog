
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import { tags } from '@/data/blog-data';
import { Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types/blog';

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [readTime, setReadTime] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Check if admin is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleTagToggle = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter(t => t !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !content || !coverImage) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (selectedTags.length === 0) {
      toast.error("Please select at least one tag");
      return;
    }
    
    setIsSubmitting(true);
    
    // Create a new post object
    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title,
      slug: title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
      description,
      content,
      coverImage,
      tags: selectedTags,
      publishedAt: new Date().toISOString(),
      readTime: readTime
    };
    
    // Get existing posts from localStorage or use the default ones
    const existingPostsJson = localStorage.getItem('blogPosts');
    const existingPosts = existingPostsJson ? JSON.parse(existingPostsJson) : [];
    
    // Add new post to the beginning of the array
    const updatedPosts = [newPost, ...existingPosts];
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    setTimeout(() => {
      toast.success("Post created successfully!");
      setIsSubmitting(false);
      navigate('/admin/posts');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Create New Post</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate('/admin/posts')}
            >
              Cancel
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter post title" 
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Enter a short description" 
                    className="mt-1 resize-none"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="coverImage">Cover Image URL</Label>
                  <Input 
                    id="coverImage" 
                    value={coverImage} 
                    onChange={(e) => setCoverImage(e.target.value)} 
                    placeholder="Enter an image URL" 
                    className="mt-1"
                    required
                  />
                  {coverImage && (
                    <div className="mt-2 relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={coverImage} 
                        alt="Cover preview" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Invalid+Image+URL';
                        }}
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="content">Content (Markdown)</Label>
                  <Textarea 
                    id="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder="Write your post content using Markdown" 
                    className="mt-1 min-h-[200px]"
                    required
                  />
                </div>
                
                <div>
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag.id}
                        variant={selectedTags.includes(tag.name) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag.name)
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                        onClick={() => handleTagToggle(tag.name)}
                      >
                        {tag.name}
                        {selectedTags.includes(tag.name) ? (
                          <X className="ml-1 h-3 w-3" />
                        ) : (
                          <Check className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100" />
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="readTime">Reading Time (minutes)</Label>
                  <Input 
                    id="readTime" 
                    type="number" 
                    min="1"
                    max="60"
                    value={readTime} 
                    onChange={(e) => setReadTime(Number(e.target.value))} 
                    className="mt-1 w-24"
                  />
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? "Creating..." : "Create Post"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
