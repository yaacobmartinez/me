import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBottomNavigation from '../src/AppBottomNavigation';
import { makeStyles, Slide } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    panel: {
        padding: theme.spacing(4, 4, 0, 18),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 4, 0, 4)
        }
    },
}))
export default function Resume() {
    const classes = useStyles()
    return (
        <>
            <Slide in={true} timeout={300}>
                <div className={classes.panel}>
                    <div className={classes.profile}>
                        <Typography variant="h3" style={{ fontFamily: "Poppins", fontWeight: 600, marginBottom: 30 }}>Yaacob <span style={{ color: "#8AB4F8" }}>Martinez</span></Typography>
                        <Typography variant="h5" style={{ fontFamily: "Poppins", fontWeight: 600, color: "#94D1D0", marginBottom: 30 }}>Creative, ambitious, and enterprising web developer. — I strive in teams with strong engineering cultures and meaningful cross-functional collaboration.</Typography>
                        <Typography variant="h6" style={{ fontFamily: "Poppins", fontWeight: 600, color: "#8AB4F8", marginBottom: 30 }}>martinezyaacob@gmail.com</Typography>
                    </div>
                </div>
            </Slide>
            <AppBottomNavigation />

        </>
    );
}