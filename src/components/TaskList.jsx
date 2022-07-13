import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>Lista de Tareas</h1>
        <Link to='/create-task'>
          Crear Tarea
        </Link>
      </header>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>x</button>
            <Link to={`/edit-task/${task.id}`}>
              Editar
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList