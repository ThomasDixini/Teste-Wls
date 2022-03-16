import { useState, FormEvent } from 'react';
import Modal from 'react-modal'
import { useTasks } from '../../hooks/useTasks';
import { api } from '../../services/api';
import { Button, Status } from './styles';


interface NewTaskModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
    isEditing: boolean,
    toCreate: () => void;
}


export function NewTaskModal({ isOpen, onRequestClose, isEditing, toCreate}: NewTaskModalProps) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("inprogress");
    
    

    const { createTask, updatetask } = useTasks();



    async function handleCreateNewTask(event: FormEvent) {
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
                    { isEditing ? "Editar tarefa" : "Criar Tarefa"}
                </h1>
            

            <form onSubmit={handleCreateNewTask}>

                <input 
                type="text" 
                placeholder="Nome"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />

                <textarea 
                rows={4} 
                placeholder="Descrição Grande" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />

                <Status className="status" isVisible={isEditing}>
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

                <div className="buttons">
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