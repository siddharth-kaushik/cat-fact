import { useState, useEffect } from "react"

const endpoint = "https://catfact.ninja/breeds"

function useBreeds(page) {
  const [breed, setBreed] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${endpoint}?page=` + page)
      .then((res) => res.json())
      .then((json) => {
        setBreed((prev) => [...new Set([...prev, ...json.data])])
        setHasMore(json.data.length > 0)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [page])

  return [breed, error, loading, hasMore]
}

export default useBreeds
