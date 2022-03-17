import { Container } from "./styles";
interface HeaderProps {             // Tipagens
    openMenu: () => void;
}

export function Header({ openMenu }: HeaderProps) {

    return(
        <Container onClick={openMenu}>                          {/* Quando clicar no ícone abre o Menu */}
            <img src="/images/menu.svg" alt="Botão do menu"  />         
        </Container>
    );
}