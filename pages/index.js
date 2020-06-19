import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBottomNavigation from '../src/AppBottomNavigation'
import { makeStyles, Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Link from '../src/Link';
import { motion } from 'framer-motion'
import { container, item } from '../src/animations'
const useStyles = makeStyles((theme) => ({
  image: {
    padding: theme.spacing(6),
    width: "40vw",
    height: "95vh",
    objectFit: "cover",
    borderRadius: 60,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      width: "40vw",
      objectFit: "cover",
      padding: 0,
      borderRadius: 10,
    },
    [theme.breakpoints.down('xs')]: {
      width: "100vw",
      objectFit: "cover",
      padding: theme.spacing(2),
      borderRadius: 30,
      filter: "opacity(.1)"
    }
  },
  panel: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: theme.spacing(0, 8),
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: theme.spacing(4)
    },
    [theme.breakpoints.down('xs')]: {
      display: "block",
      marginLeft: 0,
      padding: 0
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
  text: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      position: "absolute",
      top: "35vh",
    }
  },
  subtext: {
    fontFamily: "Poppins",
    fontSize: 25,
    fontWeight: 500,
    color: "#429C89"
  }
}))

export default function Index() {
  const classes = useStyles()
  return (
    <>
      <motion.div variants={container}
        initial="hidden"
        animate="visible" className={classes.panel}>
        <motion.img variants={item} whileHover={{ scale: 0.8 }} whileTap={{ scale: 1, }} className={classes.image} src="/image.jpg" alt="an image of Yaacob Martinez, picture, image, photo" />
        <div className={classes.text} >
          <motion.div variants={item}>
            <Typography className={classes.heroText} gutterBottom>
              Nice to meet you
            </Typography>
          </motion.div>
          <motion.div variants={item}>
            <Typography className={classes.subtext} gutterBottom>
              My name’s <span style={{ color: "#F0AD6C", fontWeight: 600 }}>Yaacob Martinez</span>. I’m a creative, ambitious, and enterprising  web developer.
              </Typography>
          </motion.div>
          <motion.div variants={item} >
            <Button component={Link} href="/works" style={{ borderRadius: 20, marginTop: 10 }} variant="contained" color="primary" endIcon={<ArrowForward />}>See my work</Button>
          </motion.div>
        </div>

      </motion.div>

      <AppBottomNavigation />
    </>
  );
}