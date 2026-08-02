# Personal Portfolio Website

## Overview
This project is a responsive personal portfolio website built using only **HTML5** and **CSS3** as required for the assignment. The goal was to create a clean, accessible, and well-structured website that can later be extended with JavaScript and backend functionality in future assignments. The website consists of four main sections: **Introduction**, **About**, **Projects**, and **Contact**.

## Design Rationale
I chose a simple and minimal design to keep the content easy to read and navigate. The color palette uses neutral background colors with a contrasting accent color for buttons, links, and headings. CSS custom properties are defined in the `:root` selector so that the theme can be modified from one place without editing multiple CSS rules.

Semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` were used to improve readability, accessibility, and SEO while keeping the document logically organized.

## Layout Technique
The layout combines **Flexbox** and **CSS Grid**, each used where it fits best. Flexbox handles the one-dimensional layouts: the navbar, the hero split between text and image, the skills list, and the internal structure of each project card. Grid is used for the `.project-container`, since it holds a collection of equal-width project cards that need to reflow automatically as the viewport shrinks, which is a two-dimensional layout problem Grid solves more predictably than Flexbox's wrapping behavior. Media queries are used for responsiveness at **768px** (tablet) and **480px** (mobile): the navbar and hero stack vertically, project cards switch from a side-by-side row to a stacked column, and font sizes/spacing scale down for smaller screens.

## Accessibility Considerations
Every image contains descriptive `alt` text, form fields are properly connected with their labels, heading levels follow a logical hierarchy with a single `<h1>` (in the site logo), and all interactive elements (links, buttons, form fields) have a visible `:focus-visible` outline for keyboard navigation. The color palette was revised to a dark theme with light, high-contrast text (`#e2e8f0` body text and `#93c5fd` headings on a `#0a0e14` background) so that all text meets or exceeds the WCAG AA contrast minimum of 4.5:1 for normal text.

## Interactive Features
Buttons, navigation links, project cards, and form fields include hover and focus effects with smooth CSS transitions (color, background, transform). These interactions provide visual feedback without relying on JavaScript.

## Known Limitations
The website is currently static. The contact form does not submit data (no backend), project entries are placeholders, and there are no animations beyond simple hover/focus transitions. These features will be added later as the course progresses.