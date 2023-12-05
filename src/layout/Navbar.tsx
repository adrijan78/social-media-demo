import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="" className='AppRouterLinks' end>
            <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >

            InstaClone
          </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <NavLink to="/feed/photos" className='AppRouterLinks'>
              <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color={'primary'}>Photos</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/feed/posts" className='AppRouterLinks'>
              <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color={'primary'}>Posts</Typography>
                </MenuItem>
              </NavLink>
               
             
            </Menu>
          </Box>
          <NavLink to="" className='AppRouterLinks' style={{display:"contents"}} end>
          <Typography
            variant="h5"
            sx={{
              marginRight:'auto',
              marginLeft:'auto',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InstaClone
          </Typography>
          </NavLink>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',lg:'flex',justifyContent:'center',paddingRight:"6rem" } }}>
              <NavLink to="/feed/photos" className='AppRouterLinks'>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Photos
              </Button></NavLink>      
              <NavLink to="/feed/posts" className='AppRouterLinks'>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Posts
              </Button></NavLink>
                
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <NavLink to="/users/1" className='AppRouterLinks'>
             <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="end" color={'primary'}>Profile</Typography>
                </MenuItem>
                
              </NavLink>  
              <NavLink to="/" className='AppRouterLinks'>
             <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="end" color={'primary'}>Logout</Typography>
                </MenuItem>
                
              </NavLink>  
                
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;