import { useState } from 'react'
import { TodoItem } from '../../../models/TodoItem'
import Todo from '../../TodoSection/Todo'
import { Grid, Typography } from '@mui/material'
import { useTodosStore } from '../../../store/todoStore'


interface Props{
    title:string,
    areCompleted:boolean
}


const TodosList = ({title,areCompleted}:Props) => {
    const [drop,setDrop] =useState(false)
    
    const {changeTodoStatus,setDraggedTodo,draggedTodo}=useTodosStore();
    const todos = useTodosStore(store=>store.todos.filter(t=>t.completed === areCompleted))

    

  return (
  <Grid item xs={12} sm={6} md={6} lg={6} sx={{padding:'1rem',textAlign:'center'}}>
    <Typography  variant={"h5"}>{title}</Typography>
    <div onDragOver={e=>{setDrop(true);e.preventDefault()}} 
        onDragLeave={e=>{
          setDrop(false);
          console.log("Leave drop")
          e.preventDefault()
        }}
        onDrop={()=>{
          setDrop(false)
          changeTodoStatus(draggedTodo,areCompleted)
          setDraggedTodo(-1);
          
    }} style={{backgroundColor:'rgb(172 185 190)',borderRadius:'1rem', minHeight:"50vh",maxHeight:"50vh" ,overflowY:"auto",padding:'1rem'}}>
                {todos?.map((todo:TodoItem)=>{
                  return(<Todo key={todo.id} todo={todo} isReadOnly={false}/>)
                })}
              </div>
  </Grid>
  )
}

export default TodosList