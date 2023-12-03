import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { TodoItem } from "../models/TodoItem";
import { create } from "zustand";

interface TodoStore {
  todos: TodoItem[];
  draggedTodo: number;
  setTodos: (todos: TodoItem[]) => void;
  changeTodoStatus: (todoId: number, status: boolean) => void;
  createTodoItem: (todo: TodoItem) => void;
  deleteTodoItem: (todoId: number) => void;
  setDraggedTodo: (todoId: number) => void;
  //   moveTodo: (id: number, status: string) => void;
  //
}

const store = immer((set: any) => ({
  todos: [] as TodoItem[],
  draggedTodo: -1,

  //Actions

  setTodos: (todos: TodoItem[]) =>
    set((store: any) => {
      store.todos = todos;
    }),

  createTodoItem: (todo: TodoItem) =>
    set((store: any) => store.todos.push(todo)),

  deleteTodoItem: (todoId: number) =>
    set((store: any) => store.todos.filter((t: TodoItem) => t.id !== todoId)),

  setDraggedTodo: (todoId: number) => set({ draggedTodo: todoId }),

  changeTodoStatus: (todoId: number, status: boolean) => {
    set((store: any) => {
      store.todos = store.todos.map((todo: TodoItem) => {
        return todo.id === todoId ? { ...todo, completed: status } : todo;
      });
    });
  },
}));

export const useTodosStore = create<TodoStore>()(
  persist(devtools(store), { name: "store" })
);
