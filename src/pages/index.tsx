
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useCallback, useState } from "react";

import { NewTaskModal } from "../components/NewTaskModal/NewTaskModal";
import { AsideMenu } from "../components/AsideMenu/AsideMenu";

import { Container } from "./home";

import { api } from "../services/api";




export default function Home(props) {

  const [status, setStatus] = useState("inprogress");
  const [modalIsOpen, setModalIsOpen] = useState(false);


  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  

  return (
    <>
      <Head>
        <title>Tarefas</title>
      </Head>

      <Container isActive={props.isOpen}>

        <section className="search">

          <input type="text" placeholder="Procurar tarefas" />

        </section>

        <section className="main">
          <h1>
            Tarefas
          </h1>

          <div className="tasks-list">
            {
              props.tasks.map(task => {
                return (
                  <div className="task" key={task.guid}>

                    <span>
                      {task.title}
                      <img src="/images/etc.svg" alt="Etc" />
                    </span>

                    <p>{task.description}</p>

                    <div className="button-status">
                      <img src="/images/checked.svg" alt="Concluído" />
                      {task.situation}
                    </div>

                  </div>
                );
              })
            }

          </div>

          <button type="button" onClick={handleOpenModal}>
            <img src="/images/add.svg" alt="Icone de Soma" />
            <p> Nova Tarefa </p>
          </button>
        </section>


      </Container>

      <AsideMenu isOpen={props.isOpen} closeMenu={props.closeMenu} />
      <NewTaskModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const tasks = await api.get(``).then(response => response.data)

  return {
    props: {
      tasks,
    }
  }


}
