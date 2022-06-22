import React from "react"
import styled from "styled-components/macro"

import { Heading, Link } from "./base"
import Logo from "./Logo"

const designs = "https://xd.adobe.com/view/abcb728b-fbb8-439e-bb08-956c84afac0c-fe98"
const github = "https://github.com/siddharth-kaushik/cat-fact"
const mailTo = "mailto:sidharth.basu@icloud.com"

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Link to={designs}>
          <Heading level={6}>Design</Heading>
        </Link>

        <Link to={github}>
          <Heading level={6}>Github</Heading>
        </Link>

        <Link to={mailTo} external>
          <Heading level={6}>Hire</Heading>
        </Link>
      </Nav>
      <Logo />
    </StyledHeader>
  )
}

export default React.memo(Header)

const StyledHeader = styled.header`
  display: grid;
  row-gap: 3rem;
  align-content: center;
  background-color: var(--panda);
  color: var(--polar);
  padding: 30px 40px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  & > a:first-child {
    margin-right: auto;
  }
`
