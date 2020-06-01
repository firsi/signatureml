import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { FadeInSlideTop } from "../../animation/FadeInSlideTop"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom : theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        height: '100%'
    },
    fadeContainer: {
        height: '100%'
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(3),
    },
}))

export const CoreValues = () => {
    const classes = useStyles();
    return (
        <FadeInSlideTop className={classes.fadeContainer} delay={300}>
            <div className={classes.root}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' className={classes.title}>Nos valeurs</Typography>
                    <Typography variant='body1' >
                    Notre expertise s’étends des domaines numériques aux impressions papiers, T-shirts et sur touts autres
                    types de supports. Nous sommes également spécialisés dans la gestion de votre image sur les réseaux
                    sociaux. <br />
                    Nous ne nous contentons pas de solutions faciles, mais nous aspirons à vous donner les solutions 
                    adéquates pour votre entreprise.
                    </Typography>
                </Container>
            </div>
        </FadeInSlideTop>
    )
}
