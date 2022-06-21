import styled from "styled-components/macro"

import avifSrc from "../images/tip.avif"
import webpSrc from "../images/tip.webp"
import fallbackSrc from "../images/tip.png"

import { Heading, Picture } from "./base"
import Fact from "./Fact"

function FactSection() {
  return (
    <Wrapper>
      <Heading level={1}>The Cat Fact App</Heading>
      <Fact />
      <StyledPicture
        avif={avifSrc}
        webp={webpSrc}
        fallback={fallbackSrc}
        height={64}
      />
    </Wrapper>
  )
}

export default FactSection

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  width: 100vw;
  max-width: 640px;
  color: var(--polar);
  background-color: var(--lavender);
  border-radius: 20px;
  padding: 48px 64px;
  margin: 0 auto;
`

const StyledPicture = styled(Picture)`
  position: absolute;
  top: 0;
  left: 64px;
  transform: translateY(-44px);
`
