import { useEffect } from "react";

// Route Scroll Restoration Component
// Automatically resets scroll position instantly (behavior: "auto") on route change
export default function ScrollToTop({ currentPath }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable unwanted browser automatic scroll restoration to prevent jumpy / scrolling-up behavior
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If navigation is NOT targeting an in-page hash anchor, instantly reset scroll to top
      if (!window.location.hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    }
  }, [currentPath]);

  return null;
}
