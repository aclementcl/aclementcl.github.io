const ICONS = {
    linkedin: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1Zm1.3 2.15H5.64V18h2.6v-7.35Zm4.14 0H9.81V18h2.57v-3.86c0-2.15 2.8-2.32 2.8 0V18h2.58v-4.76c0-3.7-4.22-3.56-5.38-1.74v-.85Z" />
        </svg>
    `,
    github: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.53 2.87 8.37 6.85 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.08.36.32.67.95.67 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
        </svg>
    `,
    email: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5A1.75 1.75 0 0 1 20.25 18.5H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5Zm0 1.5a.25.25 0 0 0-.25.25v.19l8.11 5.36a.75.75 0 0 0 .78 0l8.11-5.36v-.19a.25.25 0 0 0-.25-.25H3.75Zm16.5 10a.25.25 0 0 0 .25-.25V9.23l-7.28 4.82a2.25 2.25 0 0 1-2.48 0L3.5 9.23v7.52c0 .14.11.25.25.25h16.5Z" />
        </svg>
    `
};

const DEFAULT_CONTENT = {
    site: {
        lang: "en",
        title: "Alejandro Clemente | Senior Software Engineer",
        description: "Portfolio of Alejandro Clemente, a full stack developer focused on backend systems, frontend architecture, and reliable product delivery.",
        logo: "Alejandro Clemente",
        navigation: [
            { label: "About", href: "#about" },
            { label: "Stack", href: "#stack" },
            { label: "Work", href: "#work" },
            { label: "Contact", href: "#contact" }
        ]
    },
    hero: {
        eyebrow: "Senior Software Engineer",
        title: "I build clear, reliable software for products that need to grow.",
        description: "I am Alejandro Clemente, a full stack developer working across Node.js, NestJS, React, and .NET. My focus is straightforward: ship maintainable systems, reduce complexity, and keep teams moving.",
        actions: [
            { label: "Get in touch", href: "#contact", variant: "primary" },
            { label: "View work", href: "#work", variant: "secondary" }
        ],
        stats: [
            { title: "Backend", text: "Node.js, NestJS, .NET, REST APIs" },
            { title: "Frontend", text: "React, Angular, TypeScript, reusable UI" },
            { title: "Delivery", text: "Docker, CI/CD, testing, data workflows" }
        ],
        focus: {
            eyebrow: "Selected focus",
            items: [
                "Designing modular backend services that stay easy to extend.",
                "Building frontend systems that balance clarity, speed, and reuse.",
                "Improving delivery through automation, testing, and predictable releases."
            ]
        }
    },
    about: {
        id: "about",
        title: "About",
        subtitle: "I work best on product teams that value clean architecture, pragmatic execution, and steady delivery.",
        cards: [
            {
                eyebrow: "How I work",
                title: "Simple systems, strong foundations",
                text: "I care about structure, naming, separation of concerns, and code that remains readable after the first release. The goal is not abstraction for its own sake, but software that survives change."
            },
            {
                eyebrow: "What I bring",
                title: "Product thinking with engineering discipline",
                text: "I can move across backend, frontend, data, and delivery workflows while keeping the outcome tied to business value, maintainability, and production readiness."
            }
        ]
    },
    stack: {
        id: "stack",
        title: "Stack",
        subtitle: "Technologies I use to build web platforms, internal tools, and API-driven products.",
        categories: [
            {
                eyebrow: "Backend",
                items: ["Node.js", "NestJS", ".NET / ASP.NET Core", "REST APIs", "Microservices"]
            },
            {
                eyebrow: "Frontend",
                items: ["React", "Angular", "TypeScript", "Reusable components", "Responsive interfaces"]
            },
            {
                eyebrow: "Data",
                items: ["PostgreSQL", "MySQL", "SQL Server", "Data migration", "Query optimization"]
            },
            {
                eyebrow: "Delivery",
                items: ["Docker", "CI/CD", "Git workflows", "Jest / testing", "SonarQube"]
            }
        ]
    },
    work: {
        id: "work",
        title: "Work",
        subtitle: "A few examples of the systems and product areas where I can contribute.",
        projects: [
            {
                meta: "Content platforms",
                title: "Structured systems for evolving content operations",
                description: "Backend and admin workflows for content-heavy platforms that need clean data models, migration support, and stable long-term maintenance.",
                items: ["Maintainable architecture", "Integration with existing systems", "Operational continuity"]
            },
            {
                meta: "API platforms",
                title: "Modular backend services for web products",
                description: "Domain-oriented APIs designed for growth, testing, authentication, and a smooth path toward service decomposition when the product needs it.",
                items: ["NestJS / .NET", "Clear boundaries", "Ready for CI/CD"]
            },
            {
                meta: "Product interfaces",
                title: "Frontend systems that stay consistent as they scale",
                description: "Interfaces built around reusable components, straightforward UX, and efficient integration with backend services and internal APIs.",
                items: ["React / Angular", "Responsive design", "Component-driven UI"]
            }
        ]
    },
    contact: {
        id: "contact",
        eyebrow: "Contact",
        title: "Let's talk.",
        subtitle: "Available for remote roles, freelance work, and technical collaboration from Chile.",
        note: "Based in Chile. Open to remote collaboration.",
        links: [
            {
                platform: "LinkedIn",
                handle: "linkedin.com/in/aclementcl",
                href: "https://linkedin.com/in/aclementcl",
                icon: "linkedin",
                external: true
            },
            {
                platform: "GitHub",
                handle: "github.com/aclementcl",
                href: "https://github.com/aclementcl",
                icon: "github",
                external: true
            },
            {
                platform: "Email",
                handle: "alejandro.clemente.i@gmail.com",
                href: "mailto:alejandro.clemente.i@gmail.com",
                icon: "email",
                external: false
            }
        ]
    },
    footer: {
        copyright: "© 2026 Alejandro Clemente",
        tagline: "Built with plain HTML, CSS, and JavaScript."
    }
};

const app = document.querySelector("#app");
const nav = document.querySelector("#site-nav");
const logo = document.querySelector("#site-logo");
const footer = document.querySelector("#site-footer");

void init();

async function init() {
    try {
        const response = await fetch("./content.json", { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Failed to load content.json: ${response.status}`);
        }

        const content = await response.json();
        renderSite(content);
    } catch (error) {
        console.warn("Falling back to embedded content.", error);
        renderSite(DEFAULT_CONTENT);

        if (window.location.protocol === "file:") {
            renderLoadNotice("Running from file://. Using embedded fallback content.");
            return;
        }

        renderLoadNotice("content.json could not be loaded. Using embedded fallback content.");
    }
}

