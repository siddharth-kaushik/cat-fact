import { useBreeds, useFact, useFilteredBreeds, useWindowScroll } from "./hooks"
import { GlobalStyles, Header, FactSection, SearchSection, Breeds } from "./components"

function App() {
  useFact()
  useBreeds()
  useFilteredBreeds()
  useWindowScroll()

  return (
    <>
      <GlobalStyles />
      <Header />
      <FactSection />
      <SearchSection />
      <Breeds />
    </>
  )
}

export default App
