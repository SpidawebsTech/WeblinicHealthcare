import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiFileText, 
  FiVideo, 
  FiImage,
  FiCalendar, 
  FiTarget, 
  FiPlay, 
  FiExternalLink, 
  FiArrowRight,
  FiMapPin,
  FiStar,
  FiGlobe,
  FiDownload,
  FiMail,
  FiX,
  FiCheckCircle
} from "react-icons/fi";
import "./MediaGallery.css";

export const SAMPLE_NEWS_ARTICLES = [
  {
    id: "1",
    type: "press-release",
    featured: true,
    title: "Weblinic Expands AI-Driven Telehealth Infrastructure Nationwide",
    summary: "Weblinic announces a major platform upgrade integrating real-time triage assistance and instant digital prescriptions across all partner networks.",
    category: "Corporate Update",
    date: "July 24, 2026",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2",
    type: "media-mention",
    title: "How Weblinic is Streamlining Online Doctor Consultations and Prescriptions",
    summary: "TechCrunch takes a deep dive into Weblinic's digital infrastructure and how it reduces patient wait times by over 60%.",
    category: "In The News",
    date: "July 18, 2026",
    publisher: "TechCrunch",
    externalUrl: "https://techcrunch.com",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "3",
    type: "press-release",
    title: "Weblinic Launches Next-Gen Instant Symptom Assessment Tool",
    summary: "Patients can now receive preliminary triage evaluations powered by medical-grade algorithms before connecting with a physician.",
    category: "Product Updates",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "4",
    type: "press-release",
    title: "Weblinic Partners with Nationwide Hospital Network for E-Prescriptions",
    summary: "Seamless digital prescription routing is now live across more than 4,000 partner pharmacies nationwide.",
    category: "Partnerships",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
  }
];

export const OTHER_MEDIA_DATA = [
  {
    id: 101,
    type: "video",
    title: "How Digital E-Prescriptions Work at Weblinic",
    category: "Tutorial",
    date: "July 10, 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    duration: "3:45 min"
  },
  {
    id: 102,
    type: "events",
    title: "Annual Health Awareness Camp 2026",
    category: "Community Event",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    caption: "Our medical team conducting free health checkups in local communities.",
    location: "Community Center, NY"
  },
  {
    id: 103,
    type: "campaign",
    title: "Protect Your Heart: 2026 Screening Campaign",
    category: "Public Campaign",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600",
    ctaText: "Join Campaign",
    description: "Get free cardiovascular risk evaluations and consult with top cardiologists online."
  },
  {
    id: 104,
    type: "gallery",
    title: "State-of-the-Art Telehealth Operations Facility",
    category: "Photo Gallery",
    date: "July 05, 2026",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    caption: "A look inside our modern patient support and triage monitoring hub."
  },
  {
    id: 105,
    type: "gallery",
    title: "Community Outreach & Mobile Health Screening",
    category: "Photo Gallery",
    date: "June 20, 2026",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    caption: "Volunteers and healthcare partners delivering primary care checkups."
  }
];

const CATEGORIES = [
  { key: "all", label: "All Media", icon: null },
  { key: "news", label: "News & Press", icon: <FiFileText /> },
  { key: "video", label: "Video Gallery", icon: <FiVideo /> },
  { key: "gallery", label: "Image Gallery", icon: <FiImage /> },
  { key: "events", label: "Events", icon: <FiCalendar /> },
  { key: "campaign", label: "Campaigns", icon: <FiTarget /> },
];

function MediaGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Participant");
  const [errors, setErrors] = useState({ fullName: "", email: "", phone: "" });

  const filteredOtherMedia = activeTab === "all" 
    ? OTHER_MEDIA_DATA 
    : OTHER_MEDIA_DATA.filter((item) => item.type === activeTab);

  const featuredArticle = SAMPLE_NEWS_ARTICLES.find((item) => item.featured) || SAMPLE_NEWS_ARTICLES[0];
  const gridArticles = SAMPLE_NEWS_ARTICLES.filter((item) => item.id !== featuredArticle?.id);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);

    if (/\d/.test(value)) {
      setErrors((prev) => ({ ...prev, fullName: "Numbers are not allowed in the full name field." }));
    } else {
      setErrors((prev) => ({ ...prev, fullName: "" }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (value && !phoneRegex.test(value)) {
      setErrors((prev) => ({ ...prev, phone: "Please enter a valid phone number." }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleCampaignSubmit = (e) => {
    e.preventDefault();

    let nameErr = "";
    let emailErr = "";
    let phoneErr = "";

    if (!fullName.trim()) {
      nameErr = "Full name is required.";
    } else if (/\d/.test(fullName)) {
      nameErr = "Numbers are not allowed in the full name field.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      emailErr = "Email address is required.";
    } else if (!emailRegex.test(email)) {
      emailErr = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (!phone.trim()) {
      phoneErr = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      phoneErr = "Please enter a valid phone number.";
    }

    if (nameErr || emailErr || phoneErr) {
      setErrors({ fullName: nameErr, email: emailErr, phone: phoneErr });
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedCampaign(null);
      setFullName("");
      setEmail("");
      setPhone("");
      setRole("Participant");
      setErrors({ fullName: "", email: "", phone: "" });
    }, 2500);
  };

  const closeModal = () => {
    setSelectedCampaign(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setRole("Participant");
    setErrors({ fullName: "", email: "", phone: "" });
  };

  return (
    <div className="media-gallery-wrapper">

      <section className="media-hero-section">
        <div className="media-hero-container">
          <header className="media-header">
            <h1>Weblinic Media Center</h1>
            <p>Explore our latest news, video tutorials, photo galleries, upcoming events, and public health awareness campaigns.</p>
          </header>

          <div className="media-tabs-container">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.key}
                className={`media-tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="media-content-container">
        {activeTab === "news" ? (
          <section className="news-cards-section">
            <div className="news-cards-container">
              {featuredArticle && (
                <div className="featured-news-card">
                  <div className="featured-news-image">
                    <img src={featuredArticle.image} alt={featuredArticle.title} />
                    <span className="featured-badge">
                      <FiStar /> Featured Announcement
                    </span>
                  </div>

                  <div className="featured-news-content">
                    <div className="news-meta">
                      <span className="news-category">{featuredArticle.category}</span>
                      <span className="news-date"><FiCalendar /> {featuredArticle.date}</span>
                      {featuredArticle.location && (
                        <span className="news-location"><FiMapPin /> {featuredArticle.location}</span>
                      )}
                    </div>

                    <h2 className="featured-news-title">{featuredArticle.title}</h2>
                    <p className="featured-news-summary">{featuredArticle.summary}</p>

                    <div className="featured-news-footer">
                      <Link to={`/news/${featuredArticle.id}`} className="read-news-btn">
                        Read Full Announcement <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid-header">
                <h2>Latest Press Releases & Media Mentions</h2>
                <span className="article-count">{SAMPLE_NEWS_ARTICLES.length} total updates</span>
              </div>

              <div className="news-cards-grid">
                {gridArticles.map((article) => {
                  const isExternal = article.type === "media-mention";

                  return (
                    <article className="news-card" key={article.id}>
                      <div className="news-card-image">
                        <img src={article.image} alt={article.title} />
                        <span className={`news-type-tag ${isExternal ? "external" : "internal"}`}>
                          {isExternal ? "In The News" : "Press Release"}
                        </span>
                      </div>

                      <div className="news-card-body">
                        <div className="news-meta">
                          <span className="news-category">{article.category}</span>
                          <span className="news-date"><FiCalendar /> {article.date}</span>
                        </div>

                        <h3 className="news-card-title">{article.title}</h3>
                        <p className="news-card-summary">"{article.summary}"</p>

                        {isExternal && article.publisher && (
                          <div className="publisher-badge">
                            <FiGlobe /> Featured in <strong>{article.publisher}</strong>
                          </div>
                        )}
                      </div>

                      <div className="news-card-footer">
                        {isExternal ? (
                          <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="read-news-link external">
                            Read Article <FiExternalLink />
                          </a>
                        ) : (
                          <Link to={`/news/${article.id}`} className="read-news-link">
                            Read Press Release <FiArrowRight />
                          </Link>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="media-kit-section">
                <div className="media-kit-content">
                  <span className="media-kit-badge">Press Resources</span>
                  <h2>Media Kit & Brand Assets</h2>
                  <p>
                    Are you a journalist, reporter, or researcher writing about Weblinic? 
                    Download our official brand logos, high-res photos, and company factsheet.
                  </p>

                  <div className="media-kit-buttons">
                    <a href="#download-logos" className="m-download-btn">
                      Brand Logos (PNG/SVG) <FiDownload />
                    </a>
                    <Link to={`/factsheet`} className="n-read-more-link">
                      2026 Factsheet (PDF)
                    </Link> 
                  </div>
                </div>

                <div className="media-contact-card">
                  <h3>Media Inquiries</h3>
                  <p>For press interviews, comments, or executive inquiries, reach out to our media relations team.</p>
                  <div className="contact-email">
                    <FiMail className="contact-icon" />
                    <div>
                      <strong>Press Office</strong>
                      <a href="mailto:press@weblinic.com">press@weblinic.com</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ) : (
          <div className="media-grid">
            {activeTab === "all" && (
              <div className="media-card card-type-news">
                <div className="card-media-wrap">
                  <img src={featuredArticle.image} alt={featuredArticle.title} />
                  <span className="media-badge news-badge">News</span>
                </div>
                <div className="card-body">
                  <span className="card-date"><FiCalendar /> {featuredArticle.date}</span>
                  <h3>{featuredArticle.title}</h3>
                  <p>{featuredArticle.summary}</p>
                  <Link to={`/news/${featuredArticle.id}`} className="read-more-link">
                    Read Full Announcement →
                  </Link>
                </div>
              </div>
            )}

            {filteredOtherMedia.map((item) => (
              <div key={item.id} className={`media-card card-type-${item.type}`}>
                {item.type === "video" && (
                  <>
                    <div 
                      className="card-media-wrap video-wrap"
                      onClick={() => setSelectedVideo(item.videoUrl)}
                    >
                      <img src={item.thumbnail} alt={item.title} />
                      <div className="play-overlay">
                        <FiPlay className="play-icon" />
                      </div>
                      <span className="duration-tag">{item.duration}</span>
                      <span className="media-badge video-badge">Video</span>
                    </div>
                    <div className="card-body">
                      <span className="card-date"><FiCalendar /> {item.date}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </>
                )}

                {item.type === "gallery" && (
                  <>
                    <div 
                      className="card-media-wrap gallery-wrap" 
                      onClick={() => setSelectedImage(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={item.image} alt={item.title} />
                      <span className="media-badge gallery-badge">Gallery</span>
                    </div>
                    <div className="card-body">
                      <span className="card-date"><FiCalendar /> {item.date}</span>
                      <h3>{item.title}</h3>
                      {item.caption && <p className="image-caption">{item.caption}</p>}
                    </div>
                  </>
                )}

                {item.type === "events" && (
                  <>
                    <div className="card-media-wrap">
                      <img src={item.image} alt={item.title} />
                      <span className="media-badge event-badge">Event</span>
                    </div>
                    <div className="card-body">
                      <span className="card-date"><FiCalendar /> {item.date}</span>
                      <h3>{item.title}</h3>
                      <p className="image-caption">{item.caption}</p>
                      {item.location && (
                        <span className="event-location-tag"><FiMapPin /> {item.location}</span>
                      )}
                    </div>
                  </>
                )}

                {item.type === "campaign" && (
                  <>
                    <div className="card-media-wrap campaign-wrap">
                      <img src={item.image} alt={item.title} />
                      <span className="media-badge campaign-badge">Campaign</span>
                    </div>
                    <div className="card-body campaign-body">
                      <span className="card-date"><FiCalendar /> {item.date}</span>
                      <h3>{item.title}</h3>
                      <button 
                        className="campaign-cta-btn" 
                        onClick={() => setSelectedCampaign(item)}
                      >
                        {item.ctaText}
                      </button>
                    </div>
                  </>
                )}

              </div>
            ))}
          </div>
        )}
      </div>

      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedVideo(null)}>
              <FiX />
            </button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="video-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="video-modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>
              <FiX />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} style={{ width: "100%", borderRadius: "12px", maxHeight: "75vh", objectFit: "cover" }} />
            <h3 style={{ marginTop: "1rem", color: "#fff" }}>{selectedImage.title}</h3>
            {selectedImage.caption && <p style={{ color: "#cbd5e1" }}>{selectedImage.caption}</p>}
          </div>
        </div>
      )}

      {selectedCampaign && (
        <div className="campaign-modal-overlay" onClick={closeModal}>
          <div className="campaign-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-modal-btn" onClick={closeModal} aria-label="Close Modal">
              <FiX />
            </button>

            {isSubmitted ? (
              <div className="campaign-success-state">
                <FiCheckCircle className="success-icon" />
                <h2>Registration Successful!</h2>
                <p>Thank you for joining <strong>{selectedCampaign.title}</strong> as a <strong>{role}</strong>. We've sent details to your email.</p>
              </div>
            ) : (
              <>
                <h2 className="modal-title-centered">Join Campaign</h2>
                <p className="modal-subtitle">{selectedCampaign.title}</p>
                <p className="modal-desc">{selectedCampaign.description}</p>

                <form onSubmit={handleCampaignSubmit} className="campaign-form" noValidate>
                  <div className={`form-group ${errors.fullName ? "has-error" : ""}`}>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      value={fullName}
                      onChange={handleNameChange}
                      className={errors.fullName ? "input-error" : ""}
                      required 
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={handleEmailChange}
                      className={errors.email ? "input-error" : ""}
                      required 
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      value={phone}
                      onChange={handlePhoneChange}
                      className={errors.phone ? "input-error" : ""}
                      required 
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label>Join As</label>
                    <select 
                      value={role} 
                      onChange={(e) => setRole(e.target.value)} 
                      className="select-input"
                    >
                      <option value="Participant">Participant (Attending)</option>
                      <option value="Volunteer">Volunteer (Event Support)</option>
                      <option value="Healthcare Partner">Healthcare Partner / Specialist</option>
                      <option value="Sponsor">Sponsor / Donor</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-campaign-btn">
                    Confirm Participation
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default MediaGallery;