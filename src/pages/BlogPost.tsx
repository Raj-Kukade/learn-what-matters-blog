
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';
import RelatedPosts from '../components/RelatedPosts';
import { getPostBySlug, getRelatedPosts } from '../data/blog-data';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Get the post using the slug
  const post = slug ? getPostBySlug(slug) : undefined;
  
  // Get related posts
  const relatedPosts = post ? getRelatedPosts(post.id, post.tags) : [];
  
  // If post doesn't exist, redirect to homepage
  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post, navigate]);
  
  if (!post) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="content-container">
          <BlogContent post={post} />
          
          <RelatedPosts posts={relatedPosts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
