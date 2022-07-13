import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// useDispatch, funciones que llamaremos para poder actualizar un estado
// useSelector, forma en la que podremos traer los datos que estan en el estado

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>} />
          <Route path='/create-task' element={<TaskForm/>} />
          <Route path='/edit-task/:id' element={<TaskForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;