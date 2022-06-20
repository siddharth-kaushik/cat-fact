import { useCallback, useEffect } from "react"

import { useBreeds, useFact, useFilteredBreeds } from "./hooks"
import { Breeds, Fact, SearchBar } from "./components"
import { useCatState, useCatDispatch } from "./context"

import "./App.css"

function App() {
  useFact()
  useBreeds()
  useFilteredBreeds()

  const dispatch = useCatDispatch()
  const { breeds, breedsLoading, hasMore, filtered, page } = useCatState()
  const stat = `${filtered.length} / ${breeds.length}`

  const onScroll = useCallback(
    (e) => {
      const buffer = 300
      const { scrollHeight, scrollTop } = e.target.documentElement
      const windowHeight = window.innerHeight

      const reachingEnd = scrollTop + windowHeight + buffer > scrollHeight

      if (reachingEnd && !breedsLoading && hasMore) {
        dispatch({ type: "page", payload: page + 1 })
      }
    },
    [hasMore, breedsLoading]
  )

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return (
    <div className="App">
      <h1>The Cat Fact App</h1>
      <Fact />
      <SearchBar />
      <h3>{stat}</h3>
      <Breeds />
      {!hasMore && <div>No more breeds...</div>}
    </div>
  )
}

export default App
