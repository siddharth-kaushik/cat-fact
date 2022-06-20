import React from "react"

import { useCatDispatch } from "../context"

const endpoint = "https://catfact.ninja/fact"

function useFact() {
  const dispatch = useCatDispatch()

  React.useEffect(() => {
    dispatch({ type: "factLoading", payload: true })
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "fact", payload: data.fact })
        dispatch({ type: "factLoading", payload: false })
      })
      .catch((err) => {
        dispatch({ type: "factError", payload: err })
        dispatch({ type: "factLoading", payload: false })
      })
  }, [])
}

export default useFact
