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

void init();

async function init() {
    try {
        const response = await fetch("./content.json", { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Failed to load content.json: ${response.status}`);
        }

        const data = await response.json();
        renderSite(data);
    } catch (error) {
        renderLoadError(error);
    }
}

function renderSite(content) {
    applySiteMetadata(content.site);
    renderNavigation(content.site.navigation);
    renderHero(content.hero);
    renderAbout(content.about);
    renderStack(content.stack);
    renderWork(content.work);
    renderContact(content.contact);
    renderFooter(content.footer);
}

function applySiteMetadata(site) {
    document.documentElement.lang = site.lang;
    document.title = site.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", site.description);
    }

    document.querySelector("#site-logo").textContent = site.logo;
}

function renderNavigation(items) {
    const nav = document.querySelector("#site-nav");
    nav.replaceChildren(...items.map((item) => {
        const link = cloneTemplate("#nav-link-template");
        link.textContent = item.label;
        link.href = item.href;
        return link;
    }));
}

function renderHero(hero) {
    document.querySelector("#hero-eyebrow").textContent = hero.eyebrow;
    document.querySelector("#hero-title").textContent = hero.title;
    document.querySelector("#hero-description").textContent = hero.description;
    document.querySelector("#hero-focus-eyebrow").textContent = hero.focus.eyebrow;

    const actions = document.querySelector("#hero-actions");
    actions.replaceChildren(...hero.actions.map((action) => {
        const button = cloneTemplate("#hero-action-template");
        button.textContent = action.label;
        button.href = action.href;
        button.classList.add(action.variant === "primary" ? "btn-primary" : "btn-secondary");
        return button;
    }));

    const stats = document.querySelector("#hero-stats");
    stats.replaceChildren(...hero.stats.map((stat) => {
        const card = cloneTemplate("#hero-stat-template");
        card.querySelector("strong").textContent = stat.title;
        card.querySelector("span").textContent = stat.text;
        return card;
    }));

    const focusList = document.querySelector("#hero-focus-list");
    focusList.replaceChildren(...hero.focus.items.map((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
    }));
}

function renderAbout(about) {
    bindSectionCopy("about", about);

    const cards = document.querySelector("#about-cards");
    cards.replaceChildren(...about.cards.map((item) => {
        const card = cloneTemplate("#about-card-template");
        const [eyebrow, title, text] = card.querySelectorAll("p, h3");
        eyebrow.textContent = item.eyebrow;
        title.textContent = item.title;
        text.textContent = item.text;
        return card;
    }));
}

function renderStack(stack) {
    bindSectionCopy("stack", stack);

    const categories = document.querySelector("#stack-categories");
    categories.replaceChildren(...stack.categories.map((item) => {
        const card = cloneTemplate("#skill-card-template");
        card.querySelector(".eyebrow").textContent = item.eyebrow;

        const list = card.querySelector(".skill-list");
        list.replaceChildren(...item.items.map((entry) => {
            const listItem = document.createElement("li");
            listItem.textContent = entry;
            return listItem;
        }));

        return card;
    }));
}

function renderWork(work) {
    bindSectionCopy("work", work);

    const projects = document.querySelector("#work-projects");
    projects.replaceChildren(...work.projects.map((item) => {
        const card = cloneTemplate("#project-card-template");
        card.querySelector(".project-meta").textContent = item.meta;
        card.querySelector("h3").textContent = item.title;
        card.querySelector(".project-description").textContent = item.description;

        const list = card.querySelector(".project-list");
        list.replaceChildren(...item.items.map((entry) => {
            const listItem = document.createElement("li");
            listItem.textContent = entry;
            return listItem;
        }));

        return card;
    }));
}

function renderContact(contact) {
    bindSectionCopy("contact", contact);

    const links = document.querySelector("#contact-links");
    links.replaceChildren(...contact.links.map((item) => {
        const link = cloneTemplate("#contact-link-template");
        link.href = item.href;

        if (item.external) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        link.querySelector(".contact-icon").innerHTML = ICONS[item.icon] ?? "";
        link.querySelector(".contact-platform").textContent = item.platform;
        link.querySelector(".contact-handle").textContent = item.handle;
        return link;
    }));
}

function renderFooter(footer) {
    const footerNode = document.querySelector("#site-footer");
    const copyright = document.createElement("span");
    const tagline = document.createElement("span");

    copyright.textContent = footer.copyright;
    tagline.textContent = footer.tagline;

    footerNode.replaceChildren(copyright, tagline);
}

function bindSectionCopy(sectionName, content) {
    document.querySelectorAll(`[data-bind^="${sectionName}."]`).forEach((node) => {
        const key = node.dataset.bind.split(".")[1];
        node.textContent = content[key] ?? "";
    });
}

function cloneTemplate(selector) {
    const template = document.querySelector(selector);

    if (!(template instanceof HTMLTemplateElement)) {
        throw new Error(`Missing template: ${selector}`);
    }

    return template.content.firstElementChild.cloneNode(true);
}

function renderLoadError(error) {
    console.error(error);

    const app = document.querySelector("#app");
    const nav = document.querySelector("#site-nav");
    const footer = document.querySelector("#site-footer");
    const protocolHint = window.location.protocol === "file:"
        ? "Start a local server such as `npx serve .` or `python3 -m http.server 8000`."
        : "Check that content.json is available next to index.html.";

    app.innerHTML = `
        <section class="section">
            <div class="container">
                <div class="load-error">
                    <p class="eyebrow">Load error</p>
                    <h1>Content could not be loaded.</h1>
                    <p>${protocolHint}</p>
                </div>
            </div>
        </section>
    `;

    nav.replaceChildren();
    footer.replaceChildren();
}
