import styled from "styled-components/macro"
import { Heading, Text } from "../base"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledHeading = styled(Heading)`
  color: var(--ruber);
`

export const StyledText = styled(Text)`
  color: var(--elephant);
`
