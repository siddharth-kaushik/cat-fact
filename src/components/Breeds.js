import Breed from "./Breed"
import styled from "styled-components/macro"

import { useCatState } from "../context"
import { Loading, Error, NoMore } from "./status"

function Breeds() {
  const { filtered, breedsLoading, breedsError, hasMore } = useCatState()

  return (
    <>
      <Wrapper>
        {filtered.map((item) => (
          <Breed key={item.breed} value={item} />
        ))}
      </Wrapper>
      {breedsLoading && <Loading />}
      {breedsError && <Error error={breedsError} />}
      {!hasMore && <NoMore />}
    </>
  )
}

export default Breeds

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(1.2rem, 1.95vw + 0.75rem, 2rem);
  margin: 0 auto;
`
