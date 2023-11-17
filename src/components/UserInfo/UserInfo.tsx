import { Box, Divider, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const UserInfo = () => {
  return (
    <Box sx={{minHeight:"100%",padding:"1rem"}}>
        <Box>
            <Box sx={{marginY:"1rem"}}>
            <Typography variant="h5" >
            <PersonIcon fontSize='medium'/>
              Full Name
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
              Ron Jeremy
              </Typography>
            </Box>
            <Divider/>
            <Box sx={{marginY:"2rem"}}>
            <Typography variant="h5" >
            <AlternateEmailIcon fontSize='medium'/>
              Email
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
              ronFcknJeremy@hotmail.com
              </Typography>
            </Box>
            <Divider/>
            <Box sx={{marginY:"2rem"}}>
            <Typography variant="h5" >
            <BusinessIcon fontSize='medium'/>
              Company
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
              RJEnterprice
              </Typography>
            </Box>
            <Divider/>
            <Box sx={{marginY:"2rem"}}>
            <Typography variant="h5" >
            <LocalPhoneIcon fontSize='medium'/>
              Phone Number
            </Typography>
            <Typography  color="text.secondary" gutterBottom>
              
             070/263-122
              </Typography>
            </Box>

        </Box>
    </Box>
  )
}

export default UserInfo