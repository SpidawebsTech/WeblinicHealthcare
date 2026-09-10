import { useState } from "react";
import { FiStar } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import "./ReviewRating.css";

export default function ReviewRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <DashboardLayout>
      <div className="rr-container">
        {submitted ? (
          <div className="rr-card rr-thankyou">
            <h2>Thank you!</h2>
            <p>Your feedback helps other patients choose the right doctor.</p>
          </div>
        ) : (
          <div className="rr-card">
            <h2>Dr. Mehreen Fatima</h2>
            <p className="rr-subtitle">How was your consultation?</p>

            <div className="rr-stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(0)}
                  className="rr-star-btn"
                >
                  <FiStar
                    size={32}
                    className={(hovered || rating) >= n ? "rr-star filled" : "rr-star"}
                  />
                </button>
              ))}
            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience (optional)"
              rows={3}
              className="rr-textarea"
            />

            <button
              onClick={() => rating > 0 && setSubmitted(true)}
              disabled={rating === 0}
              className="rr-submit-btn"
            >
              Submit Review
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}