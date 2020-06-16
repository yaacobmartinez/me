import React from 'react';
import AppBottomNavigation from '../src/AppBottomNavigation';
import { makeStyles, Typography, ListItem, ListItemText, Link, Fade, Slide } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    panel: {
        height: "100vh",
        padding: theme.spacing(20, 2, 0, 18),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(15, 4, 0, 4)
        }
    },
    heroText: {
        fontSize: 50,
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#F8B9B9",
        [theme.breakpoints.down('sm')]: {
            fontSize: 40,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
        },
    },
    subtext: {
        fontSize: 28,
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#97B3CE",
        [theme.breakpoints.down('xs')]: {
            fontSize: 17,
        },
    },
    links: {
        padding: theme.spacing(2, 4)
    },
    prelink: {
        margin: theme.spacing(2)
    },
    link: {
        fontSize: 23,
        fontWeight: 500,
        fontFamily: "Poppins",
        color: "#fff",
    }
}))
const links = [
    { name: "_.Twitter", link: "https://twitter.com/theawkwardjacob" },
    { name: "_.GitHub", link: "https://github.com/yaacobmartinez" },
    { name: "_.Facebook", link: "https://www.facebook.com/jacobpogiako" },
]
export default function Contact() {
    const classes = useStyles()
    return (
        <>
            <Slide in={true} timeout={300} >
                <div className={classes.panel}>
                    <Fade in={true} timeout={300}>
                        <div className={classes.text}>
                            <Typography className={classes.heroText} gutterBottom>
                                I'm always happy to hear from you.
                        </Typography>
                            <Typography className={classes.subtext} gutterBottom>
                                📮 martinezyaacob@gmail.com
                        </Typography>
                        </div>
                    </Fade>
                    <div className={classes.links}>
                        {links.map(_ => (
                            <div key={_.link} className={classes.prelink}>
                                <Link href={_.link} className={classes.link}>{_.name}</Link>
                            </div>
                        ))}

                    </div>
                </div>
            </Slide>
            <AppBottomNavigation />
        </>
    );
}