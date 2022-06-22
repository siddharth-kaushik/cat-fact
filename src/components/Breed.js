import React, { useState, useRef } from "react"
import styled from "styled-components/macro"

import { ToggleButton } from "./base"
import { useIntersectionObserver } from "../hooks"
import CloseSquareFillIcon from "../icons/CloseSquareFill"
import InfoIcon from "../icons/InfoFill"

import { Heading, Text } from "./base"
import BreedImage from "./BreedImage"
import BreedInfo from "./BreedInfo"

function Breed({ value }) {
  const { breed, country, origin, coat, pattern } = value

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [toggled, setToggled] = useState(false)

  useIntersectionObserver(ref, (entry, el) => {
    const { isIntersecting } = entry[0]

    if (isIntersecting) {
      setVisible(true)
      el.unobserve(ref.current)
    }
  })

  return (
    <Wrapper ref={ref} toggled={toggled}>
      <StyledHeading level={5}>{breed}</StyledHeading>
      <StyledText>{country || "-"}</StyledText>

      {visible && <BreedImage name={breed} />}

      <BreedInfo
        origin={origin}
        coat={coat}
        pattern={pattern}
        visible={toggled}
      />

      <StyledButton
        value={toggled}
        defaultIcon={<InfoIcon />}
        activeIcon={<CloseSquareFillIcon />}
        onClick={() => setToggled((prev) => !prev)}
      />
    </Wrapper>
  )
}

export default React.memo(Breed)

const Wrapper = styled.div`
  --border-color: var(--${(props) => (props.toggled ? "ruber" : "carrot")});
  display: flex;
  flex-direction: column;
  gap: 3px;
  background-color: var(--polar);
  border: 0.125rem solid var(--border-color);
  border-radius: 6px;
  padding: 16px 30px 0;
  padding-block-end: 0;
  overflow: hidden;
  transition: border-color 0.15s ease-in-out;
`

const StyledHeading = styled(Heading)`
  line-height: 1.125;
  padding-right: 16px;
`

const StyledText = styled(Text)`
  color: var(--elephant);
`

const StyledButton = styled(ToggleButton)`
  position: absolute;
  top: 6px;
  right: 6px;
  color: var(--${(props) => (props.value ? "ruber" : "honey")});
`
