import { useEffect } from "react"
import { useCatState, useCatDispatch } from "../context"

function useFilteredBreeds() {
  const dispatch = useCatDispatch()
  const { search, breeds } = useCatState()

  useEffect(() => {
    if (!search) dispatch({ type: "filtered", payload: breeds })

    const text = search.toLowerCase()
    const list = breeds.filter((item) => {
      const breedMatches = item.breed.toLowerCase().includes(text)
      const patternMatches = item.pattern.toLowerCase().includes(text)

      return breedMatches || patternMatches
    })

    dispatch({ type: "filtered", payload: list })
  }, [breeds, search, dispatch])
  return <div>useFilteredBreeds</div>
}

export default useFilteredBreeds
