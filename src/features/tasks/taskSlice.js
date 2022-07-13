import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Tarea 1",
    description: "Tarea 1 descripcion",
    completed: false,
  },
  {
    id: "2",
    title: "Tarea 2",
    description: "Tarea 2 descripcion",
    completed: false,
  },
  {
    id: "3",
    title: "Tarea 3",
    description: "Tarea 3 descripcion",
    completed: false,
  },
];

// Slice.- es una parte del contenedor que tiene estados
// reducers se comunica con actions y store, funciones(actions) que será para añadir, eliminar, actualizar estados
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const found = state.find((task) => task.id === action.payload); // si lo encuentra retorna objeto, si no undefined
      if (found) state.splice(state.indexOf(found), 1);
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const found = state.find((task) => task.id === id);
      if (found) {
        found.title = title;
        found.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions; // exportar para usar desde otra parte de la app
export default taskSlice.reducer;
