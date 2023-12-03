import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface Props {
  message?: string
}

export default function LoadingIndicator({ message = 'Loading...' }: Props) {
  return (
     
          <Box>
            <Box className="loader">
              
            </Box>
            <Typography variant='h5' sx={{paddingTop:"1.5rem"}} >{message}</Typography>
              
          </Box>
     
  )
}