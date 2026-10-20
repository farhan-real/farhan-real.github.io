/**
 * PROJECTS DATA & FILTER CATEGORIES
 * 
 * - categories: Defines the filter buttons on top.
 * - projectsData: The list of projects.
 *   - 'site': URL string if a live deployment exists, or null / "" if only code is available.
 *   - 'category': Must match an 'id' from categories.
 */

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "tools", label: "Tools / API" }
];

export const projectsData = [
  {
    name: "E-Commerce Web Platform",
    category: "fullstack",
    icon: "fa-solid fa-cart-shopping",
    description: "A full-featured responsive online store with catalog filtering, cart state management, and Stripe checkout integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    site: "https://farhan-real.github.io", // Live site available
    code: "https://github.com/farhan-real"
  },
  {
    name: "Algorithm Visualizer",
    category: "frontend",
    icon: "fa-solid fa-chart-line",
    description: "Interactive visualizer illustrating Dijkstra's, A*, BFS, and common sorting algorithms (QuickSort, MergeSort) in real-time.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    site: "https://farhan-real.github.io", // Live site available
    code: "https://github.com/farhan-real"
  },
  {
    name: "Real-Time Chat Application",
    category: "fullstack",
    icon: "fa-regular fa-comments",
    description: "Instant messaging platform with private chat rooms, online status indicators, and WebSockets protocol.",
    technologies: ["Socket.io", "Express", "Node.js", "Tailwind"],
    site: null, // No live site yet, will only show the Code button
    code: "https://github.com/farhan-real"
  },
  {
    name: "Developer CLI & Web Scraper Tool",
    category: "tools",
    icon: "fa-solid fa-terminal",
    description: "An automated web scraping tool and CLI utility that parses tech internship openings and formats them into JSON/Markdown.",
    technologies: ["Python", "BeautifulSoup", "REST API"],
    site: null, // Code only
    code: "https://github.com/farhan-real"
  }
];