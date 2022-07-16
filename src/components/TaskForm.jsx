import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

function TaskForm() {
  const dispatch = useDispatch() // es una función que permite disparar eventos desde slice
  const navigate = useNavigate() // permite navegar entre páginas
  const params = useParams()
  const tasks = useSelector(state => state.tasks)
  const [task, setTask] = useState({
    title: '', 
    description: ''
  })

  useEffect(() => {
    if (params.id) {
      const found = tasks.find(task => task.id === params.id)
      setTask(found)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
        completed: false
      }))
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title">Tarea</label>
      <input type="text" placeholder="Título" name="title" onChange={handleChange} value={task.title} />
      <textarea name="description" placeholder="Descripción" onChange={handleChange} value={task.description}></textarea>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default TaskForm