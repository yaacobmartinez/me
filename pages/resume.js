import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBottomNavigation from '../src/AppBottomNavigation';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion'
import { container, item } from '../src/animations'
import clsx from 'clsx'
import { experiences, education } from '../src/data';
const useStyles = makeStyles((theme) => ({
    panel: {
        padding: theme.spacing(4, 4, 10, 18),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 4, 17, 4)
        }
    },
    font: { fontFamily: "Poppins", fontWeight: 600 },
    hasBottomMargin: { marginBottom: 30 },
    secondary: { color: "#F2CB8C" },
    discreet: { color: "#94D1D0" },
    itemTitle: {
        fontSize: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: 15
        }
    },
    itemDesc: {
        fontSize: 17,
        [theme.breakpoints.down('xs')]: {
            fontSize: 13
        }
    },
    exp: {
        padding: theme.spacing(2, 0)
    },
    blue: {
        color: "#8AB4F8"
    }
}))
export default function Resume() {
    const classes = useStyles()
    return (
        <>
            <motion.div variants={container}
                initial="hidden"
                animate="visible" className={classes.panel}>
                <div className={classes.profile}>
                    <motion.div variants={item}>
                        <Typography variant="h3" className={clsx(classes.font, classes.hasBottomMargin)}>Yaacob <span className={classes.blue}>Martinez</span></Typography>
                    </motion.div>
                    <motion.div variants={item}>
                        <Typography variant="h5" className={clsx(classes.font, classes.hasBottomMargin, classes.discreet)} >Creative, ambitious, and enterprising web developer. — I strive in teams with strong engineering cultures and meaningful cross-functional collaboration.</Typography>
                    </motion.div>
                    <motion.div variants={item}>
                        <Typography variant="h6" className={clsx(classes.font, classes.hasBottomMargin, classes.blue)}>martinezyaacob@gmail.com</Typography>
                    </motion.div>
                    <motion.div variants={item}>
                        <Typography gutterBottom variant="h6" className={clsx(classes.font, classes.blue)} style={{ fontSize: 30, }}>👔 Experience</Typography>
                    </motion.div>
                    {experiences.map(_ => (
                        <motion.div variants={item} key={_.company} className={classes.exp}>
                            <Typography gutterBottom className={clsx(classes.font, classes.secondary, classes.itemTitle)}>
                                {_.position} @ {_.company}, {_.dates}, {_.location}
                            </Typography>
                            {_.desc.map(d => (
                                <Typography key={d} className={clsx(classes.font, classes.discreet, classes.itemDesc)}>
                                    {d}
                                </Typography>
                            ))}

                        </motion.div>
                    ))}
                    <motion.div variants={item}>
                        <Typography gutterBottom variant="h6" className={clsx(classes.font, classes.blue, classes.exp)} style={{ fontSize: 30, }}>📖 Education</Typography>
                    </motion.div>
                    {education.map((_) => (
                        <motion.div variants={item} key={_.course} className={classes.exp}>
                            <Typography className={clsx(classes.font, classes.secondary, classes.itemDesc)}>
                                {_.course}
                            </Typography>
                            <Typography key={_.course} className={clsx(classes.font, classes.discreet, classes.itemDesc)}>
                                {_.school} - {_.dates}
                            </Typography>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <AppBottomNavigation />

        </>
    );
}