import { useCallback, useEffect, useState } from "react";

const KEY = "horizon:favorites";

function read() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) ?? "[]"));
  } catch {
    return new Set();
  }
}

export default function useFavorites() {
  const [favorites, setFavorites] = useState(read);

  useEffect(() => {
    const sync = () => setFavorites(read());
    window.addEventListener("horizon:favorites-changed", sync);
    return () => window.removeEventListener("horizon:favorites-changed", sync);
  }, []);

  const toggle = useCallback((slug) => {
    const next = read();
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    const list = [...next];
    localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new Event("horizon:favorites-changed"));
    setFavorites(next);
  }, []);

  const has = useCallback((slug) => favorites.has(slug), [favorites]);

  return { favorites, has, toggle };
}
