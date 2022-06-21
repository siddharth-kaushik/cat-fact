import React from "react"
import styled from "styled-components/macro"

import coatAvifSrc from "../images/coat.avif"
import coatWebpSrc from "../images/coat.webp"
import coatFallbackSrc from "../images/coat.png"

import originAvifSrc from "../images/origin.avif"
import originWebpSrc from "../images/origin.webp"
import originFallbackSrc from "../images/origin.png"

import patternAvifSrc from "../images/pattern.avif"
import patternWebpSrc from "../images/pattern.webp"
import patternFallbackSrc from "../images/pattern.png"

import { Text, Picture } from "./base"

function BreedInfo({ coat, origin, pattern, visible }) {
  return (
    <Info visible={visible}>
      <InfoItem>
        <StyledPicture
          avif={coatAvifSrc}
          webp={coatWebpSrc}
          fallback={coatFallbackSrc}
          height={36}
        />

        <Label>Coat</Label>
        <StyledText small>{coat || "-"}</StyledText>
      </InfoItem>
      <InfoItem>
        <StyledPicture
          avif={originAvifSrc}
          webp={originWebpSrc}
          fallback={originFallbackSrc}
          height={36}
        />

        <Label>Origin</Label>
        <StyledText small>{origin || "-"}</StyledText>
      </InfoItem>
      <InfoItem>
        <StyledPicture
          avif={patternAvifSrc}
          webp={patternWebpSrc}
          fallback={patternFallbackSrc}
          height={36}
        />

        <Label>Pattern</Label>
        <StyledText small>{pattern || "-"}</StyledText>
      </InfoItem>
    </Info>
  )
}

export default React.memo(BreedInfo)

const Info = styled.ul`
  display: grid;
  gap: 12px;
  list-style: none;
  position: absolute;
  left: 0;
  bottom: 0;
  top: calc(100% - 210px);
  width: 100%;
  background-color: inherit;
  padding: 16px 30px;
  margin: 0;
  transform: translateY(${(props) => (props.visible ? "0" : "100%")});
  transition: transform 300ms ease-in-out 0ms;
`

const InfoItem = styled.li`
  display: grid;
  grid-template-columns: 36px 1fr;
  column-gap: 12px;
`

const Label = styled(Text)`
  grid-area: "label";
`

const StyledText = styled(Text)`
  grid-area: "text";
  color: var(--elephant);
`

const StyledPicture = styled(Picture)`
  grid-area: "thumb";
  grid-row: 1 / span 2;
`
