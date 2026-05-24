import { useEffect } from "react";

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [locked]);
}
