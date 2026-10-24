/**
 * PROJECTS DATA & FILTER CATEGORIES
 * 
 * - projectCategories: Filter tabs on top
 * - projectsData: All portfolio projects with multi-category mapping
 *   - site: String URL if deployed live, or null if code-only repository
 *   - categories: Array of category IDs for the filter engine
 */

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Applications" },
  { id: "tools", label: "Systems & Tools" },
  { id: "simulations", label: "Simulation & Modeling" },
  { id: "mobile", label: "Mobile" }
];

export const projectsData = [
  {
    name: "Nothing X Advanced EQ Encoder/Decoder",
    categories: ["tools"],
    icon: "fa-solid fa-sliders",
    description: "A cross-platform Python tool to reverse-engineer, parse, and generate Nothing X 8-band parametric EQ profiles. Decodes Gzip-compressed binary QR payloads from screenshots, validates parameters against hardware limits, and programmatically exports custom dot-matrix QR cards.",
    technologies: ["Python", "Binary Parsing (Gzip)", "Computer Vision (ZBar)", "Hardware Validation"],
    site: null, // Python CLI
    code: "https://github.com/farhan-real/nothing-eq-decoder"
  },
  {
    name: "Airspace Standoff",
    categories: ["web", "mobile", "simulations"],
    icon: "fa-solid fa-satellite-dish",
    description: "A real-time C4ISR tactical radar terminal and air wing command simulator built from scratch in vanilla JavaScript. Features dynamic microwave radar physics based on the radar range equation, aspect-dependent RCS calculations, kinematic pursuit guidance, and multi-agent AI scheduling with zero runtime dependencies.",
    technologies: ["JavaScript (ES6+)", "HTML5 Canvas", "Discrete Integration", "Web Audio API"],
    site: "https://farhan-real.github.io/airspace-standoff/",
    code: "https://github.com/farhan-real/airspace-standoff"
  },
  {
    name: "Information Pathway",
    categories: ["simulations", "tools"],
    icon: "fa-solid fa-circle-nodes",
    description: "An agent-based discrete-event network diffusion simulator and reverse cascade tomography engine. Uses calibrated Random Forest and Ridge regression models to simulate information propagation, narrative distortion, and Bayesian echo-chamber reinforcement across complex social graphs with a decoupled 20 TPS animation engine.",
    technologies: ["Python", "NetworkX", "Scikit-Learn", "Cytoscape.js", "Discrete-Event Simulation"],
    site: null, // Desktop application / PyWebView
    code: "https://github.com/farhan-real/information-pathway"
  },
  {
    name: "Rail Signal Studio",
    categories: ["web", "tools"],
    icon: "fa-solid fa-diagram-project",
    description: "An offline 2D CAD layout designer and railway interlocking simulator. Features an embedded scripting language (DSL) with a custom lexer and tokenizer, non-blocking state recovery, and a deterministic 20 TPS execution engine decoupled from browser frame rates.",
    technologies: ["JavaScript", "HTML5 Canvas", "Custom Compiler / DSL", "State Machines", "CSS3"],
    site: "https://farhan-real.github.io/rail-signal-studio/",
    code: "https://github.com/farhan-real/rail-signal-studio"
  },
  {
    name: "MDViewer",
    categories: ["web", "tools"],
    icon: "fa-solid fa-file-code",
    description: "A zero-dependency, offline Markdown viewer engineered for technical documentation. Features built-in multi-language syntax highlighting, regex-based filename extraction from section headings, an interactive hierarchical table of contents, and a dedicated sequential code-copy menu with local persistence.",
    technologies: ["JavaScript", "Regex Parsing", "Syntax Highlighting", "DOM Architecture"],
    site: "https://farhan-real.github.io/MDViewer/",
    code: "https://github.com/farhan-real/MDViewer"
  },
  {
    name: "FreshRoute: Agri-Supply Chain Optimization",
    categories: ["tools", "web"],
    icon: "fa-solid fa-route",
    description: "An automated decision-support and optimization engine for perishable produce distribution. Built with a dual-solver architecture (exact SciPy HiGHS Linear Programming alongside a sub-millisecond priority heuristic), integrating thermal shelf-life decay modeling, Monte Carlo risk analysis, and strict Pydantic data validation.",
    technologies: ["Python", "SciPy (HiGHS LP)", "Pydantic v2", "Streamlit", "Stochastic Modeling"],
    site: null, // CLI & Streamlit application
    code: "https://github.com/farhan-real/freshroute"
  },
  {
    name: "Lumina",
    categories: ["web", "simulations"],
    icon: "fa-solid fa-wave-square",
    description: "A 2D geometric optics and ray-tracing engine running at 200+ FPS using pure web standards. Accurately simulates Snell's law refraction, chromatic dispersion, thin-lens transformations, and gravitational light bending using zero-allocation raycasting loops.",
    technologies: ["JavaScript", "HTML5 Canvas 2D", "Mathematical Modeling", "Performance Optimization"],
    site: "https://farhan-real.github.io/lumina/",
    code: "https://github.com/farhan-real/lumina"
  },
  {
    name: "2048 Reimagined",
    categories: ["mobile", "web"],
    icon: "fa-solid fa-mobile-screen-button",
    description: "A high-performance Android client engineered for 120Hz/144Hz high refresh rate displays. Uses GPU-accelerated matrix transforms for zero-lag rendering, a native Kotlin haptic bridge, a real-time Web Audio spectrum visualizer, and deterministic PRNG state hashing.",
    technologies: ["Android / Kotlin", "JavaScript", "Web Audio API", "GPU Composition"],
    site: null, // Android project
    code: "https://github.com/farhan-real/2048-reimagined"
  }
];