import { useState } from "react"
import styled from "styled-components/macro"

import ArrowUpRightFill from "../../icons/ArrowUpRightFill"

function Link({ children, to, ...rest }) {
  const [hovered, setHovered] = useState(false)

  return (
    <StyledLink
      href={to}
      {...rest}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <StyledIcon hovered={hovered} />
    </StyledLink>
  )
}

export default Link

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
`

const StyledIcon = styled(ArrowUpRightFill)`
  --shift-x: ${(props) => (props.hovered ? "0" : "-3px")};
  --shift-y: ${(props) => (props.hovered ? "-50%" : "-3px")};
  --scale: ${(props) => (props.hovered ? "1" : "0.8")};

  position: absolute;
  top: 50%;
  left: calc(100% + 6px);

  transform: translate(var(--shift-x), var(--shift-y)) scale(var(--scale));
  opacity: ${(props) => (props.hovered ? 1 : 0)};

  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  pointer-events: none;
`
