import { Container } from "./home";

import Head from "next/head";

import { useState } from "react";
import Modal from 'react-modal';
import { NewTaskModal } from "../components/NewTaskModal/NewTaskModal";
import { AsideMenu } from "../components/AsideMenu/AsideMenu";


export default function Home() {

  const [status, setStatus] = useState("concluded");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenMenu() {
    setModalIsOpen(true);
  }

  function handleCloseMenu() {
    setModalIsOpen(false);
  }


  return (
    <>
      <Head>
        <title>Tarefas</title>
      </Head>

      <Container>

        <section className="search">

          <input type="text" placeholder="Procurar tarefas" />

        </section>

        <section className="main">
          <h1>
            Tarefas
          </h1>

          <div className="tasks-list">
            <div className="task">

              <span>
                Nome:
                <img src="/images/etc.svg" alt="Etc" />
              </span>

              <p>Descrição da tarefa</p>

              <div className="button-status">
                <img src="/images/checked.svg" alt="Concluído" />
                Concluído
              </div>

            </div>

            <div className="task">

              <span>
                Nome:
                <img src="/images/etc.svg" alt="Etc" />
              </span>

              <p>Descrição da tarefa</p>

              <div className="button-status">
                <img src="/images/checked.svg" alt="Concluído" />
                Concluído
              </div>

            </div>
          </div>

          <button type="button" onClick={handleOpenMenu}>
            <img src="/images/add.svg" alt="Icone de Soma" />
            <p> Nova Tarefa </p>
          </button>
        </section>

        
      </Container>

      <AsideMenu />
      <NewTaskModal isOpen={modalIsOpen} onRequestClose={handleCloseMenu}/>
    </>
  )
}
