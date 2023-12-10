import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import http from '../api/http';
import { useUsersStore } from '../store/usersStore';
import { User } from '../models/User';
import { useState } from 'react';
import { LoginUser } from './../models/DTO/LoginUser';
import { useNavigate, useNavigation } from 'react-router';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
    const[validUser,setValidUser]=useState(true);
    const navigation =useNavigate();
 
  const setLoggedUser = useUsersStore(state=>state.setLoggedUser)

  const {register,handleSubmit,reset,formState:{errors}} =useForm({
    defaultValues:{
        email:'',
        password:'',
    },
  }) 
  
  const{mutate}=useMutation({
    mutationFn:http.Users.login,
    onSuccess:(data:User)=>{
        if(data === undefined){
            setValidUser(false);
        }else{
            setValidUser(true);
            setLoggedUser(data);
           
            reset();
            
            navigation('/home/feed/photos')
        }
       
    },
    onError:(error:any)=>{
      console.log("Error occured",errors)
      setValidUser(false);
    }
  })

  const submitForm=(formData:any)=>{
    const loginUser ={
        id:formData.password,
        email:formData.email
    };
    mutate(loginUser);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              fullWidth
              id="email"
              label="Email Address"
              {...register("email",{required:'Email is required',pattern:{
                value:  /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message:"Wrong email format"
              }})}
              error={errors?.email !== undefined}
              helperText={errors.email?.message}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              {...register("password",{required:'Password is required'})}
              error={errors?.password  !== undefined}
              helperText={errors.password?.message}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           {!validUser &&
           <Typography sx={{width:'100%',paddingX:'auto'}} variant='h5' color='red'>User doesn't exist</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}