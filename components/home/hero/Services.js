import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import { ServiceCard } from "./ServiceCard"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    row1: {
        minHeight: '50%',
    },
    row2: {
        minHeight: '50%',
    },
    divAnimation: {
        height: '100%'
    }
}))

export const Services = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.row1}>
                <Grid item xs={12} sm={6}>
                        <ServiceCard 
                            title='Impression Papier'
                            actionText='En-savoir plus'
                            actionUrl='/qui-sommes-nous'
                            imageUrl='url(/impression-papier.jpg)'
                            content='Nous gérons tous vos travaux d’impression  et de design'
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                        <ServiceCard 
                            title='Impression divers'
                            actionText='En-savoir plus'
                            actionUrl='/qui-sommes-nous'
                            imageUrl='url(/impression-touts-supports.jpg)'
                            content='Nous gérons tous vos travaux d’impression  et de design'
                            overlayColor='#000'
                            textColor = '#fff'
                        />
                </Grid>
            </Grid>
            <Grid container className={classes.row2}>
                <Grid item xs={12} sm={6}>
                        <ServiceCard 
                            title='Developpement Web'
                            actionText='En-savoir plus'
                            actionUrl='/qui-sommes-nous'
                            imageUrl='url(/developpement-web.jpg)'
                            content='Nous gérons tous vos travaux d’impression  et de design'
                            overlayColor='#000'
                            textColor = '#fff'
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                        <ServiceCard 
                            title='Developpement mobile'
                            actionText='En-savoir plus'
                            actionUrl='/qui-sommes-nous'
                            imageUrl='url(/developpement-mobile.jpg)'
                            content='Nous gérons tous vos travaux d’impression  et de design'
                        />
                </Grid>
            </Grid>
        </div>
    )
}
