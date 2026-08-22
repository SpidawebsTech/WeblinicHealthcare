import React, { useState } from "react";
import "./BlogPage.css";
import Navbar from "../components/Navbar/Navbar"; 
import Footer from "../components/Footer/Footer"; 
import { FiSearch, FiCalendar, FiClock, FiUser, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Signs You Shouldn't Ignore This Flu Season",
    excerpt: "Recognizing early flu symptoms can prevent complications. Learn what red flags require immediate medical evaluation from top doctors.",
    category: "Preventive Care",
    date: "July 12, 2026",
    readTime: "5 min read",
    author: "Dr. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    title: "Managing Stress in an Always-On World",
    excerpt: "Practical daily routines and psychological strategies to combat burnout, improve mental focus, and achieve work-life harmony.",
    category: "Mental Health",
    date: "July 8, 2026",
    readTime: "6 min read",
    author: "Dr. Alex Rivera",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 3,
    title: "What to Know Before Your First E-Prescription",
    excerpt: "Digital prescriptions make medical refills smooth and secure. Here is how Weblinic ensures fast access to your required medications.",
    category: "Digital Health",
    date: "June 30, 2026",
    readTime: "4 min read",
    author: "PharmD Mark Vance",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 4,
    title: "10 Simple Habits for a Stronger Immune System",
    excerpt: "From balanced nutrition to optimal sleep hygiene, explore science-backed daily actions that boost your body's defense mechanism.",
    category: "Wellness",
    date: "June 22, 2026",
    readTime: "7 min read",
    author: "Dr. Emily Chen",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 5,
    title: "Understanding Telehealth: Virtual vs. In-Person Care",
    excerpt: "When should you consult online versus visiting a clinic? We break down scenarios to help you choose the fastest path to recovery.",
    category: "Digital Health",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: "Dr. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 6,
    title: "Heart Health Checklist for Adults Aged 30-50",
    excerpt: "Proactive cardiovascular health management starts early. Check out the screening milestones recommended by cardiology experts.",
    category: "Cardiology",
    date: "June 02, 2026",
    readTime: "8 min read",
    author: "Dr. Robert Vance",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    featured: false,
  }
];

const CATEGORIES = ["All", "Preventive Care", "Mental Health", "Digital Health", "Wellness", "Cardiology"];

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = BLOG_POSTS.find((post) => post.featured);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="blog-page-wrapper">
        <header className="blog-hero">
          <div className="blog-hero-content">
            <span className="blog-badge">Weblinic Insights</span>
            <h1>Health & Wellness Journal</h1>
            <p>
              Expert advice, clinical insights, and practical wellness guides carefully curated 
              by our network of certified healthcare professionals.
            </p>

            <div className="blog-search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search health topics, conditions, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div className="blog-container">
          <div className="blog-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <section className="featured-post-card">
              <div className="featured-image-wrapper">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="featured-tag">Featured Article</span>
              </div>
              <div className="featured-post-info">
                <span className="post-category">{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                
                <div className="post-meta">
                  <span><FiUser /> {featuredPost.author}</span>
                  <span><FiCalendar /> {featuredPost.date}</span>
                  <span><FiClock /> {featuredPost.readTime}</span>
                </div>

                <Link to={`/blog/${featuredPost.id}`} className="read-featured-btn">
                  Read Full Article <FiArrowRight />
                </Link>
              </div>
            </section>
          )}

          <section className="blog-grid-section">
            <h3>{searchQuery ? `Search Results (${filteredPosts.length})` : "Latest Articles"}</h3>

            {filteredPosts.length === 0 ? (
              <div className="no-results">
                <h4>No articles found</h4>
                <p>Try searching with different keywords or switching category filters.</p>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="card-image-container">
                      <img src={post.image} alt={post.title} />
                      <span className="card-category">{post.category}</span>
                    </div>
                    <div className="card-body">
                      <div className="card-meta">
                        <span><FiCalendar /> {post.date}</span>
                        <span><FiClock /> {post.readTime}</span>
                      </div>
                      <h4>{post.title}</h4>
                      <p>{post.excerpt}</p>
                      <div className="card-footer">
                        <span className="author-name"><FiUser /> {post.author}</span>
                        <Link to={`/blog/${post.id}`} className="read-more-link">
                          Read Article <FiArrowRight />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default BlogPage;