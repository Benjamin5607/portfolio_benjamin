function createStackTags(stack) {
  return stack.map((s) => `<span class="stack-tag">${s}</span>`).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-group">
      <h3>${group.group}</h3>
      <ul>
        ${group.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `
  ).join("");
}

function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  timeline.innerHTML = EXPERIENCE.map(
    (job) => `
    <article class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-date">${job.date}</span>
        <h3>${job.title}</h3>
        <p class="timeline-org">${job.org}</p>
        <ul class="timeline-highlights">
          ${job.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>
    </article>
  `
  ).join("");
}

function renderCertifications() {
  const grid = document.getElementById("certGrid");
  grid.innerHTML = CERTIFICATIONS.map(
    (cert) => `
    <article class="cert-card">
      <div class="cert-header">
        <h3>${cert.name}</h3>
        <span class="cert-year">${cert.year}</span>
      </div>
      <p class="cert-issuer">${cert.issuer}</p>
      <p class="cert-focus">${cert.focus}</p>
    </article>
  `
  ).join("");
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  const featured = PROJECTS.filter((p) => p.featured);

  grid.innerHTML = featured
    .map(
      (p) => `
    <a href="${p.url}" target="_blank" rel="noopener" class="featured-card">
      <span class="card-category">${CATEGORIES[p.category].icon} ${CATEGORIES[p.category].label}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="card-stack">${createStackTags(p.stack)}</div>
      <span class="card-link">GitHub Repository${p.external ? " · Live Demo available" : ""}</span>
    </a>
  `
    )
    .join("");
}

function renderFilters() {
  const bar = document.getElementById("filterBar");
  const cats = Object.entries(CATEGORIES);

  bar.innerHTML = `
    <button class="filter-btn active" data-filter="all">All (${PROJECTS.length})</button>
    ${cats
      .map(([key, { label, icon }]) => {
        const count = PROJECTS.filter((p) => p.category === key).length;
        return `<button class="filter-btn" data-filter="${key}">${icon} ${label} (${count})</button>`;
      })
      .join("")}
  `;

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.category !== filter
      );
    });
  });
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card" data-category="${p.category}">
      <div class="card-header">
        <h3>${p.title}</h3>
        <span class="card-icon">${CATEGORIES[p.category].icon}</span>
      </div>
      <p class="repo-name">${p.name}</p>
      <p>${p.description}</p>
      <div class="stack-tags">${createStackTags(p.stack)}</div>
      <div class="card-links">
        <a href="${p.url}" target="_blank" rel="noopener">GitHub ↗</a>
        ${p.external ? `<a href="${p.external}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
      </div>
    </article>
  `
  ).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });

  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor =
      window.scrollY > 50 ? "rgba(255,255,255,0.08)" : "transparent";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderFeatured();
  renderFilters();
  renderProjects();
  renderExperience();
  renderCertifications();
  initNav();
});
