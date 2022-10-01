import * as React from 'react';
import { Link } from "react-router-dom";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasicModal from './BasicModal';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="datagrid">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="DataGrid" />
    </ListItemButton>
    <ListItemButton component={Link} to="page2">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Page 2" />
    </ListItemButton>
    <ListItemButton component={Link} to="page3">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Page 3" />
    </ListItemButton>
    <ListItemButton /*component={Link} to="page3"*/>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText  />
      <BasicModal />
    </ListItemButton>
  </React.Fragment>
);