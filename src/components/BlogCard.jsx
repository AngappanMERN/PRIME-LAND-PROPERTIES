function BlogCard({ post }) {
  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,150,255,0.15)] hover:border-[#0096ff] text-[#2a2a2a]">
      <div className="relative overflow-hidden h-[250px] max-md:h-[200px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-[#0096ff] to-[#00d4ff] text-white px-3 py-1.5 rounded-sm text-[0.75rem] font-bold">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-[#0096ff] font-serif text-[1.1rem] leading-[1.4] mb-4">{post.title}</h3>
        <div className="flex flex-wrap gap-4 text-[0.8rem] text-[#666666] mb-4">
          <span>✍️ {post.author}</span>
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime}</span>
        </div>
        <p className="text-[0.9rem] leading-relaxed text-[#666666] mb-4">{post.excerpt}</p>
      </div>
    </article>
  );
}

export default BlogCard;

