import { useState } from "react";
import { Container } from "./styles";


export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen);

    function handleOpenMenu() {
        setMenuOpen(true);
    }


    return(
        <Container onClick={handleOpenMenu}>
            <img src="/images/menu.svg" alt="Botão do menu"  />
        </Container>
    );
}