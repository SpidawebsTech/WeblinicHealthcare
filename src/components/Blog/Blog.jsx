import React from "react";
import "./Blog.css";
import { FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    {
      id: 1,
      date: "July 12, 2026",
      title: "5 signs you shouldn't ignore this flu season",
      excerpt:
        "Recognizing early flu symptoms can prevent complications. Learn what red flags require immediate medical evaluation from top doctors.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      date: "July 8, 2026",
      title: "Managing stress in an always-on world",
      excerpt:
        "Practical daily routines and psychological strategies to combat burnout, improve mental focus, and achieve work-life harmony.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      date: "June 30, 2026",
      title: "What to know before your first e-prescription",
      excerpt:
        "Digital prescriptions make medical refills smooth and secure. Here is how Weblinic ensures fast access to your required medications.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-decorator">
        <span className="dot"></span>
      </div>

      <h2 className="blog-title">From the Weblinic blog</h2>
      <p className="blog-subtitle">
        Health tips, guides, and updates from our medical team.
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-image-wrapper">
              {post.image ? (
                <img src={post.image} alt={post.title} className="blog-image" />
              ) : (
                <div className="blog-image-placeholder">
                  <FiImage size={24} className="placeholder-icon" />
                </div>
              )}
            </div>

            <div className="blog-card-body">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-excerpt">"{post.excerpt}"</p>
            </div>

            <div className="blog-card-footer">
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-footer-link">
        <Link to="/blog" className="view-all-link">
          View all articles &rarr;
        </Link>
      </div>
    </section>
  );
}

export default Blog;