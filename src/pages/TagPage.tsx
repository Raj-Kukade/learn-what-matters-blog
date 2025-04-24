
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import TagFilter from '../components/TagFilter';
import { getPostsByTag, tags } from '../data/blog-data';

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Get posts for the current tag
  const posts = slug ? getPostsByTag(
    // Convert slug to tag name (e.g., "data-structures" -> "Data Structures")
    tags.find(t => t.slug === slug)?.name || ""
  ) : [];
  
  // Get the tag name for display
  const tagName = tags.find(t => t.slug === slug)?.name || "";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="content-container">
          <h1 className="text-3xl font-bold mb-6">
            {tagName} <span className="text-gray-400">Articles</span>
          </h1>
          
          <TagFilter tags={tags} activeTag={slug} />
          
          {posts.length > 0 ? (
            <div className="blog-card-grid mt-8">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium text-gray-400">
                No articles found for this tag.
              </h2>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TagPage;
