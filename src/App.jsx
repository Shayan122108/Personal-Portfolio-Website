import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './style.css';

/**
 * Top-Level App Component.
 * State Management (useState):
 *  - Theme state ('dark' or 'light') lifted to App level.
 * Side Effects (useEffect):
 *  - Theme preference persisted to localStorage on theme change.
 *  - Initial theme read back from localStorage on mount.
 */
function App() {
  // Read initial theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme ? savedTheme : 'dark';
  });

  // Persist theme to localStorage and set HTML document attribute whenever theme state changes
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      {/* Shared Layout Header / Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area with Client-Side Routing */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Shared Layout Footer */}
      <Footer />
    </div>
  );
}

export default App;