function renderSite(content) {
    applySiteMetadata(content.site);
    renderNavigation(content.site);

    app.innerHTML = [
        renderHero(content.hero),
        renderAbout(content.about),
        renderStack(content.stack),
        renderWork(content.work),
        renderContact(content.contact)
    ].join("");

    footer.innerHTML = `
        <span>${escapeHtml(content.footer.copyright)}</span>
        <span>${escapeHtml(content.footer.tagline)}</span>
    `;
}

function applySiteMetadata(site) {
    document.documentElement.lang = site.lang;
    document.title = site.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", site.description);
    }

    logo.textContent = site.logo;
}

function renderNavigation(site) {
    nav.innerHTML = site.navigation.map((item) => `
        <a href="${escapeAttr(item.href)}">${escapeHtml(item.label)}</a>
    `).join("");
}

function renderHero(hero) {
    return `
        <section class="hero">
            <div class="container hero-wrap">
                <div class="hero-copy">
                    <p class="tag">${escapeHtml(hero.eyebrow)}</p>
                    <h1>${escapeHtml(hero.title)}</h1>
                    <p class="hero-text">${escapeHtml(hero.description)}</p>

                    <div class="hero-actions">
                        ${hero.actions.map(renderAction).join("")}
                    </div>

                    <div class="hero-stats" aria-label="Core areas">
                        ${hero.stats.map(renderStat).join("")}
                    </div>
                </div>

                <aside class="card hero-card">
                    <p class="eyebrow">${escapeHtml(hero.focus.eyebrow)}</p>
                    <ul class="hero-list">
                        ${hero.focus.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                    </ul>
                </aside>
            </div>
        </section>
    `;
}

function renderAction(action) {
    const variant = action.variant === "primary" ? "btn-primary" : "btn-secondary";
    return `
        <a class="btn ${variant}" href="${escapeAttr(action.href)}">
            ${escapeHtml(action.label)}
        </a>
    `;
}

