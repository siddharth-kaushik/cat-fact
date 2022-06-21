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

        <StyledPicture
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
  width: 100vw;
  max-height: 280px;
  padding: 96px 20px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  max-width: 800px;
  margin: 0 auto;
`

const StyledPicture = styled(Picture)`
  position: absolute;
  top: -44px;
  left: 100%;
`
