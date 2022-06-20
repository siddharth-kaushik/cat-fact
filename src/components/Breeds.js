import Breed from "./Breed"
import { useCatState } from "../context"

function Breeds() {
  const { filtered, breedsLoading, breedsError } = useCatState()

  return (
    <>
      <div className="Breeds">
        {filtered.map((item) => (
          <Breed key={item.breed} value={item} />
        ))}
      </div>
      {breedsLoading && "Loading..."}
      {breedsError && `Error fetching breeds ${breedsError?.message}`}
    </>
  )
}

export default Breeds
