import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PostItem } from '../../../models/PostItem';
import http from '../../../api/http';
import { Box } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function UserAlbumPictures() {

  const[photos,setPhotos] = useState<PostItem[]|undefined>(undefined)

  const [searchParams] = useSearchParams();
  const {id,albumId} = useParams();

  const title = searchParams.get("title");

  useEffect(()=>{
    http.Posts.getPhotosByUser(parseInt(id!)).then((res:PostItem[])=>{
      var filterPhotos= res.filter(ph=>ph.albumId === parseInt(albumId!));
      setPhotos(filterPhotos);
    })
  },[id,albumId])

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container sx={{paddingY:'1rem'}}>
        {photos?.map(p=>{
          return(
          <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
            <Box
              component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
              alt="Album photos"
              src={`${p.thumbnailUrl}`}
            />
          </Grid>);
        })}
      </Grid>

    </>
  );
}