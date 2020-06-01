import SwipeableViews from 'react-swipeable-views'
import  { animated, useSpring } from 'react-spring'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { MenuButton } from './MenuButton'
import { NavigationMenu } from './NavigationMenu'
import { ContactContainer } from '../contact/ContactContainer'


const useStyles = makeStyles(theme => ({
    container: {
        position: 'fixed',
        display: 'block',
        overflow: 'hidden',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100vw',
        backgroundColor: theme.palette.secondary.main,
        height: '100vh',
        zIndex:1000,
    },
}))
export const MenuContainer = () => {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const classes = useStyles();
    
    const springProps = useSpring({
        to:{transform: open ? 'translateX(0)' : 'translateX(100vw)',
            opacity: open ? 1 : 0
        }, 
        from:{transform:  'translateX(100vw)',
              opacity: 0,
        },
        delay:300,
    })
    const handleOpen = () => {
        setOpen(true);   
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleIndex = (index) => {
        setIndex(index);
    } 
    const resetIndex = () => {
        setIndex(0);
    }
    return (
        <>
        <MenuButton onClick={handleOpen} open={open}>Menu</MenuButton>
        <animated.div style={springProps} className={classes.container}>
            <SwipeableViews enableMouseEvents index={index} onChangeIndex={handleIndex} >
                <NavigationMenu handleClose={handleClose} open={open} handleIndex={handleIndex} />
                <ContactContainer handleCloseMenu={handleClose} handleIndex={handleIndex} reset={resetIndex} />
            </SwipeableViews>
        </animated.div>
        </>
    )
}
