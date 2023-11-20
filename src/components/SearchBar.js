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
  const stat = `you are Meowing ${filtered.length} / ${breeds.length} whiskers`

  const handleChange = () => (v) => {
    dispatch({ type: "search", payload: v })
  }

  return (
    <Wrapper>
      <SearchInput
        type="text"
        value={search}
        placeholder="Meow here..."
        onChange={handleChange()}
      />

      <Heading level={5}>{stat}</Heading>

      <SherlockCatPicture
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
  flex-wrap: wrap;
  align-items: center;
  column-gap: 16px;
  row-gap: 8px;
  color: var(--koala);
  transform: translateX(0);

  @media (max-width: 960px) {
    width: 90%;
    transform: translateX(48px);
  }
`

const SherlockCatPicture = styled(Picture)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-120%);
`
