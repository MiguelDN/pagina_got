import React from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Page1(props) {
    const { sumar } = props
   

    return (
    <React.Fragment>
        <Container 
        disableGutters    
        component="main"
        sx={{ pt: 8, pb: 6}}>
            <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
                <Typography 
                variant="h1">
                        <Button onClick={sumar} variant="outlined" size="large">
                            sumar contador
                        </Button>
                </Typography>
            </Grid>   
        </Container>
    </React.Fragment>
    );
}