import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { FadeInSlideTop } from '../animation/FadeInSlideTop'
import { FadeIn } from '../animation/FadeIn'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url(/logo-white-background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(3)
    },
    box: {
        backgroundColor: theme.palette.primary.main,
        display: 'inline-block',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    quote: {
        fontStyle: 'italic',
        color: '#5e5d5d',
        fontWeight: 700,
        marginTop: theme.spacing(7)
    }
}))

export const CollaborationSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth='md'>
                <FadeInSlideTop delay={400} duration={500}>
                    <Typography variant='h4' className={classes.title}>Collaboration <span className={classes.box}>Win-win</span></Typography>
                    <Typography variant='body1'>
                        Notre goût pour l’excellence et le soucis du détails nous a valu de collaborer 
                        avec les plus grandes ONG, entreprises,et structures gouvernementales.
                        Des collaborations durant lesquelles, nous avons gérés des campagnes de 
                        marketing entières, organisés des évènements et réalisés différents supports 
                        de communications en tout genre.
                    </Typography> 
                </FadeInSlideTop>
                <FadeIn delay={2000} duration={1000}>
                    <Typography className={classes.quote} variant='h6'>
                        ‘’Une fois que vous goûtez à Signature ML, impossible 
                        de vous en passer’’
                    </Typography>
                </FadeIn>
            </Container>
        </section>
    )
}
