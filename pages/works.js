import React from 'react';
import AppBottomNavigation from '../src/AppBottomNavigation'
import { Typography, makeStyles, Grid, Avatar } from '@material-ui/core';
import { motion } from 'framer-motion';
import { container, item, image } from '../src/animations';
import Link from '../src/Link';
import { works } from '../src/data';
// import ProgressiveImage from '../src/ProgressiveImage';

const useStyles = makeStyles((theme) => ({
    panel: {
        padding: theme.spacing(4, 4, 10, 18),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 4, 17, 4)
        }
    },
    title: {
        fontFamily: "Poppins", fontWeight: 600
    },
    works: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        "& .MuiLink-underlineHover:hover": {
            textDecoration: "none"
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0)
        }
    },
    img: {
        width: "100%", borderRadius: 20,
    },
    avatar: { height: 30, width: 30, marginRight: 10 },
    workCaption: {
        fontSize: 15,
        fontWeight: 600,
        fontFamily: "Poppins",
        color: "#94D1D0"
    }
}))
export default function Works() {
    const classes = useStyles()
    return (
        <>
            <motion.div variants={container} initial="hidden" animate="visible" className={classes.panel}>
                <motion.div variants={item}>
                    <Typography variant="h3" className={classes.title}>Works</Typography>
                </motion.div>
                <div className={classes.works}>
                    <Grid container spacing={4}>
                        {works.map(_ => (
                            <Grid key={_.shortName} item xs={12} sm={6} md={4} component={Link} as={`/w/${_.shortName}`} href="/w/[work]">
                                {/* <ProgressiveImage className={classes.img} alt={_.shortName} overlaySrc={_.img} src={_.src} /> */}
                                <motion.img variants={image} whileHover={{ opacity: 1 }} src={_.src} className={classes.img} />
                                <motion.div variants={item} style={{ display: "flex", alignItems: "center", marginTop: -45, marginLeft: 10 }}>
                                    <Avatar className={classes.avatar} >
                                        <img src={_.icon} alt={_.shortName} style={{ height: 30 }} />
                                    </Avatar>
                                    <Typography className={classes.workCaption}>{_.name}</Typography>
                                </motion.div>
                            </Grid>
                        ))}

                    </Grid>
                </div>
            </motion.div>
            <AppBottomNavigation />
        </>
    );
}