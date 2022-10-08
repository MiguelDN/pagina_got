import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicList from './BasicList';
import { useState, useEffect } from 'react';
import { ListItemButton } from '@mui/material';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export default function BasicModal(props) {
    const {foto} = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rows, setRows] = useState(null)

    useEffect(() => {
        if (rows == null) {
            obtenerDatos()
        }
    }, [rows])

    const obtenerDatos = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/");
        const characterApi = await api.json();
        setRows(characterApi)

    }

    return (
        <div>
            {rows?(
                <>
                    <ListItemButton onClick={handleOpen} 
                    sx={{
                        position: 'left',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                    }}>Imagen en Dashboard</ListItemButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        SELECCIONE PERSONAJE
                    </Typography>
                            <BasicList rows={rows} handleClose={handleClose} foto = {foto} />
                </Box>
            </Modal> 
            </> 
            ):(
                <div></div>
            )}
            
        </div>
    );
}
