import React from "react"

const endpoint = "https://catfact.ninja/fact"

function useFact() {
  const [fact, setFact] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return [fact, error, loading]
}

export default useFact
