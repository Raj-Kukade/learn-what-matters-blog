
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/formatters';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [tagSlugs, setTagSlugs] = useState<Record<string, string>>({});
  
  useEffect(() => {
    // Create a mapping of tag names to their slugs
    const loadTagSlugs = async () => {
      // Get custom tags from localStorage
      const customTagsJson = localStorage.getItem('customTags');
      const customTags = customTagsJson ? JSON.parse(customTagsJson) : [];
      
      // Combine with default tags from import
      const tagsMapping: Record<string, string> = {};
      
      // Create mapping of tag names to slugs
      [...customTags].forEach(tag => {
        tagsMapping[tag.name] = tag.slug;
      });
      
      // For any tags without a mapping, create a default slug
      post.tags.forEach(tag => {
        if (!tagsMapping[tag]) {
          tagsMapping[tag] = tag.toLowerCase().replace(/\s+/g, '-');
        }
      });
      
      setTagSlugs(tagsMapping);
    };
    
    loadTagSlugs();
  }, [post.tags]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <Link to={`/blog/${post.slug}`}>
        <div className="h-32 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform hover:scale-105" 
          />
        </div>
      </Link>
      <div className="p-3">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-md font-bold mb-1 line-clamp-1 hover:text-blue-500 transition-colors text-gray-800">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {post.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-1">
          {post.tags.slice(0, 1).map((tag, index) => (
            <Link 
              key={index} 
              to={`/tags/${tagSlugs[tag] || tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs py-0.5 px-1.5 bg-gray-100 rounded-full text-gray-700"
            >
              {tag}
            </Link>
          ))}
          {post.tags.length > 1 && (
            <span className="text-xs py-0.5 px-1.5 bg-gray-100 rounded-full text-gray-700">
              +{post.tags.length - 1}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center text-gray-500 text-xs">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readTime}m</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
