import React from "react"

function Text({ children, className, as = "p", small = false, ...props }) {
  const Tag = as

  return (
    <Tag className={`${className} ${small ? "small" : ""}`} {...props}>
      {children}
    </Tag>
  )
}

export default Text
