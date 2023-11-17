import { Paper, Typography, Divider, Alert } from "@mui/material"
import ListIcon from '@mui/icons-material/List';

const TodoSection = () => {
  return (
    <Paper sx={{padding:"1rem",marginX:"0.5rem",height:"100%",backgroundColor:"white",maxHeight:'78vh',borderRadius:"1rem",marginBottom:'1rem',overflowY:'auto'}}>
         <Typography variant='h5' color={"grey"}><ListIcon fontSize='large' sx={{verticalAlign:'middle'}}/>Your TODOs:</Typography>
         <Divider sx={{marginY:"0.5rem"}}/>
        <Alert severity="info"  sx={{borderRadius:"1rem",marginBottom:'1rem'}}>Upload new photo</Alert>
        <Alert severity="info"  sx={{borderRadius:"1rem",marginBottom:'1rem'}}>Change the username</Alert>
        <Alert severity="info"  sx={{borderRadius:"1rem",marginBottom:'1rem'}}>See Deni's new post</Alert>
    </Paper>
  )
}

export default TodoSection