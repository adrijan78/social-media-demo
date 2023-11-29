import { Grid, Paper } from '@mui/material'
import Sidebar from '../Sidebar/Sidebar'
import Post from '../UI/Post'
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PostItem } from '../../models/PostItem';
import http from '../../api/http';
import LoadingIndicator from '../UI/LoadingIndicator';


const PostsList = () => {

  const {type}= useParams();
   const [posts,setPosts] = useState<PostItem[]|undefined>(undefined);
   const [loading,setLoading] =useState(false);

  useEffect(()=>{
    setLoading(true);
    if(type === 'posts'){
      http.Posts.getAllPosts().then(res=>{
        setPosts(res);
        setLoading(false);
      })
    }else{
      http.Posts.getAllPhotos().then(res=>{
        setPosts(res);
        setLoading(false);
      })
    } 
  },[type])

  

  return (
    <Grid container  component={Paper} sx={{borderRadius:"1rem", maxHeight:"82.5vh", minHeight:"82.5vh",marginTop:'0.1rem',marginX:'0.2rem',paddingTop:"1.5rem",overflowY:'auto'}}>
        
        {loading && <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><LoadingIndicator message={`Loading ${type}`}/></Grid> }
        
        {!loading && posts?.map(el=>{
          return  <Grid key={el.id} item xs={12} sm={6} md={6} lg={4} >
          <Post  
          title={el.title}
           description={el.description}
           hasImage={el.thumbnailUrl === undefined?false:true}
           imageUrl={el.thumbnailUrl}
           authorImg='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg' />
      </Grid>
        })} 
        <Sidebar/>
    </Grid>
    
  )
}

export default PostsList