function renderStat(stat) {
    return `
        <div class="stat">
            <strong>${escapeHtml(stat.title)}</strong>
            <span>${escapeHtml(stat.text)}</span>
        </div>
    `;
}

function renderAbout(about) {
    return `
        <section id="${escapeAttr(about.id)}" class="section">
            <div class="container">
                <h2 class="section-title">${escapeHtml(about.title)}</h2>
                <p class="section-subtitle">${escapeHtml(about.subtitle)}</p>

                <div class="grid about-grid">
                    ${about.cards.map((card) => `
                        <article class="card">
                            <p class="eyebrow">${escapeHtml(card.eyebrow)}</p>
                            <h3>${escapeHtml(card.title)}</h3>
                            <p>${escapeHtml(card.text)}</p>
                        </article>
                    `).join("")}
                </div>
            </div>
        </section>
    `;
}

function renderStack(stack) {
    return `
        <section id="${escapeAttr(stack.id)}" class="section">
            <div class="container">
                <h2 class="section-title">${escapeHtml(stack.title)}</h2>
                <p class="section-subtitle">${escapeHtml(stack.subtitle)}</p>

                <div class="grid skills-grid">
                    ${stack.categories.map((category) => `
                        <article class="card skill-card">
                            <p class="eyebrow">${escapeHtml(category.eyebrow)}</p>
                            <ul class="skill-list">
                                ${category.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                            </ul>
                        </article>
                    `).join("")}
                </div>
            </div>
        </section>
    `;
}

function renderWork(work) {
    return `
        <section id="${escapeAttr(work.id)}" class="section">
            <div class="container">
                <h2 class="section-title">${escapeHtml(work.title)}</h2>
                <p class="section-subtitle">${escapeHtml(work.subtitle)}</p>

                <div class="grid projects-grid">
                    ${work.projects.map((project) => `
                        <article class="card project-card">
                            <p class="project-meta">${escapeHtml(project.meta)}</p>
                            <h3>${escapeHtml(project.title)}</h3>
                            <p>${escapeHtml(project.description)}</p>
                            <ul class="project-list">
                                ${project.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                            </ul>
                        </article>
                    `).join("")}
                </div>
            </div>
        </section>
    `;
}

function renderContact(contact) {
    return `
        <section id="${escapeAttr(contact.id)}" class="section contact-section">
            <div class="container">
                <div class="contact-shell">
                    <p class="eyebrow">${escapeHtml(contact.eyebrow)}</p>
                    <h2 class="section-title">${escapeHtml(contact.title)}</h2>
                    <p class="section-subtitle">${escapeHtml(contact.subtitle)}</p>

                    <div class="contact-links" aria-label="Contact links">
                        ${contact.links.map(renderContactLink).join("")}
                    </div>

                    <p class="contact-note">${escapeHtml(contact.note)}</p>
                </div>
            </div>
        </section>
    `;
}

function renderContactLink(link) {
    const icon = ICONS[link.icon] ?? "";
    const externalAttributes = link.external ? ' target="_blank" rel="noopener noreferrer"' : "";

    return `
        <a class="contact-link" href="${escapeAttr(link.href)}"${externalAttributes}>
            <span class="contact-icon" aria-hidden="true">${icon}</span>
            <span class="contact-copy">
                <span class="contact-platform">${escapeHtml(link.platform)}</span>
                <span class="contact-handle">${escapeHtml(link.handle)}</span>
            </span>
        </a>
    `;
}

function renderErrorState(error) {
    console.error(error);

    const protocolHint = window.location.protocol === "file:"
        ? "Serve the folder over HTTP to allow loading content.json."
        : "Check that content.json and script.js are available next to index.html.";

    app.innerHTML = `
        <section class="section">
            <div class="container">
                <div class="load-error">
                    <p class="eyebrow">Load error</p>
                    <h1>Content could not be rendered.</h1>
                    <p>${escapeHtml(protocolHint)}</p>
                </div>
            </div>
        </section>
    `;

    nav.innerHTML = "";
    footer.innerHTML = "";
}

function renderLoadNotice(message) {
    const notice = document.createElement("div");
    notice.className = "load-notice";
    notice.textContent = message;
    document.body.appendChild(notice);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
    return escapeHtml(value);
}
