import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '../App.css';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function menu(){
    return (
      <div>
        <Button
          sx={{
          "&.MuiButton-text": { color: "#FFFFFF" },
          }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          CATEGORIAS
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem component={Link} to = "/category/1" onClick={handleClose}>CALZADO</MenuItem>
          <MenuItem component={Link} to = "/category/2" onClick={handleClose}>INDUMENTARIA</MenuItem>
        </Menu>
      </div>
      );
  };
  return (
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div class="div1nav">
          <Typography className='brandloco' component={Link} to="/" variant="h6" >
            DISIMARKET
          </Typography>

          <Button component={Link} to = "/" color="inherit">HOME</Button>
          {menu()}
          <Button component={Link} to = "/item" color="inherit">ITEMS</Button>
          </div>

          <div>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
  );
};