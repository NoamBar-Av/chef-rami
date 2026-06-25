"use client";

import { useMemo, useState } from "react";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleString("he-IL");
  } catch {
    return dateString;
  }
}

export default function AdminReviewsPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending");
  const [reviews, setReviews] = useState([]);

  const hasReviews = useMemo(() => reviews.length > 0, [reviews.length]);

  const loadReviews = async (status = statusFilter) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/reviews?status=${encodeURIComponent(status)}`, {
        headers: {
          "x-admin-password": password,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "נכשל בטעינת הביקורות");
      }
      setReviews(data.reviews || []);
    } catch (err) {
      setError(err.message || "שגיאה בטעינה");
    } finally {
      setLoading(false);
    }
  };

  const approveOrReject = async (id, status) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "עדכון הסטטוס נכשל");
      }
      await loadReviews();
    } catch (err) {
      setError(err.message || "שגיאה בעדכון");
    }
  };

  return (
    <main className="section section-cream">
      <div className="site-shell reviews-shell">
        <section className="reviews-form-wrap" aria-labelledby="admin-title">
          <h1 id="admin-title" className="section-title">ניהול ביקורות</h1>
          {!authorized ? (
            <form
              className="reviews-form"
              onSubmit={(event) => {
                event.preventDefault();
                setAuthorized(true);
                loadReviews(statusFilter);
              }}
            >
              <label className="reviews-field">
                <span>סיסמת מנהל</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>
              <button className="btn btn-primary" type="submit">כניסה לניהול</button>
            </form>
          ) : (
            <>
              <div className="reviews-admin-toolbar">
                <label className="reviews-field">
                  <span>סטטוס</span>
                  <select
                    value={statusFilter}
                    onChange={(event) => {
                      const value = event.target.value;
                      setStatusFilter(value);
                      loadReviews(value);
                    }}
                  >
                    <option value="pending">ממתינות לאישור</option>
                    <option value="approved">מאושרות</option>
                    <option value="rejected">נדחו</option>
                  </select>
                </label>
                <button className="btn btn-secondary" type="button" onClick={() => loadReviews()}>
                  רענון
                </button>
              </div>

              {loading ? <p className="section-text">טוען...</p> : null}
              {error ? <p className="reviews-submit-message">{error}</p> : null}

              {!loading && !hasReviews ? <p className="section-text">אין ביקורות להצגה.</p> : null}

              <div className="reviews-blog-grid">
                {reviews.map((review) => (
                  <article key={review.id} className="reviews-blog-card">
                    <header className="reviews-blog-head">
                      <h3>{review.name}</h3>
                      <p>{review.event_type}</p>
                      <p className="reviews-date">{formatDate(review.created_at)}</p>
                    </header>
                    <p className="section-text">{review.review_text}</p>
                    {review.status === "pending" ? (
                      <div className="reviews-admin-actions">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => approveOrReject(review.id, "approved")}
                        >
                          אשר
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => approveOrReject(review.id, "rejected")}
                        >
                          דחה
                        </button>
                      </div>
                    ) : (
                      <p className="section-text">סטטוס: {review.status}</p>
                    )}
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
