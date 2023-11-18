import { Grid, Paper } from '@mui/material'
import Sidebar from '../Sidebar/Sidebar'
import Post from '../UI/Post'
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PostItem } from '../../models/PostItem';
import axios from 'axios';


const PostsList = () => {

  const [posts,setPosts] = useState<PostItem[]|undefined>(undefined);

  useEffect(()=>{
    axios.get<PostItem[]>(`https://jsonplaceholder.typicode.com/users/1/posts`,{
      params: {
        _limit: 30
       }
    }).then(res=>{
      
    setPosts(res.data);
    }).catch(err=>{
      console.log("error",err)
    })
  },[posts])



  return (
    <Grid container  component={Paper} sx={{borderRadius:"1rem", maxHeight:"82.5vh",marginTop:'0.1rem',marginX:'0.2rem',paddingTop:"1.5rem",overflowY:'auto'}}>
        
        {posts?.map(el=>{
          return  <Grid key={el.id} item xs={12} sm={6} md={6} lg={4} >
          <Post  title={el.title} description={el.description} hasImage={false}  authorImg='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg' />
      </Grid>
        })}
  
        <Sidebar/>
    </Grid>
  )
}

export default PostsList