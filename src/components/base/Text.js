import React from "react"

function Text({ children, as = "p", small = false, ...props }) {
  const Tag = as

  return (
    <Tag className={`${small ? "small" : ""}`} {...props}>
      {children}
    </Tag>
  )
}

export default Text
