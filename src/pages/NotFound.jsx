import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Catch-All Component (path="*")
 */
export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="button">
          Return to Home Page
        </Link>
      </div>
    </section>
  );
}
