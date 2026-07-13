import './BlogCard.css';

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-image-wrapper">
        <img src={post.image} alt={post.title} className="blog-image" />
        <span className="blog-category">{post.category}</span>
      </div>
      <div className="blog-content">
        <h3>{post.title}</h3>
        <div className="blog-meta">
          <span>✍️ {post.author}</span>
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime}</span>
        </div>
        <p>{post.excerpt}</p>
        <button className="blog-btn">READ MORE</button>
      </div>
    </article>
  );
}

export default BlogCard;
