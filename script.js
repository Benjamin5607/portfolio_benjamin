let currentLang = localStorage.getItem("portfolio-lang") || DEFAULT_LANG;
if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = DEFAULT_LANG;

let carouselIndex = 0;

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

  document.getElementById("navToggle").setAttribute("aria-label", t("nav.menu", currentLang));
}

function renderLangSwitcher() {
  const html = SUPPORTED_LANGS.map(
    (lang) =>
      `<button type="button" class="lang-btn${lang === currentLang ? " active" : ""}" data-lang="${lang}" aria-pressed="${lang === currentLang}">${LANG_LABELS[lang]}</button>`
  ).join("");

  ["langSwitcher", "langSwitcherMobile"].forEach((id) => {
    const switcher = document.getElementById(id);
    if (!switcher) return;
    switcher.innerHTML = html;
    switcher.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  });
}

function buildProjectCard(p, pLabels) {
  const lab = LABS[p.lab];
  return `
    <article class="project-card" data-lab="${p.lab}">
      <div class="card-header">
        <h3>${p.title}</h3>
        <span class="card-icon" title="${getLabLabel(p.lab, currentLang)}">${lab?.icon || "📦"}</span>
      </div>
      <span class="card-lab">${getLabLabel(p.lab, currentLang)}</span>
      <p class="repo-name">${p.name}</p>
      <p>${getProjectDesc(p.name, currentLang)}</p>
      <div class="stack-tags">${createStackTags(p.stack)}</div>
      <div class="card-links">
        <a href="${p.url}" target="_blank" rel="noopener">${pLabels.github}</a>
        ${p.external ? `<a href="${p.external}" target="_blank" rel="noopener">${pLabels.liveDemo}</a>` : ""}
      </div>
    </article>`;
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
  document.getElementById("footerName").textContent = LINKEDIN_EN.name;

  const heroLinks = LINKEDIN_EN.websiteLinks.filter((link) => link.hero);
  document.getElementById("heroLinks").innerHTML = `
    <a href="#eccentric-lab" class="btn btn-primary">${t("hero.ctaProjects", currentLang)}</a>
    ${heroLinks
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank" rel="noopener" class="btn btn-ghost">${link.label}</a>`
      )
      .join("")}
  `;
}

function renderContactLinks() {
  const links = LINKEDIN_EN.websiteLinks.filter((link) => link.footer);
  document.getElementById("footerLinks").innerHTML = links
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`
    )
    .join("");
}

function renderAbout() {
  const profile = getProfile(currentLang);
  const s = I18N[currentLang]?.sections || I18N.en.sections;

  document.getElementById("aboutText").innerHTML = `
    ${profile.aboutParagraphs.map((p) => `<p>${p}</p>`).join("")}
    <p class="about-mission"><em>${profile.mission}</em></p>
    <p>${profile.location}</p>
    <p class="linkedin-ref"><a href="${LINKEDIN_EN.linkedinUrl}" target="_blank" rel="noopener">linkedin.com/in/wonbin-s-34191613b</a></p>
  `;

  document.getElementById("aboutCards").innerHTML = `
    <div class="about-card">
      <h3>${s.keyStrengths}</h3>
      <ul>${profile.keyStrengths.map((k) => `<li>${k}</li>`).join("")}</ul>
    </div>
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
  `;
}

