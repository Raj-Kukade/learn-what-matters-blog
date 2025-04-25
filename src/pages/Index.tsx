
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import TagFilter from '../components/TagFilter';
import { blogPosts, tags } from '../data/blog-data';
import { BlogPost } from '../types/blog';

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Get posts from localStorage or use default
    const storedPosts = localStorage.getItem('blogPosts');
    const postsToUse = storedPosts ? JSON.parse(storedPosts) : blogPosts;
    
    // Sort posts by date (newest first)
    const sortedPosts = [...postsToUse].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    setPosts(sortedPosts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blog-darker py-16">
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blog-orange">Learn</span> What <span className="text-blog-teal">Matters</span> for CS Students
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Master Data Structures, Algorithms, and Interview Preparation with our curated guides and practice materials.
              </p>
              <div className="inline-flex p-1 bg-gray-800 rounded-full">
                <a href="#roadmaps" className="px-6 py-3 bg-blog-orange text-white rounded-full font-medium">DSA Roadmaps</a>
                <a href="#practice" className="px-6 py-3 text-gray-300 hover:text-white rounded-full font-medium">Practice Questions</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-12">
          <div className="content-container">
            <h2 className="text-2xl font-bold mb-6 text-center">Resources to Learn</h2>
            
            <TagFilter tags={tags} />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
              
              {posts.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No posts available.
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blog-navy to-blog-darker">
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Technical Interviews?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with our curated DSA sheets and interview preparation materials.
              </p>
              <a href="#" className="px-8 py-4 bg-blog-teal text-white rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
