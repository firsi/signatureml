import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { CoreValues } from "./CoreValues"
import { WhyUS } from "./WhyUS"


const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden'
    },
}))
export const ValuesSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <CoreValues />
                </Grid>
                <Grid item xs={12} md={6}>
                    <WhyUS />
                </Grid>
            </Grid>
        </section>
    )
}
