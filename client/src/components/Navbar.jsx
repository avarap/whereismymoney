import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import { useNavigate } from "react-router-dom"



export default function Navbar() {

  const { userObject } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const navigate = useNavigate();

  function logout() {
    axios({ method: "POST", url: `${process.env.REACT_APP_API_URL}/auth/logout`, withCredentials: true })
      .then((response) => {
        console.log("response status", response)
        if (response.status === 200) {
          navigate("/");
          return null;
        }
      })

  }

  // const logout = () => {
  //   window.open("http://localhost:5005/auth/logout", "_self");
  // };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}><Link onClick={logout}>Logout</Link></Typography>
        {userObject ? (<Typography>Hola, {userObject.displayName} </Typography>)
          : (<Typography sx={{ width: 32, height: 32 }}>Si</Typography>)}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Typography sx={{ minWidth: 100 }}>Welcome, {userObject.displayName}</Typography> */}
            {userObject ? (<Avatar sx={{ width: 32, height: 32 }} alt={userObject.displayName} src={`${userObject.picture}`}>{userObject.displayName}</Avatar>)
              : (<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>)}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography sx={{ minWidth: 100 }}><Link onClick={logout}>Logout</Link></Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
