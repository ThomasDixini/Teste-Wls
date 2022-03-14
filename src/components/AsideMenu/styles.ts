import styled from 'styled-components';



export const Container = styled.aside`

    max-width: 15rem;
    width: 100%;
    padding: 2rem;
    
    
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


`