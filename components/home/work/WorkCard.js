import { useSpring, animated } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { FadeIn } from "../../animation/FadeIn"
import { FadeInSlideTop } from "../../animation/FadeInSlideTop"

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 300,
        backgroundColor: 'transparent', 
        boxShadow: 'none',
        overflow: 'visible'
    },
    media: {
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.dark, 
        height: 200,
    },
    image: {
        height: 200,
        transition: '.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.5)'
        }
    }, 
    title: {
        fontWeight: 700 
    },
    body: {
        color: '#fff'
    }
}))
export const WorkCard = ({title, imageUrl, body}) => {
    const classes = useStyles();
    // const imageSpring = useSpring({
    //     from: {
    //             height: 200,
    //     },
    //     to: {
    //         height: 250 
    //     },
    //     config: {
    //         mass: 50,
    //         tension: 100,
    //         friction: 150
    //     },

    // })
    return (
        <FadeInSlideTop delay={500}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}>
                        <img className={classes.image} src={imageUrl} alt='chaise' />
                </CardMedia>
            </CardActionArea>
            <CardContent>
                <FadeIn delay={300} duration={500}>
                    <Typography className={classes.title} variant='h5' color='primary'>{title}</Typography>
                        <Typography variant='body1' className={classes.body}>
                            {body}
                        </Typography>
                </FadeIn>
            </CardContent>
        </Card>
        </FadeInSlideTop>
    )
}
