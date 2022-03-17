
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useState } from "react";

import { NewTaskModal } from "../components/NewTaskModal/NewTaskModal";
import { AsideMenu } from "../components/AsideMenu/AsideMenu";

import { api } from "../services/api";

import { Container, Content, Search } from "./home";



export default function Home(props) {             // Página principal da aplicação

  const [modalIsOpen, setModalIsOpen] = useState(false);  // Estado que diz se o modal está aberto
  const [isEditing, setIsEditing] = useState(false);    // Estado que diz se o modal é de criação ou de edição


  function handleOpenModal() {    // Abre o modal
    setModalIsOpen(true);
  }

  function handleCloseModal() {   // Fecha o modal
    setModalIsOpen(false);
  }

  function handleChangeModalToCreate() {    // Retorna o estado para false, fazendo assim o modal voltar a ser de criação
    setIsEditing(false);
  }


  return (
    <>
      <Head>
        <title>Tarefas</title>      {/* Coloca o título da página dinamicamente */}
      </Head>

      <Container isActive={props.isOpen}>

        {/* Barra de pesquisa */}

        <Search>      
          <input type="text" placeholder="Procurar tarefas" />
        </Search>

        {/* Conteúdo main (Onde fica as tarefas) */}

        <Content>
          <h1>
            Tarefas
          </h1>

          <div className="tasks-list">
            {
              props.tasks.map(task => {           {/* Para cada item no meu array de tasks, me retorna um Html com as propriedades corretas*/}
                return (
                  <div className="task" key={task.guid} >

                    <span >
                      {task.title}
                      <img src="/images/etc.svg" alt="Etc" onClick={() => { handleOpenModal(); setIsEditing(true)}}/>
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

          {/* Botão de adicionar nova tarefa */}

          <button type="button" onClick={handleOpenModal}>  {/* Quando clicado abre o modal */}
            <img src="/images/add.svg" alt="Icone de Soma" />
            <p> Nova Tarefa </p>
          </button>
        </Content>

      </Container>

      <AsideMenu isOpen={props.isOpen} closeMenu={props.closeMenu} />     {/* Componente que contém o menu ao lado da aplicação */}
      <NewTaskModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} isEditing={isEditing} toCreate={() => handleChangeModalToCreate()}/> {/* Modal da aplicação */}
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {

  const tasks = await api.get(`/`).then(response => response.data)  // Buscando as tarefas com consumo de API (SSR)
  
  return {      // Retorna as tasks como props, que assim poderemos usa-las na página
    props: {
      tasks,
    }
  }
}

