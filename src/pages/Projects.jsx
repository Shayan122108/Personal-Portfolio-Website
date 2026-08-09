import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

/**
 * Projects Page Component.
 * Maps over projectsData array and passes each project's fields as props to ProjectCard.
 */
export default function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <p className="projects-subtitle">
        Explore a selection of my recent software development and web projects.
      </p>

      <div className="project-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            longDescription={project.longDescription}
            techStack={project.techStack}
            image={project.image}
            link={project.link}
            features={project.features}
          />
        ))}
      </div>
    </section>
  );
}
