import React from "react"
import styled from "styled-components/macro"

import avifSrc from "../images/owner.avif"
import webpSrc from "../images/owner.webp"
import fallbackSrc from "../images/owner.png"

import { Picture, Text, Link } from "./base"

const title = "They knead some love. We all do."

const website = "https://sidbits.com"
const github = "https://github.com/siddharth-kaushik/cat-fact"
const flaticon = "https://www.flaticon.com/free-icons/design"

function Footer() {
  return (
    <StyledFooter>
      <Picture
        avif={avifSrc}
        webp={webpSrc}
        fallback={fallbackSrc}
        height={96}
      />
      <StyledText>{title}</StyledText>

      <Copyright>
        <Text small>
          © Copyright 2022&nbsp;
          <StyledLink to={website}>Sidbits</StyledLink>
        </Text>
        <Text small>
          View on &nbsp;
          <StyledLink to={github}>Github</StyledLink>
        </Text>
        <Text small>
          Credits: Illustrations by <StyledLink to={flaticon}>Flaticon</StyledLink>
        </Text>
      </Copyright>
    </StyledFooter>
  )
}

export default React.memo(Footer)

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--panda);
  color: var(--polar);
  padding: 50px 40px;
`

const StyledText = styled(Text)`
  margin-top: 8px;
  margin-bottom: 30px;
`

const Copyright = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--koala);
`

const StyledLink = styled(Link)`
  color: var(--elephant);
`
