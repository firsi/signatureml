import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { FadeIn } from '../animation/FadeIn'
import { FadeInSlideTop } from '../animation/FadeInSlideTop'


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        marginTop: theme.spacing(10),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    imageContainer: {
        backgroundImage: 'url(/dg-color.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 450,
        marginBottom : theme.spacing(5)
    },
    image: {
        width: '100%',
        maxWidth: '100%',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
        objectFit: 'cover',
        height: 450,
        objectPosition: '0 0',
        [theme.breakpoints.up('sm')]: {
            objectPosition: '50% 50%'
        },
        [theme.breakpoints.up('md')]: {
            objectPosition: '0% 0%'
        }
    },
    name: {
        fontWeight: 'bold'
    },
    bottomLine: {
        backgroundColor: theme.palette.primary.main,
        width: 60,
        height:2,
        border: 'none',
        float: 'left'
    },
    subtitle: {
        fontWeight: 700
    },
    title: {
        fontWeight: 700,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.8em'
        }
    },
    content: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5)
        }
    },
    bold: {
        fontWeight: 700,
        fontSize: '1.3em'
    }
}))
export const HistorySection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container spacing={6} direction='row-reverse'>
                    <Grid item xs={12} sm={7} >
                        <div className={classes.content}>
                            <FadeIn delay={500} duration={500}>
                                <Typography variant='body2' color='secondary' className={classes.subtitle}>
                                    Qui sommes nous?
                                </Typography>
                                <Typography variant='h4' color='primary' className={classes.title}>
                                    Notre histoire
                                </Typography>
                            </FadeIn>
                            <FadeIn delay={600} duration={500}>
                                <Typography variant='body1' color='secondary'>
                                    <span className={classes.bold}>S</span>ignature ML est une agence de conseil en communication
                                    implantée à Bamako et spécialisée dans le secteur 
                                    audiovisuelle. Elle a été fondé en 2005 par Mme Marie  
                                    Louise Assy suite à son désir de proposer des services de
                                    qualité et à moindre coût dans un mali encore jeûne et 
                                    précaire dans le secteur de la communication 
                                    audiovisuelle. Depuis cette époque, l’agence a grandi et 
                                    évolué. Elle est maintenant dirigée par Ahmed Cissouma, 
                                    un jeune entrepreneur dynamique, passionné de 
                                    communication et obsédé par le détails et la satisfaction 
                                    de la clientèle <br /><br />
                                    <span className={classes.bold}>A</span>près plusieurs années d’expériences, de dure labeur, et une
                                    multitude de clients satisfaits, Signature ML a su s’offrir une
                                    réputation d’excellence, de professionalisme et de qualité 
                                    pour ainsi se hisser au rang des meilleures agences de 
                                    communication au Mali.
                                </Typography>
                            </FadeIn>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5} >
                        <FadeInSlideTop delay={900}>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src='/dg-bw.jpg' alt='Ahmed Cissouma' />
                            </div>
                            <Typography variant='h5' color='secondary' className={classes.name}>
                                Ahmed Cissouma
                            </Typography>
                            <Typography variant='body1' color='secondary'>Gérant Associé</Typography>
                            <hr className={classes.bottomLine} />
                        </FadeInSlideTop>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
