import React from 'react'
import Link from './Link';
import { BottomNavigation, BottomNavigationAction, makeStyles, Hidden, Typography, Button, Slide } from '@material-ui/core';
import { Email, Description, AccountCircle, AccountCircleOutlined, EmailOutlined, DescriptionOutlined, Work, WorkOutlineOutlined } from '@material-ui/icons'
import { useRouter } from 'next/router';
const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: 0,
        width: "100vw",
        height: 90,
        "& .MuiLink-underlineHover": { textDecoration: "none" },
        "& .Mui-selected": {
            color: "deepskyblue"
        }
    },
    sideMenu: {
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "& .MuiLink-underlineHover": { textDecoration: "none" },
    },
    btnHolder: { display: "flex", flexDirection: "column", alignItems: "center", margin: theme.spacing(2) }

}))

function AppBottomNavigation() {
    const links = [
        { link: '/', linkName: "About", icon: <AccountCircle />, iconOutline: <AccountCircleOutlined /> },
        { link: '/contact', linkName: "Contact", icon: <Email />, iconOutline: <EmailOutlined /> },
        { link: '/works', linkName: "Works", icon: <Work />, iconOutline: <WorkOutlineOutlined /> },
        { link: '/resume', linkName: "Resume", icon: <Description />, iconOutline: <DescriptionOutlined /> },
    ]
    const classes = useStyles()
    const _ = useRouter()
    const [value, setValue] = React.useState(_.pathname)
    return (
        <>
            <Hidden mdUp>
                <Slide in={true} direction="up" timeout={100}>
                    <BottomNavigation className={classes.root} value={value} onChange={(e, newValue) => setValue(newValue)} showLabels>
                        {links.map(_ => (
                            <BottomNavigationAction
                                key={_.link}
                                disableRipple
                                component={Link}
                                href={_.link} value={_.link}
                                label={<Typography variant="button" >{_.linkName}</Typography>}
                                icon={value === _.link ? _.icon : _.iconOutline} />
                        ))}
                    </BottomNavigation>
                </Slide>
            </Hidden>
            <Hidden smDown>
                <Slide in={true} direction="right" timeout={100}>
                    <div className={classes.sideMenu}>
                        {links.map((_) => (
                            <div key={_.link}>
                                <Button disableRipple disableFocusRipple={true} component={Link} href={_.link}>
                                    <div className={classes.btnHolder}
                                        style={{
                                            color:
                                                value === _.link ? "deepskyblue" : "#fff"
                                        }}
                                    >
                                        {value === _.link ? _.icon : _.iconOutline}
                                        <Typography variant="button">{_.linkName}</Typography>
                                    </div>
                                </Button>
                            </div>
                        ))}
                    </div>
                </Slide>
            </Hidden>
        </>
    )
}

export default AppBottomNavigation
