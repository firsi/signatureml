import { animated, useSpring } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { ContactForm } from "../components/contact/ContactForm"
import { Overlay } from "../components/miscellaneous/Overlay"

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(/bg-contact.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative'
    },
    gridContainer: {
        height: '100vh',
        position: 'relative',
        zIndex: 20
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        height: '100%',
        
    },
    title: {
        marginBottom: theme.spacing(5),
        fontWeight: 700,
    },
    subtitle: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        width: 'fit-content',
        fontWeight: 700
    },
    FormContainer: {
        backgroundColor: '#000',
        height: '85vh',
        padding: theme.spacing(5),
    }
}))
const contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Overlay opacity={0.3} />
            <Grid container className={classes.gridContainer}>
                <Grid item xs={false} sm={6}></Grid>
                <Grid item xs={12} sm={6} className={classes.rightContainer} >
                    <Container maxWidth='lg' className={classes.FormContainer}>
                        <Typography variant='body1' className={classes.subtitle} >let's Connect</Typography>
                        <Typography variant='h4' className={classes.title}>Laissez nous un message</Typography>
                        <ContactForm />
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default contact;
