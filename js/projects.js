// ====== Data Projects (contoh; sesuaikan punyamu) ======
const projectsData = [
  {
    id: "sarrana",
    title: "Sarrana Community Platform",
    cover: "https://opengraph.githubassets.com/1/irhamsahbana/sarrana",
    summary: "A hyperlocal community platform designed to connect users with their local community, discover services, and find events nearby.",
    techStack: ["Go", "Stripe","WebSockets", "DigitalOcean Spaces", "PostgreSQL", "Typesense", "Firebase Cloud Messaging", "Twilio", "DigitalOcean Spaces", "Jenkins", "Docker"],
    links: { demo: "", code: "https://github.com/irhamsahbana/sarrana" },
    details: {
      problem: "In an increasingly digital world, it's often difficult for individuals to genuinely connect with their local community, and small businesses face challenges in effectively reaching a local audience.",
      solution: "Sarrana provides a centralized platform for users to connect, discover and promote local events and services, and interact with local businesses. It also offers tools for businesses to manage their profiles and reach customers.",
      features: [
        "Secure user registration, authentication, and profile management.",
        "Diverse listing types: Community, Tutor, Events (with RSVP), and Business/Commercial.",
        "E-commerce and payments powered by Stripe.",
        "Advanced search and discovery using Typesense.",
        "Real-time in-app messaging via WebSockets.",
        "Push notifications via Firebase Cloud Messaging (FCM).",
        "Content moderation system to ensure a safe community.",
        "Business tools to manage profiles, services, plans, and reviews."
      ]
    }
  },
  {
    id: "kaffah-priority-finance",
    title: "Kaffah Priority Finance",
    cover: "https://opengraph.githubassets.com/1/irhamsahbana/kaffahpriority-finance",
    summary: "Centralized backend system for managing educational institution operations.",
    techStack: ["Go", "Fiber", "PostgreSQL", "sqlx", "Excelize", "JWT", "Zerolog", "Go-Task"],
    links: { demo: "https://kaffahpriority.com/", code: "https://github.com/irhamsahbana/kaffahpriority-finance" },
    details: {
      problem: "Managing educational institution operations is inefficient due to fragmented data, manual processes, weak access control, and lack of visibility.",
      solution: "A centralized backend system with APIs to automate workflows, secure role-based access, and provide integrated reporting.",
      features: [
        "Master data management (Program, Lecturer, Student, Manager, Marketer)",
        "Role-Based Access Control (RBAC)",
        "Student registration workflows with templates",
        "Finance & reporting (salary recaps, acquisition reports, summaries)",
        "Excel import/export for financial data",
      ]
    }
  },
  {
    id: "digihub-backend",
    title: "Digihub Backend",
    cover: "https://opengraph.githubassets.com/1/irhamsahbana/digihub",
    summary: "A comprehensive backend system to digitalize and streamline automotive dealership operations.",
    techStack: [
      "Go",
      "Fiber",
      "PostgreSQL",
      "sqlx",
      "JWT",
      "Zerolog",
      "Excelize",
      "Go-Task"
    ],
    links: {
      demo: "https://www.kalla-digihub.com/login?redirect=/",
      code: "https://github.com/irhamsahbana/digihub"
    },
    details: {
      problem:
        "Dealerships face operational inefficiencies due to disconnected systems and manual processes. Inspections are slow, data is fragmented, and managers lack visibility into performance.",
      solution:
        "Digihub provides a centralized backend with robust APIs to unify data, automate workflows, enforce secure role-based access, and support vehicle inspection tracking.",
      features: [
        "Walk-Around Check (WAC) workflows including conditions, logs, and activities",
        "Master data management (Branches, Vehicle Types, Promotions)",
        "User and client management",
        "Role-Based Access Control (RBAC)",
        "Secure authentication with JWT, including email verification and password reset",
        "Local file storage",
        "Scheduled tasks and database backups"
      ]
    }
  }
];

