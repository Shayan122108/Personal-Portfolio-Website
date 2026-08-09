import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ProjectCard - Generic reusable component.
 * Receives all project data entirely via props (no hardcoded content).
 * Manages independent 'isExpanded' state scoped per component instance.
 */
export default function ProjectCard({
  id,
  title,
  description,
  longDescription,
  techStack,
  image,
  link,
  features
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article className="project-card">
      <img src={image} alt={`Screenshot of ${title}`} />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <p className="tech-stack">
          <strong>Tech Stack:</strong> {techStack.join(', ')}
        </p>

        {/* Collapsible Details Section (useState requirement) */}
        {isExpanded && (
          <div className="project-details-expanded">
            <p className="long-desc">{longDescription}</p>
            {features && (
              <div className="features-list">
                <strong>Key Highlights:</strong>
                <ul>
                  {features.map((feat, idx) => (
                    <li key={idx}>✓ {feat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="project-card-actions">
          {/* View Details Toggle Button (Scoped State) */}
          <button
            type="button"
            className="btn-secondary"
            onClick={toggleDetails}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Hide Details' : 'View Quick Details'}
          </button>

          {/* Dynamic Route Navigation */}
          <Link to={`/projects/${id}`} className="button btn-small">
            Full Project Page &rarr;
          </Link>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-small"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
