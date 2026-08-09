import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';

/**
 * Home component.
 * Implements useEffect with empty dependency array [] simulating brief loading sequence on mount (~1s).
 * Includes cleanup (clearTimeout) to prevent memory leaks if component unmounts before timer finishes.
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate brief loading sequence on mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer if component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array [] -> runs once on mount

  if (isLoading) {
    return (
      <section id="home" className="loading-container">
        <div className="spinner" aria-label="Loading content"></div>
        <p className="loading-text">Loading portfolio...</p>
      </section>
    );
  }

  return (
    <section id="home">
      <div className="hero-content">
        <article>
          <p className="intro-text">Hi there! I'm</p>

          <h2>Shayan Fatarpekar</h2>

          <h3>A Computer Science Student at NITW</h3>

          <p>
            I enjoy building responsive websites, learning new technologies,
            and solving programming problems.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="button">
              View Projects
            </Link>
            <Link to="/contact" className="button btn-outline">
              Contact Me
            </Link>
          </div>
        </article>

        <figure>
          <img src={profileImg} alt="Portrait of Shayan Fatarpekar" />
        </figure>
      </div>
    </section>
  );
}
