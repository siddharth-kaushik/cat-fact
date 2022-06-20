import React, { useState } from "react"

function BreedImage({ name }) {
  const [loaded, setLoaded] = useState(false)
  const imgSrc = `https://robohash.org/${name}.png?set=set4`
  const altText = `kitten image for breed - ${name}`

  return (
    <div className="BreedImage">
      <img
        src={imgSrc}
        alt={altText}
        loading="lazy"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default React.memo(BreedImage)
