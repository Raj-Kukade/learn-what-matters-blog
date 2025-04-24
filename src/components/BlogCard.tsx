
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { Tag } from 'lucide-react';
import { formatDate } from '../utils/formatters';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-blog-navy rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/blog/${post.slug}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform hover:scale-105" 
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag, index) => (
            <Link 
              key={index} 
              to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className={`blog-tag ${index % 2 === 0 ? 'blog-tag-orange' : 'blog-tag-teal'}`}
            >
              {tag}
            </Link>
          ))}
          {post.tags.length > 2 && (
            <span className="blog-tag bg-gray-700">+{post.tags.length - 2}</span>
          )}
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 line-clamp-2 hover:text-blog-teal transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {post.description}
        </p>
        
        <div className="flex justify-between items-center text-gray-400 text-xs">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
