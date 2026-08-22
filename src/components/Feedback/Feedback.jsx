import React from "react";
import "./Feedback.css";
import { FaStar, FaRegStar } from "react-icons/fa";

function Feedback() {
  const feedbackList = [
    {
      id: 1,
      rating: 5,
      comment:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      initials: "SA",
      name: "Sana A.",
      location: "Islamabad",
    },
    {
      id: 2,
      rating: 5,
      comment:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      initials: "BM",
      name: "Bilal M.",
      location: "Rawalpindi",
    },
    {
      id: 3,
      rating: 4,
      comment:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
      initials: "ZI",
      name: "Zainab I.",
      location: "Lahore",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <section className="feedback-section">
      <div className="feedback-decorator">
        <span className="dot"></span>
      </div>

      <h2 className="feedback-title">What our patients say</h2>
      <p className="feedback-subtitle">
        Real feedback from people who've used Weblinic.
      </p>

      <div className="feedback-grid">
        {feedbackList.map((item) => (
          <div className="feedback-card" key={item.id}>
           
            <div className="stars-row">{renderStars(item.rating)}</div>

            <p className="feedback-comment">{item.comment}</p>

            <div className="f-author-profile">
              <div className="f-author-avatar">{item.initials}</div>
              <div className="f-author-details">
                <h4 className="f-author-name">{item.name}</h4>
                <span className="f-author-location">{item.location}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;