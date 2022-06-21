import React from "react"

function Picture({ avif, webp, fallback, alt, ...rest }) {
  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img alt={alt} src={fallback} {...rest} />
    </picture>
  )
}

export default Picture
