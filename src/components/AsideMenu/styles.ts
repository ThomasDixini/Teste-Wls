import styled from 'styled-components';

interface AsideMenuProps {
    isActive: boolean;
}

export const Container = styled.aside<AsideMenuProps>`

    max-width: 15rem;
    width: 100%;
    padding: 2rem;

    visibility: ${ props => props.isActive ? 'visible' : 'hidden'};              /* O menu só mostrará se isActive for true */ 
    
    position: fixed;
    bottom: 0;
    top: 0;

    background-color: var(--blue-200);

    nav {

        color: var(--white);

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        
        div {
            
            display: flex;
            
            .user {
                display: flex;
                flex-direction: column;

                line-height: 1.5rem;
                
                margin-left: 1rem;

            }

        }

        a {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            margin: 0 auto;
            padding: 0 1.5rem;
            height: 3rem;
            border-radius: 0.5rem;

            img {
                width: 20px;
                height: 20px;
            }

            &.active {
                background-color: var(--blue-500);
            }
        }

    }

@media(min-width: 1100px){              /* Se a tela for maior que 1099px o menu ficará fixo na tela */
    visibility: visible;
}


`