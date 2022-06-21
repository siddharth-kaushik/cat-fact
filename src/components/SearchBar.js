import React from "react"

import { Heading } from "./base"
import { useCatState, useCatDispatch } from "../context"

function SearchBar() {
  const dispatch = useCatDispatch()
  const { breeds, filtered, search } = useCatState()
  const stat = `${filtered.length} / ${breeds.length}`

  const handleChange = () => (e) => {
    dispatch({ type: "search", payload: e.target.value })
  }

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="search"
        onChange={handleChange()}
      />
      <Heading level={5}>{stat}</Heading>
    </>
  )
}

export default SearchBar
