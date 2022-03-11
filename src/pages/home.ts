import styled from 'styled-components';


export const Container = styled.main`

max-width: 375px;
width: 100%;
    
padding: 1rem;

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
        .tasks-list {

            display: grid;
            grid-template-rows: repeat(2, 1fr);
            
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
    }


`