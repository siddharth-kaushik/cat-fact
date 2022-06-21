import { useBreeds, useFact, useFilteredBreeds, useWindowScroll } from "./hooks"
import { GlobalStyles, Heading, Breeds, Fact, SearchBar } from "./components"

function App() {
  useFact()
  useBreeds()
  useFilteredBreeds()
  useWindowScroll()

  return (
    <>
      <GlobalStyles />
      <Heading level={1}>The Cat Fact App</Heading>
      <Fact />
      <SearchBar />
      <Breeds />
    </>
  )
}

export default App
