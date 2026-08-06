(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("shromu.lang");
  const initial =
    stored === "en" || stored === "uk"
      ? stored
      : navigator.language && navigator.language.toLowerCase().startsWith("uk")
        ? "uk"
        : "en";
  root.setAttribute("data-lang", initial);
  root.lang = initial;

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.lang = lang;
    localStorage.setItem("shromu.lang", lang);
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    setLang(initial);
  });
})();
