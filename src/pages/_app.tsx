import { AppProps } from 'next/app';

import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header/Header';

import { useState } from 'react';
import { TasksProvider } from '../hooks/useTasks';


function MyApp({ Component, pageProps }: AppProps) {

  const [menuOpen, setMenuOpen] = useState(false);


    function handleOpenMenu() {
        setMenuOpen(true);
    }

    function handleCloseMenu() {
      setMenuOpen(false);
    }

  return (
    <TasksProvider>
      <Header openMenu={handleOpenMenu}/>

      <Component {...pageProps} isOpen={menuOpen} closeMenu={handleCloseMenu}/>
      <GlobalStyle />
    </TasksProvider>
  );
}

export default MyApp
