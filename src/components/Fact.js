import { useFact } from "../hooks"

function Fact() {
  const [fact, error, loading] = useFact()

  if (error) return "problem fetching cat fact"

  if (loading) return "loading..."

  return <p>{fact}</p>
}

export default Fact
