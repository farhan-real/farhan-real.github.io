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
    name: "FreshRoute: Agri-Supply Chain Optimization",
    categories: ["tools", "web"],
    icon: "fa-solid fa-route",
    description: "Constrained decision-support engine for perishable cold chains. Features a dual-solver architecture (SciPy HiGHS Linear Programming and an ultra-low-latency 0.25ms priority heuristic), biological Q10 thermal degradation decay, Monte Carlo stochastic risk modeling, and automated counterfactual auditing.",
    technologies: ["Python", "SciPy (HiGHS LP)", "Pydantic v2", "Streamlit", "Stochastic Modeling"],
    site: null, // CLI & Streamlit application
    code: "https://github.com/farhan-real/freshroute"
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
    name: "Rail Signal Studio",
    categories: ["web", "tools"],
    icon: "fa-solid fa-diagram-project",
    description: "An offline 2D CAD layout designer and railway interlocking simulator. Features an embedded scripting language (DSL) with a custom lexer and tokenizer, non-blocking state recovery, and a deterministic 20 TPS execution engine decoupled from browser frame rates.",
    technologies: ["JavaScript", "HTML5 Canvas", "Custom Compiler / DSL", "State Machines", "CSS3"],
    site: "https://farhan-real.github.io/rail-signal-studio/",
    code: "https://github.com/farhan-real/rail-signal-studio"
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
  },
];