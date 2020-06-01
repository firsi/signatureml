import { useSpring, animated } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { isVisible, optimizedScrollListener } from "../../../util/helper"
import { FadeInSlideTop } from "../../animation/FadeInSlideTop"

const useStyles = makeStyles(theme => ({
 root: {
     paddingTop: theme.spacing(10),
     paddingBottom: theme.spacing(10)
 },
 topParagraph: {
     fontWeight: 700,
     marginBottom : theme.spacing(5)
 },
 grey: {
     color: "#aeacac",
 }
}))
export const BioSection = () => {
    const classes = useStyles();

    return (
        <section className={classes.root} >
            <Container maxWidth='md'  >
                <FadeInSlideTop>
                    <Typography variant='h5'  className={classes.topParagraph}>
                        Signature s'associe aux meilleures entreprises&nbsp; 
                        <span className={classes.grey}>
                        pour inspirer et transformer 
                        des business en utilisant des outils marketing, technologiques et des 
                        solutions créatives. 
                        </span>
                    </Typography>
                </FadeInSlideTop>
                <FadeInSlideTop delay={800} duration={400}>
                    <Typography variant='body1' className={classes.grey} >
                    Notre expertise s’étends des domaines numériques aux impressions papiers, T-shirts et sur touts autres
                    types de supports. Nous sommes également spécialisés dans la gestion de votre image sur les réseaux
                    sociaux. <br />
                    Nous ne nous contentons pas de solutions faciles, mais nous aspirons à vous donner les solutions 
                    adéquates pour votre entreprise.
                    </Typography>   
                </FadeInSlideTop>
            </Container>
        </section>
    )
}
