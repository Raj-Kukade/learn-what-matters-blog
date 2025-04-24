
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Tag } from '@/types/blog';

interface TagFilterProps {
  tags: Tag[];
  activeTag?: string;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, activeTag }) => {
  return (
    <div className="py-4 overflow-x-auto">
      <div className="flex space-x-2 min-w-max">
        <Link 
          to="/" 
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            !activeTag ? "bg-blog-orange text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          )}
        >
          All
        </Link>
        
        {tags.map((tag) => (
          <Link
            key={tag.id}
            to={`/tags/${tag.slug}`}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeTag === tag.slug ? "bg-blog-teal text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            )}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
