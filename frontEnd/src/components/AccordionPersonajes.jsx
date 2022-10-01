import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionPersonajes(props) {
    const {rows} = props
    console.log(rows)
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Selecciona Personaje</Typography>
                </AccordionSummary>
                {rows.map((row, index) => (
                    
                
                <AccordionDetails>
                    
                        <a>{row.name}</a>
                 
                    
                </AccordionDetails>))}
            </Accordion>
           
        </div>
    );
}