function renderSkills() {
  const profile = getProfile(currentLang);
  const s = I18N[currentLang]?.sections || I18N.en.sections;
  const aiGroups = profile.aiSkills || LINKEDIN_EN.aiSkills;

  document.getElementById("skillsGrid").innerHTML = `
    <div class="skill-group">
      <h3>${s.keyStrengths}</h3>
      <ul class="skill-pills">${profile.keyStrengths.map((k) => `<li>${k}</li>`).join("")}</ul>
    </div>
    ${aiGroups
      .map(
        (g) => `
    <div class="skill-group">
      <h3>${g.group}</h3>
      <ul class="skill-list">${g.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>`
      )
      .join("")}
  `;
}

function renderExperience() {
  const profile = getProfile(currentLang);
  let lastCompanyId = null;

  document.getElementById("experienceTimeline").innerHTML = profile.experience
    .map((job) => {
      const showCompany = job.companyId !== lastCompanyId;
      lastCompanyId = job.companyId;
      const c = job.company;

      return `
    <article class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        ${
          showCompany && c
            ? `
        <div class="company-card">
          <div class="company-logo-wrap"${c.logoBg ? ` style="background:${c.logoBg}"` : ""}>
            <img class="company-logo" src="${c.logo}" alt="${c.name}" loading="lazy" onerror="this.closest('.company-logo-wrap').classList.add('is-fallback');this.remove();" />
            <span class="company-logo-fallback" aria-hidden="true">${c.name.charAt(0)}</span>
          </div>
          <div class="company-info">
            <h4 class="company-name">${c.name}</h4>
            <p class="company-industry">${c.industry}</p>
            <p class="company-summary">${c.summary}</p>
            <p class="company-meta">${c.meta}</p>
          </div>
        </div>`
            : ""
        }
        <span class="timeline-date">${job.date}</span>
        <h3>${job.title}</h3>
        <p class="timeline-org">${job.org}</p>
        <ul class="timeline-highlights">${job.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </div>
    </article>`;
    })
    .join("");
}

function renderCertifications() {
  const labels = CERTS_I18N[currentLang] || CERTS_I18N.en;
  document.getElementById("certGrid").innerHTML = LINKEDIN_EN.certifications
    .map(
      (cert) => `
    <article class="cert-card">
      <div class="cert-header"><h3>${cert.name}</h3><span class="cert-year">${cert.issued}</span></div>
      <p class="cert-issuer">${cert.issuer}</p>
      ${cert.expires ? `<p class="cert-focus">${labels.expires}: ${cert.expires}</p>` : ""}
    </article>`
    )
    .join("");
}

function buildFeaturedSlide(p, pLabels, s) {
  const stackDetail = getProjectStackDetail(p.name, currentLang);
  const desc = getProjectDesc(p.name, currentLang);
  return `
    <article class="carousel-slide">
      <div class="featured-card-large">
        <span class="card-category">${LABS[p.lab].icon} ${getLabLabel(p.lab, currentLang)}</span>
        <h3>${p.title}</h3>
        <p class="repo-name">${p.name}</p>
        <p class="featured-desc">${desc}</p>
        <div class="stack-section">
          <h4>${s.stackDetail}</h4>
          <ul class="stack-detail-list">${stackDetail.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="card-stack">${createStackTags(p.stack)}</div>
        <div class="featured-actions">
          <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-primary">${pLabels.repoLink}</a>
          ${p.external ? `<a href="${p.external}" target="_blank" rel="noopener" class="btn btn-ghost">${pLabels.liveDemo}</a>` : ""}
        </div>
      </div>
    </article>`;
}

function renderFeatured() {
  const featured = getFeaturedProjects();
  const pLabels = I18N[currentLang]?.projects || I18N.en.projects;
  const s = I18N[currentLang]?.sections || I18N.en.sections;

  document.getElementById("featuredMobileGrid").innerHTML = featured
    .map((p) => buildProjectCard(p, pLabels))
    .join("");

  if (carouselIndex >= featured.length) carouselIndex = 0;
  if (carouselIndex < 0) carouselIndex = featured.length - 1;

  document.getElementById("carouselTrack").innerHTML = featured
    .map((p) => buildFeaturedSlide(p, pLabels, s))
    .join("");

  document.getElementById("carouselTrack").style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.getElementById("carouselCounter").textContent = `${carouselIndex + 1} / ${featured.length}`;

  document.getElementById("carouselDots").innerHTML = featured
    .map((_, i) => `<button type="button" class="carousel-dot${i === carouselIndex ? " active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`)
    .join("");

  document.getElementById("carouselPrev").setAttribute("aria-label", s.carouselPrev);
  document.getElementById("carouselNext").setAttribute("aria-label", s.carouselNext);

  document.getElementById("carouselDots").onclick = (e) => {
    const dot = e.target.closest(".carousel-dot");
    if (!dot) return;
    carouselIndex = Number(dot.dataset.index);
    renderFeatured();
  };
}

function initCarousel() {
  document.getElementById("carouselPrev").onclick = () => {
    carouselIndex--;
    renderFeatured();
  };
  document.getElementById("carouselNext").onclick = () => {
    carouselIndex++;
    renderFeatured();
  };

  let touchStartX = 0;
  const viewport = document.getElementById("carouselViewport");
  viewport.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      carouselIndex += diff > 0 ? 1 : -1;
      renderFeatured();
    }
  }, { passive: true });
}

function renderFilters() {
  const bar = document.getElementById("filterBar");
  const pLabels = I18N[currentLang]?.projects || I18N.en.projects;

  bar.innerHTML = `
    <button class="filter-btn active" data-filter="all">${pLabels.all} (${PROJECTS.length})</button>
    ${LAB_ORDER.map((key) => {
      const count = getLabProjects(key).length;
      return `<button class="filter-btn" data-filter="${key}">${LABS[key].icon} ${getLabLabel(key, currentLang)} (${count})</button>`;
    }).join("")}`;

  bar.onclick = (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".lab-block").forEach((block) => {
      block.classList.toggle("hidden", filter !== "all" && block.dataset.lab !== filter);
    });
  };
}

function renderEccentricLab() {
  const pLabels = I18N[currentLang]?.projects || I18N.en.projects;
  const s = I18N[currentLang]?.sections || I18N.en.sections;

  document.getElementById("labSections").innerHTML = LAB_ORDER.map((labKey) => {
    const flagship = getFlagshipProject(labKey);
    const projects = getLabProjects(labKey);

    return `
    <article class="lab-block" data-lab="${labKey}" id="lab-${labKey}">
      <header class="lab-header">
        <span class="lab-icon" aria-hidden="true">${LABS[labKey].icon}</span>
        <div class="lab-header-text">
          <h3>${getLabLabel(labKey, currentLang)}</h3>
          <p class="lab-tagline">${getLabTagline(labKey, currentLang)}</p>
          <p class="lab-flagship">${s.labFlagship}: <strong>${flagship?.title || LABS[labKey].flagshipTitle}</strong></p>
        </div>
      </header>
      <div class="projects-grid">
        ${projects.map((p) => buildProjectCard(p, pLabels)).join("")}
      </div>
    </article>`;
  }).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const backdrop = document.getElementById("navBackdrop");

  const setMenuOpen = (open) => {
    links.classList.toggle("open", open);
    backdrop?.classList.toggle("visible", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => setMenuOpen(!links.classList.contains("open")));
  backdrop?.addEventListener("click", () => setMenuOpen(false));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("scroll", () => {
    document.getElementById("nav").style.borderBottomColor =
      window.scrollY > 50 ? "rgba(255,255,255,0.08)" : "transparent";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenuOpen(false);
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
  renderContactLinks();
  renderFeatured();
  renderFilters();
  renderEccentricLab();
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initCarousel();
  renderAll();
});
