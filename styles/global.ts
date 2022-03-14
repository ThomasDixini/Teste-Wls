import { createGlobalStyle } from 'styled-components';




export const GlobalStyle = createGlobalStyle`

:root {
    --white: #FFFFFF;
    --black: #000000;
    --black-lowOpacity: rgba(0, 0, 0, 0.1);

    --blue-200: #0047FF;
    --blue-500: #0039CC;
    --blue-lowSaturation: #386DB3; 

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


.react-modal-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(2px);
}

.react-modal-content {
    max-width: 315px;
    width: 100%;
    padding: 2rem;

    border-radius: 0.5rem;
    
    background-color: var(--white);

    

    input, textarea {
        width: 100%;

        border-radius: 0.5rem;
        border: none;
        border: 1px solid rgba(0,0,0, 0.3);

        padding: 0.5rem;
        overflow-y: hidden;

        resize: none;
    }

    input {
        height: 3rem;
        margin: 2rem 0;
    }

    .buttons {

        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        margin-top: 1rem;

        button {

            color: var(--blue-lowSaturation);
            background-color: transparent;

            font-size: 1.2rem;
            font-weight: 600;

            border: none;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.7);
            }

        }
    }
}





`