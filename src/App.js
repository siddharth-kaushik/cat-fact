import { useBreeds, useFact, useFilteredBreeds, useWindowScroll } from "./hooks"
import { Breeds, Fact, SearchBar } from "./components"

function App() {
  useFact()
  useBreeds()
  useFilteredBreeds()
  useWindowScroll()

  return (
    <div className="App">
      <h1>The Cat Fact App</h1>
      <Fact />
      <SearchBar />
      <Breeds />
    </div>
  )
}

export default App
