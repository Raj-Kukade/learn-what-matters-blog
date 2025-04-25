
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link to={`/blog/${post.slug}`}>
              <div className="h-40 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </Link>
            
            <div className="p-4">
              <Link to={`/blog/${post.slug}`}>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-blue-500 transition-colors text-gray-800">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-500 text-xs">
                {post.readTime} min read
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
