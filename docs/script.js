const ICONS = {
    github: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.53 2.87 8.37 6.85 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.08.36.32.67.95.67 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
        </svg>
    `,
    linkedin: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1Zm1.3 2.15H5.64V18h2.6v-7.35Zm4.14 0H9.81V18h2.57v-3.86c0-2.15 2.8-2.32 2.8 0V18h2.58v-4.76c0-3.7-4.22-3.56-5.38-1.74v-.85Z" />
        </svg>
    `,
    email: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5A1.75 1.75 0 0 1 20.25 18.5H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5Zm0 1.5a.25.25 0 0 0-.25.25v.19l8.11 5.36a.75.75 0 0 0 .78 0l8.11-5.36v-.19a.25.25 0 0 0-.25-.25H3.75Zm16.5 10a.25.25 0 0 0 .25-.25V9.23l-7.28 4.82a2.25 2.25 0 0 1-2.48 0L3.5 9.23v7.52c0 .14.11.25.25.25h16.5Z" />
        </svg>
    `,
    resume: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M6.75 2.5h7.38l4.12 4.12v10.63A2.75 2.75 0 0 1 15.5 20h-8A2.75 2.75 0 0 1 4.75 17.25v-12A2.75 2.75 0 0 1 7.5 2.5h-.75Zm7 .94V7h3.56L13.75 3.44Zm-5.5 7.31a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm3.5 3.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
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

        const content = await response.json();
        renderSite(content);
    } catch (error) {
        renderError(error);
    }
}

function renderSite(content) {
    applyMetadata(content.site);
    renderHero(content.hero);
    renderWhatIDo(content.whatIDo);
}

function applyMetadata(site) {
    document.documentElement.lang = site.lang;
    document.title = site.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", site.description);
    }
}

function renderHero(hero) {
    document.querySelector("#hero-role").textContent = hero.role;
    document.querySelector("#hero-name").textContent = hero.name;
    document.querySelector("#hero-summary").textContent = hero.summary;

    const links = document.querySelector("#hero-links");
    links.replaceChildren(...hero.links.map((item) => {
        const link = cloneTemplate("#icon-link-template");
        link.href = item.href;
        link.setAttribute("aria-label", item.label);
        link.title = item.label;
        link.querySelector(".icon-link-mark").innerHTML = ICONS[item.icon] ?? "";

        if (item.download) {
            link.download = item.download;
        }

        if (item.external) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        return link;
    }));
}

function renderWhatIDo(section) {
    document.querySelector("#what-i-do-title").textContent = section.title;

    const list = document.querySelector("#what-i-do-list");
    list.replaceChildren(...section.items.map((item) => {
        const entry = cloneTemplate("#list-item-template");
        entry.textContent = item;
        return entry;
    }));
}

function cloneTemplate(selector) {
    const template = document.querySelector(selector);

    if (!(template instanceof HTMLTemplateElement)) {
        throw new Error(`Missing template: ${selector}`);
    }

    return template.content.firstElementChild.cloneNode(true);
}

function renderError(error) {
    console.error(error);

    const app = document.querySelector("#app");
    const hint = window.location.protocol === "file:"
        ? "Start a local server such as `npx serve docs`."
        : "Check that content.json is available next to index.html.";

    app.innerHTML = `
        <section class="hero">
            <p>Content could not be loaded.</p>
            <p>${hint}</p>
        </section>
    `;
}
