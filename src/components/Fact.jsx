import React from "react"

import { useCatState } from "../context"
import { Text } from "./base"

function Fact() {
  const { fact, factLoading, factError } = useCatState()

  return (
    <>
      {fact && <Text>{fact}</Text>}
      {factLoading && "loading..."}
      {factError && `error loading fact ${factError.message}`}
    </>
  )
}

export default React.memo(Fact)
