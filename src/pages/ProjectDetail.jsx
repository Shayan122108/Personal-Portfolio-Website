import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

/**
 * Dynamic Route Component: /projects/:projectId
 * Uses useParams() to read parameter from URL and render detailed view.
 */
export default function ProjectDetail() {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="project-detail-section">
        <div className="not-found-card">
          <h2>Project Not Found</h2>
          <p>Sorry, no project exists with ID: <code>{projectId}</code></p>
          <Link to="/projects" className="button">
            &larr; Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section">
      <Link to="/projects" className="back-link">
        &larr; Back to All Projects
      </Link>

      <div className="project-detail-card">
        <div className="project-detail-header">
          <h2>{project.title}</h2>
          <div className="tech-tags">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <img
          src={project.image}
          alt={`Banner for ${project.title}`}
          className="project-detail-img"
        />

        <div className="project-detail-body">
          <h3>Overview</h3>
          <p>{project.longDescription}</p>

          {project.features && (
            <>
              <h3>Key Features</h3>
              <ul className="detail-features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </>
          )}

          <div className="project-detail-actions">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View GitHub Repository ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
