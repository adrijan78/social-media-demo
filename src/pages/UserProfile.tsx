import { Box, Grid } from '@mui/material'
import UserInfo from '../components/UserInfo/UserInfo'
import UserProfPicName from '../components/UserInfo/UserProfPicName'
import { Outlet } from 'react-router-dom'


const UserProfile = () => {
  return (
    <Box sx={{minHeight:"36rem"}}>
        <Grid container>
            <Grid item xs={12}>
                <UserProfPicName/>
            </Grid>
            </Grid>
            <Grid container sx={{marginTop:'1rem'}} >
            <Grid item sm={3} sx={{backgroundColor:"white",marginLeft:"1rem",borderRadius:"1rem",marginBottom:'1rem',height:"100%"}}>
                <UserInfo/>
            </Grid>
            <Grid item xs={8} sx={{backgroundColor:"white",marginX:"auto",borderRadius:"1rem",marginBottom:'1rem',height:"100%",justifyContent:'end'}}>
                <Outlet/>
            </Grid>
        </Grid>
    </Box>
    
  )
}

export default UserProfile