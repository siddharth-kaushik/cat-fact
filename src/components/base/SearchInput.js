import React from "react"
import styled from "styled-components/macro"

import CloseCircleFillIcon from "../../icons/CloseCircleFill"

function SearchInput({ light = false, value, onChange, ...rest }) {
  return (
    <Wrapper light={light}>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {value && <StyledIcon onClick={() => onChange("")} />}
    </Wrapper>
  )
}

export default SearchInput

const Wrapper = styled.div`
  --border-color: var(--${(props) => (props.light ? "cornsilk" : "ruber")});
  --caret-color: var(--${(props) => (props.light ? "polar" : "ruber")});
  --placeholder-color: var(--${(props) => (props.light ? "polar" : "koala")});
  --icon-color: var(--${(props) => (props.light ? "cornsilk" : "ruber")});
  display: inline-flex;
`

const StyledInput = styled.input.attrs({ type: "text" })`
  height: 56px;
  background: transparent;
  border-radius: 100vmax;
  border: 0.125rem solid var(--border-color);
  caret-color: var(--caret-color);
  font-size: inherit;
  font-family: inherit;
  padding-left: 20px;
  padding-right: 36px;

  ::placeholder {
    color: var(--placeholder-color);
  }
`

const StyledIcon = styled(CloseCircleFillIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: var(--icon-color);
  cursor: pointer;
`
