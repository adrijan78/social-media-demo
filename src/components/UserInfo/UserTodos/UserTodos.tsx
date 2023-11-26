import { Box, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TodoItem } from '../../../models/TodoItem';
import http from '../../../api/http';
import LoadingIndicator from '../../UI/LoadingIndicator';


const UserTodos = () => {

    const [todos,setTodos]=useState<TodoItem[]| undefined>(undefined);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        http.Todos.getTodosForUser(1).then(response=>{
            setTodos(response);
            setLoading(false)
        })
        
    },[])

  return (
    <Grid container  component={Paper} spacing={2} sx={{borderRadius:"1rem", maxHeight:"82.5vh",marginTop:'0.1rem',marginX:'0.2rem',paddingY:"1.5rem",paddingX:"0.5rem",overflowY:'auto'}}>
          {loading && <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><LoadingIndicator message={`Loading todos`}/></Grid> }
          <Grid xs={12} sm={6} md={6} lg={6}>
              <Box sx={{backgroundColor:'rgb(172 185 190)', minHeight:"50vh"}}>
                In progress
              </Box>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
              <Box sx={{backgroundColor:'rgb(172 185 190)', minHeight:"50vh"}}>
                Done
              </Box>
          </Grid>
    </Grid>
  )
}

export default UserTodos