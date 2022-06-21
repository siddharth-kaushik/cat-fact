import React from "react"

import { Heading, SearchInput } from "./base"
import { useCatState, useCatDispatch } from "../context"

function SearchBar() {
  const dispatch = useCatDispatch()
  const { breeds, filtered, search } = useCatState()
  const stat = `${filtered.length} / ${breeds.length}`

  const handleChange = () => (v) => {
    dispatch({ type: "search", payload: v })
  }

  return (
    <>
      <SearchInput
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
