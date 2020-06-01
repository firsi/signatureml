import makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { FadeInSlideTop } from "../../animation/FadeInSlideTop"
import { FadeIn } from "../../animation/FadeIn"
import { TrustList } from "./TrustList"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom : theme.spacing(10),
        backgroundColor: theme.palette.secondary.main
    },
    title: {
        marginBottom: theme.spacing(5),
        fontWeight: 700
    },
    media: {
        height: 45,
        [theme.breakpoints.up('sm')]: {
            height: 80
        }  
    },
}))
export const TrustSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth='lg' >
                <FadeIn>
                    <Typography className={classes.title} variant='h4'>Ils nous ont fait confiance</Typography>
                </FadeIn>
                <FadeInSlideTop >
                    <TrustList />
                </FadeInSlideTop>
            </Container>
        </section>
    )
}
