import React from 'react';
import Skills from '../components/Skills';
import { skillsData } from '../data/skills';

/**
 * About Page component.
 * Passes skillsCategories data down to child component <Skills />,
 * which passes category item down to grandchild <SkillBadge /> (2-level deep prop drilling).
 */
export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <article className="about-bio">
        <p>
          I am a Computer Science student at NIT Warangal with a strong interest in
          software development, web technologies, and algorithm design.
          I enjoy building software projects that combine clean design with practical,
          scalable functionality.
        </p>

        <p>
          My technical focus includes full-stack web development, frontend architecture,
          database design, and system optimization.
        </p>
      </article>

      {/* Demonstrating Prop Drilling (Level 1: Page -> Component) */}
      <Skills skillsCategories={skillsData} />
    </section>
  );
}
