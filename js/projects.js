// ====== Data Projects (contoh; sesuaikan punyamu) ======
const projectsData = [
  {
    id: "sarrana",
    title: "Tunda app",
    subTitle: "Tunda helps Adult Children of Over-indulgers (ACOs) reduce impulsive spending by temporarily blocking shopping apps — encouraging smarter, more mindful purchases.",
    cover: "img/TundaCover.svg",
    summary: "Tunda is an app that helps Adult Children of Over-indulgers (ACOs) curb unnecessary spending through delayed gratification by temporarily blocking frequently used shopping apps. Do you really need that purchase right now? What if waiting could help you save more and spend wiser?",
    techStack: ["Swift", "SwiftUI","Screen Time Framework", "SwiftData", "UserDefaults"],
    links: { demo: "", code: "https://apps.apple.com/id/app/tunda/id6752753151" },
    details: {
      role: [
        "Identified target user by conducting desk research, moderated interviews & synthesizing data.",
        "Implemented application blocking functionality using Apple’s Screen Time framework.",
        "Built a Break Mode feature that temporarily unlocks restricted applications and automatically re-blocks them after the set period using Device Activity Monitor extension.",
        "Implemented user interface components, including the home screen and onboarding flow, to ensure an intuitive user experience."
      ],
      result: "We tested our application with more than 6 people during the exhibition and recorded their feedback. They mentioned that the app was very helpful in building awareness and reducing impulsive buying behavior. Most of them showed a clear understanding of the app’s purpose, and they appreciated how it encouraged smarter and more mindful spending. Overall, the feedback was positive, and users expressed that they enjoyed trying the app. The application is now available on the App Store.",
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
    title: "Bandingké App",
    subTitle: "Quickly compare packaged foods and drinks through their nutrition facts to make smarter choices.",
    cover: "img/BandingkéCover.svg",
    summary: "BandingKé is an app that allows you to quickly compare two packaged food and beverage products using their nutrition facts table, helping you make the best choice for your needs. It also provides a complete breakdown of all nutrients contained in a single package based on the nutrition facts table.",
    techStack: ["Swift", "SwiftUI", "Vision Framework", "AVFoundation", "UserDefault"],
    links: { demo: "https://kaffahpriority.com/", code: "https://apps.apple.com/id/app/bandingk%C3%A9/id6747875049" },
    details: {
      role: [
        "Developed the core feature to detect and extract nutrition facts tables from packaged food and beverage labels using Apple Vision framework and OCR technology.",
        "Implemented real-time OCR to continuously detect and read nutrition facts tables from live camera feed.",
        "Built real-time error detection for image quality issues such as blur and skew, prompting users to retake the scan for more accurate results.",
        "Built the custom camera module using AVFoundation and integrated it with Vision to enable seamless real-time OCR scanning."
      ],
      result: "We tested our application with more than 20 users through TestFlight and collected their feedback. The results showed positive responses, especially regarding the app’s features and usefulness in comparing nutrition facts. Overall, users found BandingKé helpful and easy to use. The application is now available on the App Store.",
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
    title: "Snaptify",
    subTitle: "Snaptify is an auto-camera app that snaps photos the moment you smile—perfect for capturing spontaneous joy with friends and family.",
    cover: "img/SnaptifyCover.svg",
    summary: "Snaptify is a smart camera app that automatically captures photos when it detects a smile. No more missing the perfect moment—Snaptify helps you effortlessly preserve joyful memories with your loved ones, making group gatherings and special occasions more natural, fun, and unforgettable.",
    techStack: [
      "Swift",
      "SwiftUI",
      "ARKit",
      "SwiftData",
      "AVFoundation",
    ],
    links: {
      demo: "https://www.kalla-digihub.com/login?redirect=/",
      code: "https://testflight.apple.com/join/3NVDZPxg"
    },
    details: {
      role:
        [
          "Implemented Apple TipKit framework in Snaptify to guide users through new features.",
          "Identified target user by conducting desk research, moderated interviews & synthesizing data using CBL framework.",
          "Built a tailored in-app tutorial in Snaptify to guide first-time users through core features."
        ],
      result:
        "We tested our application through TestFlight with more than 40 users and collected their feedback. The results showed positive responses, both toward the app’s concept and its usability. Many users highlighted that Snaptify was easy to use and very helpful in capturing joyful moments effortlessly. Overall, the feedback confirmed that the app delivers value and provides an enjoyable user experience.",
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
        <p class="text-sm text-[var(--muted)]">${p.subTitle}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          ${(p.techStack || []).slice(0, 4).map(t =>
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
        <h1 id="proj-title" class="text-lg font-bold">${p.title}</h1>
        <button class="modal__close" aria-label="Close" data-close>&times;</button>
      </header>

      <div class="modal__body">
        <img src="${p.cover}" alt="" class="w-full h-56 object-contain rounded-xl mb-4">
        <h4 class="font-medium mb-1">Objective</h4><p class="mb-4">${p.summary}</p>

        ${Array.isArray(p.details?.role) && p.details.role.length ? `
        <h4 class="font-medium mb-1">Role</h4>
        <ul class="list-disc pl-5 text-sm text-[var(--muted)] mb-4">
          ${p.details.role.map(r => `<li>${r}</li>`).join("")}
        </ul>`
        : p.details?.role ? `<h4 class="font-medium mb-1">Role</h4><p class="mb-4">${p.details.role}</p>` : ""
        }

        ${p.details?.result ? `<h4 class="font-medium mb-1">Result</h4><p class="mb-4">${p.details.result}</p>` : ""}
        <!--
        ${Array.isArray(p.details?.features) ? `
          <h4 class="font-medium mb-1">Key Features</h4>
          <ul class="list-disc pl-5 text-sm text-[var(--muted)] mb-4">
            ${p.details.features.map(f => `<li>${f}</li>`).join("")}
          </ul>` : ""}
         -->

        ${p.techStack?.length
      ? `<p class="text-sm italic text-[var(--muted)]">Tech stack: ${p.techStack.join(", ")}</p>`
      : ""}
      </div>

      <footer class="modal__footer">
        
        ${p.links?.code ? `<a class="rounded-full border border-[var(--border)] px-3 py-1 text-sm" target="_blank" rel="noopener noreferrer" href="${p.links.code}">App Store</a>` : ""}
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
