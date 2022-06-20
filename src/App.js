import { useState, useCallback, useEffect } from "react"

import { useBreeds } from "./hooks"
import { Breeds } from "./components"

import "./App.css"

function App() {
  const [page, setPage] = useState(1)
  const [breeds, error, loading, hasMore] = useBreeds(page)

  const onScroll = useCallback(
    (e) => {
      const buffer = 300
      const { scrollHeight, scrollTop } = e.target.documentElement
      const windowHeight = window.innerHeight

      const reachingEnd = scrollTop + windowHeight + buffer > scrollHeight
      console.log("end", reachingEnd, hasMore)

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
      <Breeds list={breeds} />
      {error && <div>error loading breeds: {error.message}</div>}
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more breeds...</div>}
    </div>
  )
}

export default App
