import { Paper, Typography, Divider, Alert } from "@mui/material"
import ListIcon from '@mui/icons-material/List';
import Todo from "./Todo";

const TodoSection = () => {
  return (
    <Paper sx={{padding:"1rem",marginX:"0.5rem",height:"100%",backgroundColor:"white",maxHeight:'78vh',borderRadius:"1rem",marginBottom:'1rem',overflowY:'auto'}}>
         <Typography variant='h5' color={"grey"}><ListIcon fontSize='large' sx={{verticalAlign:'middle'}}/>Your TODOs:</Typography>
         <Divider sx={{marginY:"0.5rem"}}/>
         <Todo message="Todo1" completed={false}/>
         <Todo message="Todo2" completed={false}/>
         <Todo message="Todo3" completed={true}/>
    </Paper>
  )
}

export default TodoSection