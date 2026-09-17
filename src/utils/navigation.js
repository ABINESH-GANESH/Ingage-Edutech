// Lightweight, zero-dependency SPA Router Helper
export function getPath() {
  if (typeof window === "undefined") return "/";
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  return path === "" ? "/" : path;
}

export function navigateTo(path) {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}
