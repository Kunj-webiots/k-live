// // (function () {
// //     const translations = { en: {}, ar: {} };
// //     const textToKeyMap = {}; // new: maps text to existing key
// //     const usedKeys = new Set();
// //     let counter = 1;

// //     // ✅ Key generator with short key & safe prefix
// //     function generateKey(text, index) {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${index}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key = key + "_" + index++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     }

// //     // ✅ Add data-translate to inner-most elements
// //     function autoAddDataTranslate() {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const text = el.textContent.trim();

// //             if (
// //                 !text ||
// //                 el.children.length > 0 ||
// //                 el.hasAttribute("data-translate")
// //             )
// //                 return;

// //             // Reuse key if text already seen
// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = generateKey(text, counter++);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 if (!translations.ar[key]) translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });
// //     }

// //     // ✅ Toggle lang button (no ID, uses class)
// //     function updateLangToggleButton(lang) {
// //         const btn = document.querySelector(".lang-toggle");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => setLanguage("en");
// //         }
// //     }

// //     // ✅ Set language content
// //     function setLanguage(lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (content[key]) {
// //                 el.textContent = content[key];
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     }

// //     // ✅ Init on load
// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         setLanguage(savedLang);

// //         console.log("✅ data-translate added (unique keys only)");
// //         console.log("👇 Copy this to translations.js:\n");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };

// //     // ✅ Make available globally
// //     window.setLanguage = setLanguage;
// // })();


