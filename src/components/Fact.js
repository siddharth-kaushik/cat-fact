import React from "react"

import { useCatState } from "../context"

function Fact() {
  const { fact, factLoading, factError } = useCatState()

  if (factError) return "problem fetching cat fact"

  if (factLoading) return "loading..."

  return <p>{fact}</p>
}

export default React.memo(Fact)
