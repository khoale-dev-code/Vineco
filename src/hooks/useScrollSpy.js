import { useEffect, useState } from 'react'

export function useScrollSpy(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [ids.join('|')])

  return activeId
}
