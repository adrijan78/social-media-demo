import List from '@mui/material/List';
import SingleComment from './SingleComment';
import { useQuery } from 'react-query';
import http from '../../api/http';
import { useCommentsStore } from '../../store/commentsStore';
import { Comment } from './../../models/Comment';

export default function Comments() {

  const {comments,setAllPostComments}= useCommentsStore()

  const{data:commentsArray,error,isLoading}=useQuery({
    queryKey:["comments"],
    queryFn:()=>http.Comments.getPostComments(1),
    onSuccess:setAllPostComments
  });
  return (
    <List sx={{ width: '100vh', maxHeight:"50vh", bgcolor: 'background.paper',overflowY:"auto" }}>
      {comments?.map((c:Comment)=>{
        return <SingleComment key={c.id} person={c.email} comment={c.body} personImage='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg'/>
      })}
    </List>
  );
}