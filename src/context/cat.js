import { createContext, useContext, useReducer } from "react"

const CatStateContext = createContext()
const CatDispatchContext = createContext()

const initialState = {
  fact: "",
  factError: null,
  factLoading: false,
  page: 1,
  breeds: [],
  breedsError: null,
  breedsLoading: false,
  search: "",
  filtered: [],
  hasMore: true,
}

const actionMap = {
  fact: (s, a) => ({ ...s, fact: a.payload }),
  factError: (s, a) => ({ ...s, factError: a.payload }),
  factLoading: (s, a) => ({ ...s, factLoading: a.payload }),
  page: (s, a) => ({ ...s, page: a.payload }),
  breeds: (s, a) => ({ ...s, breeds: a.payload }),
  breedsError: (s, a) => ({ ...s, breedsError: a.payload }),
  breedsLoading: (s, a) => ({ ...s, breedsLoading: a.payload }),
  search: (s, a) => ({ ...s, search: a.payload }),
  filtered: (s, a) => ({ ...s, filtered: a.payload }),
  hasMore: (s, a) => ({ ...s, hasMore: a.payload }),
}

const reducer = (state, action) => {
  if (!Object.prototype.hasOwnProperty.call(actionMap, action.type)) {
    throw new Error(`Invalid action type: ${action.type}`)
  }

  const handler = actionMap[action.type]
  return handler(state, action)
}

const CatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CatStateContext.Provider value={state}>
      <CatDispatchContext.Provider value={dispatch}>
        {children}
      </CatDispatchContext.Provider>
    </CatStateContext.Provider>
  )
}

const useCatState = () => {
  const context = useContext(CatStateContext)
  if (context === undefined) {
    throw new Error("useCatState must be used within a CatProvider")
  }
  return context
}

const useCatDispatch = () => {
  const context = useContext(CatDispatchContext)
  if (context === undefined) {
    throw new Error("useCatDispatch must be used within a CatProvider")
  }
  return context
}

export { CatProvider, useCatState, useCatDispatch }
