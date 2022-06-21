import React from "react"

import avifSrc from "../../images/loading.avif"
import webpSrc from "../../images/loading.webp"
import fallbackSrc from "../../images/loading.png"

import { Picture } from "../base"
import { Wrapper, StyledHeading, StyledText } from "./shared"

const title = "Paw-don me."

function Error({ error }) {
  return (
    <Wrapper>
      <Picture
        avif={avifSrc}
        webp={webpSrc}
        fallback={fallbackSrc}
        height={64}
      />
      <StyledHeading level={4}>{title}</StyledHeading>
      <StyledText>{error.message}</StyledText>
    </Wrapper>
  )
}

export default React.memo(Error)
