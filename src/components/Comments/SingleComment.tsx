import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material'
import React from 'react'

interface Props{
    person:string,
    comment:string,
    personImage:string,
}

const SingleComment = ({person,comment,personImage}:Props) => {
  return (
    <><ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt={person} src={personImage} />
    </ListItemAvatar>
    <ListItemText
      primary={person}
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.secondary"
          >
          {comment}
          </Typography>
        </React.Fragment>
      }
    />
  </ListItem>
  <Divider variant="inset" component="li" /></>
    
  )
}

export default SingleComment