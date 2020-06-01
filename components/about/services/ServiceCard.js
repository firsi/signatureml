import { useSpring, animated } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { FadeIn } from "../../animation/FadeIn"
import { FadeInSlideTop } from "../../animation/FadeInSlideTop"
import { BoxSlide } from "../../animation/BoxSlide"

const useStyles = makeStyles(theme => ({
    root: {
        width: 270,
        borderRadius: 0,
        backgroundColor: '#000', 
        boxShadow: 'none',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            height: 380,
        }
    },

    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(3),
        color: '#fff',
        position: 'relative',
        width: 'fit-content',
        zIndex: 20,
    },
    box: {
        position: 'absolute',
        top: '0%',
        left: '50%',
        width: '100%',
        height: '100%',
        maxWidth: '150px',
        backgroundColor: theme.palette.primary.main,
        zIndex: -1,
    },
    body: {
        color: '#7b7b7b'
    }
}))
export const ServiceCard = ({title, body}) => {
    const classes = useStyles();
    return (
        <FadeInSlideTop delay={300}>
            <Card className={classes.root}>
            <CardContent>
                <FadeIn delay={700} duration={500}>
                    <Typography className={classes.title} variant='h5'>
                        {title}
                        <BoxSlide className={classes.box} delay={800}></BoxSlide>
                    </Typography>
                    <Typography variant='body2' className={classes.body}>
                        {body}
                    </Typography>
                </FadeIn>
            </CardContent>
        </Card>
        </FadeInSlideTop>
    )
}
