import List from '@mui/material/List';
import SingleComment from './SingleComment';

export default function Comments() {
  return (
    <List sx={{ width: '100vh', maxHeight:"50vh", bgcolor: 'background.paper',overflowY:"auto" }}>
      <SingleComment person="Blagoja" comment='Lorem ipsum dolor sit amet. Aut officiis accusantium ab voluptatibus deleniti sit unde magnam id galisum ipsam ea nostrum deleniti! Et error quidem 33 nemo asperiores id ' personImage='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg'/>
      <SingleComment person="Dejan" comment='d ipsum doloremque qui ratione recusandae et saepe reprehenderit et officiis enim quo mollitia dolores. ' personImage='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg'/>
      <SingleComment person="Ilche" comment='Sit odio eligendi aut excepturi optio qui quia blanditiis in necessitatibus saepe sed nesciunt ipsa et error voluptatum. Id quisquam omnis aut quis fuga rem velit explicabo.' personImage='https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg'/>
    </List>
  );
}