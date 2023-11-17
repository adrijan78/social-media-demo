import { Avatar, Grid, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const UserProfPicName = (props: Props) => {
    const [value, setValue] = React.useState(2);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
  return (
    <Grid container className='userPicBg'>
        <Grid item xs={4} sx={{display:'flex', alignItems:'center',padding:"2rem"}}>
        <Avatar
        alt="Remy Sharp"
        src="https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg"
        sx={{ width: 150, height: 150 }}
        />
        <Typography variant='h5' sx={{marginLeft:"1rem"}} color={"white"}>Test User</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} sx={{display:'flex', alignItems:'end',justifyContent:"center"}}>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Albums" />
        <Tab label="Posts"  />
        <Tab label="Todos" />
        </Tabs>
    
        </Grid>
        
        
    </Grid>
    
  )
}

export default UserProfPicName