import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { ServiceCard } from './ServiceCard'
import { Overlay } from '../../miscellaneous/Overlay'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url(/background-services-600.jpg)',
        
        [theme.breakpoints.up('sm')]:{
            backgroundImage: 'url(/background-services-900.jpg)',
        },
        [theme.breakpoints.up('md')]:{
            backgroundImage: 'url(/background-services-1400.jpg)',
        },
        [theme.breakpoints.up('lg')]:{
            backgroundImage: 'url(/background-services-2000.jpg)',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative'
    },
}))

export const ServicesSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Overlay color='#000' opacity={0.6} />
            <Container maxWidth='lg'>
                <Grid container spacing={5} justify='center'>
                    <Grid item xs={12} sm={6} md={4}>
                        <ServiceCard 
                            title='Publicité'
                            body={<span>Vous souhaitez améliorer la 
                                        perfomance de votre organisation 
                                        et dynamiser vos ventes ou tout 
                                        simplement augmenter votre 
                                        visibilité.<br /><br />

                                        Une campagne de communication 
                                        efficace est certainement la clé à 
                                        votre problème. L’agence Signature 
                                        ML réponds précisement à cet enjeu 
                                        en vous fournissant tout type de 
                                        support de communication allant 
                                        des spots publicitaires aux 
                                        impressions en tout genre.</span>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard 
                            title='Web&App Design'
                            body={<span>A l’ère du numérique, une présence
                                    sur la toile avec un site web, ou un
                                    rapport plus intime avec vos clients
                                    grâce à des applications mobiles est
                                    devenu indispensable pour voir 
                                    prospérer votre organisation.<br/><br />

                                    Nous avons le savoir-faire nécéssaire
                                    pour implémenter des solutions 
                                    robustes, performantes et adaptées 
                                    à votre organisation tout en 
                                    accordant une attention particulière
                                    au design, mais également à 
                                    l’expérience utilisateur.</span>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard 
                            title='Media'
                            body={<span>Plus d’un milliard de personnes 
                                    présentes sur l’armada de réseaux
                                    sociaux qui existent aujourd’hui.
                                    Il serait dommage pour n’importe
                                    quelle organisation de passer à 
                                    côté d’une telle opportunité.<br /><br />

                                    Nous sommes capable de couvrir
                                    tous vos évènements grâce à notre
                                    équipement de pointe. 
                                    Nous possédons la recette secrète
                                    pour vous permettre de booster 
                                    votre présence sur ces plateformes.</span>}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
