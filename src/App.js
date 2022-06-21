import { useBreeds, useFact, useFilteredBreeds, useWindowScroll } from "./hooks"
import { GlobalStyles, Breeds, FactSection, SearchSection } from "./components"

function App() {
  useFact()
  useBreeds()
  useFilteredBreeds()
  useWindowScroll()

  return (
    <>
      <GlobalStyles />
      <FactSection />
      <SearchSection />
      <Breeds />
    </>
  )
}

export default App
