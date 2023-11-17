import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Post from '../UI/Post';
import Comments from '../Comments/Comments';
import { Fragment, useState, useEffect } from 'react';
import Input from '../UI/Input';

type Anchor = 'top' | 'left' | 'bottom' | 'right';



export default function Sidebar() {
  const [open, setOpen] = useState(false);

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
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{paddingTop:'0px!important'}}>
        <Post isReadOnly={true} hasImage={false} title="Test" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests.' authorImg='https://picsum.photos/id/1/300'/>
        <Input/>       
        <Comments/>
      </List>
    </Box>
  );

  return (
    <div>
     
        <Fragment key="right">
          <Button onClick={toggleDrawer("right", true)}>Right</Button>
          <SwipeableDrawer
            sx={{paddingTop:'0px!important'}}
            anchor="right"
            open={open}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </Fragment>
    
    </div>
  );
}