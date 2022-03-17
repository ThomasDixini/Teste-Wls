import { useState, FormEvent } from 'react';
import Modal from 'react-modal';

import { useTasks } from '../../hooks/useTasks';

import { Button, Status } from './styles';

interface NewTaskModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
    isEditing: boolean,
    toCreate: () => void;
}


export function NewTaskModal({ isOpen, onRequestClose, isEditing, toCreate}: NewTaskModalProps) {

    const [title, setTitle] = useState("");                 // Pega o título da tarefa
    const [description, setDescription] = useState("");     // pega a descrição da tarefa
    const [type, setType] = useState("inprogress");         // Pega o status da tarefa
    

    const { createTask, updatetask } = useTasks();          // Chamando as duas funções que existe no hook


    async function handleCreateNewTask(event: FormEvent) {  // Cria uma nova tarefa
        event.preventDefault();

        await createTask({
            title,
            description,
        });

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}

            overlayClassName="react-modal-overlay"
            className="react-modal-content"

            ariaHideApp={false}
        >
            
                <h1>
                    { isEditing ? "Editar tarefa" : "Criar Tarefa"}         {/* isEditing define se o modal é de criação ou de edição */}
                </h1>
            

            <form onSubmit={handleCreateNewTask}>

                <input                // Input do título
                type="text" 
                placeholder="Nome"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />

                <textarea            // Input da descrição
                rows={4} 
                placeholder="Descrição Grande" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />

                <Status className="status" isVisible={isEditing}>           {/* Botões aonde fica os status: Em progresse e Concluído */}
                    <Button 
                    type="button"
                    onClick={() => {setType('inprogress'); updatetask(type)}}
                    isActive={type === 'inprogress'}
                    >
                        Em progresso
                    </Button>

                    <Button 
                    type="button"
                    onClick={() => {setType('concluded'); updatetask(type)}}
                    isActive={type === 'concluded'}
                    >
                        Concluído
                    </Button>
                </Status>

                <div className="buttons">                               {/* Botões que saí ou salva os dados do modal */}
                    <button type="button" onClick={ () => { onRequestClose();  toCreate()} }>
                        Cancelar
                    </button>

                    <button type="submit" onSubmit={handleCreateNewTask}>
                        Salvar
                    </button>
                </div>
            </form>
        </Modal>
    );
}