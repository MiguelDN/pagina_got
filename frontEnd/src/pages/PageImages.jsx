import React from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export default function Page1(props) {
    const { id } = props;
    console.log(id)

    return (
        <React.Fragment>
            <Container
                disableGutters
                component="main"
                sx={{ pt: 8, pb: 6 }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}>
                    <Typography
                        variant="h1">
                        PageImages
                        <img src="id"/>
                    </Typography>
                </Grid>
            </Container>
        </React.Fragment>
    );
}