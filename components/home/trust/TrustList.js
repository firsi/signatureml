import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
    media: {
        height: 45,
        [theme.breakpoints.up('sm')]: {
            height: 80
        }  
    },
}))
export const TrustList = () => {
    const classes = useStyles();
    return (
            <Grid container spacing={5} >
                <Grid item xs={6} md={3}>
                    <img className={classes.media} src='/smgtv-logo.png' />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img className={classes.media} src='/rufftv-logo.png' />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img className={classes.media} src='/etma-logo.png' />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img className={classes.media} src='/ospetro-logo.png' />
                </Grid>
            </Grid>
    )
}
