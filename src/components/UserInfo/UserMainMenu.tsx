import { Grid } from '@mui/material'
import UserAlbum from './UserAlbums'


const UserMainMenu = () => {
  return (
    <Grid container sx={{padding:"1rem"}} spacing={2}>
        <Grid item xs={12} sm={6} md={4} >
            <UserAlbum/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <UserAlbum/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <UserAlbum/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <UserAlbum/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <UserAlbum/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <UserAlbum/>
        </Grid>
    </Grid>
  )
}

export default UserMainMenu