import { useState, useRef } from "react"

import { useIntersectionObserver } from "../hooks"
import BreedImage from "./BreedImage"

function Breed({ value }) {
  const { breed, country, origin, coat, pattern } = value

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useIntersectionObserver(ref, (entry, el) => {
    const { isIntersecting } = entry[0]

    if (isIntersecting) {
      setVisible(true)
      el.unobserve(ref.current)
    }
  })

  return (
    <div ref={ref} className="Breed">
      <h5>{breed}</h5>
      <span>{country}</span>

      {visible && <BreedImage name={breed} />}

      <div className="more">
        <ul>
          <li>{origin || "-"}</li>
          <li>{coat || "-"}</li>
          <li>{pattern || "-"}</li>
        </ul>
      </div>
    </div>
  )
}

export default Breed
