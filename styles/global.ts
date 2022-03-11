import { createGlobalStyle } from 'styled-components';




export const GlobalStyle = createGlobalStyle`

:root {
    --white: #FFFFFF;
    --black: #000000;
    --black-lowOpacity: rgba(0, 0, 0, 0.1);

    --blue-200: #0047FF;
    --blue-500: #0039CC;

    

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }

    @media(max-width: 720px) {
        font-size: 87.5%;
    }
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