import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { ProcessTabs } from './ProcessTabs'
import { FadeIn } from '../../animation/FadeIn'


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
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
        height: 450,
        objectFit: 'cover'
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
export const ProcessSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container spacing={6} >
                    <Grid item xs={12} sm={6} >
                        <FadeIn duration={500}>
                            <ProcessTabs />
                        </FadeIn>
                    </Grid>
                    <Grid item xs={12} sm={6} >    
                        <FadeIn delay={500} duration={1000}>
                            <img className={classes.image} src='/process-pic.jpg' alt='Processus de boulot' />
                        </FadeIn>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
