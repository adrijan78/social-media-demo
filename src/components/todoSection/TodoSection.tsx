import { Paper, Typography, Divider } from "@mui/material"
import ListIcon from '@mui/icons-material/List';
import Todo from "./Todo";
import { useTodosStore } from "../../store/todoStore";

const TodoSection = () => {
  const inProgressTodos = useTodosStore(state=>state.todos.filter(t=>t.completed !== true))
  return (
    <Paper sx={{padding:"1rem",marginX:"0.5rem",height:"100%",backgroundColor:"white",maxHeight:'78vh',borderRadius:"1rem",marginBottom:'1rem',overflowY:'auto'}}>
         <Typography variant='h5' color={"grey"}><ListIcon fontSize='large' sx={{verticalAlign:'middle'}}/>Your TODOs:</Typography>
         <Divider sx={{marginY:"0.5rem"}}/>
         {inProgressTodos.map(t=>{
          return(<Todo isReadOnly={true} key={t.id} todo={t}/>)
         })}
    </Paper>
  )
}

export default TodoSection