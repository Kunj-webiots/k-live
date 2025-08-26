(function () {
    const allowedTags = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "BUTTON", "A", "LABEL", "TH", "TD", "LI"];
    const translations = { en: {}, ar: {} };
    let keyCounter = 1;
    const usedKeys = new Set();

    const cleanKey = (text) => {
        let key = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");
        if (!key || usedKeys.has(key)) {
            key = `key_${keyCounter++}`;
        }
        usedKeys.add(key);
        return key;
    };

    const elements = document.querySelectorAll("body *");

    elements.forEach((el) => {
        const tag = el.tagName;
        const text = el.textContent.trim();

        if (
            !allowedTags.includes(tag) ||
            el.hasAttribute("data-translate") ||
            !text
        ) return;

        // Only add to outer element if it's H1-H6, even with inner span
        if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag)) {
            const key = cleanKey(text);
            el.setAttribute("data-translate", key);
            translations.en[key] = text;
            translations.ar[key] = "";
            return;
        }

        // For other tags, skip if they have children with text
        if ([...el.children].some(child => child.textContent.trim())) return;

        const key = cleanKey(text);
        el.setAttribute("data-translate", key);
        translations.en[key] = text;
        translations.ar[key] = "";
    });

    console.log("✅ data-translate added (including H1-H6 with spans)");
    console.log("👇 Copy to translations.js:\n");
    console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
})();
