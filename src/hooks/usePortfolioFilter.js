import { useState, useMemo } from 'react'
import { projects } from '../data/portfolio'

export function usePortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState('all')

  // useMemo prevents re-filtering on unrelated re-renders
  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [activeFilter])

  return { filtered, activeFilter, setActiveFilter }
}
