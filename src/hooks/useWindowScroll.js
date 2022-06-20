import { useCallback, useEffect } from "react"
import { useCatState, useCatDispatch } from "../context"

function useWindowScroll() {
  const dispatch = useCatDispatch()
  const { breedsLoading, hasMore, page } = useCatState()

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
}

export default useWindowScroll
