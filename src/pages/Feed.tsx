import {  Grid, Paper } from '@mui/material'
import TodoSection from '../components/TodoSection/TodoSection'
import { Outlet } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

import  IconButton  from '@mui/material/IconButton';


const Feed = () => {
  
  return (
    <Grid container mt={2}>
      <Grid item xs={0} sm={0} md={1} lg={1} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
     
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Outlet/>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} sx={{display:"flex",justifyContent:'center'}}>
        <TodoSection/>
      </Grid>
    </Grid>
  )
}

export default Feed