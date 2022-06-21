import { useBreeds, useFact, useFilteredBreeds, useWindowScroll } from "./hooks"
import {
  GlobalStyles,
  Header,
  FactSection,
  SearchSection,
  Breeds,
  Footer,
} from "./components"

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
      <Footer />
    </>
  )
}

export default App
