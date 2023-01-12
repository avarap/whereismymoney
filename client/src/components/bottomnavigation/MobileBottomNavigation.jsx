import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";
import "./MobileBottomNavigation.css";

import DashboardIcon from '@mui/icons-material/Dashboard';


function MobileBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className='navigation-style' elevation={3} value={value} onChange={handleChange}>
      <Link to="/dashboard">
        <BottomNavigationAction label="Dashboard" value="dashboard" icon={<DashboardIcon style={{color:"black"}} />} />
      </Link>
      <Link to="/cashflow">
        <BottomNavigationAction label="Cashflow" value="cashflow" icon={<ShoppingCartIcon style={{color:"black"}} />} />
      </Link>
      <Link to="/cashflow">
        <BottomNavigationAction label="Friends" value="friends" icon={<PeopleIcon style={{color:"black"}} />} />
      </Link>
    </BottomNavigation>
  );
}

export default MobileBottomNavigation;