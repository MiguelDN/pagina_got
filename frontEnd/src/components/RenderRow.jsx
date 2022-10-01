import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { useState, useEffect } from 'react'
import { List } from '@mui/material';

function RenderRow(props) {
    const { index, style } = props;
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
    console.log(rows)

    return (
        <>
            {rows ? (
                <List>

                    {rows.map((row, index) =>
                    (
                        <ListItem style={style} key={index} component="div" disablePadding>
                            <ListItemButton>
                                <ListItemText key='{row.name}' primary={`item ${row.name}`}/>
                            </ListItemButton>
                        </ListItem >
                    ))}

                </List>
            ) : (
                <p>Espere</p>
            )}
        </>

    );
}

export default function VirtualizedList() {
    return (
        <Box
            sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={1}
                overscanCount={1}
            >
                {RenderRow}
            </FixedSizeList>
        </Box>
    );
}
