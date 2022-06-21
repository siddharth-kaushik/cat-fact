import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
h1 {
  font-size: 3.052rem;
  font-weight: 700;
  line-height: 4.15rem;
}
h2 {
  font-size: 2.441rem;
  font-weight: 700;
  line-height: 3.35rem;
}
h3{
  font-size: 1.953rem;
  font-weight: 600;
  line-height: 2.65rem;
}
h4 {
  font-size: 1.563rem;
  font-weight: 600;
  line-height: 2.1rem;
}
h5 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.7rem;
}
h6 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.35rem;
}

p, span {
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.35rem;
}
p.small,
span.small {
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.1rem;
}

`

export default GlobalStyles
