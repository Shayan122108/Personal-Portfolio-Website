export const projectsData = [
  {
    id: "securescholar",
    title: "SecureScholar",
    description:
      "A secure academic document management platform featuring encrypted file storage, role-based access control, dynamic watermarking, and tamper-evident audit logging.",
    longDescription:
      "SecureScholar is engineered to protect sensitive academic records, research papers, and administrative files against unauthorized access and leaks. By implementing end-to-end encryption, dynamic identity-based watermarks, and cryptographic audit logs, it ensures high compliance and document integrity across educational institutions.",
    techStack: ["React", "Node.js", "Express", "SQLite"],
    image: "/src/assets/securescholar.jpg",
    link: "https://github.com/Shayan122108/SecureScholar",
    githubLink: "https://github.com/Shayan122108/SecureScholar",
    features: [
      "AES-256 encrypted storage for sensitive documents",
      "Role-Based Access Control (RBAC) with granular permissions",
      "Real-time dynamic watermark generation on download",
      "Tamper-evident hash-chained audit trails"
    ]
  },
  {
    id: "scribeai",
    title: "ScribeAI",
    description:
      "An AI-powered meeting transcription platform that captures live audio, generates real-time transcripts, and produces intelligent meeting summaries.",
    longDescription:
      "ScribeAI revolutionizes team collaboration by listening to meeting audio in real-time, accurately identifying speakers, transcribing speech with contextual accuracy, and synthesizing actionable summaries and key takeaways automatically.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/src/assets/scribeai.jpg",
    link: "https://github.com/Shayan122108/ScribeAI",
    githubLink: "https://github.com/Shayan122108/ScribeAI",
    features: [
      "Live audio stream transcription with speaker diarization",
      "AI-driven summary generation and key action item extraction",
      "Interactive transcript search and timestamp navigation",
      "Export capabilities to Markdown, PDF, and Notion"
    ]
  },
  {
    id: "mystudyloop",
    title: "MyStudyLoop",
    description:
      "A study resource management platform that helps students organize notes, revision material, and academic resources through a clean and intuitive interface.",
    longDescription:
      "MyStudyLoop addresses student productivity by offering structured flashcards, automated review scheduling, topic-tagged note organization, and collaborative study group sharing in a unified workspace.",
    techStack: ["React", "Supabase", "JavaScript"],
    image: "/src/assets/mystudyloop.jpg",
    link: "https://github.com/Shayan122108/MyStudyLoop",
    githubLink: "https://github.com/Shayan122108/MyStudyLoop",
    features: [
      "Spaced repetition flashcard algorithm for long-term retention",
      "Tag-based resource categorization and smart search",
      "Real-time sync and collaborative note editing",
      "Progress tracking and study streak analytics"
    ]
  }
];
