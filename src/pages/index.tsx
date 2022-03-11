import { Container } from "./home";

import searchImg from '../../public/images/search.svg';


export default function Home() {
  return (
    <Container>

      <section className="search">
        
          <input type="text" placeholder="Procurar tarefas" />
        
      </section>

      <section className="tasks-list">
        <h1>
          Tarefas
        </h1>

        <div className="task">
          
          <span>
            Nome:
            <img src="/images/etc.svg" alt="Etc" />
          </span>

          <p>Descrição da tarefa</p>

          <div>
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

          <div>
            <img src="/images/checked.svg" alt="Concluído" />
            Concluído
          </div>

        </div>
      </section>
    </Container>
  )
}
