function initializeAnalytics(analytics) {
    const measurementId = analytics?.measurementId?.trim();

    if (!measurementId) {
        return;
    }

    if (window.gtag) {
        return;
    }

    const tagScript = document.createElement("script");
    tagScript.async = true;
    tagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(tagScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);
}

function trackEvent(name, params) {
    if (!window.gtag) {
        return;
    }

    window.gtag("event", name, params);
}

window.portfolioAnalytics = {
    initializeAnalytics,
    trackEvent
};
