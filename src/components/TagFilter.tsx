
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
    <div className="py-4 overflow-x-auto flex justify-center">
      <div className="flex space-x-2 min-w-max">
        <Link 
          to="/" 
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium transition-colors",
            !activeTag ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          All
        </Link>
        
        {tags.map((tag) => (
          <Link
            key={tag.id}
            to={`/tags/${tag.slug}`}
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium transition-colors",
              activeTag === tag.slug ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
