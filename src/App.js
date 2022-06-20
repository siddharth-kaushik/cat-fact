import { useState, useCallback, useEffect } from "react"

import { useBreeds, useFact } from "./hooks"
import { Breeds, Fact, SearchBar } from "./components"

import "./App.css"

function App() {
  useFact()

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  const [breeds, error, loading, hasMore] = useBreeds(page)
  const [filtered, setFiltered] = useState([])

  const stat = `${filtered.length} / ${breeds.length}`

  useEffect(() => {
    if (!search) setFiltered(breeds)

    const text = search.toLowerCase()
    const list = breeds.filter((item) => {
      const breedMatches = item.breed.toLowerCase().includes(text)
      const patternMatches = item.pattern.toLowerCase().includes(text)

      return breedMatches || patternMatches
    })

    setFiltered(list)
  }, [breeds, search])

  const onScroll = useCallback(
    (e) => {
      const buffer = 300
      const { scrollHeight, scrollTop } = e.target.documentElement
      const windowHeight = window.innerHeight

      const reachingEnd = scrollTop + windowHeight + buffer > scrollHeight

      if (reachingEnd && !loading && hasMore) {
        setPage((prev) => prev + 1)
      }
    },
    [hasMore, loading]
  )

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return (
    <div className="App">
      <h1>The Cat Fact App</h1>
      <Fact />
      <SearchBar value={search} onChange={(v) => setSearch(v)} />
      <h3>{stat}</h3>
      <Breeds list={filtered} error={error} loading={loading} />
      {!hasMore && <div>No more breeds...</div>}
    </div>
  )
}

export default App
