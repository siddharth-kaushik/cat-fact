import React from "react"
import styled from "styled-components/macro"

function Overline({ children, ...props }) {
  return <StyledSpan {...props}>{children}</StyledSpan>
}

export default Overline

const StyledSpan = styled.span`
  font-size: 0.512rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 0.7rem;
  text-transform: uppercase;
`
