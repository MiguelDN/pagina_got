import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Paper from '@mui/material/Paper';
import { Link, useParams } from "react-router-dom";

export default function BasicList(props) {
    const { rows, handleClose } = props
    console.log(rows)
    const {id} = useParams()
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {/* <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider /> */}
            <nav aria-label="secondary mailbox folders" style={{ maxHeight: '300px', overflow: 'auto' }}>
                {rows.map((row, index) =>
                (
                    
                    <List  >
                        <ListItem disablePadding>
                          
                            <ListItemButton  component={Link} to='pageimages/dfgd' id={row.fotos} onClick={handleClose} >
                                {console.log(id)}
                                <ListItemText primary={row.name} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    
                ))}
                
            </nav>
        </Box>
    );
}
