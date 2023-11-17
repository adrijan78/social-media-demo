import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { CardHeader, Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';



interface Props{
    title:string
    authorImg:string
    hasImage:boolean,
    description?:string
    isReadOnly?:boolean
    imageUrl?:string,
    
}


export default function Post({title,authorImg,hasImage,description,isReadOnly,imageUrl}:Props) {



    const randomImgId = Math.floor(Math.random()*100);
    console.log("Has IMAGE",hasImage)
  return (
    <>
    <Card sx={{ maxWidth: !isReadOnly?"90%":null,backgroundColor:"#f7faff",marginX:"auto",borderRadius:"1rem",marginBottom:'1rem'}}>   
      {hasImage && <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt='card image'
      />}
      <CardContent>
      <CardHeader
      sx={{justifyContent:'start', display:"flex", textAlign:'start' ,height:"132px", overflowY:"auto"}}
        avatar={
          <Avatar sx={{ bgcolor:"#1976d2" }} src={authorImg} aria-label="recipe">
           
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      {<Typography variant="body2" color="text.secondary">
          {description}
        </Typography>}
      </CardContent>
      {!isReadOnly &&<CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button  size="small"><ThumbUpRoundedIcon /></Button>
        <Button size="small" ><ChatBubbleRoundedIcon/></Button>
        <Button size="small"><SendRoundedIcon/></Button>
      </CardActions>}
    </Card>
    </>     
  );
}