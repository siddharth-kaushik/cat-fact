import { useState, useRef } from "react"

import { useIntersectionObserver } from "../hooks"
import CloseFillIcon from "../icons/CloseFill"
import InfoIcon from "../icons/Info"

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

  const [toggled, setToggled] = useState(false)

  return (
    <div ref={ref} className="Breed">
      <h5>{breed}</h5>
      <span>{country}</span>

      {visible && <BreedImage name={breed} />}

      <ul className={`BreedInfo ${toggled ? "visible" : "hidden"}`}>
        <li><span>Origin:</span>{origin || "-"}</li>
        <li><span>Coat:</span>{coat || "-"}</li>
        <li><span>Pattern:</span>{pattern || "-"}</li>
      </ul>

      <div className="BreedAction">
        <button onClick={() => setToggled((prev) => !prev)}>
          {toggled ? <CloseFillIcon /> : <InfoIcon />}
        </button>
      </div>
    </div>
  )
}

export default Breed
