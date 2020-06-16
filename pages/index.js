import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBottomNavigation from '../src/AppBottomNavigation'
import { makeStyles, Button, Fade, Slide } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Link from '../src/Link';


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
      <div className={classes.panel}>
        <img className={classes.image} src="/image.jpg" alt="an image of Yaacob Martinez, picture, image, photo" />
        <Slide in={true} direction="up" timeout={300}>
          <div className={classes.text}>
            <Typography className={classes.heroText} gutterBottom>
              Nice to meet you
              </Typography>

            <Typography className={classes.subtext} gutterBottom>
              My name’s <span style={{ color: "#F0AD6C", fontWeight: 600 }}>Yaacob Martinez</span>. I’m a creative, ambitious, and enterprising  web developer.
              </Typography>
            <Button component={Link} href="/works" style={{ borderRadius: 20, marginTop: 10 }} variant="contained" color="primary" endIcon={<ArrowForward />}>See my work</Button>
          </div>
        </Slide>

      </div>

      <AppBottomNavigation />
    </>
  );
}