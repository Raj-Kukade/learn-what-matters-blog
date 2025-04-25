
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import TagFilter from '../components/TagFilter';
import { blogPosts, tags } from '../data/blog-data';
import { BlogPost } from '../types/blog';

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const currentTag = tags.find(tag => tag.slug === slug);
  
  useEffect(() => {
    // Get posts from localStorage or use default
    const storedPosts = localStorage.getItem('blogPosts');
    const postsToUse = storedPosts ? JSON.parse(storedPosts) : blogPosts;
    
    // Filter posts by tag
    if (slug) {
      const filtered = postsToUse.filter((post: BlogPost) => 
        post.tags.some(tag => 
          tag.toLowerCase().replace(/\s+/g, '-') === slug
        )
      );
      
      // Sort by date (newest first)
      const sortedPosts = [...filtered].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      
      setFilteredPosts(sortedPosts);
    }
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="content-container">
            <h1 className="text-3xl font-bold mb-6 text-center">
              {currentTag ? currentTag.name : 'Tag'} Resources
            </h1>
            
            <TagFilter tags={tags} activeTag={slug} />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
              
              {filteredPosts.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No posts found for this tag.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TagPage;
