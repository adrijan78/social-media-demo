import { Box, Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const Input = () => {
  return (
  <Box sx={{display:'flex',marginTop:'1rem'}}>
  <TextField sx={{width:"90%",marginLeft:"0.2rem",backgroundColor:"white",borderRadius:"1rem"}} id="outlined-basic" label="Place your comment here...." variant="outlined" />
  <Button size="small"><SendIcon/></Button>
  </Box>
    
  )
}

export default Input