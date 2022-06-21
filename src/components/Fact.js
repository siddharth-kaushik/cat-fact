import React from "react"

import { useCatState } from "../context"
import { Text } from "./base"

function Fact() {
  const { fact, factLoading, factError } = useCatState()
  const factText = factLoading
    ? "loading fact..."
    : factError
    ? `error loading fact ${factError.message}`
    : fact

  return <Text>{factText}</Text>
}

export default React.memo(Fact)
