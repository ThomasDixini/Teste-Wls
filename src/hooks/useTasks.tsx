import { GetServerSideProps } from 'next';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
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
}

export const TasksContext = createContext<TaskContextData>({} as TaskContextData);

export function TasksProvider({ children }: TasksProviderProps) {

    

    async function createTask(taskInput: TaskInput) {

        await api.post(`/`, {
            ...taskInput,
            situation: 'inprogress',
        });

    }

    return(
        <TasksContext.Provider value={{createTask}}>
            {children}
        </TasksContext.Provider>
    );

}

export function useTasks() {
    const context = useContext(TasksContext);

    return context;
}

