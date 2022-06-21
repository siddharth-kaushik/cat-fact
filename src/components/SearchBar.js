import React from "react"
import styled from "styled-components/macro"

import { Heading, Picture, SearchInput } from "./base"
import { useCatState, useCatDispatch } from "../context"

import avifSrc from "../images/search.avif"
import webpSrc from "../images/search.webp"
import fallbackSrc from "../images/search.png"

function SearchBar() {
  const dispatch = useCatDispatch()
  const { breeds, filtered, search } = useCatState()
  const stat = `${filtered.length} felines whiskered of ${breeds.length} meows`

  const handleChange = () => (v) => {
    dispatch({ type: "search", payload: v })
  }

  return (
    <Wrapper>
      <SearchInput
        type="text"
        value={search}
        placeholder="search"
        onChange={handleChange()}
      />
      <Heading level={5}>{stat}</Heading>
      <StyledPicture
        avif={avifSrc}
        webp={webpSrc}
        fallback={fallbackSrc}
        height={64}
      />
    </Wrapper>
  )
}

export default SearchBar

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--koala);
`

const StyledPicture = styled(Picture)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-72px);
`
