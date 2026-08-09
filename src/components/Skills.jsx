import React from 'react';

// Level 3 Grandchild Component: SkillBadge
export function SkillBadge({ badge, name, level }) {
  return (
    <li className="skill-badge-item">
      <span className="skill-badge-icon" role="img" aria-label={name}>
        {badge}
      </span>
      <span className="skill-badge-name">{name}</span>
      <span className="skill-badge-level">{level}</span>
    </li>
  );
}

// Level 2 Child Component: SkillCategoryGroup
export function SkillCategoryGroup({ categoryData }) {
  const { category, icon, items } = categoryData;
  return (
    <div className="skill-category-card">
      <h4 className="skill-category-title">
        <span>{icon}</span> {category}
      </h4>
      <ul className="skill-badge-list">
        {items.map((skill, index) => (
          /* Passing piece of data down to Grandchild component SkillBadge */
          <SkillBadge
            key={index}
            badge={skill.badge}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </ul>
    </div>
  );
}

// Level 1 Component: Skills (Receives categories array from parent About page)
export default function Skills({ skillsCategories }) {
  return (
    <div className="skills-section">
      <h3 className="skills-main-title">Technical Skills & Expertise</h3>
      <div className="skills-grid">
        {skillsCategories.map((cat, idx) => (
          /* Passing data down to Child component SkillCategoryGroup */
          <SkillCategoryGroup key={idx} categoryData={cat} />
        ))}
      </div>
    </div>
  );
}
