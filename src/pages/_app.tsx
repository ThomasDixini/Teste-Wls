import { AppProps } from 'next/app';
import { useState } from 'react';

import { TasksProvider } from '../hooks/useTasks';

import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {

  const [menuOpen, setMenuOpen] = useState(false);      // Estado que diz se o Menu do lado está aberto


    function handleOpenMenu() {             // Seta o estado para Aberto
        setMenuOpen(true);
    }

    function handleCloseMenu() {            // Seta o estado para fechado
      setMenuOpen(false);
    }

  return (
    <TasksProvider>                         { /* Provider que compartilha o meu hook useTasks() com toda a aplicação */}
      <Header openMenu={handleOpenMenu}/>

      <Component {...pageProps} isOpen={menuOpen} closeMenu={handleCloseMenu}/>
      <GlobalStyle /> {/* Estilos Globais da aplicação */}
    </TasksProvider>
  );
}

export default MyApp
