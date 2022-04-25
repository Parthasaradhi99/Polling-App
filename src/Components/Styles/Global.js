import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
;

*{
    box-sizing : border-box
}

body { 
    background-color : #fff;
    color: hsl(192,100%,9%);
    font-family : 'Bebas Neue', cursive;
    font-size : 1.15em;
`
export default GlobalStyles

