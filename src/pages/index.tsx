import { Container } from "./home";

import searchImg from '../../public/images/search.svg';
import { useState } from "react";
import Head from "next/head";


export default function Home() {

  const [status, setStatus] = useState("concluded");



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
        </section>

        <button type="button">
          <img src="/images/add.svg" alt="Icone de Soma" />
          <p> Nova Tarefa </p>
        </button>
      </Container>
    </>
  )
}
