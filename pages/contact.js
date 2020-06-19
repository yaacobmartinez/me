import React from 'react';
import AppBottomNavigation from '../src/AppBottomNavigation';
import { makeStyles, Typography, ListItem, ListItemText, Link } from '@material-ui/core';
import { motion } from 'framer-motion'
import { container, item } from '../src/animations'
import { links } from '../src/data'
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

export default function Contact() {
    const classes = useStyles()
    return (
        <>
            <motion.div variants={container}
                initial="hidden"
                animate="visible" className={classes.panel}>
                <div className={classes.text}>
                    <motion.div variants={item}>
                        <Typography className={classes.heroText} gutterBottom>
                            I'm always happy to hear from you.
                        </Typography>
                    </motion.div>
                    <motion.div variants={item}>
                        <Typography className={classes.subtext} gutterBottom>
                            📮 martinezyaacob@gmail.com
                    </Typography>
                    </motion.div>
                </div>
                <motion.div variants={item} className={classes.links}>
                    {links.map(_ => (
                        <div key={_.link} className={classes.prelink}>
                            <Link href={_.link} className={classes.link}>{_.name}</Link>
                        </div>
                    ))}

                </motion.div>
            </motion.div>
            <AppBottomNavigation />
        </>
    );
}