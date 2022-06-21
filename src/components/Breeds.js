import Breed from "./Breed"
import styled from "styled-components/macro"

import { useCatState } from "../context"

function Breeds() {
  const { filtered, breedsLoading, breedsError, hasMore } = useCatState()

  return (
    <>
      <Wrapper>
        {filtered.map((item) => (
          <Breed key={item.breed} value={item} />
        ))}
      </Wrapper>
      {breedsLoading && "Loading..."}
      {breedsError && `Error fetching breeds ${breedsError?.message}`}
      {!hasMore && "No more breeds..."}
    </>
  )
}

export default Breeds

const Wrapper = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  margin: 20px auto 60px;
`
