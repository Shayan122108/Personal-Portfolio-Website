import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Have a question or want to work together? Send me a message below!
      </p>

      <div className="contact-card">
        <ul className="contact-links">
          <li>
            <a
              href="mailto:shayanf17@gmail.com"
              aria-label="Email Shayan at shayanf17@gmail.com"
              title="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 6-10 7L2 6"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Shayan122108"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shayan's GitHub profile"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14v3.17c0 .3.21.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/shayan-fatarpekar-469173367/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shayan's LinkedIn profile"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* Controlled Contact Form */}
      <ContactForm />
    </section>
  );
}
