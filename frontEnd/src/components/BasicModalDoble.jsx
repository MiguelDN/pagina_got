import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import { ListItemButton } from '@mui/material';
import BasicListDoble from './BasicListDoble';

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

export default function BasicModalDoble() {
   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [foto, setFoto] = useState(null)
    const [rows, setRows] = useState(null)
    console.log(foto)

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
    console.log('foto basicmodaldoble',foto)
    return (
        <div>
            {rows ? (
                <>
                    <ListItemButton onClick={handleOpen}
                        sx={{
                            position: 'left',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                        }}>Open modal</ListItemButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div>
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            right: '50%',
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
                            <BasicListDoble rows={rows} setFoto={setFoto} />
                        </Box>
                        

                        {foto? (
                            <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '54%',
                            transform: 'translate(-50%, -50%)',
                            width: 500,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                IMAGEN
                            </Typography>
                            {console.log('basicmodaldoble 93',foto)}
                            <img src={foto} width='400' /> 
                        </Box>
                        ):(
                            <div></div>
                        )}

                        



                        </div>
                    </Modal>
                </>
            ) : (
                <div></div>
            )}

        </div>
    );
}
