import { Box, Divider, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useUsersStore } from '../../store/usersStore';

const UserInfo = () => {
  const activeUser =useUsersStore(state=>state.currentUser)
  return (
    <Box sx={{minHeight:"100%",padding:"1rem"}}>
        <Box>
            <Box sx={{marginY:"1rem"}}>
            <Typography variant="h5" >
            <PersonIcon fontSize='medium'/>
              Full Name
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
              {activeUser.name}
              </Typography>
            </Box>
            <Divider/>
            <Box sx={{marginY:"2rem"}}>
            <Typography variant="h5" >
            <AlternateEmailIcon fontSize='medium'/>
              Email
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
            {activeUser.email}
              </Typography>
            </Box>
            <Divider/>
            <Box sx={{marginY:"2rem"}}>
            <Typography variant="h5" >
            <BusinessIcon fontSize='medium'/>
              Company
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
            {activeUser.company.name}
              </Typography>
            </Box>
            <Divider/>
            <Box sx={{marginY:"2rem"}}>
            <Typography variant="h5" >
            <LocalPhoneIcon fontSize='medium'/>
              Phone Number
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
            {activeUser.phone}
              </Typography>
            </Box>

        </Box>
    </Box>
  )
}

export default UserInfo