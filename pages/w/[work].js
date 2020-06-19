import React from 'react'
import { useRouter } from 'next/router'
import { Typography, makeStyles, Container, Button, Divider } from '@material-ui/core'
import AppBottomNavigation from '../../src/AppBottomNavigation'
import { container, item } from '../../src/animations'
import { motion } from 'framer-motion'
import { works } from '../../src/data'
import clsx from 'clsx'
import { GitHub, BubbleChart, Cloud, MailOutline } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    panel: {
        padding: theme.spacing(4, 4, 10, 18),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 1, 17, 1)
        }
    },
    root: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2, 0)
        }
    },
    topBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            display: "block",
            padding: theme.spacing(0, 2)
        }
    },
    workTitle: {
        fontSize: 20,
        fontFamily: "Poppins"
    },
    workIcon: {
        height: 40,
        marginRight: theme.spacing(2)
    },
    titleHolder: {
        display: 'flex', alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(2)
        }
    },
    btnHolder: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(6)
        }
    },
    btn: {
        margin: theme.spacing(0, 1),
        borderRadius: 20,
        textTransform: "none",
        background: "#F3F3F4"
    },
    workImage: {
        width: "100%",
        borderRadius: 8
    },
    imgHolder: {
        padding: theme.spacing(4, 0)
    },
    hireme: {
        borderRadius: 20, padding: theme.spacing(1, 4),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(2, 0),
            width: "100%"
        }
    }
}))
function Work() {
    const classes = useStyles()
    const router = useRouter()
    const work = works.filter(work => work.shortName === router.query.work)
    const currentWork = work[0]
    return (
        <>
            <motion.div variants={container} initial="hidden" animate="visible" className={classes.panel}>
                <Container maxWidth="sm" className={classes.root}>
                    <motion.div variants={item} className={classes.topBar}>
                        <div className={classes.titleHolder} >
                            <img src={currentWork.icon} alt={currentWork.shortName} className={classes.workIcon} />
                            <Typography className={classes.workTitle}>{currentWork.name}</Typography>
                        </div>
                        <div className={classes.btnHolder}>
                            <Button size="small" target="_blank" href={currentWork.github} className={classes.btn} variant="contained" startIcon={<GitHub />}>GitHub</Button>
                            <Button size="small" target="_blank" href={currentWork.liveSite} className={classes.btn} variant="contained" startIcon={<Cloud />}>Live Site</Button>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className={classes.imgHolder}>
                        <motion.img whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} src={currentWork.img} className={classes.workImage} alt={currentWork.shortName} />
                    </motion.div>
                    <motion.div variants={item} style={{ paddingBottom: 20 }}>
                        <Typography style={{ fontFamily: "Poppins", color: "#94D1D0", fontSize: 16 }}>
                            {currentWork.desc}
                        </Typography>
                    </motion.div>
                    <motion.div variants={item}>
                        <Divider light />
                    </motion.div>
                    <motion.div variants={item} style={{ paddingTop: 20 }} className={classes.topBar}>
                        <div>
                            <Typography style={{ fontFamily: "Poppins", fontSize: 16 }}>Like what you see?</Typography>
                            <Typography style={{ fontFamily: "Poppins", color: "#94D1D0", fontSize: 13 }}>I would love to discuss about work.</Typography>
                        </div>
                        <Button variant="contained" className={classes.hireme} color="primary" startIcon={<MailOutline />}>Hire Me</Button>
                    </motion.div>
                </Container>
            </motion.div>
            <AppBottomNavigation />
        </>
    )
}

export default Work
