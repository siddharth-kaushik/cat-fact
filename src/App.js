import { useBreeds, useFact, useFilteredBreeds, useWindowScroll } from "./hooks"
import { GlobalStyles, Breeds, FactSection, SearchBar } from "./components"

function App() {
  useFact()
  useBreeds()
  useFilteredBreeds()
  useWindowScroll()

  return (
    <>
      <GlobalStyles />
      <FactSection />
      <SearchBar />
      <Breeds />
    </>
  )
}

export default App
