import styled from "styled-components/macro"

import avifSrc from "../images/super.avif"
import webpSrc from "../images/super.webp"
import fallbackSrc from "../images/super.png"

import { Heading, Picture } from "./base"
import SearchBar from "./SearchBar"

const title = "It ain’t easy being purr-fect."

function SearchSection() {
  return (
    <Wrapper>
      <Container>
        <Heading>{title}</Heading>
        <SearchBar />

        <SuperCatPicture
          avif={avifSrc}
          webp={webpSrc}
          fallback={fallbackSrc}
          height={64}
        />
      </Container>
    </Wrapper>
  )
}

export default SearchSection

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-block-start: 96px;
  padding-block-end: 48px;
`

const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
`

const SuperCatPicture = styled(Picture)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-8%,-100%);
`
