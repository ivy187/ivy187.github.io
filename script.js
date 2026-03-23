const LANGUAGE_KEY = "ivy187-language";
const yearNode = document.querySelector("#year");
const revealNodes = document.querySelectorAll("[data-reveal]");
const languageNodes = document.querySelectorAll("[data-lang-content]");
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
const titleNode = document.querySelector("title[data-title-zh][data-title-en]");
const descriptionNode = document.querySelector(
  'meta[name="description"][data-description-zh][data-description-en]'
);

let currentLanguage = "zh";

const readStoredLanguage = () => {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_KEY);
    return stored === "zh" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
};

const writeStoredLanguage = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // Ignore storage failures and fall back to the current session language.
  }
};

const getInitialLanguage = () => {
  const stored = readStoredLanguage();
  if (stored) {
    return stored;
  }
  return "zh";
};

const applyLanguage = (language) => {
  currentLanguage = language === "en" ? "en" : "zh";

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.language = currentLanguage;

  languageNodes.forEach((node) => {
    node.hidden = node.dataset.langContent !== currentLanguage;
  });

  languageButtons.forEach((button) => {
    const label = currentLanguage === "zh" ? "中文" : "EN";
    button.textContent = label;
    button.setAttribute(
      "aria-label",
      currentLanguage === "zh" ? "切换到英文" : "Switch to Chinese"
    );
    button.setAttribute(
      "title",
      currentLanguage === "zh" ? "切换到英文" : "Switch to Chinese"
    );
  });

  if (titleNode) {
    document.title =
      currentLanguage === "zh" ? titleNode.dataset.titleZh : titleNode.dataset.titleEn;
  }

  if (descriptionNode) {
    descriptionNode.setAttribute(
      "content",
      currentLanguage === "zh"
        ? descriptionNode.dataset.descriptionZh
        : descriptionNode.dataset.descriptionEn
    );
  }

  writeStoredLanguage(currentLanguage);
};

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

applyLanguage(getInitialLanguage());

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -24px 0px",
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
