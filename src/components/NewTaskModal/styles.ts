import styled from 'styled-components';


interface ButtonProps {             // Tipagens
    isActive: boolean;
}

interface StatusProps {
    isVisible: boolean;
}


export const Status = styled.div<StatusProps>`                              /* Div que contém os botões de status */

    display: ${props => props.isVisible ? "visible" : "none !important"};   /* Caso a variavel isVisible for true, mostrará o display, caso for false não mostrará nada */

`

export const Button = styled.button<ButtonProps>`

    background-color: ${props => props.isActive ? "#FFFFFF" : "transparent"};           /* Caso isActive for true o background vai ser branco com o texto preto, caso for false */
    color: ${props => props.isActive ? "#000000" : "rgba(0,0,0, 0.5)"}                  /*   o background vai ser transparent e a cor vai ser preto com 50% da opacidade */

`