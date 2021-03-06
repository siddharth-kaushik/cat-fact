import React from "react"
import styled from "styled-components/macro"

function ToggleButton({ defaultIcon, activeIcon, value, onClick, ...rest }) {
  const iconMarkup = value ? activeIcon : defaultIcon

  return (
    <StyledButton onClick={onClick} {...rest}>
      {iconMarkup}
    </StyledButton>
  )
}

export default ToggleButton

const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: currentColor;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.15s ease-in-out, background-color 0.15s ease-in-out;
  }

  &:hover::before {
    opacity: 0.12;
  }
`
