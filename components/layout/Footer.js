import Link from 'next/link';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FooterContact from './FooterContact';
import { ColorChange } from '../animation/ColorChange';

const useStyles = makeStyles(theme => ({
    root: {
        // backgroundColor: theme.palette.background.veryLight,
        color: '#333333',
        
    },
    footer: {  
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
        },
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(2),
    },
    address: {
        '& h6':{
            marginTop: 10
        }
    },
    follow: {
        '& h6':{
            marginTop: 10
        }
    },
    logo: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    subfooter: {
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center',
        },
        marginTop: theme.spacing(5)
    },
    copyright: {
        color: '#626161',
        fontWeight: 700,
        
    }
}))
export const Footer = () => {
    const classes = useStyles();
    return (
        <ColorChange primaryColor='black' secondaryColor='#e2e2e2' duration={1500} delay={2000}>
            <div className={classes.root}>
            <Container maxWidth="lg" component="footer" className={classes.footer}>
                <Grid container justify='space-between' justify="space-between" spacing={3}>
                    <Grid item xs={12} sm={4} className={classes.info}>
                        <Typography variant='h4' className={classes.title}>Contactez-nous</Typography>
                        <Typography variant='body1'>Numero: +223 xx xx xx</Typography>
                        <Typography variant='body1'>email: info@signatureinc.co</Typography>
                        <img src='/logo.png' alt='logo' />
                    </Grid>
                    <Grid item xs={false} sm={4} className={classes.address}>
                        <Typography variant='h6' className={classes.title}>Rejoignez-nous</Typography>
                        <Typography variant='body1'>Bamako, Mali</Typography>
                        <Typography variant='body1'>ACI 2000, Bougiba</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.follow}>
                        <Typography variant='h6' className={classes.title}>Suivez-nous</Typography>
                        <Link href='#'>
                            <Typography variant='body1' component='a'>Facebook</Typography>
                        </Link><br />
                        <Link href='#'>
                            <Typography variant='body1' component='a'>Instagram</Typography>
                        </Link><br />
                        <Link href='#'>
                            <Typography variant='body1' component='a'>Linkedin</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <div className={classes.subfooter}>
                    <Typography className={classes.copyright} variant='body2' >{new Date().getFullYear()} | SignatureML © Tous Droits Réservés</Typography>
                </div>
            </Container>
        </div>
        </ColorChange>
    )
}