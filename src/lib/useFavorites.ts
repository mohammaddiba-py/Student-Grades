import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'horizon:favorites'

function read(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

let cache: Set<string> | null = null
const listeners = new Set<(s: Set<string>) => void>()

function emit() {
  listeners.forEach((l) => l(new Set(cache!)))
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (!cache) cache = read()
    return new Set(cache)
  })

  useEffect(() => {
    const listener = (s: Set<string>) => setFavorites(s)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [])

  const toggle = useCallback((id: string) => {
    if (!cache) cache = read()
    const next = new Set(cache)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    cache = next
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
    } catch {
      /* ignore */
    }
    emit()
  }, [])

  const isFavorite = useCallback(
    (id: string) => favorites.has(id),
    [favorites]
  )

  return { favorites, toggle, isFavorite }
}
