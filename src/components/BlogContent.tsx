
import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/formatters';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <Link 
              key={index} 
              to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className={`blog-tag ${index % 2 === 0 ? 'blog-tag-orange' : 'blog-tag-teal'}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
        
        <p className="text-xl text-gray-600 mb-6">{post.description}</p>
        
        <div className="flex items-center justify-between text-gray-500 text-sm border-b border-gray-200 pb-6">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readTime} min read</span>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogContent;
