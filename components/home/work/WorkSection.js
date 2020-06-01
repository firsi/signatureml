import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { WorkCard } from "./WorkCard"
import { FadeIn } from "../../animation/FadeIn"



const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        paddingTop: theme.spacing(10),
        paddingBottom : theme.spacing(10),
    },
    title: {
        marginBottom: theme.spacing(5),
        fontWeight: 700
    }
}))
export const WorkSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth='lg' >
            <FadeIn duration={600}>
                <Typography className={classes.title} variant='h4'>Réalisations</Typography>
            </FadeIn>
                <Grid container spacing={10} >
                    <Grid item xs={12} md={6}>
                        <WorkCard 
                            title='Dizerstone'
                            body='Une campagne réalisé pour Dizerstone dans le but de promouvoir leur produits, Nous avons 
                                gérés toute leur campagne publicitaire.'
                            imageUrl='/chair.png'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkCard 
                            title='Youth'
                            body='Une campagne réalisé pour Dizerstone dans le but de promouvoir leur produits, Nous avons 
                                gérés toute leur campagne publicitaire.'
                            imageUrl='/bag.png'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkCard 
                            title='Dizerstone'
                            body='Une campagne réalisé pour Dizerstone dans le but de promouvoir leur produits, Nous avons 
                                gérés toute leur campagne publicitaire.'
                            imageUrl='/chair.png'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkCard 
                            title='Youth'
                            body='Une campagne réalisé pour Dizerstone dans le but de promouvoir leur produits, Nous avons 
                                gérés toute leur campagne publicitaire.'
                            imageUrl='/bag.png'
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
