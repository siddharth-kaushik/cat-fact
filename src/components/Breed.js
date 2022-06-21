import React, { useState, useRef } from "react"
import styled from "styled-components/macro"

import { ToggleButton } from "./base"
import { useIntersectionObserver } from "../hooks"
import CloseSquareFillIcon from "../icons/CloseSquareFill"
import InfoIcon from "../icons/InfoFill"

import { Heading } from "./base"
import BreedImage from "./BreedImage"

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
    <Wrapper ref={ref}>
      <Heading level={5}>{breed}</Heading>
      <span>{country}</span>

      {visible && <BreedImage name={breed} />}

      <Info visible={toggled}>
        <InfoItem>
          <span>Origin:</span>
          {origin || "-"}
        </InfoItem>
        <InfoItem>
          <span>Coat:</span>
          {coat || "-"}
        </InfoItem>
        <InfoItem>
          <span>Pattern:</span>
          {pattern || "-"}
        </InfoItem>
      </Info>

      <ToggleWrapper>
        <StyledButton
          value={toggled}
          defaultIcon={<InfoIcon />}
          activeIcon={<CloseSquareFillIcon />}
          onClick={() => setToggled((prev) => !prev)}
        />
      </ToggleWrapper>
    </Wrapper>
  )
}

export default React.memo(Breed)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  padding-block-end: 0;
  overflow: hidden;
`

const Info = styled.ul`
  list-style: none;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #ccc;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 20px;
  margin: 0;
  transform: translateY(${(props) => (props.visible ? "0" : "100%")});
  transition: transform 300ms ease-in-out 0ms;
`

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ToggleWrapper = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
`

const StyledButton = styled(ToggleButton)`
  color: var(--${(props) => (props.value ? "ruber" : "honey")});
`
