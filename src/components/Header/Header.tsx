import { useState } from "react";
import { Container } from "./styles";

interface HeaderProps {
    openMenu: () => void;
}

export function Header({ openMenu }: HeaderProps) {

    return(
        <Container onClick={openMenu}>
            <img src="/images/menu.svg" alt="Botão do menu"  />
        </Container>
    );
}