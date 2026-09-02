import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiChevronRight,
  FiActivity
} from "react-icons/fi";
import "./BlogDetails.css";

export const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Signs You Shouldn't Ignore This Flu Season",
    excerpt: "Recognizing early flu symptoms can prevent complications. Learn what red flags require immediate medical evaluation from top doctors.",
    content: `Mental health care often starts too late.

For many people, support begins only after symptoms have worsened, functioning has declined, or a crisis has made care impossible to ignore. By then, the journey can be hard to navigate.

For health plans, employers, health systems, and behavioral health leaders, the challenge is familiar: need is high, capacity is constrained, and traditional referral pathways often rely on people to identify their own symptoms and take the first step alone.

A recently published, independently led randomized trial offers a compelling example of a different model: care that identifies need earlier and offers support immediately.`,
    category: "Preventive Care",
    date: "JULY 10, 2026",
    readTime: "5 min read",
    author: "Dr. Sarah Jenkins",
    authorRole: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Managing Stress in an Always-On World",
    excerpt: "Practical daily routines and psychological strategies to combat burnout, improve mental focus, and achieve work-life harmony.",
    content: "Chronic stress affects both mental clarity and physical vitality. Setting digital boundaries and practicing daily mindfulness routines can restore focus and energy.",
    category: "Mental Health",
    date: "JULY 08, 2026",
    readTime: "6 min read",
    author: "Dr. Alex Rivera",
    authorRole: "Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "What to Know Before Your First E-Prescription",
    excerpt: "Digital prescriptions make medical refills smooth and secure. Here is how Weblinic ensures fast access to your required medications.",
    content: "E-prescriptions allow licensed medical professionals to transmit prescriptions directly to partner pharmacies electronically, minimizing wait times and manual paper errors.",
    category: "Digital Health",
    date: "JUNE 30, 2026",
    readTime: "4 min read",
    author: "PharmD Mark Vance",
    authorRole: "Lead Tele-Pharmacist",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  }
];

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(id, 10)) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* TOP BREADCRUMB NAVIGATION BAR */}
      <div className="breadcrumb-section">
        <div className="breadcrumb-container">
          <nav className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <FiChevronRight className="breadcrumb-separator" />
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <FiChevronRight className="breadcrumb-separator" />
            <span className="breadcrumb-current">
              {post.title.length > 35 ? `${post.title.substring(0, 35)}...` : post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* MAIN WRAPPER */}
      <div className="blog-details-wrapper">
        <div className="blog-details-layout">
          
          {/* MAIN ARTICLE CONTENT */}
          <main className="blog-main-content">
            <div className="article-header-actions">
              <button className="back-btn" onClick={() => navigate("/blog")}>
                <FiArrowLeft /> Back to Articles
              </button>
              <span className="post-category-tag">{post.category}</span>
            </div>

            <h1 className="article-title">{post.title}</h1>

            <div className="article-meta-bar">
              <div className="author-info">
                <div className="author-avatar-small">
                  <FiUser className="meta-icon" />
                </div>
                <div className="author-details">
                  <strong>{post.author}</strong>
                  {post.authorRole && (
                    <span className="author-role">{post.authorRole}</span>
                  )}
                </div>
              </div>

              <div className="meta-stats">
                <span><FiCalendar /> {post.date}</span>
                <span><FiClock /> {post.readTime}</span>
              </div>
            </div>

            <div className="article-banner-image">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="article-body">
              <p className="article-lead">{post.excerpt}</p>
              <div className="article-content">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            
            {/* AUTHOR CARD WIDGET */}
            <div className="sidebar-widget author-card-widget">
              <div className="author-avatar">
                <FiUser size={24} />
              </div>
              <span className="widget-label">Article Author</span>
              <h4 className="author-name">{post.author}</h4>
              <p className="author-title">{post.authorRole}</p>
              <p className="author-bio">
                Expert in digital healthcare, dedicated to delivering evidence-based medical advice and patient education.
              </p>
            </div>

            {/* CTA BANNER WIDGET */}
            <div className="sidebar-widget cta-banner-widget">
              <FiActivity className="cta-icon" />
              <h3>Need Medical Advice?</h3>
              <p>Connect with a verified specialist online within 15 minutes.</p>
              <button className="sidebar-cta-btn" onClick={() => navigate("/doctors")}>
                Book Consultation
              </button>
            </div>

            {/* RELATED ARTICLES WIDGET */}
            <div className="sidebar-widget related-articles-widget">
              <h3 className="widget-title">Related Articles</h3>
              <div className="related-posts-list">
                {relatedPosts.map((related) => (
                  <Link 
                    to={`/blog/${related.id}`} 
                    key={related.id} 
                    className="related-post-card"
                  >
                    <img src={related.image} alt={related.title} className="related-img" />
                    <div className="related-info">
                      <span className="related-category">{related.category}</span>
                      <h5 className="related-title">{related.title}</h5>
                      <span className="related-date"><FiCalendar /> {related.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogDetails;