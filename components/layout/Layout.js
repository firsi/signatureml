import { useRouter } from 'next/router'
import { animated, useSpring } from "react-spring"
import   makeStyles from '@material-ui/core/styles/makeStyles'
import  Link  from '@material-ui/core/Link'
import  Toolbar  from '@material-ui/core/Toolbar'
import  AppBar from '@material-ui/core/AppBar'

import { optimizedScrollListener } from "../../util/helper"
import { MenuContainer } from "./MenuContainer"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    brandContainer: {
         flexGrow: 1,
         display: 'flex',
         marginTop: '5px'
    },
    brand: {
        height: '70px',
        zIndex:100,
        position: 'relative'
    },
    brandText: {
        height: '70px',
        marginTop: '0px',
        marginLeft: '-5px'
    },
    menu: {
        marginRight: theme.spacing(3)
    },
    logoIconContainer: {
        width: 'fit-content',
        position: 'relative',
    },
    logoBox: {
        position: 'absolute',
        top: '-5px',
        left: '-5px',
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        padding: 5,
        zIndex: 0,
    },
    logoText: {
        width: 'fit-content'
    }
}))
export const Layout = () => {
    const classes = useStyles();
    const router = useRouter();
    const [animate, setAnimate] = React.useState(false);

    React.useEffect(() => {
       optimizedScrollListener(activateAnimation);
       return () => {
        window.removeEventListener('scroll', activateAnimation);
    }
    })
    const activateAnimation = () => {
        if(window.scrollY >=200){
            setAnimate(true)
        }
        else{
            setAnimate(false)
        }
    }
    const springProps = useSpring({
        from: {transform: 'translate3d(0px,0,0) scale(1)',
    },
        to: {transform: animate ? 'translate3d(-100px,0,0) scale(0)' : 'translate3d(0px,0,0) scale(1)',
            },
        delay: 500
        
    });
    const logoBoxSpring = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(0)',
        },
        to: {
            opacity: animate ? 1 : 0,
            transform: animate ? 'scale(1)' : 'scale(0)',
        },
        delay: 500

    })
    const color = router.pathname === '/qui-sommes-nous' ? 'secondary' : 'transparent';

    return( 
        <div className={classes.root}>
        <AppBar position='fixed' color={color}  elevation={0}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.brandContainer} >
                    <animated.div className={classes.logoIconContainer}>
                        <animated.div style={logoBoxSpring} className={classes.logoBox}></animated.div>
                        <Link href='/' >
                            <img className={classes.brand} src='/logo-white-draw.png' alt='signature' />
                        </Link>
                    </animated.div>
                    <animated.div style={springProps} className={classes.logoText}>
                        <Link href='/' >
                            <img className={classes.brandText} src='/logo-white-text.png' alt='signature' />
                        </Link>
                    </animated.div>
                </div>
                    <MenuContainer />
            </Toolbar>
        </AppBar>
        </div>
    )
}