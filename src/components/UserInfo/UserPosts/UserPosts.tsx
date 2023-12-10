import { Grid, Paper } from '@mui/material'
import Sidebar from '../../Sidebar/Sidebar'
import Post from '../../UI/Post'
import { useEffect, useState } from 'react';
import http from '../../../api/http';
import LoadingIndicator from '../../UI/LoadingIndicator';
import { usePostsStore } from '../../../store/postsStore';
import AddPost from '../../PostsList/AddPost/AddPost';
import { useQuery } from 'react-query';
import { PostItem } from '../../../models/PostItem';
import { useUsersStore } from '../../../store/usersStore';


const PostsList = () => {

  const {posts,setPosts,selectedPost} = usePostsStore()
  const activeUser = useUsersStore(state=>state.currentUser)
  
  const {data,isLoading:loading}=useQuery({
    queryKey:['userPosts'],
    enabled:activeUser !== null,
    queryFn:()=>http.Posts.getPostsByUser(1),
    onSuccess:(data:PostItem[])=>{
      setPosts(data);
    }
  })



  return (
    <Grid container  component={Paper} sx={{borderRadius:"1rem", maxHeight:"82.5vh",marginTop:'0.1rem',marginX:'0.2rem',paddingTop:"1.5rem",overflowY:'auto'}}>
        
        {loading && <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><LoadingIndicator message={`Loading posts`}/></Grid> }

        {!loading && <Grid  item xs={12} sm={12} md={12} lg={12} sx={{my:'1rem',ml:'1rem'}} > <AddPost/></Grid>}
        {!loading && posts?.map((el)=>{
          
            return  <Grid key={el.id} item xs={12} sm={6} md={6} lg={4} >
          
            <Post
            id={el.id}  
            title={el.title}
             description={el.description}
             hasImage={el.thumbnailUrl === undefined?false:true}
             imageUrl={el.thumbnailUrl}
             authorImg='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg' />
            
            </Grid>
          
        })}
  
  {Object.keys(selectedPost).length>0 &&<Sidebar/>}
    </Grid>
  )
}

export default PostsList