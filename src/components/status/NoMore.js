import React from "react"

import avifSrc from "../../images/end.avif"
import webpSrc from "../../images/end.webp"
import fallbackSrc from "../../images/end.png"

import { Picture } from "../base"
import { Wrapper, StyledHeading, StyledText } from "./shared"

const description = "You have reached the end."

function NoMore() {
  return (
    <Wrapper>
      <Picture
        avif={avifSrc}
        webp={webpSrc}
        fallback={fallbackSrc}
        height={64}
      />
      <StyledHeading level={4}>
        That&prime;s all <s style={{ color: "var(--koala)" }}>folks</s> paws
      </StyledHeading>
      <StyledText>{description}</StyledText>
    </Wrapper>
  )
}

export default React.memo(NoMore)
