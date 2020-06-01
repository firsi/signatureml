import  makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { WorkCard } from '../home/work/WorkCard'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
    }
}))
export const CaseStudy = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Typography className={classes.title} variant='h4'>
                    Etude de cas
                </Typography>
                <Grid container spacing={10} >
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Chaise'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/chair.png'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Youth'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/bag.png'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Dizerstone'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/chair.png'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Youth'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/bag.png'
                            />
                        </Grid>
                    </Grid>
                </Container>
        </div>
    )
}
