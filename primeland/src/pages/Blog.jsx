import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts, blogCategories, blogTags } from '../data/blogData';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="blog-page">
      {/* Header */}
      <section className="blog-header">
        <h1>BLOG DETAILS</h1>
        <p>Home / Blog / Real Estate Investment Tips for Beginners</p>
      </section>

      {/* Main Content */}
      <section className="blog-content">
        <div className="blog-posts">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Search */}
          <div className="sidebar-widget">
            <h4>SEARCH</h4>
            <div className="search-box">
              <input type="text" placeholder="Search blog..." />
              <button>🔍</button>
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-widget">
            <h4>CATEGORIES</h4>
            <div className="categories-list">
              {blogCategories.map((cat, idx) => (
                <div key={idx} className="category-item">
                  <span>{cat.name}</span>
                  <span className="count">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="sidebar-widget">
            <h4>RECENT POSTS</h4>
            <div className="recent-posts">
              {blogPosts.slice(0, 4).map(post => (
                <div key={post.id} className="recent-post-item">
                  <img src={post.image} alt={post.title} />
                  <div>
                    <h5>{post.title}</h5>
                    <p>📅 {post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="sidebar-widget">
            <h4>TAGS</h4>
            <div className="tags-list">
              {blogTags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="sidebar-cta">
            <h4>Looking for your dream property?</h4>
            <p>We can help you find the perfect property that matches your needs.</p>
            <button className="cta-button">CONTACT US</button>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Blog;
