import Breed from "./Breed"

function Breeds({ list, error, loading }) {
  return (
    <>
      <div className="Breeds">
        {list.map((item, index) => (
          <Breed key={index} value={item} />
        ))}
      </div>
      {loading && "Loading..."}
      {error && `Error fetching breeds ${error?.message}`}
    </>
  )
}

export default Breeds
