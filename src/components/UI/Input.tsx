import { Box, Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useMutation } from 'react-query';
import http from '../../api/http';
import { useCommentsStore } from '../../store/commentsStore';
import { useState } from 'react';

const Input = () => {
  const [text,setText]=useState('');
  const {addComment}=useCommentsStore();

  const{mutate}=useMutation({
    mutationFn:http.Comments.createPostComment,
    onSuccess:(comment:any)=>{
      addComment(comment);
      setText('')
    }
  })
  return (
  <Box sx={{display:'flex',marginTop:'1rem'}}>
  <TextField onChange={e=>setText(e.target.value)} value={text} sx={{width:"90%",marginLeft:"0.2rem",backgroundColor:"white",borderRadius:"1rem"}} id="outlined-basic" label="Place your comment here...." variant="outlined" />
  <Button size="small" onClick={()=>{mutate({postId:1,email:'userTest@test.com',body:text})}}><SendIcon/></Button>
  </Box>
    
  )
}

export default Input