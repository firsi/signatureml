import { animated, useSpring } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Slider } from "./Slider"

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(/logo-white-background.png)',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 200
    },
    container: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    agence: {
        fontWeight: 700,
        display: 'inline-block',
    },
    links: {
        width: '100%',
        position: 'absolute',
        bottom: '20%'
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5)
    }
}))
export const PortfolioHome = ({handleIndex}) => {
    const classes = useStyles();
    
    return (<>
        <div className={classes.root}>
            <Container maxWidth='lg' className={classes.container}>
                    <Typography className={classes.title} variant='h4' color='primary'>
                        Signez avec votre image
                    </Typography>
                    <Slider handleIndex={handleIndex} />
            </Container>
        </div>
        </>
    )
}

//TODO: delete Sliding Text component
//Delete Links component