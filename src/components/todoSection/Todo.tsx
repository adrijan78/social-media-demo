import { Alert } from '@mui/material'
import React from 'react'

interface Props{
    message:string,
    completed:boolean
}

const Todo = ({message,completed}:Props) => {
  return (
    <Alert severity={completed !== true? 'info':'success'}  sx={{borderRadius:"1rem",marginBottom:'1rem'}}>{message}</Alert>
  )
}

export default Todo