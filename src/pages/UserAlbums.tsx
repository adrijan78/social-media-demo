import { Grid, Paper } from "@mui/material"
import { Outlet } from "react-router-dom"

const UserAlbums = () => {
  return (
    <Grid container  component={Paper} sx={{borderRadius:"1rem", maxHeight:"82.5vh",marginTop:'0.1rem',marginX:'0.2rem',paddingTop:"1.5rem",overflowY:'auto'}}>
        <Outlet/>
    </Grid>
  )
}

export default UserAlbums