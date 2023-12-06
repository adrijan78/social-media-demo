import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Post from '../UI/Post';
import Comments from '../Comments/Comments';
import { Fragment, useState } from 'react';
import Input from '../UI/Input';
import { usePostsStore } from '../../store/postsStore';


type Anchor = 'top' | 'left' | 'bottom' | 'right';


export default function Sidebar() {

  const {selectedPost,openPostComments} = usePostsStore()
  const [open, setOpen] = useState(Object.keys(selectedPost).length>0);
  

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const list = (anchor: Anchor) => (
    <Box
    sx={{width:"100vh"}}
      role="presentation"
    >
      <List sx={{paddingTop:'0px!important'}}>
        <Post  isReadOnly={true} hasImage={selectedPost.thumbnailUrl !==undefined} imageUrl={selectedPost.thumbnailUrl} title={selectedPost.title} description={selectedPost.body} authorImg='https://picsum.photos/id/1/300'/>
        <Input/>       
        <Comments/>
      </List>
    </Box>
  );

  return (
    <div>
        <Fragment key="right">
          <SwipeableDrawer
            sx={{paddingTop:'0px!important'}}
            anchor="right"
            open={open}
            onClose={()=>{toggleDrawer("right", false);openPostComments(-1)}}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </Fragment>
    
    </div>
  );
}