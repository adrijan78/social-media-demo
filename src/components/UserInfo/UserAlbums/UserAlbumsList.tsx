import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Album } from '../../../models/Album'
import http from '../../../api/http'
import LoadingIndicator from '../../UI/LoadingIndicator'
import UserAlbum from './UserAlbum'


const UserAlbumsList = () => {
  const[albums,setAlbums]=useState<Album[]|undefined>(undefined);
  const[loading,setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    http.Albums.getUserAlbums(1).then(res=>{
      setAlbums(res);
      setLoading(false);
    })
  },[])

  return (
    <>
        
        {loading && <Grid item xs={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><LoadingIndicator message={`Loading albums`}/></Grid> }

            {!loading && albums?.map(a=>{
               return(<Grid item xs={12} sm={6} md={4} sx={{}}>
             <UserAlbum {...a}/>
              </Grid>)
            })}
        
       
    </>
  )
}

export default UserAlbumsList