import { animated, useSpring } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { ImageContainer } from "./ImageContainer";
import { Services } from "./Services";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        overflow: 'hidden',
    },
    leftContainer: {
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            width: '50%'
        },
        height: '90vh',
        maxHeight: '760px',
    },
    rightContainer: {
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            width: '50%'
        },
    }
}))
const springBoiler = (delay) => {
    return {
        from : {transform: 'translate3d(0,-100%,0)'},
        to : {transform: 'translate3d(0,0,0)'},
        delay,
    }
}
export const Hero = () => {
    const classes = useStyles();
    const springProps = useSpring(springBoiler(1000))
    const springProps1 = useSpring(springBoiler(1400))
    return (
        <div className={classes.root}>
            <animated.div style={springProps} className={classes.leftContainer}>
                <ImageContainer />
            </animated.div>
            <animated.div style={springProps1}  className={classes.rightContainer}>
                <Services />
            </animated.div>
        </div>
    )
}
