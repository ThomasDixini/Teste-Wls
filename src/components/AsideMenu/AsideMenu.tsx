import { Container } from "./styles";


export function AsideMenu(props) {

    return(
        <Container isActive={props.isOpen}>
            <nav>
                <div>
                    <img src="/images/user.svg" alt="Usuário" />
                    <div className="user">
                        <h4> Nome: </h4>
                        <p> Função </p>
                    </div>
                </div>
                <hr />
                <a className="active" onClick={props.closeMenu}>
                    <img src="/images/list.svg" alt="Logo de Tarefas" />
                    <p> Tarefas </p>
                </a>

                <a>
                    <img src="/images/information.svg" alt="Logo de informação" />
                    <p> Sobre </p>
                </a>
            </nav>
        </Container>
    );
}