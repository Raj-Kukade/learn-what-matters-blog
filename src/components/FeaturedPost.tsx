
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/formatters';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-full">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Link 
              key={index} 
              to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className={`blog-tag ${index % 2 === 0 ? 'blog-tag-orange' : 'blog-tag-teal'}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 hover:text-blue-500 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-6">
          {post.description}
        </p>
        
        <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
