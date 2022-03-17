import styled from 'styled-components';


export const Container = styled.header`

margin: 1rem 1rem 0;

@media(min-width: 1100px){ 
                                    
    img[src="/images/menu.svg"]{        /* Quando a tela for menor que 1100px de largura o Menu não vai ficar fixo na tela */ 
         display: none;
    }

}

`