# Personal Portfolio React Web Application (Assignment 2)

## Overview
This project is a modern, modular, single-page React portfolio application built using **React 19**, **Vite**, and **React Router DOM v7**. It converts and enhances the static portfolio from Assignment 1 into an interactive web application featuring component-based architecture, dynamic routing, state management, persistent light/dark themes, controlled form validation, and side-effect hooks.

---

## Setup & Run Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Step 1: Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### Step 2: Start Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` (or the URL shown in your terminal) in your browser to explore the live application.

### Step 3: Production Build & Verification
To build the application for production and verify zero console or build errors:
```bash
npm run build
```

---

## Component Tree & Design Architecture

The UI is decomposed into reusable functional components organized in `src/components`, `src/pages`, and `src/data`:

```
src/
├── assets/                  # Project images & profile portrait
├── data/
│   ├── projects.js          # Centralized projects dataset
│   └── skills.js            # Centralized skills dataset
├── components/
│   ├── Navbar.jsx           # Sticky nav header, NavLinks, mobile menu, Theme toggle
│   ├── Footer.jsx           # Persistent page footer
│   ├── ProjectCard.jsx      # Generic reusable project card (props + scoped state)
│   ├── ContactForm.jsx      # Controlled form component with input state & validation
│   └── Skills.jsx           # Skills container & grandchild components (Prop Drilling)
├── pages/
│   ├── Home.jsx             # Hero section with 1s loading state simulation
│   ├── About.jsx            # Bio & skills page
│   ├── Projects.jsx         # Projects list page mapping projects.js to ProjectCard
│   ├── ProjectDetail.jsx    # Dynamic route page (/projects/:projectId) using useParams
│   ├── Contact.jsx          # Contact page embedding ContactForm
│   └── NotFound.jsx         # 404 catch-all route with return home link
├── App.jsx                  # Top-level state (Theme) & Router setup
├── main.jsx                 # Entry point wrapped with BrowserRouter
└── style.css                # CSS variables (Light/Dark themes) & responsive styles
```

### State-Lifting Decisions & Prop Drilling
1. **Theme State (`App.jsx`)**:
   - The dark/light theme state (`theme`, `setTheme`) is **lifted to the top-level `App` component** so that both `Navbar` (toggle button) and all application pages/containers can react to theme changes seamlessly.
2. **Prop Drilling Demonstration (2-Levels Deep)**:
   - **Level 1 (Page -> Component)**: `About.jsx` receives `skillsData` and passes the array of skill categories down to the `<Skills skillsCategories={skillsData} />` component.
   - **Level 2 (Child -> Grandchild)**: `<Skills />` maps over categories and renders `<SkillCategoryGroup categoryData={cat} />`, which extracts the items list and passes each skill item down to `<SkillBadge badge={...} name={...} level={...} />`.

---

## State Management (`useState`) Summary

The application implements three independent state features strictly using `useState`:

1. **Dark/Light Theme Toggle**:
   - Managed in `App.jsx` (`const [theme, setTheme] = useState(...)`). Toggle button rendered in `Navbar.jsx`.
2. **Controlled Contact Form & Validation State**:
   - Managed in `ContactForm.jsx` (`const [formData, setFormData] = useState(...)`, `const [touched, setTouched] = useState(...)`).
   - Live validation errors computed via `validate()`. The **Send Message** submit button remains disabled (`disabled={!isValid}`) until all fields (`name`, `email`, `message`) are filled and valid.
3. **Scoped Card Details Expansion State**:
   - Managed in `ProjectCard.jsx` (`const [isExpanded, setIsExpanded] = useState(false)`).
   - Demonstrates properly scoped state per card instance; clicking "View Quick Details" on one card expands only that specific card without affecting others.

---

## Side Effects (`useEffect`) Summary & Necessity

| Component | `useEffect` Purpose | Dependency Array | Cleanup Function & Purpose |
| :--- | :--- | :--- | :--- |
| `App.jsx` | **Theme Persistence**: Writes the current theme (`dark`/`light`) to `localStorage` under key `portfolio-theme` and sets `data-theme` attribute on document root whenever `theme` changes. Reads from `localStorage` on initial mount. | `[theme]` | N/A (synchronous DOM/localStorage update). |
| `Home.jsx` | **Simulated Loading Sequence**: Delays displaying the hero content by 1 second on component mount, rendering a loading spinner until timer completes. | `[]` | `clearTimeout(timer)` to prevent memory leaks and state updates if unmounted early. |
| `Navbar.jsx` | **Window Resize Event Listener**: Monitors screen width to automatically close the mobile navigation drawer when the viewport expands beyond `768px`. | `[]` | `window.removeEventListener('resize', handleResize)` to prevent event listener memory leaks. |

---

## Routing Setup (`react-router-dom`)

The application configures client-side routing with `react-router-dom`:
- `/` or `/Home`: Home Page
- `/about`: About Page
- `/projects`: Projects Listing Page
- `/projects/:projectId`: Dynamic Project Detail Page using `useParams()`
- `/contact`: Contact Page with controlled form
- `*`: Catch-all 404 Page featuring a link back to Home

All navigation links use `<NavLink>` and `<Link>` to ensure smooth single-page application navigation without page reloads.