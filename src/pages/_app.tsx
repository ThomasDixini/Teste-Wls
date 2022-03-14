import { AppProps } from 'next/app';

import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header/Header';

import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [menuOpen, setMenuOpen] = useState(false);


    function handleOpenMenu() {
        setMenuOpen(true);
    }

    function handleCloseMenu() {
      setMenuOpen(false);
    }

  return (
    <>
      <Header openMenu={handleOpenMenu}/>

      <Component {...pageProps} isOpen={menuOpen} closeMenu={handleCloseMenu}/>
      <GlobalStyle />
    </>
  );
}

export default MyApp