// // (function () {
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     const translations = { en: {}, ar: {} };
// //     const textToKeyMap = {};
// //     const usedKeys = new Set();
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             // Skip if it has child elements with text, unless H1-H6
// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         // 👇 Auto-detect the first button inside .lang-switch
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (content[key]) {
// //                 el.textContent = content[key];
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     // ✅ On load
// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };
// // })();


// // (function () {
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     const translations = { en: {}, ar: {} };
// //     const textToKeyMap = {};
// //     const usedKeys = new Set();
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (content[key]) {
// //                 el.textContent = content[key];
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     // 👇 Make function globally available to HTML
// //     window.addDataTranslate = autoAddDataTranslate;

// //     // ✅ On page load
// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);
// //     };
// // })();



// // (function () {
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     // const translations = {
// //     //     en: {
// //     //         welcome: "Welcome",
// //     //         contact_us_for_more: "Contact us for more information",
// //     //         submit: "Submit"
// //     //     },
// //     //     ar: {
// //     //         welcome: "مرحبا",
// //     //         contact_us_for_more: "اتصل بنا لمزيد من المعلومات",
// //     //         submit: "إرسال"
// //     //     }
// //     // };

// //     const textToKeyMap = {
// //         "Welcome": "welcome",
// //         "Contact us for more information.": "contact_us_for_more",
// //         "Submit": "submit"
// //     };

// //     const usedKeys = new Set(Object.values(textToKeyMap));
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 translations.ar[key] = ""; // leave Arabic blank for new keys
// //             }

// //             el.setAttribute("data-translate", key);
// //         });

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (key) {
// //                 el.textContent = content[key] || translations.en[key] || el.textContent;
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     // Make available globally
// //     window.addDataTranslate = autoAddDataTranslate;

// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);
// //     };
// // })();

// // translate.js
// // (function () {
// //     const translations = window.translations || { en: {}, ar: {} };
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     const textToKeyMap = {};
// //     const usedKeys = new Set();
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;

// //                 // Add to translations only if missing
// //                 if (!translations.en[key]) translations.en[key] = text;
// //                 if (!translations.ar[key]) translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "RTL";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "LTR";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (key) {
// //                 el.textContent = content[key] || translations.en[key] || el.textContent;
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     window.addDataTranslate = autoAddDataTranslate;

// //     window.onload = function () {
// //         autoAddDataTranslate();
// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);
// //     };
// // })();


// // (function () {
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     const translations = { en: {}, ar: {} };
// //     const textToKeyMap = {};
// //     const usedKeys = new Set();
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             // Skip if it has child elements with text, unless H1-H6
// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         // 👇 Auto-detect the first button inside .lang-switch
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (content[key]) {
// //                 el.textContent = content[key];
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     // ✅ On load
// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };
// // })();


// // (function () {
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     const translations = { en: {}, ar: {} };
// //     const textToKeyMap = {};
// //     const usedKeys = new Set();
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });

// //         // 🔁 Reapply current language after adding data-translate
// //         const currentLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(currentLang);
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (content[key]) {
// //                 el.textContent = content[key];
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     // ✅ Make data-translate function globally callable
// //     window.addDataTranslate = autoAddDataTranslate;

// //     // ✅ On load
// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };
// // })();




// // (function () {
// //     const allowedTags = [
// //         "H1", "H2", "H3", "H4", "H5", "H6",
// //         "P", "SPAN", "BUTTON", "A", "LABEL",
// //         "TH", "TD", "LI", "STRONG", "SMALL"
// //     ];

// //     const translations = { en: {}, ar: {} };
// //     const textToKeyMap = {};
// //     const usedKeys = new Set();
// //     let keyCounter = 1;

// //     const cleanKey = (text) => {
// //         let key = text
// //             .toLowerCase()
// //             .replace(/[^a-z0-9\s]/g, "")
// //             .split(/\s+/)
// //             .slice(0, 3)
// //             .join("_");

// //         if (/^[0-9]/.test(key) || !key) {
// //             key = `key_${keyCounter++}`;
// //         }

// //         while (usedKeys.has(key)) {
// //             key += "_" + keyCounter++;
// //         }

// //         usedKeys.add(key);
// //         return key;
// //     };

// //     const isValidForTranslation = (el) => {
// //         if (!el || !el.tagName) return false;
// //         if (!allowedTags.includes(el.tagName)) return false;
// //         if (el.hasAttribute("data-translate")) return false;
// //         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
// //         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
// //         return true;
// //     };

// //     const autoAddDataTranslate = () => {
// //         const elements = document.querySelectorAll("body *");

// //         elements.forEach((el) => {
// //             const tag = el.tagName;
// //             const text = el.textContent.trim();

// //             if (!isValidForTranslation(el) || !text) return;

// //             if (
// //                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
// //                 [...el.children].some((child) => child.textContent.trim())
// //             ) return;

// //             let key;
// //             if (textToKeyMap[text]) {
// //                 key = textToKeyMap[text];
// //             } else {
// //                 key = cleanKey(text);
// //                 textToKeyMap[text] = key;
// //                 translations.en[key] = text;
// //                 translations.ar[key] = "";
// //             }

// //             el.setAttribute("data-translate", key);
// //         });
// //     };

// //     const updateLangToggleButton = (lang) => {
// //         const btn = document.querySelector(".lang-switch button");
// //         if (!btn) return;

// //         if (lang === "en") {
// //             btn.textContent = "عربي";
// //             btn.onclick = () => window.setLanguage("ar");
// //         } else {
// //             btn.textContent = "English";
// //             btn.onclick = () => window.setLanguage("en");
// //         }
// //     };

// //     window.setLanguage = function (lang) {
// //         localStorage.setItem("selectedLanguage", lang);
// //         document.documentElement.setAttribute("lang", lang);
// //         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

// //         const content = translations[lang];
// //         const elements = document.querySelectorAll("[data-translate]");

// //         elements.forEach((el) => {
// //             const key = el.getAttribute("data-translate");
// //             if (content[key]) {
// //                 el.textContent = content[key];
// //             }
// //         });

// //         updateLangToggleButton(lang);
// //     };

// //     // ✅ Expose this so button works
// //     window.addDataTranslate = autoAddDataTranslate;

// //     // ✅ On load
// //     window.onload = function () {
// //         autoAddDataTranslate();

// //         const savedLang = localStorage.getItem("selectedLanguage") || "en";
// //         window.setLanguage(savedLang);

// //         console.log("✅ data-translate added.");
// //         console.log("👇 Copy to translations.js:");
// //         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
// //     };
// // })();


// (function () {
//     const allowedTags = [
//         "H1", "H2", "H3", "H4", "H5", "H6",
//         "P", "SPAN", "BUTTON", "A", "LABEL",
//         "TH", "TD", "LI", "STRONG", "SMALL"
//     ];

//     // ❌ Remove this (we're using the global one from translations.js)
//     // const translations = { en: {}, ar: {} };

//     const textToKeyMap = {};
//     const usedKeys = new Set();
//     let keyCounter = 1;

//     const cleanKey = (text) => {
//         let key = text
//             .toLowerCase()
//             .replace(/[^a-z0-9\s]/g, "")
//             .split(/\s+/)
//             .slice(0, 3)
//             .join("_");

//         if (/^[0-9]/.test(key) || !key) {
//             key = `key_${keyCounter++}`;
//         }

//         while (usedKeys.has(key)) {
//             key += "_" + keyCounter++;
//         }

//         usedKeys.add(key);
//         return key;
//     };

//     const isValidForTranslation = (el) => {
//         if (!el || !el.tagName) return false;
//         if (!allowedTags.includes(el.tagName)) return false;
//         if (el.hasAttribute("data-translate")) return false;
//         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
//         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
//         return true;
//     };

//     const autoAddDataTranslate = () => {
//         const elements = document.querySelectorAll("body *");

//         elements.forEach((el) => {
//             const tag = el.tagName;
//             const text = el.textContent.trim();

//             if (!isValidForTranslation(el) || !text) return;

//             if (
//                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
//                 [...el.children].some((child) => child.textContent.trim())
//             ) return;

//             let key;
//             if (textToKeyMap[text]) {
//                 key = textToKeyMap[text];
//             } else {
//                 key = cleanKey(text);
//                 textToKeyMap[text] = key;

//                 // ✅ If key not already in translations, add dynamically
//                 translations.en[key] = translations.en[key] || text;
//                 translations.ar[key] = translations.ar[key] || "";
//             }

//             el.setAttribute("data-translate", key);
//         });
//     };

//     const updateLangToggleButton = (lang) => {
//         const btn = document.querySelector(".lang-switch button");
//         if (!btn) return;

//         if (lang === "en") {
//             btn.textContent = "RTL";
//             btn.onclick = () => window.setLanguage("ar");
//         } else {
//             btn.textContent = "LTR";
//             btn.onclick = () => window.setLanguage("en");
//         }
//     };

//     window.setLanguage = function (lang) {
//         localStorage.setItem("selectedLanguage", lang);
//         document.documentElement.setAttribute("lang", lang);
//         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

//         const content = translations[lang];
//         const elements = document.querySelectorAll("[data-translate]");

//         elements.forEach((el) => {
//             const key = el.getAttribute("data-translate");
//             if (content[key]) {
//                 el.textContent = content[key];
//             }
//         });

//         updateLangToggleButton(lang);
//     };

//     window.addDataTranslate = autoAddDataTranslate;

//     window.onload = function () {
//         autoAddDataTranslate();

//         const savedLang = localStorage.getItem("selectedLanguage") || "en";
//         window.setLanguage(savedLang);

//         console.log("✅ data-translate added.");
//         console.log("👇 Copy to translations.js:");
//         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
//     };
// })();




// (function () {
//     const allowedTags = [
//         "H1", "H2", "H3", "H4", "H5", "H6",
//         "P", "SPAN", "BUTTON", "A", "LABEL",
//         "TH", "TD", "LI", "STRONG", "SMALL"
//     ];

//     // ❌ Remove this (we're using the global one from translations.js)
//     // const translations = { en: {}, ar: {} };

//     const textToKeyMap = {};
//     const usedKeys = new Set();
//     let keyCounter = 1;

//     const cleanKey = (text) => {
//         let key = text
//             .toLowerCase()
//             .replace(/[^a-z0-9\s]/g, "")
//             .split(/\s+/)
//             .slice(0, 3)
//             .join("_");

//         if (/^[0-9]/.test(key) || !key) {
//             key = `key_${keyCounter++}`;
//         }

//         while (usedKeys.has(key)) {
//             key += "_" + keyCounter++;
//         }

//         usedKeys.add(key);
//         return key;
//     };

//     const isValidForTranslation = (el) => {
//         if (!el || !el.tagName) return false;
//         if (!allowedTags.includes(el.tagName)) return false;
//         if (el.hasAttribute("data-translate")) return false;
//         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
//         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
//         return true;
//     };

//     const autoAddDataTranslate = () => {
//         const elements = document.querySelectorAll("body *");

//         elements.forEach((el) => {
//             const tag = el.tagName;
//             const text = el.textContent.trim();

//             if (!isValidForTranslation(el) || !text) return;

//             if (
//                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
//                 [...el.children].some((child) => child.textContent.trim())
//             ) return;

//             let key;
//             if (textToKeyMap[text]) {
//                 key = textToKeyMap[text];
//             } else {
//                 key = cleanKey(text);
//                 textToKeyMap[text] = key;

//                 // ✅ If key not already in translations, add dynamically
//                 translations.en[key] = translations.en[key] || text;
//                 translations.ar[key] = translations.ar[key] || "";
//             }

//             el.setAttribute("data-translate", key);
//         });
//     };

//     const updateLangToggleButton = (lang) => {
//         const btn = document.querySelector(".lang-switch button");
//         if (!btn) return;

//         if (lang === "en") {
//             btn.textContent = "RTL";
//             btn.onclick = () => window.setLanguage("ar");
//         } else {
//             btn.textContent = "LTR";
//             btn.onclick = () => window.setLanguage("en");
//         }
//     };

//     window.setLanguage = function (lang) {
//         localStorage.setItem("selectedLanguage", lang);
//         document.documentElement.setAttribute("lang", lang);
//         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

//         const content = translations[lang];
//         const elements = document.querySelectorAll("[data-translate]");

//         elements.forEach((el) => {
//             const key = el.getAttribute("data-translate");
//             if (content[key]) {
//                 // 🚀 remove \n and multiple spaces
//                 let cleanText = content[key].replace(/\s*\n\s*/g, " ").replace(/\s+/g, " ").trim();
//                 el.textContent = cleanText;
//             }
//         });

//         const bootstrapLink = document.getElementById("rtl-link");
//         if (bootstrapLink) {
//             if (lang === "ar") {
//                 bootstrapLink.setAttribute("href", "../assets/css/vendors/bootstrap.rtl.css");
//             } else {
//                 bootstrapLink.setAttribute("href", "../assets/css/vendors/bootstrap.css");
//             }
//         }

//         updateLangToggleButton(lang);
//     };

//     window.addDataTranslate = autoAddDataTranslate;

//     window.onload = function () {
//         autoAddDataTranslate();

//         const savedLang = localStorage.getItem("selectedLanguage") || "en";
//         window.setLanguage(savedLang);

//         console.log("✅ data-translate added.");
//         console.log("👇 Copy to translations.js:");
//         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
//     };
// })();



// (function () {
//     const allowedTags = [
//         "H1", "H2", "H3", "H4", "H5", "H6",
//         "P", "SPAN", "BUTTON", "A", "LABEL",
//         "TH", "TD", "LI", "STRONG", "SMALL"
//     ];

//     const usedKeys = new Set();
//     let keyCounter = 1;

//     const cleanKey = (text) => {
//         let key = text
//             .toLowerCase()
//             .replace(/[^a-z0-9\s]/g, "")
//             .split(/\s+/)
//             .slice(0, 3)
//             .join("_");

//         if (/^[0-9]/.test(key) || !key) {
//             key = `key_${keyCounter++}`;
//         }

//         // 🚀 ensure unique key always
//         let newKey = key;
//         while (usedKeys.has(newKey)) {
//             newKey = key + "_" + keyCounter++;
//         }

//         usedKeys.add(newKey);
//         return newKey;
//     };

//     const isValidForTranslation = (el) => {
//         if (!el || !el.tagName) return false;
//         if (!allowedTags.includes(el.tagName)) return false;
//         if (el.hasAttribute("data-translate")) return false;
//         if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) return false;
//         if (el.baseURI && el.baseURI.startsWith("chrome-extension://")) return false;
//         return true;
//     };

//     const autoAddDataTranslate = () => {
//         const elements = document.querySelectorAll("body *");

//         elements.forEach((el) => {
//             const tag = el.tagName;
//             const text = el.textContent.trim();

//             if (!isValidForTranslation(el) || !text) return;

//             if (
//                 !["H1", "H2", "H3", "H4", "H5", "H6"].includes(tag) &&
//                 [...el.children].some((child) => child.textContent.trim())
//             ) return;

//             // ✅ always generate unique key
//             const key = cleanKey(text);

//             // ✅ If key not already in translations, add dynamically
//             translations.en[key] = translations.en[key] || text;
//             translations.ar[key] = translations.ar[key] || "";

//             el.setAttribute("data-translate", key);
//         });
//     };

//     const updateLangToggleButton = (lang) => {
//         const btn = document.querySelector(".lang-switch button");
//         if (!btn) return;

//         if (lang === "en") {
//             btn.textContent = "RTL";
//             btn.onclick = () => window.setLanguage("ar");
//         } else {
//             btn.textContent = "LTR";
//             btn.onclick = () => window.setLanguage("en");
//         }
//     };

//     window.setLanguage = function (lang) {
//         localStorage.setItem("selectedLanguage", lang);
//         document.documentElement.setAttribute("lang", lang);
//         document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

//         const content = translations[lang];
//         const elements = document.querySelectorAll("[data-translate]");

//         elements.forEach((el) => {
//             const key = el.getAttribute("data-translate");
//             if (content[key]) {
//                 // 🚀 remove \n and multiple spaces
//                 let cleanText = content[key].replace(/\s*\n\s*/g, " ").replace(/\s+/g, " ").trim();
//                 el.textContent = cleanText;
//             }
//         });

//         const bootstrapLink = document.getElementById("rtl-link");
//         if (bootstrapLink) {
//             if (lang === "ar") {
//                 bootstrapLink.setAttribute("href", "../assets/css/vendors/bootstrap.rtl.css");
//             } else {
//                 bootstrapLink.setAttribute("href", "../assets/css/vendors/bootstrap.css");
//             }
//         }

//         updateLangToggleButton(lang);
//     };

//     window.addDataTranslate = autoAddDataTranslate;

//     window.onload = function () {
//         autoAddDataTranslate();

//         const savedLang = localStorage.getItem("selectedLanguage") || "en";
//         window.setLanguage(savedLang);

//         console.log("✅ data-translate added.");
//         console.log("👇 Copy to translations.js:");
//         console.log("const translations = " + JSON.stringify(translations, null, 2) + ";");
//     };
// })();
