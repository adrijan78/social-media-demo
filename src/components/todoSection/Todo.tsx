import { Alert } from '@mui/material'
import { useTodosStore } from '../../store/todoStore'
import { TodoItem } from '../../models/TodoItem'
import { useMutation } from 'react-query'
import http from '../../api/http'

interface Props{
   todo:TodoItem,
   isReadOnly:boolean
}

const Todo = ({todo,isReadOnly}:Props) => {


  const {mutateAsync:editTodo} = useMutation({
    mutationFn:http.Todos.editTodo,
    onSuccess:(data:any,error)=>{
      console.log("Success: ", data)
    },
    onError:(error)=>{
      console.log("Error: ", error)
    }
  })

  const setDraggedTodo= useTodosStore(state=>state.setDraggedTodo)
  return (
    <div draggable={!isReadOnly} onDragStart={()=>{setDraggedTodo(todo.id); editTodo({...todo,completed:!todo.completed})}}>
      <Alert  severity={todo.completed !== true? 'info':'success'}
       sx={{borderRadius:"1rem",marginBottom:'1rem'}}>{todo.title}</Alert>
  
    </div>
    )
}

export default Todo