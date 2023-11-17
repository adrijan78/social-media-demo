import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const UserAlbum = () => {
  return (
    <Card sx={{ maxWidth: "100%" }} className='itemCard'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://photo-design-studio.com/img/content/digital-photo-album.png"
        title="green iguana"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          Album
        </Typography>
      </CardContent>
     
    </Card>
  );
}


export default UserAlbum