import React from "react";

export default function usePageBottom(callback) {
  React.useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      if (isBottom) {
        callback();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
