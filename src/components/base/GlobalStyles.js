import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
h1 {
  font-size: 3.052rem;
  font-weight: 700;
}
h2 {
  font-size: 2.441rem;
  font-weight: 700;
}
h3{
  font-size: 1.953rem;
  font-weight: 600;
}
h4 {
  font-size: 1.563rem;
  font-weight: 600;
}
h5 {
  font-size: 1.25rem;
  font-weight: 700;
}
h6 {
  font-size: 1rem;
  font-weight: 700;
}

p, span {
  font-size: 1rem;
  font-weight: 400;
}
p.small,
span.small {
  font-size: 0.8rem;
  font-weight: 600;
}

`

export default GlobalStyles
