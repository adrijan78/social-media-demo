import { Grid, Paper } from '@mui/material'
import http from '../../../api/http';
import LoadingIndicator from '../../UI/LoadingIndicator';
import { useQuery } from 'react-query';
import { useTodosStore } from '../../../store/todoStore';
import TodosList from './TodosList';
import { useUsersStore } from '../../../store/usersStore';


const UserTodos = () => {
   
    console.log("rerender")
    // const [todos,setTodos]=useState<TodoItem[]| undefined>(undefined);
    // const [loading,setLoading] = useState(false);

    // useEffect(()=>{
    //     setLoading(true);
    //     http.Todos.getTodosForUser(1).then(response=>{
    //         setTodos(response);
    //         setLoading(false)
    //     }).catch(err=>console.log(err))
        
    // },[])
    
    const {setTodos}= useTodosStore();
    const activeUser = useUsersStore(state=>state.currentUser)

    const {data,isLoading}=useQuery({
      queryKey:["todos"],
      enabled:activeUser !==null,
      queryFn:()=>http.Todos.getTodosForUser(1),
      onSuccess: setTodos
    });


  return (
    <Grid container  component={Paper} spacing={2} sx={{borderRadius:"1rem", maxHeight:"82.5vh",marginTop:'0.1rem',marginX:'0.2rem',paddingY:"1.5rem",paddingX:"0.5rem",overflowY:'auto'}}>
          {isLoading && <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><LoadingIndicator message={`Loading todos`}/></Grid> }
          
          {!isLoading && <>
               <TodosList title='TODOs in progress' areCompleted={false}/>     
               <TodosList title='Comleted TODOs' areCompleted={true}/>     
          </>
}
        </Grid>
  )
}

export default UserTodos