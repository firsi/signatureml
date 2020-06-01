import Link from 'next/link'
import { animated, useSpring } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        minHeight: 250,
        height: '100%',
        backgroundImage: props =>  props.imageUrl,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cardActionArea: {
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: props => props.overlayColor,
        opacity: 0.4,
        zIndex: 0,
    },
    content: {
        zIndex: 100,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        color: props => props.textColor
    },
    title: {
        fontWeight: 700,
        color: 'inherit',
        textAlign: 'right'
    },
    text: {
        
    },
    action: {
        textDecoration: 'none',
        fontWeight: 700,
        cursor: 'pointer'
    }
}))
export const ServiceCard = ({title, actionUrl, content, imageUrl, actionText, overlayColor= '#fff', textColor='#000'}) => {
    const props = {imageUrl, overlayColor, textColor};
    const classes = useStyles(props);
    const [titleWidth, setTitleWidth] = React.useState(0);
    const [linkWidth, setLinkWidth] = React.useState(0);
    const [actionAreaWidth, setActionAreaWidth] = React.useState(0);
    const [{scaleSize, heightSize, linkXAbsis, titleXAbsis}, set] = useSpring(() => ({
                                                        scaleSize: 0, 
                                                        heightSize:0, 
                                                        linkXAbsis: 0,
                                                        titleXAbsis: 0}));

    const textSpring = {
        transform: scaleSize.interpolate(value => `scale(${value})`),
        height: heightSize.interpolate(value => value),
    };
    const titleSpring = {
        transform: titleXAbsis.interpolate(value => `translate3d(-${value}px,0,0)`)
    };
    const actionSpring = {
        transform: heightSize.interpolate(value => `translate3d(0,${value}px,0)`),
        transform: linkXAbsis.interpolate(value => `translate3d(-${value}px,0,0)`)
    }
    const opacitySpring = useSpring({
        from: {opacity: 0},
        opacity: 1,
        delay: 2500,
        config: {
            duration: 700
        }
    })
    const computeAbsis = (boxWidth, componentWidth) => {
        return boxWidth - componentWidth - 31;
    }
    
    return (
        <Card className={classes.root}>
            <CardActionArea 
                ref={el => el!==null && setActionAreaWidth(el.getBoundingClientRect().width)}
                onMouseEnter={() => set({
                                        scaleSize: 1, 
                                        heightSize: 50, 
                                        linkXAbsis: computeAbsis(actionAreaWidth, linkWidth),
                                        titleXAbsis: computeAbsis(actionAreaWidth, titleWidth)
                                        })}  
                onMouseLeave={() => set({scaleSize: 0, 
                                         heightSize: 0, 
                                         linkXAbsis: 0,
                                         titleXAbsis: 0})}
                className={classes.cardActionArea}>
                <div className={classes.overlay}></div>
                <CardContent className={classes.content}>
                    <animated.div style={opacitySpring}>
                        <animated.div 
                            style={titleSpring} 
                            ref={el => el!==null && setTitleWidth(el.getBoundingClientRect().width)}>
                            <Typography className={classes.title} variant='h6' color='secondary'>
                                {title}
                            </Typography>
                        </animated.div>
                    </animated.div>
                    <animated.div style={textSpring}>
                            <Typography className={classes.text} variant='body1'>
                                {content}
                            </Typography>
                    </animated.div>
                    <animated.div style={opacitySpring}>
                        <animated.div 
                            style={actionSpring}
                            ref={el => el!==null && setLinkWidth(el.getBoundingClientRect().width)}>
                            <Link href={actionUrl} >
                                <Typography 
                                    className={classes.action} 
                                    variant='body2' color='primary' 
                                    component='a' 
                                    >
                                        {actionText}
                                </Typography>
                            </Link>
                        </animated.div>
                    </animated.div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
