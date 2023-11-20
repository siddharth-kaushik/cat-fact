import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
h1, h2, h3, h4, h5, h6, p, span, a {
  color: inherit;
  line-height: 1.15;
}

h1 {
  font-size: clamp(2.441rem, 4vw + 1rem, 3.052rem);
  font-weight: 700;
}
h2 {
  font-size: clamp(1.953rem, 2.5vw + 1rem, 2.441rem);
  font-weight: 700;
}
h3{
  font-size: clamp(1.563rem, 2vw + 1rem, 1.953rem);
  font-weight: 600;
}
h4 {
  font-size: clamp(1.25rem, 1.25vw + 1rem, 1.563rem);
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
  line-height: 1.1rem;
}

`

export default GlobalStyles
