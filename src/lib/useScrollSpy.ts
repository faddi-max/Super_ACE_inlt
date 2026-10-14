import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset: number = 200) {
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    const getElements = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const elements = getElements();
      if (elements.length === 0) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If scrolled to the bottom of the page, activate the last chapter
      if (scrollY + windowHeight >= documentHeight - 150) {
        setActiveId(elements[elements.length - 1].id);
        return;
      }

      // Find the current active section based on scroll offset
      let current = elements[0].id;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= offset) {
          current = el.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return activeId;
}