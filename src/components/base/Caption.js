import React from "react"
import styled from "styled-components/macro"

function Caption({ children, ...props }) {
  return <StyledSpan {...props}>{children}</StyledSpan>
}

export default Caption

const StyledSpan = styled.span`
  font-size: 0.64rem;
  font-weight: 600;
  line-height: 0.9rem;
`
