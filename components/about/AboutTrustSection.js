import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { FadeInSlideTop } from "../animation/FadeInSlideTop"
import { FadeIn } from "../animation/FadeIn"
import { TrustList } from "../home/trust/TrustList"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom : theme.spacing(10),
        backgroundColor: theme.palette.secondary.main
    },
    title: {
        marginBottom: theme.spacing(1),
        fontWeight: 700
    },
    subtitleContainer: {
        marginBottom: theme.spacing(5),
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 0,
    },
    subtitle: {
        color: "#7b7b7b"
    },
    media: {
        height: 45,
        [theme.breakpoints.up('sm')]: {
            height: 80
        }  
    },
}))
export const AboutTrustSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth='lg' >
                <FadeIn>
                    <Typography className={classes.title} variant='h4'>Ils nous ont fait confiance</Typography>
                    <Container maxWidth='xs' className={classes.subtitleContainer}>
                        <Typography className={classes.subtitle} variant='body2'>
                            Depuis 2005, nous avons collaboré avec tout genre d'organisations exceptionnelles pour
                            délivrer des produit impactants et une expérience enrichissante
                        </Typography>
                    </Container>
                </FadeIn>
                <FadeInSlideTop >
                    <TrustList />
                </FadeInSlideTop>
            </Container>
        </section>
    )
}
