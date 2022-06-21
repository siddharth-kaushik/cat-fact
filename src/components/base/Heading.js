import React from "react"

function Heading({ children, level = 2, ...props }) {
  const Tag = `h${level}`

  return (
    <Tag {...props}>
      {children}
    </Tag>
  )
}

export default Heading
