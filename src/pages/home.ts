import styled from 'styled-components';


export const Container = styled.main`

max-width: 375px;
width: 100%;
    
padding: 1rem;
margin: 0 auto;

    .search {

        display: flex;
        justify-content: center;

        input {
            padding: 0.5rem;
            height: 3rem;
            margin: 2rem auto; 

            border-radius: 0.5rem;
            border: none;

            width: 100%;

            background: var(--black-lowOpacity);
        }
    
    }

    .main {

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .tasks-list {

            width: 100%;
            
            h1 {
                font-size: 2.2rem;
                text-align: left;
            }

            .task {

               
                margin-top: 1.5rem;

                padding: 1.5rem;
                color: var(--white);
                background: var(--blue-200);

                border-radius: 0.5rem;

                span {
                    display: flex;
                    justify-content: space-between;

                    font-weight: 900;
                    line-height: 2rem;
                }

                .button-status {
                    background: var(--white);
                    color: var(--black);
                    font-weight: 700;

                    margin-top: 1.5rem;
                    padding: 0.5rem;
                    width: 35%;
                    border-radius: 0.25rem;

                    display: flex;
                    justify-content: space-between;


                }
            }
        }

        button {

            padding: 0 2rem;
            height: 4rem;
            margin-left: auto;
            margin-top: 2rem;
            
            border-radius: 0.5rem;
            border: none;

            background: var(--blue-200);
            color: var(--white);

            display: flex;
            justify-content: space-between;
            align-items: center;

            transition: filter 0.2s;

            img {
                margin-right: 1rem;
            }

            &:hover {
                filter: brightness(0.8);
            }          
        }
    }

    


& {
    @media(min-width: 1200px){
        max-width: 600px;
        width: 100%;
        
    }

    @media(min-width: 600px){
        max-width: 500px;
        width: 80%;

    }

    @media(max-width: 400px){
        .main {
            button {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
            }
        }
    }
}


`