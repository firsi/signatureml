import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import InfoCard from "./InfoCard"
import { FadeInSlideTop } from "../../animation/FadeInSlideTop"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom : theme.spacing(10),
        backgroundColor: '#d80505'
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(3),
    },
    fadeContainer: {

    }
}))
export const WhyUS = () => {
    const classes = useStyles();
    return (
        <FadeInSlideTop className={classes.fadeContainer} delay={700}>
            <div className={classes.root}>
            <Container maxWidth='sm'>
                <Typography variant='h4' className={classes.title}>Pourquoi nous choisir?</Typography>
                <InfoCard 
                    imageUrl='/location.png'
                    content="10 ans d'expériences dans le domaine"
                />
                <InfoCard 
                    imageUrl='/people.png'
                    content="Une équipe professionelle et efficace"
                />
                <InfoCard 
                    imageUrl='/service.png'
                    content="Des graphismes uniques"
                />
                <InfoCard 
                    imageUrl='/loupe.png'
                    content="Des délais de livraison respectés"
                />
                <InfoCard 
                    imageUrl='/location.png'
                    content="Un rendu final d'une qualité époustouflante"
                />
            </Container>
        </div>
        </FadeInSlideTop>
    )
}
