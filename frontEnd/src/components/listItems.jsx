import * as React from 'react';
import { Link } from "react-router-dom";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasicModal from './BasicModal';
import BasicModalDoble from './BasicModalDoble';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="datagrid">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="DataGrid" />
    </ListItemButton>
    <ListItemButton component={Link} to="Contador">
      <ListItemIcon>
        <AlarmAddIcon />
      </ListItemIcon>
      <ListItemText primary="Contador" />
    </ListItemButton>
    
      <ListItemIcon>
        <AlarmAddIcon />
        <ListItemText sx={{color:'black' }}><BasicModal /></ListItemText>
      </ListItemIcon>
    
    <ListItemText /*component={Link} to="page3"*/>
      <BasicModalDoble />
    </ListItemText>
  </React.Fragment>
);