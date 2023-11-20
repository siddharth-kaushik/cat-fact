import React, { useState } from "react"
import styled from "styled-components/macro"

function BreedImage({ name }) {
  const [loaded, setLoaded] = useState(false)
  const imgSrc = `https://robohash.org/${name}.png?set=set4`
  const altText = `kitten image for breed - ${name}`

  return (
    <Wrapper>
      <StyledImage
        src={imgSrc}
        alt={altText}
        loading="lazy"
        loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </Wrapper>
  )
}

export default React.memo(BreedImage)

const Wrapper = styled.div`
  display: grid;
  aspect-ratio: 1 / 1;
  width: 210px;
  margin-top: auto;
`

const StyledImage = styled.img`
  align-self: flex-end;
  width: 100%;
  max-width: 210px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 300ms ease-in 0ms;
`
