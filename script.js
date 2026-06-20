let currentLang = localStorage.getItem("portfolio-lang") || DEFAULT_LANG;
if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = DEFAULT_LANG;

function createStackTags(stack) {
  return stack.map((s) => `<span class="stack-tag">${s}</span>`).join("");
}

function applyStaticI18n() {
  document.documentElement.lang = currentLang;
  document.getElementById("pageTitle").textContent = t("meta.title", currentLang);
  document.getElementById("metaDescription").content = t("meta.description", currentLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, currentLang);
  });

  document.getElementById("navToggle").setAttribute(
    "aria-label",
    t("nav.menu", currentLang)
  );
}

function renderLangSwitcher() {
  const switcher = document.getElementById("langSwitcher");
  switcher.innerHTML = SUPPORTED_LANGS.map(
    (lang) =>
      `<button type="button" class="lang-btn${lang === currentLang ? " active" : ""}" data-lang="${lang}" aria-pressed="${lang === currentLang}">${LANG_LABELS[lang]}</button>`
  ).join("");

  switcher.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  renderAll();
}

function renderHero() {
  const profile = getProfile(currentLang);
  document.getElementById("heroSubtitle").textContent = LINKEDIN_EN.headline;
  document.getElementById("statExpValue").textContent = profile.totalExperience;
  document.getElementById("statLocationValue").textContent = "KL";
  document.getElementById("statCertsValue").textContent = String(LINKEDIN_EN.certifications.length);
  document.getElementById("footerTagline").textContent = t("footer.tagline", currentLang);
}

function renderAbout() {
  const profile = getProfile(currentLang);
  const s = I18N[currentLang]?.sections || I18N.en.sections;

  document.getElementById("aboutText").innerHTML = `
    <p>${profile.about}</p>
    <p>${profile.location}</p>
    <p class="linkedin-ref"><a href="https://www.linkedin.com/in/wonbin-s-34191613b/" target="_blank" rel="noopener">linkedin.com/in/wonbin-s-34191613b</a></p>
  `;

  document.getElementById("aboutCards").innerHTML = `
    <div class="about-card">
      <h3>${s.languages}</h3>
      <ul>${profile.languages.map((l) => `<li>${l}</li>`).join("")}</ul>
    </div>
    <div class="about-card">
      <h3>${s.education}</h3>
      ${profile.education.map((e) => `
        <p><strong>${e.school}</strong> — ${e.degree}</p>
        <p class="muted">${e.period} · ${e.location}</p>
      `).join("")}
    </div>
    <div class="about-card">
      <h3>${s.courses}</h3>
      <ul>${profile.courses.map((c) => `<li>${c}</li>`).join("")}</ul>
    </div>
  `;
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = `
    <div class="skill-group skill-group-full">
      <ul class="skill-pills">
        ${LINKEDIN_EN.skills.map((s) => `<li>${s}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderExperience() {
  const profile = getProfile(currentLang);
  const timeline = document.getElementById("experienceTimeline");
  timeline.innerHTML = profile.experience
    .map(
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
    )
    .join("");
}

function renderCertifications() {
  const grid = document.getElementById("certGrid");
  const labels = CERTS_I18N[currentLang] || CERTS_I18N.en || { issued: "Issued", expires: "Expires" };

  grid.innerHTML = LINKEDIN_EN.certifications
    .map(
      (cert) => `
    <article class="cert-card">
      <div class="cert-header">
        <h3>${cert.name}</h3>
        <span class="cert-year">${cert.issued}</span>
      </div>
      <p class="cert-issuer">${cert.issuer}</p>
      ${cert.expires ? `<p class="cert-focus">${labels.expires}: ${cert.expires}</p>` : ""}
    </article>
  `
    )
    .join("");
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  const featured = PROJECTS.filter((p) => p.featured);
  const pLabels = I18N[currentLang]?.projects || I18N.en.projects;

  grid.innerHTML = featured
    .map(
      (p) => `
    <a href="${p.url}" target="_blank" rel="noopener" class="featured-card">
      <span class="card-category">${CATEGORIES[p.category].icon} ${getCategoryLabel(p.category, currentLang)}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="card-stack">${createStackTags(p.stack)}</div>
      <span class="card-link">${pLabels.repoLink}${p.external ? pLabels.liveAvailable : ""}</span>
    </a>
  `
    )
    .join("");
}

function renderFilters() {
  const bar = document.getElementById("filterBar");
  const cats = Object.keys(CATEGORIES);
  const pLabels = I18N[currentLang]?.projects || I18N.en.projects;

  bar.innerHTML = `
    <button class="filter-btn active" data-filter="all">${pLabels.all} (${PROJECTS.length})</button>
    ${cats
      .map((key) => {
        const count = PROJECTS.filter((p) => p.category === key).length;
        return `<button class="filter-btn" data-filter="${key}">${CATEGORIES[key].icon} ${getCategoryLabel(key, currentLang)} (${count})</button>`;
      })
      .join("")}
  `;

  bar.onclick = (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  };
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const pLabels = I18N[currentLang]?.projects || I18N.en.projects;

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
        <a href="${p.url}" target="_blank" rel="noopener">${pLabels.github}</a>
        ${p.external ? `<a href="${p.external}" target="_blank" rel="noopener">${pLabels.liveDemo}</a>` : ""}
      </div>
    </article>
  `
  ).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });

  window.addEventListener("scroll", () => {
    document.getElementById("nav").style.borderBottomColor =
      window.scrollY > 50 ? "rgba(255,255,255,0.08)" : "transparent";
  });
}

function renderAll() {
  applyStaticI18n();
  renderLangSwitcher();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderCertifications();
  renderFeatured();
  renderFilters();
  renderProjects();
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderAll();
});
