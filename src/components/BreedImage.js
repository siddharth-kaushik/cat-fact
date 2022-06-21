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
  aspect-ratio: 1 / 1;
  max-width: 240px;
  margin-top: auto;
`

const StyledImage = styled.img`
  aspect-ratio: 1 / 1;
  max-width: 100%;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 300ms ease-in 0ms;
`
