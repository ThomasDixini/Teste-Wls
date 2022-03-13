import Modal from 'react-modal'

interface NewTaskModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}


export function NewTaskModal({ isOpen, onRequestClose} : NewTaskModalProps) {
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

            <form method="post">

                <input type="text" placeholder="Nome" />
                <textarea rows={4} placeholder="Descrição Grande" />

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