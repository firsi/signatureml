import makeStyles from "@material-ui/core/styles/makeStyles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { animated, useSpring } from "react-spring"

const useStyles = makeStyles(theme => ({
    button: {
        height: '60px',
        width: '60px',
        borderRadius: '50%',
        marginTop: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        color: theme.palette.secondary.main,
        cursor: 'pointer',
        transition: '.2s ease-in-out',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: 'white',
            transform: 'scale(1.2)'
        },
    },
    buttonAnimate: {
        '&:after':{
            width: '100vw',
            height: '100vh',
            content: '',
            position: 'relative'
        }
    },
    text: {
        fontWeight: 700
    }
}))

export const MenuButton = ({children, open,  ...props}) => {
    const classes = useStyles();
    const springProps = useSpring({
        to:{
            transform: open ? 'scale(100)' : 'scale(1)',
        },
        from:{
             transform: 'scale(1)',
        },
        config: {
            duration: 200
        }
    })
    const textProps = useSpring({
        to:{
            transform: open ? 'scale(0)' : 'scale(1)',
        },
        from:{
             transform: 'scale(1)',
        },
        config: {
            duration: 100
        }
    })
    
    return (
        <animated.div  style={springProps}  className={classes.button}  {...props}>
            <animated.div style={textProps}>
                <Typography className={classes.text} variant='body1'> {children} </Typography>
            </animated.div>
        </animated.div>
    )
}
