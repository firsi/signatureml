import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { ContactForm } from "./ContactForm";
import { CloseButton } from "../layout/CloseButton";
import { LeftButton } from "../layout/LeftButton";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh'
    },
    title: {
        marginBottom: theme.spacing(5),
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
            fontSize: '1.7em'
        }
    },
    subtitle: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        width: 'fit-content',
        fontWeight: 700
    },
    formContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    closeButton: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        float: 'right',
        transition: '.2s ease-in-out',
        '&:hover': {
            color: theme.palette.primary.light,
            transform: 'scale(2)'
        }
    },
    leftButton: {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        animation: `$effect 1000ms ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        display: 'none',
        '& svg': {
            height: '2.5em',
            width: '2.5em'
        },
        [theme.breakpoints.up('md')]: {
            display: 'inline-block'
        }
    },
    "@keyframes effect":{
        "0%": {
            transform: 'translateX(-7px)'
        },
        "50%": {
            transform: 'translateX(7px)'
        },
        "100%": {
            transform: 'translateX(-7px)'
        },
    },
}))
export const ContactContainer = ({handleCloseMenu, handleIndex, reset}) => {
    const classes = useStyles();

    const handleCloseButton = () => {
        handleCloseMenu();
        //Set timeout before resetting SwipeableViews index so that Menu container is closed 
        // before the state is updated 
        setTimeout(() => {
            reset();
        }, 1000)
    }
    return (
        <div className={classes.root}>
            <LeftButton className={classes.leftButton} onClick={() => handleIndex(0)} />
            <Container maxWidth='sm' className={classes.formContainer}>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant='body1' className={classes.subtitle} >let's Connect</Typography>
                        <Typography variant='h4' className={classes.title}>Laissez nous un message</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <CloseButton onClick={handleCloseButton} className={classes.closeButton} />
                    </Grid>
                </Grid>
                <ContactForm />
            </Container>
        </div>
    )
}
