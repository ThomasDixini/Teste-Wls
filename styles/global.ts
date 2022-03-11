import { createGlobalStyle } from 'styled-components';




export const GlobalStyle = createGlobalStyle`

:root {
    --white: #FFFFFF;
    --black: #000000;

    --blue-200: #0047FF;
    --blue-500: #0039CC;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Roboto", sans-serif;
    font: 400 1rem;
    background-color: var(--white);
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}





`