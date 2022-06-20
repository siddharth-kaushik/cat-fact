import Breed from "./Breed"

function Breeds({ list, error, loading }) {
  if (loading) return "Loading..."

  if (error) return `Error fetching breeds ${error?.message}`

  return (
    <div className="Breeds">
      {list.map((item) => (
        <Breed key={item.breed} value={item} />
      ))}
    </div>
  )
}

export default Breeds
