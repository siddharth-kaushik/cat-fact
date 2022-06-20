import React from "react"
import { useCatState, useCatDispatch } from "../context"

function SearchBar() {
  const dispatch = useCatDispatch()
  const { search } = useCatState()

  const handleChange = () => (e) => {
    dispatch({ type: "search", payload: e.target.value })
  }

  return (
    <input
      type="text"
      value={search}
      placeholder="search"
      onChange={handleChange()}
    />
  )
}

export default SearchBar
