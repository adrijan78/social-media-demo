import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Album } from '../../../models/Album';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

interface Props extends Album{

}

const UserAlbum = ({title,id,userId}:Props) => {

  const navigate = useNavigate();

  const openAlbumHandler = ()=>{
    navigate(`${id}?title=${title}`)
  }
  return (
    <Card onClick={openAlbumHandler} sx={{ maxWidth: "100%",minHeight:'300px',cursor:'pointer' }} className='itemCard'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://photo-design-studio.com/img/content/digital-photo-album.png"
        title="green iguana"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Tooltip title={title}>
        <Typography  gutterBottom variant="h5" component="div">
          {title.length>20 ? title.substring(0,25).concat('...'):title}
        </Typography>
        </Tooltip>
       
      </CardContent>
     
    </Card>
  );
}


export default UserAlbum