// ====== Render Grid ======
function renderProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projectsData.map(p => `
  <article class="project-card group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
    <button class="card-btn" data-open="${p.id}" aria-label="Open project ${p.title}" aria-expanded="false">
      <div class="card-media">
        <img class="h-40 w-full object-cover" src="${p.cover}" alt="${p.title}">
        <div class="card__overlay">
          <span class="chip">
            View details
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.5 21 12l-7.5 7.5-1.06-1.06L18.88 12l-6.44-6.44 1.06-1.06Z"/></svg>
          </span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="mb-1 font-semibold">${p.title}</h3>
        <p class="text-sm text-[var(--muted)]">${p.summary}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          ${(p.techStack || []).slice(0, 3).map(t =>
    `<span class="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs">${t}</span>`
  ).join("")}
        </div>
      </div>
    </button>
  </article>
`).join("");

}

// ====== Modal Logic ======
const modalRoot = document.getElementById("project-modal");
let lastFocus = null;

function openProject(id) {
  const p = projectsData.find(x => x.id === id);
  if (!p) return;

  lastFocus = document.activeElement;

  modalRoot.innerHTML = `
    <div class="modal__overlay" data-close></div>
    <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="proj-title">
      <header class="modal__header">
        <h3 id="proj-title" class="text-lg font-semibold">${p.title}</h3>
        <button class="modal__close" aria-label="Close" data-close>&times;</button>
      </header>

      <div class="modal__body">
        <img src="${p.cover}" alt="" class="w-full h-56 object-contain rounded-xl mb-4">
        <p class="text-sm text-[var(--muted)] mb-4">${p.summary}</p>

        ${p.details?.problem ? `<h4 class="font-medium mb-1">Problem</h4><p class="mb-4">${p.details.problem}</p>` : ""}
        ${p.details?.solution ? `<h4 class="font-medium mb-1">Solution</h4><p class="mb-4">${p.details.solution}</p>` : ""}

        ${Array.isArray(p.details?.features) ? `
          <h4 class="font-medium mb-1">Key Features</h4>
          <ul class="list-disc pl-5 text-sm text-[var(--muted)] mb-4">
            ${p.details.features.map(f => `<li>${f}</li>`).join("")}
          </ul>` : ""}

        ${p.techStack?.length
      ? `<p class="text-sm italic text-[var(--muted)]">Tech stack: ${p.techStack.join(", ")}</p>`
      : ""}
      </div>

      <footer class="modal__footer">
        ${p.links?.demo ? `<a class="rounded-full bg-[var(--accent)] text-white px-3 py-1 text-sm font-medium" target="_blank" rel="noopener noreferrer" href="${p.links.demo}">Live</a>` : ""}
        ${p.links?.code ? `<a class="rounded-full border border-[var(--border)] px-3 py-1 text-sm" target="_blank" rel="noopener noreferrer" href="${p.links.code}">Code</a>` : ""}
      </footer>
    </div>
  `;

  modalRoot.classList.add("is-open");
  modalRoot.removeAttribute("aria-hidden");
  const firstFocus = modalRoot.querySelector("[data-close]");
  firstFocus?.focus();

  // listeners
  modalRoot.addEventListener("click", onModalClick);
  document.addEventListener("keydown", onEsc);
  trapFocus(modalRoot);
}

function closeModal() {
  modalRoot.classList.remove("is-open");
  modalRoot.setAttribute("aria-hidden", "true");
  modalRoot.removeEventListener("click", onModalClick);
  document.removeEventListener("keydown", onEsc);
  modalRoot.innerHTML = "";
  lastFocus?.focus();
}

function onModalClick(e) {
  if (e.target.matches("[data-close]")) closeModal();
}

function onEsc(e) {
  if (e.key === "Escape") closeModal();
}

/* Simple focus-trap agar aksesibel */
function trapFocus(root) {
  const selectors = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
  const nodes = root.querySelectorAll(selectors);
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  root.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

// Delegasi klik card -> buka modal
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open]");
  if (!btn) return;
  openProject(btn.getAttribute("data-open"));
});

// Init
renderProjectsGrid();
