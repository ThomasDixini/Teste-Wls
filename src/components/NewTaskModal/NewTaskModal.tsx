import { useState, FormEvent } from 'react';
import Modal from 'react-modal'
import { useTasks } from '../../hooks/useTasks';
import { api } from '../../services/api';

interface NewTaskModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}


export function NewTaskModal({ isOpen, onRequestClose} : NewTaskModalProps) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const { createTask } = useTasks();


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
                Criar Tarefa
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

                <div className="buttons">
                    <button type="button" onClick={onRequestClose}>
                        Cancelar
                    </button>

                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </Modal>
    );
}