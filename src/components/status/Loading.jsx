import React from "react"

import avifSrc from "../../images/loading.avif"
import webpSrc from "../../images/loading.webp"
import fallbackSrc from "../../images/loading.png"

import { Picture } from "../base"
import { Wrapper, StyledHeading, StyledText } from "./shared"

const title = "Meows loading..."
const description = "Stay paw-sitive while we fetch some felines."

function Loading() {
  return (
    <Wrapper>
      <Picture
        avif={avifSrc}
        webp={webpSrc}
        fallback={fallbackSrc}
        height={64}
      />
      <StyledHeading level={4}>{title}</StyledHeading>
      <StyledText>{description}</StyledText>
    </Wrapper>
  )
}

export default React.memo(Loading)
