import React from "react"

function SearchBar({ value, onChange }) {
  const handleChange = () => (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      type="text"
      value={value}
      placeholder="search"
      onChange={handleChange()}
    />
  )
}

export default SearchBar
