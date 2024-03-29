import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, TextField } from '@mui/material';
import http from '../../../api/http';
import { usePostsStore } from '../../../store/postsStore';
import { useMutation, useQueryClient } from 'react-query';
import { PostItem } from '../../../models/PostItem';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {

  const queryClient = useQueryClient();
  const {addPost}=usePostsStore();
  const {register,handleSubmit,reset,formState:{errors}}=useForm({
    defaultValues:{
      title:'',
      body:'',
    }
  });
  const { onClose, open } = props;


 const {mutate}= useMutation({
    mutationFn: http.Posts.createPost,
    onSuccess:(data:PostItem,variables)=>{
     queryClient.invalidateQueries({queryKey:['userPosts']}).then(_=>{
      addPost(data);
     })
      reset();
      onClose();
    }
  })


  const onFormSubmit=(data:any)=>{
   mutate({...data, userId:1,thumbnailUrl:undefined})  
  }

  return (
    <Dialog onClose={onClose} open={open}  >
      <DialogTitle sx={{backgroundColor:'#1976d2', color:'white'}}>Add new Post Item</DialogTitle>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box sx={{padding:"1rem", minWidth:'300px', minHeight:'300px'}}> 
        <TextField 
         {...register("title",{required:'Post title is required'})}
          sx={{width:"100%"}}  label="Post title"
          error={errors.title ? true:false}
          helperText={errors.title?.message}
          variant="outlined" />
        <TextField sx={{width:"100%",marginTop:'1rem'}}
          {...register("body",{required:"Post description is required"})}
           rows={3} multiline id="body"
           error={errors.body ? true:false}
           helperText={errors.title?.message}
           label="Description" variant="outlined" />

        </Box>
        <Box sx={{display:'flex', justifyContent:'end',marginBottom:'0.5rem', marginRight:'1rem'}}>
            <Button type='button' sx={{mr:'0.5rem'}} onClick={()=>{onClose();reset()}}>Close</Button>
            <Button type='submit' variant='contained'>Submit</Button>
        </Box>
        
      </form>

      
    </Dialog>
  );
}

export default function AddPost() {
  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Button variant="outlined" onClick={handleClickOpen}>
       Add New Post
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}