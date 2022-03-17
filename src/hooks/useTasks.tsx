import { createContext, ReactNode, useContext } from 'react';

import { api } from '../services/api';

interface Task {

    guid: string;
    title: string;
    description: string;
    situation: string;

}

type TaskInput = Omit<Task, "guid" | "situation">;

interface TasksProviderProps {
    children: ReactNode,
}

interface TaskContextData {
    
    createTask: (task: TaskInput) => void;
    updatetask: (status: String) => void;

}

export const TasksContext = createContext<TaskContextData>({} as TaskContextData);

export function TasksProvider({ children }: TasksProviderProps) {

    
    const response = api.get("").then(response => response.data)        // Lista as tarefas
    
    async function createTask(taskInput: TaskInput) {       // Cria uma nova tarefa

        await api.post(`/`, {                   
            ...taskInput,
            situation: 'inprogress',
        });

    }

    async function updatetask(status: String) {         // Atualiza a tarefa

        await api.put(`/`, {
            response,
            situation: status,
        })

    }

    return(
        <TasksContext.Provider value={{createTask, updatetask}}>
            {children}
        </TasksContext.Provider>
    );

}

export function useTasks() {                    // Compartilha o contexto como hook useTasks()
    const context = useContext(TasksContext);

    return context;
}

