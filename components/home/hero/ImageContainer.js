import { animated, useSpring } from 'react-spring'
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        backgroundImage: 'url(./hero-image.jpg)',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top:0,
        bottom:0,
        backgroundColor: '#000',
        opacity: 0.4,
        height: '100%',
        width: '100%',
        zIndex: 0,
    }, 
    content: {
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(5)
    },
    textContent: {
        marginBottom : theme.spacing(2)
    },
     title: {
         fontWeight: 700,
         marginBottom: theme.spacing(3),
         [theme.breakpoints.down('xs')]: {
             fontSize: '2em'
         }
     }
}))
export const ImageContainer = () => {
    const classes = useStyles();
    const titleProps = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 1700,
        config: {
            duration: 400
        }
    });
    const contentProps = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 2000,
        config: {
            duration: 400
        }
    });
    const buttonProps = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 2400,
        config: {
            duration: 400
        }
    });
    return (
        <div className={classes.root}>
        <div className={classes.overlay}></div>
        <Container maxWidth='sm' className={classes.content}>
            <animated.div style={titleProps}>
                <Typography variant='h3' className={classes.title}>
                    Nous Transformons Votre Image
                </Typography>
            </animated.div>
            <animated.div style={contentProps}>
                <Typography variant='body1' className={classes.textContent}>
                    Nous sommes une agence de communication 
                    créative et innovante, Nous enrichissons votre communication
                    avec des produits de qualités et un design élégant et expressif
                </Typography>
            </animated.div>
            <animated.div style={buttonProps}>
                <Button variant='contained' color='primary' size='large'>
                    Nos Réalisations 
                </Button>
            </animated.div>
        </Container>
        </div>
    )
}
