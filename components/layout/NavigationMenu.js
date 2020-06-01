import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from "@material-ui/core/Container"
import  { animated, useSpring } from 'react-spring'
import { CloseButton } from './CloseButton'

import { Menu } from './Menu'

const useStyles = makeStyles(theme => ({
    closeButtonContainer: {
        textAlign: 'center'
    },
    closeButton: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginTop: theme.spacing(3),
        transition: '.2s ease-in-out',
        '&:hover': {
            color: theme.palette.primary.light,
            transform: 'scale(2)'
        }
    },
    navigation: {
        overflow: 'hidden',
         width: '100vw',
         height: '100vh',
    },
    container: {
        height: '100%',
    },
    menuContent: {
        display: 'flex',
        flexDirection: 'column ',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center'
    },
    // overlay: {
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100vw',
    //     height: '100vh',
    //     backgroundColor: 'rgba(0,0,0,0.4)',
    //     zIndex: 99
    // }
}))
export const NavigationMenu = ({handleClose, open, handleIndex}) => {
    
    const closeProps = useSpring({
        to:{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-30px)'
        }, 
        from:{
            opacity: 0,
            transform: 'translateY(-30px)'
        },
        delay: 900,
    })
    const menuProps = useSpring({
        to:{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-50px)'
        }, 
        from:{
            opacity: 0,
            transform: 'translateY(-50px)'
        },
        delay: 1000,
    });
    
    const classes = useStyles();
    return (
        <>
        <nav className={classes.navigation}>
            <Container maxWidth='lg' className={classes.container}>
                <animated.div style={closeProps} className={classes.closeButtonContainer} >
                <CloseButton onClick={handleClose} className={classes.closeButton} />
                </animated.div>
                <animated.div style={menuProps} className={classes.menuContent}>
                    <Menu open={open} handleIndex={handleIndex}/>
                </animated.div>
            </Container>        
        </nav>
        </>
    )
}
