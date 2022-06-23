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
      <IdeaCatPicture
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
  --space-x: clamp(1.2rem, 4vw + 0.5rem, 3.2rem);
  display: grid;
  gap: 10px;
  max-width: 640px;
  color: var(--polar);
  background-color: var(--lavender);
  border-radius: 20px;
  padding: 48px var(--space-x);
  margin: 0 auto;
`

const IdeaCatPicture = styled(Picture)`
  position: absolute;
  top: 0;
  left: var(--space-x);
  transform: translateY(-60%);
`
