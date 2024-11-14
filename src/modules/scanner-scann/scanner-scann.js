import React from "react";
import { Container, Card, CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import HomePage from "./tabs-qr/tabs";


import './scanner-scann.css'


function QRcode() {
    return (
        <>
            <Container>
                <Card>
                    <h2 className='qr__text'>QR code</h2>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >

                                    <HomePage />
                                </Grid>
                            </Box>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default QRcode;