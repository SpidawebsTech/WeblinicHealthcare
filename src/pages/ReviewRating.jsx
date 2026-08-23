import { useState } from "react";
import { Star } from "lucide-react";
import PatientSidebarLayout from "../components/PatientSidebarLayout";

export default function ReviewRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <PatientSidebarLayout title="Rate Your Visit">
      <div className="max-w-md mx-auto px-5 sm:px-8 py-12">
        {submitted ? (
          <div className="text-center border border-gray-100 rounded-2xl p-8 bg-white">
            <h2 className="font-bold text-lg mb-2">Thank you!</h2>
            <p className="text-sm text-navy-400">Your feedback helps other patients choose the right doctor.</p>
          </div>
        ) : (
          <div className="border border-gray-100 rounded-2xl p-8 bg-white text-center">
            <h2 className="font-bold text-lg mb-1">Dr. Mehreen Fatima</h2>
            <p className="text-sm text-navy-400 mb-6">How was your consultation?</p>

            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(0)}
                >
                  <Star
                    size={32}
                    className={(hovered || rating) >= n ? "text-yellow-500 fill-yellow-500" : "text-gray-200"}
                  />
                </button>
              ))}
            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience (optional)"
              rows={3}
              className="w-full border border-gray-200 rounded-lg p-3 text-sm mb-4 focus:outline-none resize-none"
            />

            <button
              onClick={() => rating > 0 && setSubmitted(true)}
              disabled={rating === 0}
              className="w-full bg-brand-red hover:bg-brand-redDark disabled:bg-gray-200 disabled:cursor-not-allowed text-white text-sm font-bold py-3 rounded-full transition-colors"
            >
              Submit Review
            </button>
          </div>
        )}
      </div>
    </PatientSidebarLayout>
  );
}