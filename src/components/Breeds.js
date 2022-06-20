import Breed from "./Breed"
import { useCatState } from "../context"

function Breeds() {
  const { filtered, breedsLoading, breedsError, hasMore } = useCatState()

  return (
    <>
      <div className="Breeds">
        {filtered.map((item) => (
          <Breed key={item.breed} value={item} />
        ))}
      </div>
      {breedsLoading && "Loading..."}
      {breedsError && `Error fetching breeds ${breedsError?.message}`}
      {!hasMore && "No more breeds..."}
    </>
  )
}

export default Breeds
