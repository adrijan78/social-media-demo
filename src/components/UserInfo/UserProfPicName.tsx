import { Avatar, Grid, Tab, TabProps, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom';
import { useUsersStore } from '../../store/usersStore';



const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>;

const UserProfPicName = () => {
    const [value, setValue] = React.useState(0);
    const activeUser = useUsersStore(state=>state.currentUser)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
  return (
    <Grid container className='userPicBg'>
        <Grid item xs={4} sx={{display:'flex', alignItems:'center',padding:"2rem"}}>
        <Avatar
        alt={activeUser.name}
        src="https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg"
        sx={{ width: 150, height: 150 }}
        />
        <Typography variant='h5' sx={{marginLeft:"1rem"}} color={"white"}>{activeUser.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} sx={{display:'flex', alignItems:'end',justifyContent:"center"}}>
        <Tabs value={value} onChange={handleChange}>
        <LinkTab  component={Link} to="albums" label="Albums"/>
        <LinkTab  component={Link} to="posts" label="Posts"/>
        <LinkTab  component={Link} to="todos" label="Todos"/>           
        </Tabs>    
        </Grid>
     
    </Grid>

  )
}
export default UserProfPicName