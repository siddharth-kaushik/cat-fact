import styled from "styled-components/macro"

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
      <Main>
        <FactSection />
        <SearchSection />
        <Breeds />
      </Main>
      <Footer />
    </>
  )
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100vw;
  padding: 96px 24px;
  padding-bottom: 64px;
`
