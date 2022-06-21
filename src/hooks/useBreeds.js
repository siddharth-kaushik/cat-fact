/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useCatState, useCatDispatch } from "../context"

const endpoint = "https://catfact.ninja/breeds"

function useBreeds() {
  const dispatch = useCatDispatch()
  const { breeds, page } = useCatState()

  useEffect(() => {
    dispatch({ type: "breedsLoading", payload: true })
    fetch(`${endpoint}?page=` + page)
      .then((res) => res.json())
      .then((json) => {
        const list = [...new Set([...breeds, ...json.data])]
        dispatch({ type: "breeds", payload: list })
        dispatch({ type: "hasMore", payload: json.data.length > 0 })
        dispatch({ type: "breedsLoading", payload: false })
      })
      .catch((err) => {
        dispatch({ type: "breedsError", payload: err })
        dispatch({ type: "breedsLoading", payload: false })
      })
  }, [page])
}

export default useBreeds
