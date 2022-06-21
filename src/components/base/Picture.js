import React from "react"

function Picture({ avif, webp, fallback, alt, ...rest }) {
  const width = rest.width || "100%"
  const height = rest.height || "100%"

  return (
    <picture {...rest}>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img alt={alt} src={fallback} width={width} height={height} />
    </picture>
  )
}

export default Picture
